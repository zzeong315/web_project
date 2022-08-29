export function loginReducer(userState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("%c로그인!", "color: #d93d1a;");
      return {
        ...userState,
        user: action.payload,
      };
    case "LOGOUT":
      console.log("%c로그아웃!", "color: #d93d1a;");
      return {
        ...userState,
        user: null,
      };

    case "DELETE_USER":
      console.log("%c회원탈퇴!", "color: #d93d1a;");
      return {
        ...userState,
        user: null,
      };

    default:
      return userState;
  }
}
