const faker = require('faker');
const db = require('./db.js');
const imagePath = require('./s3ImagePath.js');

// setup id counters rId for related, id for listings, and uId for users
var id = 1;
var uId = 1;


// house types reflecting real airbnb house types
var houseTypes = ['Entire house', 'Hotel room', 'Entire apartment', 'Tent', 'Private room', 'Entire condominium'];

// makes an array of related listings 12 per listing
var relatedMaker = function(mainId) {
  var array = [];
  var ids = [];
  while (ids.length < 12) {
    var id = faker.random.number({'min': 0, 'max': 100});
    if (id !== mainId && !ids.includes(id)) {
      ids.push(id);
    }
  }
  var idIndex = 0;
  while (array.length < 12) {
    array.push({
      id: ids[idIndex],
      url: `http://localhost:3000//api/more/listings/${Math.floor(Math.random()) * 1000000}`,
      type: houseTypes[Math.floor(Math.random() * houseTypes.length)],
      numOfBeds: Math.ceil(Math.random() * 5),
      photoUrl: imagePath + `${Math.floor(Math.random) * 1000 + 1}.jpg`,
      superhost: faker.random.boolean(),
      rating: (Math.random() * 5).toFixed(2),
      numOfRatings: faker.random.number({'min': 1, 'max': 500}),
      description: faker.lorem.sentence(),
      price: faker.random.number({'min': 30, 'max': 500})
    });
    idIndex++;
  }
  return array;
};

// Makes max (100) listing primary entries with id's from 1 - 100 and a list of related listings
// 100
var listingsMaker = function(max) {
  var array = [];
  while (array.length < max) {
    array.push({
      lId: id,
      relatedListings: relatedMaker(id)
    });
    id++;
  }
  return array;
};

// semi real potential list titles for users
var favoriteTitles = ['Favorites', 'Beach Homes', 'Weekend Getaways', 'Ski Spots', 'Campsites', 'Good Nightlife'];

// Makes list of id's to point to listings in one of the users lists
var favListingMaker = function(max) {
  var array = [];
  while (array.length < max) {
    var listingId = Math.ceil(Math.random() * 100);
    if (!array.includes(listingId)) {
      array.push(listingId);
    }
  }
  return array;
};

// Makes a list of favorites that each contain a title, url, and list of listing id's on that list
var favoritesMaker = function(max) {
  var array = [];
  for (let i = 0; i < max; i++) {
    array.push({
      name: favoriteTitles[i],
      photoUrl: photoUrls[Math.floor(Math.random() * photoUrls.length)],
      listings: favListingMaker(Math.ceil(Math.random() * 5))
    });
  }
  return array;
};

// Makes max(users) storing username and an array of all of their favorite lists
var userMaker = function(max) {
  array = [];
  while (array.length < max) {
    array.push({
      uId: uId,
      favorites: favoritesMaker(Math.ceil(Math.random() * 6))
    });
    uId++;
  }
  return array;
};

var listings = listingsMaker(100);
var users = userMaker(1);

db.Listing.insertMany(listings, (error, docs) => {
  if (error) {
    console.log(error);
  } else {
    console.log('success');
  }
});
db.User.insertMany(users, (error, docs) => {
  if (error) {
    console.log(error);
  } else {
    console.log('success');
    console.log('If you\'ve seen two success logs, the database is seed you can stop the script!');
  }
});

