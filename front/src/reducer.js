export function loginReducer(userState, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log("%c로그인!", "color: #d93d1a;");
            return {
                user: action.payload,
            };
        case "LOGOUT":
            console.log("%c로그아웃!", "color: #d93d1a;");
            return {
                user: null,
            };
        case 'UPDATE_USER':
            return {
                user: {
                    ...userState.user,
                    imgUrl : action.payload.imgUrl,
                    name : action.payload.name,
                    email : action.payload.email,
                    description: action.payload.description
                }
            };
        case "DELETE_USER":
            console.log("%c회원탈퇴!", "color: #d93d1a;");
            return {
                user: null,
            };
        default:
            return userState;
    }
}
