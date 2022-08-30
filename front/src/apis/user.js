import axios from "axios";

const backendPortNumber = process.env.REACT_APP_SERVER_PORT;
const serverUrl =
  process.env.REACT_APP_SERVER_URI + ":" + backendPortNumber + "/";

const userRepository = (apiUri) => {
  return {
    async getUserbyId(ownerId) {
      console.log(`%cGET 요청 ${apiUri}/users/${ownerId}`, "color: #a25cd1;");

      return axios.get(`${apiUri}/users/` + ownerId, {
        // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },

    async getUsers() {
      console.log(`%cGET 요청 ${apiUri}/userlist`, "color: #a25cd1;");

      return axios.get(`${apiUri}/userlist`, {
        // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },

    async getCurrentUser() {
      console.log(`%cGET 요청 ${apiUri}/user/current`, "color: #a25cd1;");

      return axios.get(`${apiUri}/user/current`, {
        // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },

    async requestLogin(userInfo) {
      // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
      // 예시: {name: "Kim"} => {"name": "Kim"}
      const bodyData = JSON.stringify(userInfo);
      console.log(`%cPOST 요청: ${apiUri}/user/login`, "color: #296aba;");
      console.log(`%cPOST 요청 데이터: ${bodyData}`, "color: #296aba;");

      return axios.post(`${apiUri}/user/login`, bodyData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },

    async registerUser(newUser) {
      // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
      // 예시: {name: "Kim"} => {"name": "Kim"}
      const bodyData = JSON.stringify(newUser);
      console.log(`%cPOST 요청: ${apiUri}/user/register`, "color: #296aba;");
      console.log(`%cPOST 요청 데이터: ${bodyData}`, "color: #296aba;");

      return axios.post(`${apiUri}/user/register`, bodyData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
    async updateUserById(userId, changeData) {
      const bodyData = JSON.stringify(changeData);
      console.log(`%cPUT 요청: ${apiUri}/users/${userId}`, "color: #059c4b;");
      console.log(`%cPUT 요청 데이터: ${bodyData}`, "color: #059c4b;");

      return axios.put(`${apiUri}/users/${userId}`, bodyData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
    async updateProfileImg(formData) {
      // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
      // 예시: {name: "Kim"} => {"name": "Kim"}
      console.log(`%cPOST 요청: ${apiUri}/user/login`, "color: #296aba;");
      console.log(`%cPOST 요청 데이터: ${formData}`, "color: #296aba;");

      return axios.post(`${apiUri}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
    async deleteUserById(userId) {
      console.log(`DELETE 요청 ${apiUri}/user/${userId}`);
      return axios.delete(`${apiUri}/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
  };
};

export default userRepository;
