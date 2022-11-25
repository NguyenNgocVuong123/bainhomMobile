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
  app.route("/products/searchname/:productSearchname").get(productsCtrl.searchname);
  app.route("/products/searchnameKV/:productKV").get(productsCtrl.searchnameKV);
  app.route("/products/searchCate/:productCate").get(productsCtrl.searchCate);
  app
    .route("/products/:productId")
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);
app.route("/products/searchID/:productId").get(productsCtrl.detail1);
    let favCtrl = require("./controllers/favController");

  // todoList Routes
  app.route("/fav").get(favCtrl.get).post(favCtrl.store);

  app
    .route("/fav/:favID")
    .get(favCtrl.detail)
    .put(favCtrl.update)
    
  app
    .route("/favDL/:favID/:proID")
    .delete(favCtrl.delete);
};
