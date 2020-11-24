import styled from 'styled-components';

export const Main = styled.div`
  max-width: 1128px;
  text-align: center;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
`;

export const MainHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1128px;
  margin: 0 auto;
  position: relative;
  font-family: 'Roboto', sans-serif;
`;

export const LogoDiv = styled.div`
  color: rgb(255, 56, 92);
`;

// export const Logo = styled.svg`
//   width: 30px;
//   height: 32px;
//   fill: rgb(255, 56, 92);
// `;

export const MainTitle = styled.h2`
  font-size: 1.7em;
  font-weight: 700;
`;

export const HeadButton = styled.button`
  border-radius: 24px;
  border: 1px solid rgb(221, 221, 221);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 48px;
  background-color: white;
  margin-left: 60px;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  }
  &:focus {
    outline: none;
  }
`;

export const SearchLabel = styled.div`
  font-weight: 700;
  font-size: 14px;
`;

export const SearchIconDiv = styled.div`
  border-radius: 50%;
  background-color: rgb(255, 56, 92);
  width: 32px;
  padding: 10px;
  box-sizing: border-box;
  height: 32px;
  color: white;

`;

export const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HostDiv = styled.div`
  margin-right: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HostText = styled.div`
  padding: 12px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;

export const Earth = styled.svg`
  height: 16px;
  width: 16px;

  padding: 12px;
  &:hover {
    cursor: pointer;
  }
`;

export const UserButton = styled.button`
  padding: 5px 5px 5px 12px;
  background-color: white;
  color: black;
  cursor: pointer;
  border: 1px solid #dddddd;
  border-radius: 21px;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

export const ProfilePicture = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 12px;
  border-radius: 50%;
`;

export const ListingDiv = styled.div`
  width: ${props => props.four ? '30%' : '23.5%'};
  height: 100%;
  position: relative;
`;

export const SlidingDiv = styled.div`
  max-width: 1128px;
  height: 100%;
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
  height: 100%;
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
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s;
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
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s;
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
  height: 45px;
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
height: ${props => props.four ? '218px' : '178px'};
border-radius: 12px;
object-fit: cover;
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

export const AddListButton = styled.button`
  cursor: popinter;
  text-align: center;
  font-weight: 700;
  background-color: rgb(34, 34, 34);
  width: 100%;
  color: white;
  border-radius: 8px;
  border: none;
  padding: 14px 24px;
  font-size: 16px;
  &:hover {
    background: rgb(0, 0, 0);
  }
  &:disabled {
    color: rgb(255, 255, 255);
    background-color: rgb(221, 221, 221);
    opacity: 1;
    cursor: not-allowed;
  }
`;
export const FormWrap = styled.div`
  box-sizing: border-box;
  height: 160px;
  padding 32px 16px;

`;

export const InputWrap = styled.div`
  box-shadow: rgb(176, 176, 176) 0 0 0 1px inset;
  padding: 0 24px;
  border-radius: 8px;
  &:focus-within {
    box-shadow: black 0 0 0 2px;
  }
`;

export const CharLimit = styled.div`
  color: rgb(113, 113, 113);
  padding-top: 8px;
  font-size: 13px;
`;

export const ListLabel = styled.label`
  width: 100%;
  display: block;
  border-radius: 8px;
  position: relative;
`;

export const NameDiv = styled.div`
  position: absolute;
  top: 18px;
  left: 12px;
  right: 12px;
  color: rgb(113, 113, 113);
  transform-origin: 0% 0%;
  pointer-events: none;
  transition: -ms-transform 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s, -webkit-transform 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s, transform 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
`;

export const ListInput = styled.input`
  width:100%;
  margin: 26px 12px 10px;
  border: none;
  &:focus {
    outline: none;
  }
  &:focus ~ ${NameDiv} {
    transform: translateY(-8px) scale(.75);
  }
  &:valid ~ ${NameDiv} {
    transform: translateY(-8px) scale(.75);
  }
`;

export const InnerName = styled.div`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  border-top: 1px solid #dddddd;
  box-sizing: border-box;
  max-width: 1128px;
  width: 100%;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  &:hover {
    cursor: pointer;
  }

`;

export const LangAndCurrency = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterEarth = styled.svg`
  height: 16px;
  width: 16px;
  margin-right: 8px;
`;

export const Language = styled.span`
  margin-right: 24px;
  text-decoration: underline;
`;

export const Currency = styled.span`
  margin-right: 24px;
`;

export const FooterIcon = styled.i`
  margin-right: 24px;
`;

export const CurrencyText = styled.span`
  text-decoration: underline;
`;

