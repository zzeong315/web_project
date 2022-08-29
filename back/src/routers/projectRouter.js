import is from "@sindresorhus/is";
import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { projectService } from "../services/projectService";

const projectRouter = Router();

projectRouter.get("/projects", login_required, async function (req, res, next) {
  try {
    const id = req.userId;
    const projects = await projectService.getProjectsById(id);

    res.status(200).send(projects);
  } catch (error) {
    next(error);
  }
});

projectRouter.post("/project", login_required, async function (req, res, next) {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }
    const userId = req.userId;

    const { name, description, start, end } = req.body;
    const newProject = { name, description, start, end };

    const createdProject = await projectService.addProject(userId, newProject);

    if (createdProject.errorMessage) {
      throw new Error(createdProject.errorMessage);
    }

    res.status(201).json(createdProject);
  } catch (error) {
    next(error);
  }
});

projectRouter.get(
  "/projects/:userId",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.params.userId;

      const projects = await projectService.getProjectsById(userId);
      res.status(200).send(projects);
    } catch (error) {
      next(error);
    }
  }
);

projectRouter.patch(
  "/project",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.userId;

      const { projectId, name, description, start, end } = req.body;

      const toUpdate = { name, description, start, end };

      const updatedProject = await projectService.setProject(
        userId,
        projectId,
        toUpdate
      );

      if (updatedProject.errorMessage) {
        throw new Error(updatedProject.errorMessage);
      }

      res.status(200).json(updatedProject);
    } catch (error) {
      next(error);
    }
  }
);

projectRouter.delete(
  "/project/:projectId",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.userId;
      const projectId = req.params.projectId;

      const deletedProject = await projectService.deleteProject(
        userId,
        projectId
      );

      if (deletedProject.errorMessage) {
        throw new Error(deletedProject.errorMessage);
      }

      res.status(200).json(deletedProject);
    } catch (error) {
      next(error);
    }
  }
);

export { projectRouter };
