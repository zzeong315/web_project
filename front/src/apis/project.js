import axios from "axios";

const proRepository = (apiUri) => {
  return {
    async getProjects(params) {
      console.log(`%cGET 요청 ${apiUri}/projects/${params}`, "color: #a25cd1;");

      return axios.get(`${apiUri}/projects/` + params, {
        // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
    async createProject(addData) {
      // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
      // 예시: {name: "Kim"} => {"name": "Kim"}
      const bodyData = JSON.stringify(addData);
      console.log(`%cPOST 요청: ${apiUri}/project`, "color: #296aba;");
      console.log(`%cPOST 요청 데이터: ${bodyData}`, "color: #296aba;");

      return axios.post(`${apiUri}/project`, bodyData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
    async updateProject(changeData) {
      const bodyData = JSON.stringify(changeData);
      console.log(`%cPATCH 요청: ${apiUri}/project`, "color: #059c4b;");
      console.log(`%cPATCH 요청 데이터: ${bodyData}`, "color: #059c4b;");

      return axios.patch(`${apiUri}/project`, bodyData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
    async deleteProjectById(projectId) {
      console.log(`DELETE 요청 ${apiUri}/project/${projectId}`);
      return axios.delete(`${apiUri}/project/${projectId}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
  };
};

export default proRepository;
