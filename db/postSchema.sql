DROP DATABASE IF EXISTS beartnt;

CREATE DATABASE beartnt;

\c beartnt;

CREATE TABLE IF NOT EXISTS listings (
  id SERIAL PRIMARY KEY,
  related_listing_ids INT[],
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
FROM '/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/SDC/places-to-stay/data/listingsArray.csv'
DELIMITER '|';

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
  listing_id INT NOT NULL,
  photo_url VARCHAR(80)
);

COPY favorites(name, listing_id, photo_url)
FROM '/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/SDC/places-to-stay/data/favorites.csv'
DELIMITER ',';

CREATE TABLE IF NOT EXISTS users_favs_join (
  users_favs_join SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  favorites_id INT NOT NULL
);

COPY users_favs_join(user_id, favorites_id)
FROM '/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/SDC/places-to-stay/data/usersFavs.csv'
DELIMITER ',';

-- Create indexes:
-- CREATE INDEX ON favorites (listing_id);
-- CREATE INDEX ON users_favs_join (user_id);
-- CREATE INDEX ON users_favs_join (favorites_id);

-- Create Foreign Keys Example Syntax:
-- ALTER TABLE child_table
-- ADD CONSTRAINT constraint_name
-- FOREIGN KEY (fk_columns)
-- REFERENCES parent_table (parent_key_columns);

-- ALTER TABLE favorites
-- ADD CONSTRAINT fk_listing_id
-- FOREIGN KEY (listing_id)
-- REFERENCES listings (id);

-- ALTER TABLE users_favs_join
-- ADD CONSTRAINT fk_user_id
-- FOREIGN KEY (user_id)
-- REFERENCES users (id);

-- ALTER TABLE users_favs_join
-- ADD CONSTRAINT fk_favorites_id
-- FOREIGN KEY (favorites_id)
-- REFERENCES favorites (id);

-- psql postgres < db/postSchemaNoJoins.sql

-- GET one listing: '/api/more/listings/:id'
-- EXPLAIN (ANALYZE) SELECT * FROM listings WHERE(id=9989900);
-- Planning Time: 1.997 ms
-- Execution Time: 0.106 ms

-- GET related_listings WHERE id = 9999990
-- EXPLAIN (ANALYZE) SELECT * FROM related_listings WHERE id = 9988990;
-- Planning Time: 8.112 ms
-- Execution Time: 0.032 ms

-- GET user's favorites
-- EXPLAIN (ANALYZE) SELECT * FROM favorites, users, users_favs_join WHERE favorites.id = users_favs_join.favorites_id AND users_favs_join.user_id = users.id AND users.id = 98000090;
-- SELECT * FROM favorites, users, users_favs_join WHERE favorites.id = users_favs_join.favorites_id AND users_favs_join.user_id = users.id AND users.id = 10;
-- Planning Time: 15.642 ms
-- Execution Time: 0.052 ms


-- POST favorites
-- EXPLAIN (ANALYZA) INSERT INTO favorites (name, listing_id, photo_url)
-- VALUES (`${name}, ${listing_id}, ${photo_url});

-- POST users_favs_join
-- EXPLAIN (ANALYZE) INSERT INTO users_favs_join (user_id, favorites_id)
-- VALUES (`${user_id}, ${favorites_id});


-- INSERT INTO "favorites" (name, listing_id, photo_url) VALUES ('Beach', 1, 'https://sdc-bucket-wetterauer.s3.us-east-2.amazonaws.com/images/1.jpg') RETURNING id;

-- INSERT INTO "users_favs_join" (user_id, favorites_id) VALUES (2, 100002);