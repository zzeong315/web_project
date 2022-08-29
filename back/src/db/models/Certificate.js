import { UserModel } from "../schemas/user";

class Certificate {
  static async findAll(id) {
    const user = await UserModel.findOne({ id });
    if (!user) {
      throw new Error("user not found");
    }
    const certificates = user.certificates;
    return certificates;
  }

  static async add(id, newCertificate) {
    const user = await UserModel.findOne({ id });
    if (!user) {
      throw new Error("user not found");
    }
    user.certificates.push(newCertificate);
    const addedNewCertificate = await user.save();
    return addedNewCertificate;
  }

  static async update(userId, certificateId, toUpdate) {
    const user = await UserModel.findOne({ id: userId });
    if (!user) {
      throw new Error("user not found");
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
      throw new Error("certificate not found");
    }
    const updatedCertificate = await user.save();
    return updatedCertificate;
  }

  static async delete(userId, certificateId) {
    let user = await UserModel.findOne({ id: userId });
    if (!user) {
      throw new Error("user not found");
    }
    let certificates = user.certificates;
    let flag = false;
    certificates.forEach((certificate) => {
      if (certificate._id.valueOf() === certificateId) {
        flag = true;
      }
    });
    if (!flag) {
      throw new Error("certificate is not found");
    }
    user.certificates = certificates.filter(function (elem) {
      return elem._id.valueOf() !== certificateId;
    });
    const deletedCertificate = await user.save();
    return deletedCertificate;
  }
}

export { Certificate };
