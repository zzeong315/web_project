import { Education } from "../db";

class educationService {
  static async getEducations(id) {
    const educations = await Education.findAll(id);
    return educations;
  }
}

export { educationService };
