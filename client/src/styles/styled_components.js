import styled from 'styled-components';

export const Main = styled.div`
  max-width: 1128px;
  text-align: center;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
`;

export const ListingDiv = styled.div`
  width: 24%;
  height: 100%;
  position: relative;
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
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
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

export const Title = styled.h2`
  margin: 0;
  font-size: 1.4em;
  font-weight: 500;
`;

export const PagesDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const PageCount = styled.div`
  margin-right: 16px;
  font-size: 14px;
`;

export const BackButton = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  border 1px solid rgba(0, 0, 0, 0.08);
  color: black;
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
  margin-right: 6px;
  &:hover {
    transform: scale(1.04);
    background-color: white;
    box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px,
    rgba(0, 0, 0, .12) 0px 6px 16px;
  }
`;

export const NextButton = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  border 1px solid rgba(0, 0, 0, 0.08);
  color: black;
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
  margin-left: 6px;
  &:hover {
    transform: scale(1.04);
    background-color: white;
    box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px,
    rgba(0, 0, 0, .12) 0px 6px 16px;
  }
`;

export const SuperHeart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`;

export const Super = styled.div`
  font-size: 12px;
  font-weight: 700;
  background-color: rgba(255, 255, 255, .95);
  border: .5px solid rgba(0, 0, 0, 0.2);
  color: black;
  border-radius: 4px;
  padding: 4px 8px;
  box-shadow: rgba(0, 0, 0, .18) 0px 2px 4px;
`;

export const HeartButton = styled.button`
  background: transparent;
  border: 0px;
  z-index: 2;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ListingImg = styled.img`
width: 100%;
height: 178px;
border-radius: 12px;
`;

export const FavImg = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 16px;
`;

export const ModalDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
  width: 568px;
  background-color: white;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, .4);
`;

export const ModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid rgb(235, 235, 235);
  min-height: 64px;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: white;
  height: 50px;
  padding: 0;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export const ModalTitle = styled.div`
  margin-right: 10px;
  font-weight: 700;
`;

export const ListDiv = styled.div`
  display: flex;
  padding: 12px;
  align-items: center;
  &:hover {
    cursor:pointer;
  }
`;

export const AllFavs = styled.div`
  padding: 20px 16px;
`;

export const ListHeader = styled.div`
  margin-bottom: 4px;
  font-size: 12px;
`;

export const ListName = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const ListStays = styled.div`
  margin-top: 4px;
  font-size: 14px;
`;

export const ModalFoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 24px;
  border-top: 1px solid rgb(235, 235, 235);
  min-height: 64px;
  &:hover {
    cursor: pointer;
  }
`;

export const CreateDiv = styled.div`
  font-weight: 700;
  text-decoration: underline;
`;

export const RatingsDiv = styled.div`
  margin-bottom: 6px;
  text-align: left;
  font-size: 15px;
`;

export const NumRatingSpan = styled.span`
  color: rgb(113, 113, 113);
  margin-left: 4px;
`;

export const HouseTypeDiv = styled.div`
  font-size: 16px;
  margin-bottom: 2px;
  text-align: left;
`;

export const DescriptionDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  text-align: left;
  max-height: 19px;
  white-space: nowrap
`;

export const PriceDiv = styled.div`
  margin-top: 4px;
  font-size: 16px;
  text-align: left;
`;

export const PriceSpan = styled.span`
  font-weight: 700;
`;

export const ListingLink = styled.a`
  height: 100%;
  width: 100%;
  display: block;
  position:absolute;
  top: 0px;
  text-decoration: none;
  color: black;
  z-index: 1;
`;

export const ArrowSvg = styled.svg`
  height: 10px;
  width: 10px;
`;

export const HeartSvg = styled.svg`
  height: 24px;
  width: 24px;
  stroke: white;
  fill: rgba(0, 0, 0, .5);
`;

export const StarSvg = styled.svg`
  fill: rgb(255, 56, 92);
  height: 14px;
  width: 14px;
  margin-right: 4px;
`;