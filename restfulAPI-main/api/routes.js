// "use strict";
// module.exports = function (app) {
//   let productsCtrl = require("./controllers/ProductsController");

//   // todoList Routes
//   app.route("/login").get(productsCtrl.get).post(productsCtrl.store);

//   app
//     .route("/login/:logintaikhoan")
//     .get(productsCtrl.detail)
//     .put(productsCtrl.update)
//     .delete(productsCtrl.delete);
// };
// 'use strict';
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
"use strict";
module.exports = function (app) {
  let userCtrl = require("./controllers/UserController");

  // todoList Routes
  app.route("/user").get(userCtrl.get).post(userCtrl.store);

  app
    .route("/user/:userId")
    .get(userCtrl.detail)
    .put(userCtrl.update)
    .delete(userCtrl.delete);

    let productsCtrl = require("./controllers/ProductsController");

  // todoList Routes
  app.route("/products").get(productsCtrl.get).post(productsCtrl.store);
  app.route("/products/search/:productSearch").get(productsCtrl.search);
  app.route("/products/searchname/:productSearch").get(productsCtrl.searchname);
  app
    .route("/products/:productId")
    .get(productsCtrl.detail)
    .lock(productsCtrl.detail1)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);

    let favCtrl = require("./controllers/favController");

  // todoList Routes
  app.route("/fav").get(favCtrl.get).post(favCtrl.store);

  app
    .route("/fav/:favID")
    .get(favCtrl.detail)

    .put(favCtrl.update)
    .delete(favCtrl.delete);
};
