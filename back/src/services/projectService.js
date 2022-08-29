import { Project } from "../db";

class projectService {
  static async getProjectsById(userId) {
    const projects = await Project.findById(userId);

    return projects;
  }

  static async addProject(userId, newProject) {
    const createdNewProject = await Project.create(userId, newProject);
    createdNewProject.errorMessage = null;

    return createdNewProject;
  }

  static async setProject(userId, projectId, toUpdate) {
    const updatedProject = await Project.update(userId, projectId, toUpdate);

    return updatedProject;
  }

  static async deleteProject(userId, projectId) {
    const deletedProject = await Project.delete(userId, projectId);

    return deletedProject;
  }
}
export { projectService };
