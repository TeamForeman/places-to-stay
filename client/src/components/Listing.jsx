import React, { useState, useEffect } from 'react';
import ReacDOM from 'react-dom';
import {ListingDiv, SuperHeart, Super, HeartButton, ListingImg, RatingsDiv, NumRatingSpan, HouseTypeDiv, DescriptionDiv, PriceDiv, PriceSpan, ListingLink, HeartSvg, StarSvg} from '../styles/styled_components.js';

const Listing = (props) => {
  var getIdUrl = () => {
    props.openFunc('0' + props.id.toString(), props.photo);
  };

  return (
    <ListingDiv>
      <ListingLink href={props.url}></ListingLink>
      <SuperHeart>
        {props.super ? <Super>SUPERHOST</Super> : <div></div>}
        <HeartButton onClick={getIdUrl}>
          <HeartSvg viewBox="0 0 32 32">
            <path id={'0' + props.id.toString()} d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
          </HeartSvg>
        </HeartButton>
      </SuperHeart>
      <ListingImg src={props.photo}></ListingImg>
      <RatingsDiv>
        <span>
          <StarSvg viewBox="0 0 1000 1000">
            <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"></path>
          </StarSvg>
        </span>
        <span>
          {props.rating}
        </span>
        <NumRatingSpan>
          ({props.ratings})
        </NumRatingSpan>
      </RatingsDiv>
      <HouseTypeDiv>
        {props.type} · {props.beds} {props.beds > 1 ? 'beds' : 'bed'}
      </HouseTypeDiv>
      <DescriptionDiv>
        {props.description}
      </DescriptionDiv>
      <PriceDiv>
        <PriceSpan>${props.price}</PriceSpan>
        <span> / night</span>
      </PriceDiv>
    </ListingDiv>
  );
};


export default Listing;

