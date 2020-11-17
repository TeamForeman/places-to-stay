import styled from 'styled-components';

export const FlexUl = styled.ul`
  max-width: 1128px;
  display: flex;
  overflow-x: scroll;
  sroll-behavior: smooth;,
  scroll-snap-type: x mandatory;
  text-align: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const FlexDiv = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  margin: 0 auto;
`;