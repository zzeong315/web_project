import { Education } from "../db";

class educationService {
  static async getEducations(email) {
    const educations = await Education.findAll(email);
    return educations;
  }
}

export { educationService };
