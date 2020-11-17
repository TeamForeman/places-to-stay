import React, { useState, useEffect } from 'react';
import ReacDOM from 'react-dom';
import './styles/style.css';
import helpers from '../api_helpers/helpers.js';
import Listing from './components/Listing.jsx';
import {SlidingDiv, GroupDiv} from './styles/styled_components.js';


const App = () => {
  const [related, setRelated] = useState([]);
  const [listingId, setListing] = useState(null);

  useEffect(() => {
    var pathArr = window.location.pathname.split('/');
    var id = pathArr[pathArr.length - 1];
    helpers.getListing(id)
      .then(listingData =>{
        setRelated(listingData[1]);
        setListing(listingData[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  var next = () => {

  };

  var previous = () => {

  };

  return (
    <React.Fragment>
      <div>
        <h2>More places to stay</h2>
        <button type="button" onClick={next}>
          <svg viewBox="0 0 18 18">
            <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd"></path>
          </svg>
        </button>
        <button type="button" onClick={previous}>
          <svg viewBox="0 0 18 18">
            <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <SlidingDiv className="listings-scroll">
        <GroupDiv id="1">
          {related.map((listing, i) => {
            if (i <= 3) {
              return (
                <Listing url={listing.url} key={listing.id} type={listing.type} beds={listing.numOfBeds} photo={listing.photoUrl} rating={listing.rating} super={listing.superHost} ratings={listing.numOfRatings} description={listing.description}/>
              );
            }
          })}
        </GroupDiv>
        <GroupDiv id="2">
          {related.map((listing, i) => {
            if (i > 3 && i <= 7) {
              return (
                <Listing url={listing.url} key={listing.id} type={listing.type} beds={listing.numOfBeds} photo={listing.photoUrl} rating={listing.rating} super={listing.superHost} ratings={listing.numOfRatings} description={listing.description}/>
              );
            }
          })}
        </GroupDiv>
        <GroupDiv id="3">
          {related.map((listing, i) => {
            if (i > 7) {
              return (
                <Listing url={listing.url} key={listing.id} type={listing.type} beds={listing.numOfBeds} photo={listing.photoUrl} rating={listing.rating} super={listing.superHost} ratings={listing.numOfRatings} description={listing.description}/>
              );
            }
          })}
        </GroupDiv>
      </SlidingDiv>
      <a href="#3">test3</a>
      <a href="#2">test2</a>
      <a href="#1">test1</a>

    </React.Fragment>
  );
};

ReacDOM.render(<App/>, document.getElementById('app'));