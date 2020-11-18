import React from 'react';
import ReactDOM from 'react-dom';
import FavList from './FavList.jsx';
import {ModalDiv, Overlay, ModalHead, CloseButton, ModalTitle, AllFavs, CreateDiv, ModalFoot} from '../styles/styled_components';

var Favorites = (props) => {
  if (!props.showing) {
    return null;
  }
  return ReactDOM.createPortal(
    <React.Fragment>
      <Overlay onClick={props.closeFunc} />
      <ModalDiv>
        <ModalHead>
          <CloseButton onClick={props.closeFunc}>X</CloseButton>
          <ModalTitle>Save to a list</ModalTitle>
          <div />
        </ModalHead>
        <AllFavs>
          {props.favorites.map((list, i) => {
            return <FavList img={list.photoUrl} name={list.name} length={list.listings.length} key={i} />;
          })}
        </AllFavs>
        <ModalFoot>
          <CreateDiv>Create a list</CreateDiv>
        </ModalFoot>
      </ModalDiv>
    </React.Fragment>
    , document.getElementById('portal'));

};


export default Favorites;