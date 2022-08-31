import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 8px 12px 8px 24px;
  background: #f4f4f4;
`;

const TextInfo = styled.span`
  color: #0d6efd;
  .name {
    color: #ff8a80;
    font-weight: bold;
    padding: 0 5px;
  }
`;

const BtnConent = styled.div`
  display: flex;
`;

const LinkBtn = styled.button`
  font-size: 14px;
  margin-right: 8px;
  color: #222;
  background: transparent;
  border: none;
`;

export { NavContainer, LinkBtn, TextInfo, BtnConent };
