import { Project } from "../db";

class projectService {
  static async getProjects(id) {
    const projects = await Project.findAll(id);
    return projects;
  }

  static async addProject(id, newProject) {
    const addedProject = await Project.add(id, newProject);
    return addedProject;
  }

  static async updateProject(userId, projectId, toUpdate) {
    const updatedProject = await Project.update(userId, projectId, toUpdate);
    return updatedProject;
  }

  static async deleteProject(userId, projectId) {
    const deletedProject = await Project.delete(userId, projectId);
    return deletedProject;
  }
}
export { projectService };
