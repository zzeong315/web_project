import { UserModel } from "../schemas/user";

class Education {
  static async findAll(email) {
    const users = await UserModel.find({ email });
    console.log(users);
    console.log(users[0].educations);
    const educations = users[0].educations;
    return educations;
  }
}

export { Education };
