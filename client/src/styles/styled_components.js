import styled from 'styled-components';

export const FlexUl = styled.div`
  max-width: 1128px;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scroll-snap-align: center;
  text-align: center;
  margin: 0 auto;
`;

export const FlexDiv = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`;