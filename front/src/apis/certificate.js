import axios from "axios";

const cerRepository = (apiUri) => {
  return {
    async getCertificates(params) {
      return axios.get(`${apiUri}/certificates/` + params, {
        // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
    async createCertificate(addData) {
      // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
      // 예시: {name: "Kim"} => {"name": "Kim"}
      const bodyData = JSON.stringify(addData);

      return axios.post(`${apiUri}/certificate`, bodyData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
    async updateCertificate(changeData) {
      const bodyData = JSON.stringify(changeData);

      return axios.patch(`${apiUri}/certificate`, bodyData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
    async deleteCertificateById(certificateId) {
      return axios.delete(`${apiUri}/certificate/${certificateId}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
  };
};

export default cerRepository;
