import React from 'react';
import {FavImg} from '../styles/styled_components.js';

var FavList = (props) => {
  console.log(props);
  return (

    <div>
      <div>
        <FavImg src={props.img}></FavImg>
      </div>
      <div>
        <div>
          {props.name}
        </div>
        <div>
          {props.length} {props.length > 1 ? 'stays' : 'stay'}
        </div>
      </div>
    </div>
  )
}

export default FavList