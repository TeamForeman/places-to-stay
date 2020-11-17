import React, { useState, useEffect } from 'react';
import ReacDOM from 'react-dom';
import {ListingDiv, SuperHeart, Super, HeartButton} from '../styles/styled_components.js';

const Listing = (props) => {
  return (
    <ListingDiv>
      <a href={props.url}></a>
      <SuperHeart>
        {props.super ? <Super>SUPERHOST</Super> : <div></div>}
        <HeartButton>
          <svg className="heart" viewBox="0 0 32 32">
            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
          </svg>
        </HeartButton>
      </SuperHeart>
      <img src={props.photo}></img>
    </ListingDiv>
  );
};


export default Listing;

