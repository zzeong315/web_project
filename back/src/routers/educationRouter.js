import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { educationService } from "../services/educationService";

const educationRouter = Router();

educationRouter.get("/", login_required, async (req, res, next) => {
  try {
    // 자신의 전체 교육사항 목록을 얻음
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

educationRouter.post("/add", login_required, async (req, res, next) => {
  try {
    const id = req.currentUserId;
    const { name, major, status } = req.body;
    const newEducation = { name, major, status };
    const addedEducation = await educationService.addEducation(
      id,
      newEducation
    );
    res.status(200).send(addedEducation);
  } catch (error) {
    next(error);
  }
});

export { educationRouter };
