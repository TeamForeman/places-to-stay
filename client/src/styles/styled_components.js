import styled from 'styled-components';

export const SlidingDiv = styled.div`
  max-width: 1128px;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scroll-snap-align: center;
  text-align: center;
  margin: 0 auto;
`;

export const GroupDiv = styled.div`
  flex: 0 0 100%;
  height: 278px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`;

