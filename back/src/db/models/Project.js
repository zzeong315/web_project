// import { ProjectModel } from "../schemas/project";
import { UserModel } from "../schemas/user";

class Project {
  static async findAll(id) {
    const user = await UserModel.find({ id });
    const projects = user[0].projects;
    return projects;
  }
}

export { Project };
