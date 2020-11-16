import React, { useState, useEffect } from 'react';
import ReacDOM from 'react-dom';
import './styles/style.css';
import helpers from '../api_helpers/helpers.js';
import Listing from './components/Listing.jsx';
import {FlexDiv} from './styles/styled_components.js';


const App = () => {
  const [related, setRelated] = useState([]);
  const [listingId, setListing] = useState(null);

  useEffect(() => {
    console.log(window.location);
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
    <FlexDiv>
      {related.map(listing => {
        return <Listing url={listing.url} key={listing.id} type={listing.type} beds={listing.numOfBeds} photo={listing.photoUrl} rating={listing.rating} super={listing.superHost} ratings={listing.numOfRatings} description={listing.description}/>;
      })}
    </FlexDiv>
  );
};

ReacDOM.render(<App/>, document.getElementById('app'));