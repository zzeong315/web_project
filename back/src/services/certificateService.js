import { Certificate } from "../db";

class certificateService {
  static async getCertificatesById(id) {
    const certificates = await Certificate.findById(id);

    return certificates;
  }

  static async addCertificate(id, newCertificate) {
    const createdNewCertificate = await Certificate.create(id, newCertificate);
    createdNewCertificate.errorMessage = null;

    return createdNewCertificate;
  }

  static async setCertificate(userId, certificateId, toUpdate) {
    const updatedCertificate = await Certificate.update(
      userId,
      certificateId,
      toUpdate
    );
    return updatedCertificate;
  }

  static async deleteCertificate(userId, certificateId) {
    const deletedCertificate = await Certificate.delete(userId, certificateId);

    return deletedCertificate;
  }
}
export { certificateService };
