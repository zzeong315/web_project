import { UserModel } from "../schemas/user";

class Education {
  static async findAll(id) {
    const user = await UserModel.findOne({ id });
    const educations = user.educations;
    return educations;
  }

  static async add(id, newEducation) {
    const user = await UserModel.findOne({ id });
    user.educations.push(newEducation);
    const addednewEducation = await user.save();
    return addednewEducation;
  }
}

export { Education };
