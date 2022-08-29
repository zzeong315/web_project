import { UserModel } from "../schemas/user";
import { ProjectModel } from "../schemas/project";

class Project {
  // id별로 프로젝트 목록 보기
  static async findAll(id) {
    const user = await UserModel.findOne({ id });
    if (!user) {
      throw new Error("user is not found");
    }
    const projects = user.projects;
    return projects;
  }

  // 프로젝트 생성
  static async add(id, newProject) {
    const user = await UserModel.findOne({ id });
    if (!user) {
      throw new Error("user is not found");
    }
    user.projects.push(newProject);
    const createdNewProject = await user.save();
    return createdNewProject;
  }

  static async update(userId, projectId, toUpdate) {
    const user = await UserModel.findOne({ id: userId });
    const projects = user.projects;
    if (!user) {
      throw new Error("user is not found");
    }
    let flag = false;
    projects.forEach((project) => {
      if (project._id.valueOf() === projectId) {
        project.name = toUpdate.name;
        project.description = toUpdate.description;
        project.start = toUpdate.start;
        project.end = toUpdate.end;
        flag = true;
      }
    });
    if (!flag) {
      throw new Error("project is not found");
    }

    const updatedProject = await user.save();
    return updatedProject;
  }

  static async delete(userId, projectId) {
    let user = await UserModel.findOne({ id: userId });

    if (!user) {
      throw new Error("user is not found");
    }

    let projects = user.projects;

    let flag = false;
    projects.forEach((project) => {
      if (project._id.valueOf() === projectId) {
        flag = true;
      }
    });

    if (!flag) {
      throw new Error("project is not found");
    }

    user.projects = projects.filter(function (elem) {
      return elem._id.valueOf() !== projectId;
    });

    const deletedProject = await user.save();
    return deletedProject;
  }
}

export { Project };
