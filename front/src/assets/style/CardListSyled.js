import styled from "styled-components";

const CardList = styled.div`
  padding: 24px;

  .title {
    font-weight: 500;
    font-size: 24px;
    color: #0d6efd;
  }
  
  .list {
    margin-left: 12px;
    border-left: 2px solid #0d6efd;
  }

  .list .name {
    display: block;
    margin: 0;
    font-size: 18px;
    color: #222;
  }

  .list .description {
    display: block;
    padding-top: 4px;
    color: #7d7d7d;

    &.inlineText {
      display: inline-block;
      margin-right: 8px;
    }
  }

  .list .rest {
    display: inline-block;
    font-size: 14px;
    margin-top: 4px;
    padding: 2px 8px;
    border-radius: 4px;
    color: #7d7d7d;
    background: #dfecff;
  }
`;

export default CardList;
