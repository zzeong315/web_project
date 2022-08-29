import { UserModel } from "../schemas/user";

class Award {
  static async findAll(id) {
    const user = await UserModel.findOne({ id });
    if (!user) {
      throw new Error("user not found");
    }
    const awards = user.awards;
    return awards;
  }

  static async add(id, newAward) {
    const user = await UserModel.findOne({ id });
    if (!user) {
      throw new Error("user not found");
    }
    user.awards.push(newAward);
    const addednewAward = await user.save();
    return addednewAward;
  }

  static async update(userId, awardId, newAward) {
    const user = await UserModel.findOne({ id: userId });
    if (!user) {
      throw new Error("user not found");
    }
    const awards = user.awards;
    let flag = false;
    awards.forEach((award) => {
      if (award._id.valueOf() === awardId) {
        award.name = newAward.name;
        award.description = newAward.description;
        flag = true;
      }
    });
    if (!flag) {
      throw new Error("award not found");
    }
    const updatedAward = await user.save();
    return updatedAward;
  }

  static async delete(userId, awardId) {
    let user = await UserModel.findOne({ id: userId });
    if (!user) {
      throw new Error("user not found");
    }
    let awards = user.awards;
    user.awards = awards.filter((award) => {
      return award._id.valueOf() !== awardId;
    });
    const deletedAward = await user.save();
    return deletedAward;
  }
}

export { Award };
