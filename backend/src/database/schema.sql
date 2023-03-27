CREATE DATABASE ecommerce;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS products(
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  product VARCHAR,
  specs jsonb,
  amount INTEGER,
  price FLOAT,
  icon_reference VARCHAR,
  product_category VARCHAR,
  liked BOOLEAN
);

CREATE TABLE IF NOT EXISTS users(
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS favorites(
  user_id INTEGER NOT NULL REFERENCES users(id),
  product JSONB NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  user_id INTEGER NOT NULL REFERENCES users(id),
  order_details JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);