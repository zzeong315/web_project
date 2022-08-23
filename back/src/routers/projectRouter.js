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
      const projects = await projectService.getProjects();
      res.status(200).send(projects);
    } catch (error) {
      next(error);
    }
  }
);

projectRouter.get(
  "/project/current",
  login_required,
  async function (req, res, next) {
    try {
      const user_id = req.currentUserId;
      const currentProjectInfo = await projectService.getProjectInfo({
        user_id,
      });

      if (currentProjectInfo.errorMessage) {
        throw new Error(currentProjectInfo.errorMessage);
      }

      res.status(200).send(currentProjectInfo);
    } catch (error) {
      next(error);
    }
  }
);

export { projectRouter };
