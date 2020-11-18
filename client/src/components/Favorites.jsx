import React from 'react';
import ReactDOM from 'react-dom';
import FavList from './FavList.jsx';

var Favorites = (props) => {
  if (!props.showing) {
    return null;
  }
  console.log(props);
  return ReactDOM.createPortal(
    <div>
      {props.favorites.map((list, i) => {
        return <FavList img={list.photoUrl} name={list.name} length={list.listings.length} key={i} />;
      })}
    </div>, document.getElementById('portal'));
};


export default Favorites;