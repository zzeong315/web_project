import { ProjectModel } from "../schemas/project";

class Project {
  // static async findByEmail({ email }) {
  //   const project = await ProjectModel.findOne({ email });
  //   return project;
  // }

  // static async findById({ id }) {
  //   const project = await ProjectModel.findOne({ id: id });
  //   return project;
  // }

  static async findAll() {
    const projects = await ProjectModel.find({});
    return projects;
  }
}

export { Project };
