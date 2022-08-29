import axios from "axios";

const awardRepository = (apiUri) => {
  return {
    async getAwards(params) {
      console.log(`%cGET 요청 ${apiUri}/awards/${params}`, "color: #a25cd1;");

      return axios.get(`${apiUri}/awards/` + params, {
        // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
    async createAward(addData) {
      // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
      // 예시: {name: "Kim"} => {"name": "Kim"}
      const bodyData = JSON.stringify(addData);
      console.log(`%cPOST 요청: ${apiUri}/award`, "color: #296aba;");
      console.log(`%cPOST 요청 데이터: ${bodyData}`, "color: #296aba;");

      return axios.post(`${apiUri}/award`, bodyData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
    async updateAward(changeData) {
      const bodyData = JSON.stringify(changeData);
      console.log(`%cPATCH 요청: ${apiUri}/award`, "color: #059c4b;");
      console.log(`%cPATCH 요청 데이터: ${bodyData}`, "color: #059c4b;");

      return axios.patch(`${apiUri}/award`, bodyData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
    async deleteAwardById(awardId) {
      console.log(`DELETE 요청 ${apiUri}/award/${awardId}`);
      return axios.delete(`${apiUri}/award/${awardId}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
  };
};

export default awardRepository;
