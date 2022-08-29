import is from "@sindresorhus/is";
import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { projectService } from "../services/projectService";

const projectRouter = Router();

projectRouter.get("/projects", login_required, async function (req, res, next) {
  const userId = req.userId;
  projectService
    .getProjectsById(userId)
    .then((projects) => {
      res.status(200).send(projects);
    })
    .catch((err) => {
      next(err);
    });
});

projectRouter.post("/project", login_required, async function (req, res, next) {
  const userId = req.userId;

  const { name, description, start, end } = req.body;
  const newProject = { name, description, start, end };

  projectService
    .addProject(userId, newProject)
    .then((createdProject) => {
      res.status(201).json(createdProject);
    })
    .catch((err) => {
      next(err);
    });
});

projectRouter.get(
  "/projects/:userId",
  login_required,
  async function (req, res, next) {
    const userId = req.params.userId;

    projectService
      .getProjectsById(userId)
      .then((projects) => {
        res.status(200).send(projects);
      })
      .catch((err) => {
        next(err);
      });
  }
);

projectRouter.patch(
  "/project",
  login_required,
  async function (req, res, next) {
    const userId = req.userId;

    const { projectId, name, description, start, end } = req.body;

    const toUpdate = { name, description, start, end };

    projectService
      .setProject(userId, projectId, toUpdate)
      .then((updatedProject) => {
        res.status(200).json(updatedProject);
      })
      .catch((err) => {
        next(err);
      });
  }
);

projectRouter.delete(
  "/project/:projectId",
  login_required,
  async function (req, res, next) {
    const userId = req.userId;
    const projectId = req.params.projectId;

    projectService
      .deleteProject(userId, projectId)
      .then((deletedProject) => {
        res.status(200).json(deletedProject);
      })
      .catch((err) => {
        next(err);
      });
  }
);

export { projectRouter };
