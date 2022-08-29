import { UserModel } from "../schemas/user";

class Education {
  static async findAll(id) {
    const user = await UserModel.findOne({ id });
    if (!user) {
      throw new Error("user not found");
    }
    const educations = user.educations;
    return educations;
  }

  static async add(id, newEducation) {
    const user = await UserModel.findOne({ id });
    if (!user) {
      throw new Error("user not found");
    }
    user.educations.push(newEducation);
    const addednewEducation = await user.save();
    return addednewEducation;
  }

  static async update(userId, educationId, newEducation) {
    const user = await UserModel.findOne({ id: userId });
    if (!user) {
      throw new Error("user not found");
    }
    const educations = user.educations;
    let flag = false;
    educations.forEach((education) => {
      if (education._id.valueOf() === educationId) {
        education.name = newEducation.name;
        education.major = newEducation.major;
        education.status = newEducation.status;
        flag = true;
      }
    });
    if (!flag) {
      throw new Error("education not found");
    }
    const updatedEducation = await user.save();
    return updatedEducation;
  }

  static async delete(userId, educationId) {
    let user = await UserModel.findOne({ id: userId });
    if (!user) {
      throw new Error("user not found");
    }
    let educations = user.educations;
    user.educations = educations.filter((education) => {
      return education._id.valueOf() !== educationId;
    });
    const deletedEducation = await user.save();
    return deletedEducation;
  }
}

export { Education };
