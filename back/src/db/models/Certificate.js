import { UserModel } from "../schemas/user";

class Certificate {
  static async findById(userId) {
    const user = await UserModel.findOne({ userId });
    if (!user) {
      return new Error("user is not found");
    }
    const certificates = user.certificates;
    return certificates;
  }

  static async create(userId, newCertificate) {
    const user = await UserModel.findOne({ userId });
    if (!user) {
      return new Error("user is not found");
    }
    user.certificates.push(newCertificate);
    const createdNewCertificate = await user.save();
    return createdNewCertificate;
  }

  static async update(userId, certificateId, toUpdate) {
    const user = await UserModel.findOne({ id: userId });
    if (!user) {
      return new Error("user is not found");
    }
    const certificates = user.certificates;
    let flag = false;
    certificates.forEach((certificate) => {
      if (certificate._id.valueOf() === certificateId) {
        certificate.name = toUpdate.name;
        certificate.description = toUpdate.description;
        certificate.date = toUpdate.date;
        flag = true;
      }
    });
    if (!flag) {
      return new Error("project is not found");
    }

    const updatedCertificate = await user.save();
    return updatedCertificate;
  }

  static async delete(userId, certificateId) {
    let user = await UserModel.findOne({ id: userId });
    if (!user) {
      return new Error("user is not found");
    }
    let certificates = user.certificates;
    user.certificates = certificates.filter(function (elem) {
      return elem._id.valueOf() !== certificateId;
    });

    const deletedCertificate = await user.save();
    return deletedCertificate;
  }
}

export { Certificate };
