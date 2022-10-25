// "use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("../db");

module.exports = {
  get: (req, res) => {
    let sql = "SELECT * FROM login";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  detail: (req, res) => {
    let sql = "SELECT * FROM login WHERE taikhoan = ?";
    db.query(sql, [req.params.logintaikhoan], (err, response) => {
      if (err) throw err;
      res.json(response[0]);
    });
  },
  update: (req, res) => {
    let data = req.body;
    let logintaikhoan = req.params.logintaikhoan;
    let sql = "UPDATE login SET ? WHERE taikhoan = ?";
    db.query(sql, [data, logintaikhoan], (err, response) => {
      if (err) throw err;
      res.json({ message: "Update success!" });
    });
  },
  store: (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO login SET ?";
    db.query(sql, [data], (err, response) => {
      if (err) throw err;
      res.json({ message: "Insert success!" });
    });
  },
  delete: (req, res) => {
    let sql = "DELETE FROM login WHERE taikhoan = ?";
    db.query(sql, [req.params.logintaikhoan], (err, response) => {
      if (err) throw err;
      res.json({ message: "Delete success!" });
    });
  },
};
// 'use strict'


// module.exports = {
//     get: (req, res) => {
//         let sql = 'SELECT * FROM products'
//         db.query(sql, (err, response) => {
//             if (err) throw err
//             res.json(response)
//         })
//     },
//     detail: (req, res) => {
//         let sql = 'SELECT * FROM products WHERE id = ?'
//         db.query(sql, [req.params.productId], (err, response) => {
//             if (err) throw err
//             res.json(response[0])
//         })
//     },
//     update: (req, res) => {
//         let data = req.body;
//         let productId = req.params.productId;
//         let sql = 'UPDATE products SET ? WHERE id = ?'
//         db.query(sql, [data, productId], (err, response) => {
//             if (err) throw err
//             res.json({message: 'Update success!'})
//         })
//     },
//     store: (req, res) => {
//         let data = req.body;
//         let sql = 'INSERT INTO products SET ?'
//         db.query(sql, [data], (err, response) => {
//             if (err) throw err
//             res.json({message: 'Insert success!'})
//         })
//     },
//     delete: (req, res) => {
//         let sql = 'DELETE FROM products WHERE id = ?'
//         db.query(sql, [req.params.productId], (err, response) => {
//             if (err) throw err
//             res.json({message: 'Delete success!'})
//         })
//     }
// }

