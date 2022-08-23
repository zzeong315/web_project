import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { educationService } from "../services/educationService";

const educationRouter = Router();

educationRouter.get("/", login_required, async (req, res, next) => {
  try {
    // 자신의 전체 교육사항 목록을 얻음
    console.log(req.currentUserId);
    const id = req.currentUserId;
    const educations = await educationService.getEducations(id);
    res.status(200).send(educations);
  } catch (error) {
    next(error);
  }
});
educationRouter.get("/:id", login_required, async (req, res, next) => {
  try {
    // 다른 사람의 전체 교육사항 목록을 얻음
    const id = req.params.id;
    const educations = await educationService.getEducations(id);
    res.status(200).send(educations);
  } catch (error) {
    next(error);
  }
});

export { educationRouter };
