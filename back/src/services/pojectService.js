import { Project } from "../db";

class projectService {
  static async getProject({ id }) {
    const project = await Project.findById({ id });

    if (!project) {
      const errorMessage =
        "해당 프로필은 프로젝트 내역이 없습니다. 다시 한 번 확인해주세요.";

      return { errorMessage };
    }

    return project;
  }

  // projectlist 반환
  static async getProjects({ id }) {
    const projects = await Project.findAll({ id });
    return projects;
  }
}
export { projectService };
