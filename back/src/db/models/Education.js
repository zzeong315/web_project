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

  static async update(userId, educationId, newEducation) {
    const user = await UserModel.findOne({ id: userId });
    const educations = user.educations;
    educations.forEach((education) => {
      if (education._id.valueOf() === educationId) {
        education.name = newEducation.name;
        education.major = newEducation.major;
        education.status = newEducation.status;
      }
    });
    const updatedEducation = await user.save();
    return updatedEducation;
  }
}

export { Education };
