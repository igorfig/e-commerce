CREATE DATABASE ecommerce;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS products(
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  product VARCHAR,
  specs jsonb,
  amount INTEGER,
  price FLOAT,
  icon_reference VARCHAR,
  product_category VARCHAR
);