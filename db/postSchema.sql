DROP DATABASE IF EXISTS beartnt;

CREATE DATABASE beartnt;

\c beartnt;

CREATE TABLE IF NOT EXISTS related_listings(
  id SERIAL PRIMARY KEY,
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
  twelth_related INT
);

COPY related_listings(first_related, second_related, third_related, fourth_related, fifth_related, sixth_related, seventh_related, eighth_related, ninth_related, tenth_related, eleventh_related, twelth_related)
FROM '/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/SDC/places-to-stay/data/relatedListings.csv'
DELIMITER ',';

CREATE TABLE IF NOT EXISTS listings (
  id SERIAL PRIMARY KEY,
  related_listing_ids INT REFERENCES related_listings(id),
  type VARCHAR(40),
  num_of_beds SMALLINT,
  photo_url VARCHAR(80),
  superhost BOOLEAN,
  rating float(2),
  num_of_ratings INT,
  description VARCHAR(120),
  price float(2)
);

COPY listings(related_listing_ids, type, num_of_beds, photo_url, superhost, rating, num_of_ratings, description, price)
FROM '/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/SDC/places-to-stay/data/listings.csv'
DELIMITER ',';

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY
);

do $$
begin
for r in 1..10000000 loop
INSERT INTO users(id) values(default);
end loop;
end;
$$;

CREATE TABLE IF NOT EXISTS favorites (
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  listing_id INT NOT NULL REFERENCES listings(id)
);

COPY favorites(name, listing_id)
FROM '/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/SDC/places-to-stay/data/favorites.csv'
DELIMITER ',';

CREATE TABLE IF NOT EXISTS users_favs_join (
  users_favs_join SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  favorites_id INT NOT NULL REFERENCES favorites(id)
);

COPY users_favs_join(user_id, favorites_id)
FROM '/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/SDC/places-to-stay/data/usersFavs.csv'
DELIMITER ',';

-- to import schema to DB and seed: psql postgres < db/postSchema.sql

-------------- Potential Solutions to long seed time ------------------
-- https://www.postgresql.org/docs/8.1/populate.html

-- Remove Indexes:
--If you are loading a freshly created table, the fastest way is to create the table, bulk load the table's data using COPY,
--then create any indexes needed for the table. Creating an index on pre-existing data is quicker than updating it incrementally as each row is loaded.

-- Remove Foreign Key Constraints:
-- Just as with indexes, a foreign key constraint can be checked "in bulk" more efficiently than row-by-row. So it may be useful to drop foreign key constraints, load data, and re-create the constraints. -- -- Again, there is a trade-off between data load speed and loss of error checking while the constraint is missing.


-- Create foreign keys (if you seed without them):
-- ALTER TABLE listings
--   ADD FOREIGN KEY (related_listing_ids);

-- Create indexes:
-- CREATE INDEX ON listings (related_listing_ids);
-- CREATE INDEX ON favorites (listing_id);
-- CREATE INDEX ON users_favs_join (user_id);
-- CREATE INDEX ON users_favs_join (favorites_id);


-------------------- Query Tests ------------------

-- to open postgres in terminal: psql postgres
-- to list databases: \l
-- to use database: \c databaseName

-- Before Adding Indexes on foreign keys:

-- GET one listing: '/api/more/listings/:id'
-- EXPLAIN (ANALYZE) SELECT * FROM listings WHERE(id=9999900);
-- Planning Time: 0.070ms
-- Execution Time: 8.510ms

-- GET related_listings WHERE id = 9999900
-- EXPLAIN (ANALYZE) SELECT * FROM related_listings WHERE id = 9958990;
-- Planning Time: 0.074ms
-- Execution Time: 14.991ms

-- GET user's favorites
-- EXPLAIN (ANALYZE) SELECT * FROM favorites, users, users_favs_join WHERE favorites.id = users_favs_join.favorites_id AND users_favs_join.user_id = users.id AND users.id = 10;
-- SELECT * FROM favorites, users, users_favs_join WHERE favorites.id = users_favs_join.favorites_id AND users_favs_join.user_id = users.id AND users.id = 10;
-- Planning Time: 0.460ms
-- Execution Time: 8056.750ms


-- After Adding Indexes on foreign keys:

-- GET one listing: '/api/more/listings/:id'
-- EXPLAIN (ANALYZE) SELECT * FROM listings WHERE(id=9989900);
-- Planning Time: 1.997 ms
-- Execution Time: 0.106 ms

-- GET related_listings WHERE id = 9999900
-- EXPLAIN (ANALYZE) SELECT * FROM related_listings WHERE id = 9988990;
-- Planning Time: 8.112 ms
-- Execution Time: 0.032 ms

-- GET user's favorites
-- EXPLAIN (ANALYZE) SELECT * FROM favorites, users, users_favs_join WHERE favorites.id = users_favs_join.favorites_id AND users_favs_join.user_id = users.id AND users.id = 98000090;
-- SELECT * FROM favorites, users, users_favs_join WHERE favorites.id = users_favs_join.favorites_id AND users_favs_join.user_id = users.id AND users.id = 10;
-- Planning Time: 15.642 ms
-- Execution Time: 0.052 ms