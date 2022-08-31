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
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../public/images/`);
  },
  filename: function (req, file, cb) {
    let extension = path.extname(file.originalname);
    let newFileName = req.userId + extension;
    cb(null, newFileName);
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
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
  let fileType = req.file.mimetype;
  fileType = fileType.split("/");
  if (
    fileType.length == 1 ||
    !(fileType[1] === "jpg" || fileType[1] === "jpeg" || fileType[1] === "png")
  ) {
    fs.unlink(
      `${__dirname}/../public/images/${req.userId}.${fileType[1]}`,
      (err) => {
        if (err) throw err;
      }
    );
    throw new Error("파일 확장자 확인 : jpg, jpeg, png");
  }
  let fileName = new Date().valueOf() + req.userId;
  sharp(req.file.path)
    .resize({ width: 200, height: 200 })
    .withMetadata()
    .toFile(
      `${__dirname}/../public/images/${fileName}.${fileType[1]}`,
      (err) => {
        if (err) throw err;
        // 원본 삭제
        fs.unlink(
          `${__dirname}/../public/images/${req.userId}.${fileType[1]}`,
          (err) => {
            if (err) throw err;
          }
        );
      }
    );

  res.status(201).send({
    // imgUrl: `http://localhost:5001/images/${fileName}.${fileType[1]}`,
    imgUrl: `http://kdt-ai5-team13.elicecoding.com:5001/images/${fileName}.${fileType[1]}`,
  });
});
// 순서 중요 (router 에서 next() 시 아래의 에러 핸들링  middleware로 전달됨)
app.use(errorMiddleware);

export { app };
