import axios from 'axios';


// get a specific listing
export var getListing = (id) => {
  return axios.get(`/api/more/listings/${id}`)
    .then(results => {
      return ([results.data.lId, results.data.relatedListings]);
    })
    .catch(err => {
      console.log(err);
    });
};

export var getUser = (id) => {
  return axios.get(`/api/users/${id}/favorites`)
    .then(results => {
      return ([results.data.uId, results.data.favorites]);
    })
    .catch(err => {
      console.log(err);
    });
};


