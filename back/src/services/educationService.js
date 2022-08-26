import { Education } from "../db";

class educationService {
  static async getEducations(id) {
    const educations = await Education.findAll(id);
    return educations;
  }

  static async addEducation(id, newEducation) {
    const addedEducation = await Education.add(id, newEducation);
    return addedEducation;
  }

  static async updateEducation(userId, educationId, newEducation) {
    const updatedEducation = await Education.update(
      userId,
      educationId,
      newEducation
    );
    return updatedEducation;
  }
}

export { educationService };
