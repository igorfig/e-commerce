const { Client } = require('pg');

const client = new Client({
  host: '192.168.15.12',
  port: '5432',
  user: 'root',
  password: 'root',
  database: 'ecommerce'
})

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);

  return rows;
}