import React from 'react';
import ReactDOM from 'react-dom';
import {ModalDiv, Overlay, ModalHead, CloseButton, ModalTitle, AllFavs, CreateDiv, ModalFoot} from '../styles/styled_components';

var CreateList = (props) => {
  if (!props.showing) {
    return null;
  }

  return ReactDOM.createPortal(
    <React.Fragment>
      <Overlay onClick={props.closeFunc}>
        <ModalDiv>
          <ModalHead>
            <CloseButton onClick={props.closeFunc}>X</CloseButton>
            <ModalTitle>Name This List</ModalTitle>
            <div />
          </ModalHead>
        </ModalDiv>
      </Overlay>
    </React.Fragment>,
    document.getElementById('portal'));
};

export default CreateList;