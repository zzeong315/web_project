import styled from 'styled-components';

const UserCardWrap = styled.div`
  padding: 32px 16px 20px 16px;

  .imgWrap {
    position: relative;
    width: 10rem;
    height: 10rem;
    padding: 0;
    border: 1px solid #D9D9D9;
    border-radius: 50%;
    overflow: hidden;

    & img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      hight: 100%;
    }
  }

  .portfolioBtn {
    width: 100%;
    margin-top: 4px;
    color: #0D6EFD;
    background: transparent;
    border: 1px solid #0D6EFD;
    border-radius: .2rem;
    transition: all .3s;
  
    &:hover {
      color: #fff;
      background: #0D6EFD;
    }
  }

  .fileBtn {
    position: absolute;
    left: 60%;
    bottom:0;
    width: 48px;
    height: 48px;
    line-height: 47px;
    color: #fff;
    text-align: center;
    background: #0D6EFD;
    border-radius: 50%;
    cursor: pointer;
  }

  .withdrawalBtn {
    margin: 32px 0 0 0; 
    padding: 0;
    font-size: 14px;
    color: #7D7D7D;
    border: none;
    background: transparent;
  
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default UserCardWrap;