import React, { useState, useEffect } from 'react';
import ReacDOM from 'react-dom';

const Listing = (props) => {
  return (
    <a href={props.url}>
      <img src={props.photo}></img>
    </a>
  );
};


export default Listing;

