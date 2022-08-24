import { Project } from "../db";

class projectService {
  static async getProjectsById(id) {
    const projects = await Project.findById(id);

    if (projects.length === 0) {
      const errorMessage =
        "해당 프로필은 프로젝트 내역이 없습니다. 다시 한 번 확인해주세요.";

      return { errorMessage };
    }

    return projects;
  }

  static async getProjects() {
    const projects = await Project.findAll();

    return projects;
  }

  static async addProject({ projectName, projectDescription }) {
    const newProject = { projectName, projectDescription };
    const createdNewProject = await Project.create({ newProject });
    createdNewProject.errorMessage = null;

    return createdNewProject;
  }
}
export { projectService };
