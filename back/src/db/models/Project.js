import { UserModel } from "../schemas/user";
import { ProjectModel } from "../schemas/project";

class Project {
  // id별로 프로젝트 목록 보기
  static async findById(id) {
    const user = await UserModel.findOne({ id });
    const projects = user.projects;
    return projects;
  }

  static async findAll() {
    const projects = await ProjectModel.find({});
    return projects;
  }

  // 프로젝트 생성
  static async create(id, newProject) {
    const user = await UserModel.findOne({ id });
    user.projects.push(newProject);
    const createdNewProject = await user.save();
    return createdNewProject;
  }

  static async update(userId, projectId, toUpdate) {
    const user = await UserModel.findOne({ id: userId });
    const projects = user.projects;

    projects.forEach((project) => {
      if (project._id.valueOf() === projectId) {
        if (toUpdate.name) {
          project.name = toUpdate.name;
        }
        if (toUpdate.description) {
          project.description = toUpdate.description;
        }
        if (toUpdate.start) {
          project.start = toUpdate.start;
        }
        if (toUpdate.end) {
          project.end = toUpdate.end;
        }
      }
    });

    const updatedProject = await user.save();
    return updatedProject;
  }

  static async delete(userId, projectId) {
    let user = await UserModel.findOne({ id: userId });
    let projects = user.projects;
    user.projects = projects.filter(function (elem) {
      return elem._id.valueOf() !== projectId;
    });

    const deletedProject = await user.save();
    return deletedProject;
  }
}

export { Project };
