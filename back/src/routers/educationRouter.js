import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { educationService } from "../services/educationService";

const educationRouter = Router();

educationRouter.get("/educations", login_required, async (req, res, next) => {
  try {
    // 자신의 전체 교육사항 목록을 얻음
    const id = req.userId;
    const educations = await educationService.getEducations(id);
    res.status(200).send(educations);
  } catch (error) {
    next(error);
  }
});

educationRouter.get(
  "/educations/:id",
  login_required,
  async (req, res, next) => {
    try {
      // 다른 사람의 전체 교육사항 목록을 얻음
      const id = req.params.id;
      const educations = await educationService.getEducations(id);
      res.status(200).send(educations);
    } catch (error) {
      next(error);
    }
  }
);

educationRouter.post("/education", login_required, async (req, res, next) => {
  try {
    const id = req.userId;
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

educationRouter.patch("/education", login_required, async (req, res, next) => {
  try {
    const userId = req.userId;
    const { educationId, name, major, status } = req.body;
    const newEducation = { name, major, status };
    const updatedEducation = await educationService.updateEducation(
      userId,
      educationId,
      newEducation
    );
    res.status(200).send(updatedEducation);
  } catch (error) {
    next(error);
  }
});

export { educationRouter };
