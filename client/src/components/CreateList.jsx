import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {ModalDiv, Overlay, ModalHead, CloseButton, ModalTitle, ModalFoot, AddListButton, ListInput, InputWrap, FormWrap, CharLimit, ListLabel, NameDiv, InnerName} from '../styles/styled_components';


var CreateList = (props) => {

  const [input, setInput] = useState(true);
  const [disabled, setDisabled] = useState(true);

  if (!props.showing) {
    return null;
  }

  var handleChange = (e) => {
    e.preventDefault();
    if (e.target.value === '') {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    setInput(e.target.value);
  };

  return ReactDOM.createPortal(
    <React.Fragment>
      <Overlay onClick={props.closeFunc} />
      <ModalDiv>
        <ModalHead>
          <CloseButton onClick={props.closeFunc}>X</CloseButton>
          <ModalTitle>Name This List</ModalTitle>
          <div />
        </ModalHead>
        <FormWrap>
          <ListLabel for="name-of-list">
            <InputWrap>
              <ListInput id="name-of-list" maxlength="50" type="text" required onChange={handleChange}></ListInput>
              <NameDiv id="name-transform">
                <InnerName>Name</InnerName>
              </NameDiv>
            </InputWrap>
          </ListLabel>
          <CharLimit>50 characters maximum</CharLimit>
        </FormWrap>
        <ModalFoot>
          <AddListButton disabled={disabled}>Create</AddListButton>
        </ModalFoot>
      </ModalDiv>
    </React.Fragment>,
    document.getElementById('portal'));
};

export default CreateList;