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
FROM '/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/SDC/places-to-stay/data/relatedListingsCass.csv'
WITH DELIMITER=','
AND HEADER=FALSE;

CREATE TABLE listings(
  id INT PRIMARY KEY,
  related_listing_ids INT,
  type TEXT,
  num_of_beds INT,
  photo_url TEXT,
  superhost BOOLEAN,
  rating FLOAT,
  num_of_ratings INT,
  description TEXT,
  price FLOAT
);

-- 0, 3, Entire apartment, 9, https://sdc-bucket-wetterauer.s3.us-east-2.amazonaws.com/images/341.jpg, false, 4.79, 178, Unde distinctio qui., 932.79

COPY listings(id, related_listing_ids, type, num_of_beds, photo_url, superhost, rating, num_of_ratings, description, price)
FROM '/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/SDC/places-to-stay/data/listingsCass.csv'
WITH DELIMITER=','
AND HEADER=FALSE;

CREATE TABLE users (
  id INT PRIMARY KEY
);

COPY listings(id)
FROM '/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/SDC/places-to-stay/data/usersCass.csv'
WITH DELIMITER=','
AND HEADER=FALSE;

CREATE TABLE favorites (
  id INT PRIMARY KEY,
  name TEXT,
  listing_id INT
);

COPY favorites(id, name, listing_id)
FROM '/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/SDC/places-to-stay/data/favoritesCass.csv'
WITH DELIMITER=','
AND HEADER=FALSE;

CREATE TABLE users_favs_join (
  users_favs_join INT PRIMARY KEY,
  user_id INT,
  favorites_id INT
);

COPY users_favs_join(users_favs_join, user_id, favorites_id)
FROM '/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/SDC/places-to-stay/data/usersFavsCass.csv'
WITH DELIMITER=','
AND HEADER=FALSE;


----------------- to start cassandra ------------
-- export JAVA_HOME=`/usr/libexec/java_home -v 1.8.0_275`
-- cassandra -f
-- to open a cassandra instance: (in a new terminal) cqlsh
-- to import schema to DB and seed: (from the cqlsh instance) source '/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/SDC/places-to-stay/db/cassSchema.cql'

-------------------- Query Tests ------------------

-- to list databases: DESCRIBE keyspaces;
-- to use database: use databaseName;

-- GET one listing: '/api/more/listings/:id'
-- TRACING ON
-- SELECT * FROM listings WHERE id=9999900;
-- TRACING OFF;
-- Planning Time:
-- Execution Time:

-- GET related_listings WHERE id = 9999900
-- TRACING ON
-- SELECT * FROM related_listings WHERE id = 9958990;
-- TRACING OFF;
-- Planning Time:
-- Execution Time:

-- GET user's favorites
-- TRACING ON
-- SELECT * FROM favorites, users, users_favs_join WHERE favorites.id = users_favs_join.favorites_id AND users_favs_join.user_id = users.id AND users.id = 10;
-- TRACING OFF
-- SELECT * FROM [favorites, users, users_favs_join] WHERE favorites.id = users_favs_join.favorites_id AND users_favs_join.user_id = users.id AND users.id = 10;
-- SELECT * FROM users where id IN (Select * FROM favorites where )

-- SELECT * FROM favorites WHERE favorites_id IN (SELECT * FROM users_favs_join WHERE user_id = 102)
-- Planning Time:
-- Execution Time: