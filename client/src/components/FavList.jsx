import React from 'react';

var FavList = (props) => {
  return (
    <div>
      <div>
        <img src={props.img}></img>
      </div>
      <div>
        <div>
          {props.name}
        </div>
        <div>
          {props.length} {props.length > 1 ? "stays" : "stay"}
        </div>
      </div>
    </div>
  )
}

export default FavList