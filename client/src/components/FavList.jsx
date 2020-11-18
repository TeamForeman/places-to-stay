import React from 'react';
import {FavImg, ListDiv} from '../styles/styled_components.js';

var FavList = (props) => {
  return (
    <ListDiv>
      <div>
        <FavImg src={props.img}></FavImg>
      </div>
      <div>
        <div>
          Any time
        </div>
        <div>
          {props.name}
        </div>
        <div>
          {props.length} {props.length > 1 ? 'stays' : 'stay'}
        </div>
      </div>
    </ListDiv>
  );
};

export default FavList;