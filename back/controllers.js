const { Pool } = require('pg');
const dotenv = require('dotenv').config();
const { randomUUID } = require('crypto');

const database = new Pool({
  user: 'postgres',
  password: process.env.PG_PASSWORD,
  database: 'zorro_en_couleur',
  host: 'localhost',
  port: 5432
});

exports.getAllCloths = (req, res) => {
  const request = "SELECT * FROM cloths";

  database.query(request)
    .then(response => res.json(response.rows))
    .catch(error => res.send(error));

}

exports.getAllProducts = (req, res) => {
  const request = "SELECT * FROM products ORDER BY name";

  database.query(request)
    .then(response => res.json(response.rows))
    .catch(error => res.send(error));
}