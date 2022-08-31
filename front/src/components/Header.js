import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserStateContext, DispatchContext } from "../App";
import {
  NavContainer,
  TextInfo,
  BtnConent,
  LinkBtn,
} from "../assets/style/NabSyled";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const userState = useContext(UserStateContext);
  const dispatch = useContext(DispatchContext);

  // 전역상태에서 user가 null이 아니라면 로그인 성공 상태임.
  const isLogin = !!userState.user;
  const userName = isLogin && userState.user.name;

  // 로그아웃 클릭 시 실행되는 함수
  const logout = () => {
    // sessionStorage 에 저장했던 JWT 토큰을 삭제함.
    sessionStorage.removeItem("userToken");
    // dispatch 함수를 이용해 로그아웃함.
    dispatch({ type: "LOGOUT" });
    // 기본 페이지로 돌아감.
    navigate("/");
  };

  return (
    <NavContainer activeKey={location.pathname}>
      <TextInfo>
        안녕하세요,
        {isLogin && (
          <TextInfo className="name">
            {userName ? ` ${userName}님` : ""}
          </TextInfo>
        )}
        포트폴리오 공유 서비스입니다.
      </TextInfo>
      <BtnConent>
        <LinkBtn onClick={() => navigate("/")}>나의페이지</LinkBtn>
        <LinkBtn onClick={() => navigate("/network")}>네트워크</LinkBtn>
        {isLogin && (
          <button
            className="btn btn-outline-primary btn-sm"
            style={{ borderRadius: "30px", fontSize: "14px" }}
            onClick={logout}
          >
            로그아웃
          </button>
        )}
      </BtnConent>
    </NavContainer>
  );
}

export default Header;
