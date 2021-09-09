const controllers = require('./controllers');

module.exports = (app) => {
  app.route('/api/cloth')
    .get(controllers.getAllCloths);
  app.route('/api/product')
    .get(controllers.getAllProducts);
  app.route('/api/category')
    .get(controllers.getAllCategories);
  app.route('/api/clothByProduct')
    .post(controllers.getClothsByProducts);
  app.route('/api/productsNameByCategory/')
    .get(controllers.getProductsNameByCategory);
}
