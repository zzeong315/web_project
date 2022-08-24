import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { projectService } from "../services/projectService";

const projectRouter = Router();

projectRouter.get(
  "/projectlist",
  login_required,
  async function (req, res, next) {
    try {
      // 전체 프로젝트 목록을 얻음
      console.log(req.currentUserId);
      const id = req.currentUserId;
      const projects = await projectService.getProjects(id);
      res.status(200).send(projects);
    } catch (error) {
      next(error);
    }
  }
);

projectRouter.get("/:id", login_required, async function (req, res, next) {
  try {
    const id = req.params.id;
    const projects = await projectService.getProjects(id);

    res.status(200).send(projects);
  } catch (error) {
    next(error);
  }
});

export { projectRouter };
