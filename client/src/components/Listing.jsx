import React, { useState, useEffect } from 'react';
import ReacDOM from 'react-dom';

const Listing = (props) => {
  return (
    <div>
      <img src={props.photo}></img>
      <a href={props.url}>{props.url}</a>
    </div>
  );
};


export default Listing;