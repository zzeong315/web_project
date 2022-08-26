import { Award } from "../db";

class awardService {
  static async getAwards(id) {
    const awards = await Award.findAll(id);
    return awards;
  }

  static async addAward(id, newAward) {
    const addedAward = await Award.add(id, newAward);
    return addedAward;
  }

  static async updateAward(userId, awardId, newAward) {
    const updatedAward = await Award.update(userId, awardId, newAward);
    return updatedAward;
  }

  static async deleteAward(userId, awardId) {
    const deletedAward = await Award.delete(userId, awardId);
    return deletedAward;
  }
}

export { awardService };
