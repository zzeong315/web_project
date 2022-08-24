import is from "@sindresorhus/is";
import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { projectService } from "../services/projectService";

const projectRouter = Router();

projectRouter.get("/", login_required, async function (req, res, next) {
  try {
    console.log(req.currentUserId);
    const id = req.currentUserId;
    const projects = await projectService.getProjectsById(id);

    res.status(200).send(projects);
  } catch (error) {
    next(error);
  }
});

projectRouter.get("/:id", login_required, async function (req, res, next) {
  try {
    const id = req.params.id;
    const projects = await projectService.getProjectsById(id);
    res.status(200).send(projects);
  } catch (error) {
    next(error);
  }
});

projectRouter.get(
  "/projectlist",
  login_required,
  async function (req, res, next) {
    try {
      const projects = await projectService.getProjects();

      res.status(200).send(projects);
    } catch (error) {
      next(error);
    }
  }
);

projectRouter.post(
  "/register",
  login_required,
  async function (req, res, next) {
    try {
      if (is.emptyObject(req.body)) {
        throw new Error(
          "headers의 Content-Type을 application/json으로 설정해주세요"
        );
      }

      const projectName = req.body.projectName;
      const projectDescription = req.body.projectDescription;

      const newProject = await projectService.addProject({
        projectName,
        projectDescription,
      });

      if (newProject.errorMessage) {
        throw new Error(newProject.errorMessage);
      }

      res.status(201).json(newProject);
    } catch (error) {
      next(error);
    }
  }
);

export { projectRouter };
