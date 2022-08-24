import is from "@sindresorhus/is";
import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { projectService } from "../services/projectService";

const projectRouter = Router();

projectRouter.get("/project", login_required, async function (req, res, next) {
  try {
    console.log(req.currentUserId);
    const id = req.currentUserId;
    const projects = await projectService.getProjectsById(id);

    res.status(200).send(projects);
  } catch (error) {
    next(error);
  }
});

projectRouter.get("/projects", login_required, async function (req, res, next) {
  try {
    const projects = await projectService.getProjects();

    res.status(200).send(projects);
  } catch (error) {
    next(error);
  }
});

projectRouter.post(
  "/project/add",
  login_required,
  async function (req, res, next) {
    console.log("project register");
    try {
      if (is.emptyObject(req.body)) {
        throw new Error(
          "headers의 Content-Type을 application/json으로 설정해주세요"
        );
      }
      const id = req.currentUserId;
      const projectName = req.body.projectName;
      const projectDescription = req.body.projectDescription;
      const newProject = { projectName, projectDescription };

      const createdProject = await projectService.addProject(id, newProject);

      if (createdProject.errorMessage) {
        throw new Error(createdProject.errorMessage);
      }

      res.status(201).json(createdProject);
    } catch (error) {
      next(error);
    }
  }
);

projectRouter.get(
  "/project/:id",
  login_required,
  async function (req, res, next) {
    console.log("hello");
    try {
      const id = req.params.id;

      const projects = await projectService.getProjectsById(id);
      res.status(200).send(projects);
    } catch (error) {
      next(error);
    }
  }
);

export { projectRouter };
