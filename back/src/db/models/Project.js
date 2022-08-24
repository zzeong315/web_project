import { UserModel } from "../schemas/user";
import { ProjectModel } from "../schemas/project";
import { User } from "./User";

class Project {
  // id별로 프로젝트 목록 보기
  static async findById(id) {
    const user = await UserModel.find({ id });
    const projects = user[0].projects;
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
}

export { Project };
