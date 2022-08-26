import { UserModel } from "../schemas/user";

class Award {
  static async findAll(id) {
    const user = await UserModel.findOne({ id });
    const awards = user.awards;
    return awards;
  }

  static async add(id, newAward) {
    const user = await UserModel.findOne({ id });
    user.awards.push(newAward);
    const addednewAward = await user.save();
    return addednewAward;
  }

  static async update(userId, awardId, newAward) {
    const user = await UserModel.findOne({ id: userId });
    const awards = user.awards;
    awards.forEach((award) => {
      if (award._id.valueOf() === awardId) {
        award.name = newAward.name;
        award.major = newAward.major;
        award.status = newAward.status;
      }
    });
    const updatedAward = await user.save();
    return updatedAward;
  }
}

export { Award };
