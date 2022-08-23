import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { educationService } from "../services/educationService";

const educationRouter = Router();

educationRouter.get("/", async (req, res, next) => {
  try {
    // 전체 교육사항 목록을 얻음
    const email = "sample@gmail.com";
    const educations = await educationService.getEducations(email);
    res.status(200).send(educations);
  } catch (error) {
    next(error);
  }
});

export { educationRouter };
