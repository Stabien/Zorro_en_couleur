const controllers = require('./controllers');
const dotenv = require('dotenv').config();

module.exports = (app) => {
  app.route('/api/cloth')
    .get(controllers.getAllCloths);
  app.route('/api/product')
    .get(controllers.getAllProducts);
}
