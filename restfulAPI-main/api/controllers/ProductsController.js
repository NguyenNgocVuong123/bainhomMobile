"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("../db");

module.exports = {
  get: (req, res) => {
    let sql = "SELECT * FROM products";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  detail: (req, res) => {
    let sql = "SELECT * FROM `products` ORDER BY `products`.`like` DESC;";
    db.query(sql, [req.params.productId], (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  detail1: (req, res) => {
    let sql = "SELECT * FROM `products` WHERE ID = ?";
    db.query(sql, [req.params.productId], (err, response) => {
      if (err) throw err;
      res.json(response[0]);
    });
  },
  update: (req, res) => {
    let data = req.body;
    let productId = req.params.productId;
    let sql = 'UPDATE products SET  ? WHERE id = ?'
    db.query(sql, [data, productId], (err, response) => {
        if (err) throw err
        res.json({message: 'Update success!'})
    })
},
search: (req, res) => {
  let sql = "SELECT * FROM products WHERE ingredient LIKE ?";
  db.query(sql, ["%" + req.params.productSearch + "%"], (err, response) => {
    if (err) throw err;
    res.json(response);
  });
},
searchname: (req, res) => {
  let sql = "SELECT * FROM products WHERE name LIKE ?";
  db.query(sql, ["%" + req.params.productSearch + "%"], (err, response) => {
    if (err) throw err;
    res.json(response);
  });
},
  store: (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO products SET ?";
    db.query(sql, [data], (err, response) => {
      if (err) throw err;
      res.json({ message: "Insert success!" });
    });
  },
  delete: (req, res) => {
    let sql = "DELETE FROM products WHERE id = ?";
    db.query(sql, [req.params.productId], (err, response) => {
      if (err) throw err;
      res.json({ message: "Delete success!" });
    });
  },
};
