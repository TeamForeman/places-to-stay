import React, { useState, useEffect } from 'react';
import ReacDOM from 'react-dom';
import './styles/style.css';
import {getListing, getUser} from '../api_helpers/helpers.js';
import Listing from './components/Listing.jsx';
import {SlidingDiv, GroupDiv, PageButton, HeaderDiv, Main, PagesDiv, PageCount} from './styles/styled_components.js';
import Favorites from './components/Favorites.jsx';


const App = () => {
  const [related, setRelated] = useState([]);
  const [listingId, setListing] = useState(null);
  const [page, setPage] = useState(1);
  const [userFavs, setUserFavs] = useState([]);
  const [userId, setUserId] = useState(null);
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    var pathArr = window.location.pathname.split('/');
    var id = pathArr[pathArr.length - 1];
    getListing(id)
      .then(listingData => {
        setRelated(listingData[1]);
        setListing(listingData[0]);
        return getUser(1);
      })
      .then(userData => {
        setUserFavs(userData[1]);
        setUserId(userData[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  var next = () => {
    if (!window.location.hash) {
      window.location.href = window.location.href + '#2';
      setPage(2);
    } else if (window.location.hash === '#2') {
      var sliced = window.location.href.slice(0, window.location.href.length - 2);
      window.location.href = sliced + '#3';
      setPage(3);
    } else if (window.location.hash === '#3') {
      var sliced = window.location.href.slice(0, window.location.href.length - 2);
      window.location.href = sliced + '#1';
      setPage(1);
    } else if (window.location.hash === '#1') {
      var sliced = window.location.href.slice(0, window.location.href.length - 2);
      window.location.href = sliced + '#2';
      setPage(2);
    }
  };

  var previous = () => {
    if (!window.location.hash) {
      window.location.href = window.location.href + '#3';
      setPage(3);
    } else if (window.location.hash === '#2') {
      var sliced = window.location.href.slice(0, window.location.href.length - 2);
      window.location.href = sliced + '#1';
      setPage(1);
    } else if (window.location.hash === '#3') {
      var sliced = window.location.href.slice(0, window.location.href.length - 2);
      window.location.href = sliced + '#2';
      setPage(2);
    } else if (window.location.hash === '#1') {
      var sliced = window.location.href.slice(0, window.location.href.length - 2);
      window.location.href = sliced + '#3';
      setPage(3);
    }
  };

  var portalOpen = () => {
    setShowing(true);
  };

  var portalClose = () => {
    setShowing(false);
  };

  return (
    <Main>
      <HeaderDiv>
        <h2>More places to stay</h2>
        <PagesDiv>
          <PageCount>{page} / 3</PageCount>
          <PageButton className="prev" type="button" onClick={previous}>
            <svg className="arrow" viewBox="0 0 18 18">
              <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd"></path>
            </svg>
          </PageButton>
          <PageButton className="next" type="button" onClick={next}>
            <svg className="arrow" viewBox="0 0 18 18">
              <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd"></path>
            </svg>
          </PageButton>
        </PagesDiv>
      </HeaderDiv>
      <SlidingDiv className="listings-scroll">
        <GroupDiv id="1">
          {related.map((listing, i) => {
            if (i <= 3) {
              return (
                <Listing url={listing.url} key={listing.id} type={listing.type} beds={listing.numOfBeds} photo={listing.photoUrl} rating={listing.rating} super={listing.superhost} ratings={listing.numOfRatings} description={listing.description} openFunc={portalOpen} closeFunc={portalClose} />
              );
            }
          })}
        </GroupDiv>
        <GroupDiv id="2">
          {related.map((listing, i) => {
            if (i > 3 && i <= 7) {
              return (
                <Listing url={listing.url} key={listing.id} type={listing.type} beds={listing.numOfBeds} photo={listing.photoUrl} rating={listing.rating} super={listing.superhost} ratings={listing.numOfRatings} description={listing.description} openFunc={portalOpen} closeFunc={portalClose} />
              );
            }
          })}
        </GroupDiv>
        <GroupDiv id="3">
          {related.map((listing, i) => {
            if (i > 7) {
              return (
                <Listing url={listing.url} key={listing.id} type={listing.type} beds={listing.numOfBeds} photo={listing.photoUrl} rating={listing.rating} super={listing.superhost} ratings={listing.numOfRatings} description={listing.description} openFunc={portalOpen} closeFunc={portalClose} />
              );
            }
          })}
        </GroupDiv>
      </SlidingDiv>
      <Favorites showing={showing} favorites={userFavs} />
    </Main>
  );
};

ReacDOM.render(<App/>, document.getElementById('app'));