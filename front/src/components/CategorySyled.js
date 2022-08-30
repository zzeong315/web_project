import styled from 'styled-components';

// card, 제목
const CardContent = styled.div`
  padding :  24px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: #0D6EFD;
`;

// 리스트 스타일
const List = styled.div`
  margin-left: 12px;
  border-left: 2px solid #0D6EFD;
`;

const ListName = styled.span`
  margin: 0;
  font-size: 18px;
  color: #222;
`;
const ListDescription = styled.span`
  display: block;
  padding-top: 4px;
  color: #7D7D7D;
`;

const ListRest = styled.span`
  display: inline-block;
  font-size: 14px;
  margin-top: 4px;
  padding: 2px 8px;
  border-radius: 4px;
  color: #7D7D7D;
  background: #DFECFF;
`;

export { CardContent, Title, List, ListName, ListDescription, ListRest };