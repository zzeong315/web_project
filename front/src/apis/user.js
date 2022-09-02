import axios from "axios";

const backendPortNumber = process.env.REACT_APP_SERVER_PORT;
const serverUrl =
  process.env.REACT_APP_SERVER_URI + ":" + backendPortNumber + "/";

const userRepository = (apiUri) => {
  return {
    async getUserbyId(ownerId) {
      return axios.get(`${apiUri}/users/` + ownerId, {
        // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },

    async getUsers() {
      return axios.get(`${apiUri}/userlist`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },

    async getCurrentUser() {
      return axios.get(`${apiUri}/user/current`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },

    async requestLogin(userInfo) {
      // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
      // 예시: {name: "Kim"} => {"name": "Kim"}
      const bodyData = JSON.stringify(userInfo);

      return axios.post(`${apiUri}/user/login`, bodyData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },

    async registerUser(newUser) {
      const bodyData = JSON.stringify(newUser);

      return axios.post(`${apiUri}/user/register`, bodyData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
    async updateUserById(userId, changeData) {
      const bodyData = JSON.stringify(changeData);

      return axios.put(`${apiUri}/users/${userId}`, bodyData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
    async updateProfileImg(formData) {
      return axios.post(`${apiUri}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
    async deleteUserById(userId) {
      return axios.delete(`${apiUri}/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
    },
  };
};

export default userRepository;
