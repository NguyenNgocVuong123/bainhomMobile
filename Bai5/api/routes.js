"use strict";
module.exports = function (app) {
  let productsCtrl = require("./controllers/ProductsController");

  // todoList Routes
  app.route("/login").get(productsCtrl.get).post(productsCtrl.store);

  app
    .route("/login/:logintaikhoan")
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);
};
'use strict';
// module.exports = function(app) {
//   let productsCtrl = require('./controllers/ProductsController');

//   // todoList Routes
//   app.route('/products')
//     .get(productsCtrl.get)
//     .post(productsCtrl.store);

//   app.route('/products/:productId')
//     .get(productsCtrl.detail)
//     .put(productsCtrl.update)
//     .delete(productsCtrl.delete);
// };
