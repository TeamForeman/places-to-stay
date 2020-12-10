const postDBDetails = require('./postDBDetails.js');
const Pool = require('pg').Pool
const pool = new Pool(postDBDetails);

const getRelatedListings = (id, callback) => {
  pool.query(`SELECT related_listing_ids FROM listings WHERE id = ${id}`, (error, results) => {
    if (error) {
      return callback(error, null);
    }
    let listings = [];
    for (let listing in results.rows[0]) {
      if (listing !== 'id') {
        listings.push(results.rows[0][listing]);
      }
    }
    console.log('listings: ', listings);
    pool.query(`SELECT * FROM listings WHERE id IN (${listings})`, (error, results) => {
      if (error) {
        console.log(error);
        return callback(error, null);
      }
      pool.query(`SELECT * FROM listings WHERE id = ${id}`, (error, listing) => {
        if (error) {
          console.log(error);
          return callback(error, null);
        }
        callback(null, [listing.rows[0], results.rows])
      })
    });
  });
};

const getUserFavorites = (id, callback) => {
  console.log('user: ', id);
  pool.query(`SELECT * FROM favorites, users, users_favs_join WHERE favorites.id = users_favs_join.favorites_id AND users_favs_join.user_id = users.id AND users.id = ${id}`, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results.rows);
  })
};

const addNewFavorite = (favorite, callback) => {
  console.log('favorite: ', favorite)
  pool.query(`INSERT INTO "favorites" (name, listing_id, photo_url) VALUES ('${favorite.name}', ${favorite.listing_id}, '${favorite.photo_url}') RETURNING id`, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    console.log('returned results: ', results)
    let favorites_id = results.rows[0].id;
    pool.query(`INSERT INTO "users_favs_join" (user_id, favorites_id) VALUES (${favorite.user_id}, ${favorites_id})`, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      console.log('add results: ', results);
      callback(null, results)
    })
  });
};

const updateBeds = (listing_id, beds, callback) => {
  console.log('listing_id: ', listing_id);
  console.log('num of beds', beds);
  pool.query(`UPDATE "listings" SET num_of_beds = ${beds.num_of_beds} WHERE id = ${listing_id}`, (err, results) => {
    if (err) {
      return callback(err, null);
    } else {
      console.log('put results: ', results);
      callback(null, results);
    }
  });
};

const deleteFavorite = (favorite_id, callback) => {
  pool.query(`DELETE FROM "users_favs_join" WHERE favorites_id = ${favorite_id}`, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    pool.query(`DELETE FROM "favorites" WHERE id = ${favorite_id}`, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  });
};

module.exports = {getRelatedListings, getUserFavorites, addNewFavorite, updateBeds, deleteFavorite};