import React, { useState, useEffect } from 'react';
import ReacDOM from 'react-dom';
import './styles/style.css';
import helpers from '../api_helpers/helpers.js';
import Listing from './components/Listing.jsx';
import {FlexUl, FlexDiv} from './styles/styled_components.js';


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

  return (
    <React.Fragment>
      <FlexUl className="listings-scroll">
        <div id="1">
          <FlexDiv>
            {related.map((listing, i) => {
              if (i <= 3) {
                return (
                  <Listing url={listing.url} key={listing.id} type={listing.type} beds={listing.numOfBeds} photo={listing.photoUrl} rating={listing.rating} super={listing.superHost} ratings={listing.numOfRatings} description={listing.description}/>
                );
              }
            })}
          </FlexDiv>
        </div>
        <div id="2">
          <FlexDiv>
            {related.map((listing, i) => {
              if (i > 3 && i <= 7) {
                return (
                  <Listing url={listing.url} key={listing.id} type={listing.type} beds={listing.numOfBeds} photo={listing.photoUrl} rating={listing.rating} super={listing.superHost} ratings={listing.numOfRatings} description={listing.description}/>
                );
              }
            })}
          </FlexDiv>
        </div>
        <div id="3">
          <FlexDiv>
            {related.map((listing, i) => {
              if (i > 7) {
                return (
                  <Listing url={listing.url} key={listing.id} type={listing.type} beds={listing.numOfBeds} photo={listing.photoUrl} rating={listing.rating} super={listing.superHost} ratings={listing.numOfRatings} description={listing.description}/>
                );
              }
            })}
          </FlexDiv>
        </div>
      </FlexUl>
      <a href="#3">test3</a>
      <a href="#2">test2</a>
      <a href="#1">test1</a>

    </React.Fragment>
  );
};

ReacDOM.render(<App/>, document.getElementById('app'));