CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name varchar(255) NOT NULL
);

CREATE UNIQUE INDEX index on categories(name);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  price FLOAT NOT NULL,
  inventory_count INTEGER NOT NULL,
  image_url varchar(255) NOT NULL,
  category_id INTEGER REFERENCES categories(id)
);