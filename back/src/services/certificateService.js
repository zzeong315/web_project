import { Certificate } from "../db";

class certificateService {
  static async getCertificatesById(id) {
    const certificates = await Certificate.findById(id);

    if (certificates.length === 0) {
      const errorMessage =
        "해당 프로필은 자격증 내역이 없습니다. 다시 한 번 확인해주세요.";

      return { errorMessage };
    }

    return certificates;
  }

  static async getCertificates() {
    const certificates = await Certificate.findAll();

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
