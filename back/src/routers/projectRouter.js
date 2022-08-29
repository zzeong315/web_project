import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { projectService } from "../services/projectService";

const projectRouter = Router();

projectRouter.get("/projects", login_required, async (req, res, next) => {
  try {
    const id = req.userId;
    const projects = await projectService.getProjects(id);
    res.status(200).send(projects);
  } catch (error) {
    next(error);
  }
});

projectRouter.get(
  "/projects/:userId",
  login_required,
  async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const projects = await projectService.getProjects(userId);
      res.status(200).send(projects);
    } catch (error) {
      next(error);
    }
  }
);

projectRouter.post("/project", login_required, async (req, res, next) => {
  try {
    const userId = req.userId;
    const { name, description, start, end } = req.body;
    const newProject = { name, description, start, end };
    const addedProject = await projectService.addProject(userId, newProject);
    res.status(201).json(addedProject);
  } catch (error) {
    next(error);
  }
});

projectRouter.patch("/project", login_required, async (req, res, next) => {
  try {
    const userId = req.userId;
    const { projectId, name, description, start, end } = req.body;
    const toUpdate = { name, description, start, end };
    const updatedProject = await projectService.updateProject(
      userId,
      projectId,
      toUpdate
    );
    res.status(200).json(updatedProject);
  } catch (error) {
    next(error);
  }
});

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
      res.status(200).json(deletedProject);
    } catch (error) {
      next(error);
    }
  }
);

export { projectRouter };
