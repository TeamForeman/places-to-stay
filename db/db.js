const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/beartnt', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

module.exports = mongoose.connection;

const listingSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  relatedListings: Array
});

const userSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  favorites: Array
});

const Listing = mongoose.model('Listing', listingSchema);
const User = mongoose.model('User', userSchema);

