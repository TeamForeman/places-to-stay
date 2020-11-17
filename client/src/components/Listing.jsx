import React, { useState, useEffect } from 'react';
import ReacDOM from 'react-dom';
import {ListingDiv, SuperHeart, Super} from '../styles/styled_components.js';

const Listing = (props) => {
  return (
    <ListingDiv>
      <a href={props.url}>
        <SuperHeart>
          {props.super ? <Super>SUPERHOST</Super> : <div></div>}
        </SuperHeart>
        <img src={props.photo}></img>
      </a>
    </ListingDiv>
  );
};


export default Listing;

