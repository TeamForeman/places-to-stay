const faker = require('faker');
const imagePath = require('./s3ImagePath.js');
const fs = require('fs');
const path = require('path');
let writeListings = fs.createWriteStream(path.join(__dirname,'../data', `listings.csv`));
// let writeFavorites = fs.createWriteStream(path.join(__dirname,'../data', `favorites.csv`));
// let writeUsersFavs = fs.createWriteStream(path.join(__dirname,'../data', `usersFavs.csv`));
let writeRelatedListings = fs.createWriteStream(path.join(__dirname,'../data', `relatedListingsJoin.csv`));
const seedAmount = 10000000;

////////// Listings Table
const listingsTableHeaders = 'related_listing_ids, type, num_of_beds, photo_url, superhost, rating, num_of_ratings, description, price';

const houseTypes = ['Entire house', 'Hotel room', 'Entire apartment', 'Tent', 'Private room', 'Entire condominium'];

const listingData = `"{${Math.floor(Math.random() * 10000000 + 1)}, ${Math.floor(Math.random() * 10000000 + 1)}, ${Math.floor(Math.random() * 10000000 + 1)}, ${Math.floor(Math.random() * 10000000 + 1)}, ${Math.floor(Math.random() * 10000000 + 1)}, ${Math.floor(Math.random() * 10000000 + 1)}, ${Math.floor(Math.random() * 10000000 + 1)}, ${Math.floor(Math.random() * 10000000 + 1)}, ${Math.floor(Math.random() * 10000000 + 1)}, ${Math.floor(Math.random() * 10000000 + 1)}, ${Math.floor(Math.random() * 10000000 + 1)}, ${Math.floor(Math.random() * 10000000 + 1)}}", ${houseTypes[Math.floor(Math.random() * houseTypes.length)]}, ${Math.floor(Math.random() * 10 + 1)}, ${imagePath + Math.floor(Math.random() * 1000 + 1)}.jpg, ${faker.random.boolean()}, ${(Math.random() * 5).toFixed(2)}, ${Math.floor(Math.random() * 300)}, ${faker.lorem.sentence()}, ${(Math.random() * 1000).toFixed(2)}`

function listingStream(i) {
  for (; i < seedAmount; i ++) {
    if (!writeListings.write(`${Math.floor(Math.random() * 10000000 + 1)}|${houseTypes[Math.floor(Math.random() * houseTypes.length)]}|${Math.floor(Math.random() * 10 + 1)}|${imagePath + Math.floor(Math.random() * 1000 + 1)}.jpg|${faker.random.boolean()}|${(Math.random() * 5).toFixed(2)}|${Math.floor(Math.random() * 300)}|${faker.lorem.sentence()}|${(Math.random() * 1000).toFixed(2)}` + '\n')) {
      writeListings.once('drain', function() {
        listingStream(i + 1);
      });
      return;
    }
  }
  console.log('End');
  writeListings.end();
}

/////////// Users Table
const usersTableHeaders = 'id'; // dont need to write this to cvs, just need to seed users 10 mil times for auto indexing.

///////////// users_favs_join Table
const usersFavsJoinTableHeaders = 'user_id, favorites_id';

const usersFavsJoinData = `${Math.floor(Math.random() *  + 1)}, ${Math.floor(Math.random() * 10000000 + 1)}`

function usersFavsJoinStream(i) {
  for (; i < seedAmount; i ++) {
    if (!writeUsersFavs.write(`${Math.floor(Math.random() * seedAmount + 1)}, ${Math.floor(Math.random() * seedAmount + 1)}` + '\n')) {
      writeUsersFavs.once('drain', function() {
        usersFavsJoinStream(i + 1);
      });
      return;
    }
  }
  console.log('End');
  writeUsersFavs.end();
}

//////////// Favorites Table
var favoriteTitles = ['Favorites', 'Beach Homes', 'Weekend Getaways', 'Ski Spots', 'Campsites', 'Good Nightlife'];

const favoritesTableHeaders = 'name, listing_id'

const favoritesData = `${favoriteTitles[Math.floor(Math.random() * favoriteTitles.length)]}, ${Math.floor(Math.random() * 10000000) + 1}`


function favoritesStream(i) {
  for (; i < seedAmount; i ++) {
    if (!writeFavorites.write(`${favoriteTitles[Math.floor(Math.random() * favoriteTitles.length)]}, ${Math.floor(Math.random() * seedAmount) + 1}, ${imagePath + Math.floor(Math.random() * 1000 + 1)}.jpg` + '\n')) {
      writeFavorites.once('drain', function() {
        favoritesStream(i + 1);
      });
      return;
    }
  }
  console.log('End');
  writeFavorites.end();
}

/////////// related_listings

function relatedListingsStream(i) {
  for (; i < seedAmount; i ++) {
    if (!writeRelatedListings.write(`${Math.floor(Math.random() * seedAmount + 1)}, ${Math.floor(Math.random() * seedAmount + 1)}, ${Math.floor(Math.random() * seedAmount + 1)}, ${Math.floor(Math.random() * seedAmount + 1)}, ${Math.floor(Math.random() * seedAmount + 1)}, ${Math.floor(Math.random() * seedAmount + 1)}, ${Math.floor(Math.random() * seedAmount + 1)}, ${Math.floor(Math.random() * seedAmount + 1)},${Math.floor(Math.random() * seedAmount + 1)}, ${Math.floor(Math.random() * seedAmount + 1)}, ${Math.floor(Math.random() * seedAmount + 1)}, ${Math.floor(Math.random() * seedAmount + 1)}` + '\n')) {
      writeRelatedListings.once('drain', function() {
        relatedListingsStream(i + 1);
      });
      return;
    }
  }
  console.log('End');
  writeRelatedListings.end();
}

const seeder = () => {
  listingStream(0);
  // usersFavsJoinStream(0);
  // favoritesStream(0);
  relatedListingsStream(0);
}
seeder();

