DROP KEYSPACE IF EXISTS beartnt;

CREATE KEYSPACE beartnt
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}
AND durable_writes = 'true';

USE beartnt;

CREATE TABLE related_listings(
  id INT,
  first_related INT,
  second_related INT,
  third_related INT,
  fourth_related INT,
  fifth_related INT,
  sixth_related INT,
  seventh_related INT,
  eighth_related INT,
  ninth_related INT,
  tenth_related INT,
  eleventh_related INT,
  twelth_related INT,
  PRIMARY KEY (id)
);

COPY related_listings(id, first_related, second_related, third_related, fourth_related, fifth_related, sixth_related, seventh_related, eighth_related, ninth_related, tenth_related, eleventh_related, twelth_related)
FROM '/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/SDC/places-to-stay/data/relatedListings.csv'
DELIMITER=','
AND HEADER=FALSE;

CREATE TABLE listings (
  id INT,
  related_listing_ids INT,
  type VARCHAR(40),
  num_of_beds SMALLINT,
  photo_url VARCHAR(80),
  superhost BOOLEAN,
  rating float(2),
  num_of_ratings INT,
  description VARCHAR(120),
  price float(2),
  PRIMARY KEY (id)
);

COPY listings(id, related_listing_ids, type, num_of_beds, photo_url, superhost, rating, num_of_ratings, description, price)
FROM '/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/SDC/places-to-stay/data/listings.csv'
DELIMITER=','
AND HEADER=FALSE;

CREATE TABLE users (
  id INT,
  PRIMARY KEY (id)
);

COPY listings(id)
FROM '/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/SDC/places-to-stay/data/users.csv'
DELIMITER=','
AND HEADER=FALSE;

CREATE TABLE favorites (
  id INT,
  name VARCHAR(40),
  listing_id INT,
  PRIMARY KEY (id)
);

COPY favorites(id, name, listing_id)
FROM '/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/SDC/places-to-stay/data/favorites.csv'
DELIMITER=','
AND HEADER=FALSE;

CREATE TABLE users_favs_join (
  users_favs_join INT,
  user_id INT,
  favorites_id INT,
  PRIMARY KEY (users_favs_join)
);

COPY users_favs_join(users_favs_join, user_id, favorites_id)
FROM '/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/SDC/places-to-stay/data/usersFavs.csv'
DELIMITER=','
AND HEADER=FALSE;

-- Copy csv's into DB after generating them

-- to import schema to DB run : psql postgres < db/postSchema.sql