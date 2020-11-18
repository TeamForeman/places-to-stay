import React from 'react';
import {FavImg, ListDiv, ListHeader, ListName, ListStays} from '../styles/styled_components.js';

var FavList = (props) => {
  return (
    <ListDiv>
      <div>
        <FavImg src={props.img}></FavImg>
      </div>
      <div>
        <ListHeader>
          Any time
        </ListHeader>
        <ListName>
          {props.name}
        </ListName>
        <ListStays>
          {props.length} {props.length > 1 ? 'stays' : 'stay'}
        </ListStays>
      </div>
    </ListDiv>
  );
};

export default FavList;