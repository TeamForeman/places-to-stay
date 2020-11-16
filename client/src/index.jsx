import React, { useState, useEffect } from 'react';
import ReacDOM from 'react-dom';
import './styles/style.css';
import helpers from '../api_helpers/helpers.js';


const App = () => {
  const [related, setRelated] = useState([]);
  const [listing, setListing] = useState(null);

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
    <div>Hello World!</div>
  );
};

ReacDOM.render(<App/>, document.getElementById('app'));