const axios = require('axios');


// get a specific listing
var getListing = (id) => {
  return axios.get(`/api/more/listings/${id}`)
    .then(results => {
      return ([results.data.lId, results.data.relatedListings]);
    })
    .catch(err => {
      console.log(err);
    });
};


module.exports = {
  getListing
};
