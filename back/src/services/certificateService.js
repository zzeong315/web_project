import { Certificate } from "../db";

class certificateService {
  static async getCertificates(id) {
    const certificates = await Certificate.findAll(id);
    return certificates;
  }

  static async addCertificate(id, newcertificate) {
    const addedCertificate = await Certificate.add(id, newcertificate);
    return addedCertificate;
  }

  static async updateCertificate(userId, certificateId, toUpdate) {
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
