const faker = require('faker');

// setup id counters rId for related, id for listings, and uId for users
var id = 1;
var rId = 101;
var uId = 1;

// house types reflecting real airbnb house types
var houseTypes = ['Entire house', 'Hotel room', 'Entire apartment', 'Tent', 'Private room', 'Entire condominium'];

// makes an array of related listings 12 per listing
var relatedMaker = function() {
  var array = [];
  while (array.length < 12) {
    array.push({
      id: rId,
      type: houseTypes[Math.floor(Math.random() * houseTypes.length)],
      numOfBeds: Math.ceil(Math.random() * 5),
      photoUrl: faker.image.city(),
      superhost: faker.random.boolean(),
      rating: (Math.random() * 5).toFixed(2),
      numOfRatings: faker.random.number({'min': 0, 'max': 500}),
      description: faker.lorem.sentence(),
      price: faker.random.number({'min': 30, 'max': 500})
    });
    rId++;
  }
  return array;
};

// Makes max (100) listing primary entries with id's from 1 - 100 and a list of related listings
var listingsMaker = function(max) {
  var array = [];
  while (array.length < max) {
    array.push({
      id: id,
      relatedListings: relatedMaker()
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
    array.push(Math.ceil(Math.random() * 100));
  }
  return array;
};

// Makes a list of favorites that each contain a title, url, and list of listing id's on that list
var favoritesMaker = function(max) {
  var array = [];
  for (let i = 0; i < max; i++) {
    array.push({
      name: favoriteTitles[i],
      photUrl: faker.image.city(),
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
      userName: uId,
      favorites: favoritesMaker(Math.ceil(Math.random() * 6))
    });
    uId++;
  }
  return array;
};

