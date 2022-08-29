import { UserModel } from "../schemas/user";

class Certificate {
  static async findById(userId) {
    const user = await UserModel.findOne({ userId });
    const certificates = user.certificates;
    return certificates;
  }

  static async create(userId, newCertificate) {
    const user = await UserModel.findOne({ userId });
    user.certificates.push(newCertificate);
    const createdNewCertificate = await user.save();
    return createdNewCertificate;
  }

  static async update(userId, certificateId, toUpdate) {
    const user = await UserModel.findOne({ id: userId });
    const certificates = user.certificates;
    certificates.forEach((certificate) => {
      if (certificate._id.valueOf() === certificateId) {
        certificate.name = toUpdate.name;
        certificate.description = toUpdate.description;
        certificate.date = toUpdate.date;
      }
    });

    const updatedCertificate = await user.save();
    return updatedCertificate;
  }

  static async delete(userId, certificateId) {
    let user = await UserModel.findOne({ id: userId });
    let certificates = user.certificates;
    user.certificates = certificates.filter(function (elem) {
      return elem._id.valueOf() !== certificateId;
    });

    const deletedCertificate = await user.save();
    return deletedCertificate;
  }
}

export { Certificate };
