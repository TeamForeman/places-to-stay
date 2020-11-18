import React from 'react';
import ReactDOM from 'react-dom';
import FavList from './FavList.jsx';
import {ModalDiv, Overlay, ModalHead, CloseButton} from '../styles/styled_components';

var Favorites = (props) => {
  if (!props.showing) {
    return null;
  }
  console.log(props);
  return ReactDOM.createPortal(
    <React.Fragment>
      <Overlay onClick={props.closeFunc} />
      <ModalDiv>
        <ModalHead>
          <CloseButton onClick={props.closeFunc}>X</CloseButton>
          <div>Save to a list</div>
          <div />
        </ModalHead>
        {props.favorites.map((list, i) => {
          return <FavList img={list.photoUrl} name={list.name} length={list.listings.length} key={i} />;
        })}
      </ModalDiv>
    </React.Fragment>
    , document.getElementById('portal'));

};


export default Favorites;