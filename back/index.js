const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes.js');
const express = require('express');
const app = express();
const sql = require('mssql');

const PORT = 4000;

// Set up bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting headers to allow CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

routes(app);

app.listen(PORT, () => {
  console.log('Application running !');
});
