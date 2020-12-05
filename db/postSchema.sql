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

-- Copy csv's into DB after generating them

-- to import schema to DB run : psql postgres < db/postSchema.sql