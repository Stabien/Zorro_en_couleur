const sql = require('mssql');

// mssql configuration
const config = {
  user: 'nodejs',
  password: 'nodejs',
  server: 'localhost',
  database: 'Zorro_en_couleur',
  options: {
    "enableArithAbort": true,
  }
};

exports.getAllCloths = (req, res) => {
  // database connection
  sql.connect(config, (err) => {
    if (err)
      res.send(err);
    else {
      const request = new sql.Request();
      // Execute request
      request.query("SELECT id, name, nickname, photo, material, category_id as categoryId FROM cloth ORDER BY categoryId",
      (error, response) => {
        if (error)
          res.send(error)
        else
          res.send(response);
      });
    }
  });
}

exports.getAllProducts = (req, res) => {
  // Database connection
  sql.connect(config, (err) => {
    if (err)
      res.send(err);
    else {
      const request = new sql.Request();
      // Execute request
      request.query("SELECT * FROM product ORDER BY name",
      (error, response) => {
        if (error)
          res.send(error)
        else
          res.send(response);
      });
    }
  });
}

exports.getAllCategories = (req, res) => {
  // database connection
  sql.connect(config, (err) => {
    if (err)
      res.send(err);
    else {
      const request = new sql.Request();
      // Execute request
      request.query("SELECT id, product_id as productId FROM category",
      (error, response) => {
        if (error)
          res.send(error)
        else
          res.send(response);
      });
    }
  });
}

exports.getClothsByProducts = (req, res) => {
  // Database connection
  sql.connect(config, (err) => {
    if (err)
      res.send(err);
    else {
      const request = new sql.Request();
      let productsId = "";

      for (let i = 0; i < req.body.length; i++) {
        if (i > 0)
          productsId += ', ';
        productsId += req.body[i].toString();
      }
      // Execute request
      request.query("SELECT cloth.id, cloth.name, cloth.nickname, cloth.photo, cloth.material, cloth.category_id as categoryId FROM cloth INNER JOIN category ON cloth.category_id = category.id WHERE category.product_id IN (" + productsId + ") GROUP BY cloth.id, cloth.name, cloth.nickname, cloth.photo, cloth.material, cloth.category_id",
      (error, response) => {
        if (error)
          res.send(error);
        else
          res.send(response);
      });
    }
  });
}

exports.getProductsNameByCategory = (req, res) => {
  // Database connection
  sql.connect(config, (err) => {
    if (err)
      res.send(err);
    else {
      const request = new sql.Request();
      // Execute request
      request.query("SELECT category.id, product.name FROM product INNER JOIN category ON product.id = category.product_id ORDER BY category.id, product.name",
      (error, response) => {
        if (error)
          res.send(error)
        else
          res.send(response);
      });
    }
  });
}
