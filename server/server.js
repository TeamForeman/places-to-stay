const newrelic = require('newrelic')
const express = require('express');
const path = require('path');
// const db = require('../db/db.js');
// const postGDB = require('../db/postGDB.js');
const bodyParser = require('body-parser');
const {getRelatedListings, getUserFavorites, addNewFavorite, updateBeds, deleteFavorite} = require('../db/postQueries.js');

const app = express();

app.use(express.static(path.join(__dirname, '../public/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 3001;


// Create
// adds new favorite
app.post('/api/more/favorites/', (req, res) => {
  console.log(req.body);
  addNewFavorite(req.body, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  })
});

// Read
// this is if I want the image to link to a new listings page
// app.get('/listing/*', (req, res) => {
//   if (+req.params['0'] >= 1 && +req.params['0'] <= 100) {
//     console.log('req.params[0]: ', req.params['0'])
//     res.status(200);
//     res.sendFile(path.join(__dirname, '../public/dist/index.html'));
//   } else {
//     res.status(404);
//     res.end();
//   }
// });

// Read
// getting the related listings for a specific listing
app.get('/api/more/listings/:id', (req, res) => {
  var listingId = req.params.id;
  getRelatedListings(listingId, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

// Read
// getting all of the users favorite lists
app.get('/api/more/users/:id/favorites', (req, res) => {
  var userId = req.params.id;
  console.log(userId);
  getUserFavorites(userId, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      // console.log('favorites: ', result);
      res.status(200).send(result);
    }
  });
});

// Update
// change number of beds in a listings
app.put('/api/more/listings/:id/beds', (req, res) => {
  console.log('beds: ', req.body);
  let listingId = req.params.id;
  let beds = req.body;
  updateBeds(listingId, beds, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  })
});

// Delete
// Delete a favorite from the users favorites collection
app.delete('/api/more/favorites/:id/', (req, res) => {
  let favoriteId = req.params.id;
  deleteFavorite(favoriteId, (err, results) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(results);
    }
  })
});

app.listen(port, () => {
  console.log(`Server connected at http://localhost:${port}`);
});

// db.con.on('error', console.error.bind(console, 'error'));
// db.con.once('open', () => {
//   console.log('Connected to beartnt!');
// });



