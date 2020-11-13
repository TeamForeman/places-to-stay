const express = require('express');
const path = require('path');
const db = require('../db/db.js');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, '../public/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 3004;

// getting the related listings for a specific listing
app.get('/api/more/listings/:id', (req, res) => {
  var listingId = req.params.id;
  db.Listing.findOne({lId: listingId})
    .then(data => {
      var related = data.relatedListings;
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      res.send(404);
    });
});

// getting all of the users favorite lists
app.get('/api/users/:id/favorites', (req, res) => {
  var userId = {uId: req.params.id};
  db.User.findOne(userId)
    .then(results => {
      res.status(200).send(results);
    })
    .catch(err => {
      console.log(err);
      res.status(404);
    });
});

// adding a list to the users favorite lists
app.put('/api/users/:id/favorites', (req, res) => {
  var userId = {uId: req.params.id};
  var newList = {
    name: req.body.listName,
    photoUrl: null,
    listings: []
  };
  db.User.findOneAndUpdate(userId, { $push: { favorites: newList}})
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

// adding a listing to a list in the users favorite lists
app.put('/api/users/:id/:listname/:lid', (req, res) => {
  var userId = {uId: req.params.id};
  var listingId = +req.params.lid;
  var listName = req.params.listname;
  db.User.findOne(userId)
    .then(results => {
      for (let i = 0; i < results.favorites.length; i++) {
        if (results.favorites[i].name === listName) {
          var index = i;
          break;
        }
      }
      results.favorites[index].listings.push(listingId);
      return db.User.findOneAndUpdate(userId, { favorites: results.favorites});
    })
    .then(() => {
      return db.findOne(userId);
    })
    .then(results => {
      res.status(200).send(results);
    })
    .catch(err => {
      console.log(err);
      res.status(404);
    });
});



app.listen(port, () => {
  console.log(`Server connected at http://localhost:${port}`);
});

db.con.on('error', console.error.bind(console, 'error'));
db.con.once('open', () => {
  console.log('Connected to beartnt!');
});