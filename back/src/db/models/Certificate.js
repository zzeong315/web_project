import { UserModel } from "../schemas/user";

class Certificate {
  static async findById(id) {
    const user = await UserModel.findOne({ id });
    const certificates = user.certificates;
    return certificates;
  }

  static async findAll() {
    const certificates = await CertificateModel.find({});
    return certificates;
  }

  static async create(id, newCertificate) {
    const user = await UserModel.findOne({ id });
    user.certificates.push(newCertificate);
    const createdNewCertificate = await user.save();
    return createdNewCertificate;
  }

  static async update(userId, certificateId, toUpdate) {
    const user = await UserModel.findOne({ id: userId });
    const certificates = user.certificates;
    certificates.forEach((certificate) => {
      if (certificate._id.valueOf() === certificateId) {
        if (toUpdate.name) {
          certificate.name = toUpdate.name;
        }
        if (toUpdate.description) {
          certificate.description = toUpdate.description;
        }
        if (toUpdate.date) {
          certificate.date = toUpdate.date;
        }
      }
    });

    const updatedCertificate = await user.save();
    return updatedCertificate;
  }
}

export { Certificate };
