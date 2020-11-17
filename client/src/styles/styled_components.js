import styled from 'styled-components';

export const Main = styled.div`
  max-width: 1128px;
  text-align: center;
  margin: 0 auto;
`;

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

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
`;

export const PagesDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const PageCount = styled.div`
  margin-right: 16px;
  font-size: 14px;
`;

export const PageButton = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  border 1px solid rgba(0, 0, 0, 0.08);
  color: rgb(34, 34, 34);
  background-color: rgba(255, 255, 255, .9);
  cursor: pointer;
  width: 32px;
  height: 32px;
  text-align: center;
  box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, .18) 0px 2px 4px;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s !important;
  &:hover {
    transform: scale(1.04);
    background-color: rgb(255, 255, 255);
    box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px,
    rgba(0, 0, 0, .12) 0px 6px 16px;
  }
`;
