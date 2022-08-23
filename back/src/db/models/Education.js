import { UserModel } from "../schemas/user";

class Education {
  static async findAll(id) {
    const users = await UserModel.find({ id });
    const educations = users[0].educations;
    return educations;
  }
}

export { Education };
