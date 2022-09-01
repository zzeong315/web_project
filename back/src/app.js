import cors from "cors";
import express from "express";
import { userAuthRouter } from "./routers/userRouter";
import { educationRouter } from "./routers/educationRouter";
import { projectRouter } from "./routers/projectRouter";
import { awardRouter } from "./routers/awardRouter";
import { certificateRouter } from "./routers/certificateRouter";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { login_required } from "./middlewares/login_required";
import path from "path";

const sharp = require("sharp");
const fs = require("fs");
const multer = require("multer");
const imageDir = __dirname + "/../public/images";
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, imageDir);
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      const timestamp = new Date().getTime().valueOf();
      const filename = path.basename(file.originalname, ext) + timestamp + ext;
      // 에러처리
      if (![".png", ".jpg", ".jpeg"].includes(ext)) {
        return cb(new Error("파일 확장자 확인: png, jpg, jpeg"));
      }
      cb(null, filename);
    },
    limits: { fileSize: 5 * 1024 * 1024 },
  }),
});
const app = express();

// CORS 에러 방지
app.use(cors());

// express 기본 제공 middleware
// express.json(): POST 등의 요청과 함께 오는 json형태의 데이터를 인식하고 핸들링할 수 있게 함.
// express.urlencoded: 주로 Form submit 에 의해 만들어지는 URL-Encoded 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 기본 페이지
app.get("/", (req, res) => {
  res.send("안녕하세요, 레이서 프로젝트 API 입니다.");
});

// router, service 구현 (userAuthRouter는 맨 위에 있어야 함.)
app.use(userAuthRouter);
app.use(educationRouter);
app.use(projectRouter);
app.use(awardRouter);
app.use(certificateRouter);

app.post("/upload", login_required, upload.single("file"), (req, res, next) => {
  try {
    sharp(req.file.path)
      .resize({ width: 200, height: 200 })
      .withMetadata()
      .toBuffer((err, buffer) => {
        if (err) throw err;
        fs.writeFile(req.file.path, buffer, (err) => {
          if (err) throw err;
        });
      });
  } catch (error) {
    next(error);
  }
  res.status(201).send({
    // imgUrl: `http://localhost:5001/images/${req.file.filename}`,
    imgUrl: `http://kdt-ai5-team13.elicecoding.com:5001/images/${req.file.filename}`,
  });
});
// 순서 중요 (router 에서 next() 시 아래의 에러 핸들링  middleware로 전달됨)
app.use(errorMiddleware);

export { app };
