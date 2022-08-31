import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 8px 12px 8px 24px;
  background: #f4f4f4;

  .textInfo {
    color: #222;
    letter-spacing: -1.1px;

    .name {
      color: #0d6efd;
      font-weight: bold;
      padding: 0 5px;
    }
  }

  .btnWrap {
    display: flex;

    button {
      font-size: 14px;
      margin-right: 8px;
      color: #0d6efd;
      background: transparent;
      border: none;
    }

    .logBtn {
      border: 1px solid #0d6efd;
      border-radius: 13px;
      transition: all .3s;
    }
    .logBtn:hover{
      color: #fff;
      background: #0d6efd;
    }
  }
`;

export default Nav;
