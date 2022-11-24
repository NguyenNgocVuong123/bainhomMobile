"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("../db");

module.exports = {
  get: (req, res) => {
    let sql = "SELECT * FROM favuser";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  detail: (req, res) => {
    let sql = "SELECT products.* FROM `favuser`,`products` WHERE favuser.idproducts=products.ID AND favuser.iduser= ?";
    db.query(sql, [req.params.favID], (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  update: (req, res) => {
    let data = req.body;
    let favID = req.params.favID;
    let sql = "UPDATE favuser SET ? WHERE iduser = ?";
    db.query(sql, [data, favID], (err, response) => {
      if (err) throw err;
      res.json({message: "Update success!"});
    });
  },
  store: (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO favuser SET ?";
    db.query(sql, [data], (err, response) => {
      if (err) throw err;
      res.json({ message: "Insert success!" });
    });
  },
  delete: (req, res) => {
    let sql = "DELETE FROM favuser WHERE iduser = ? and idproducts = ?";
    db.query(sql, [req.params.favID,req.params.proID], (err, response) => {
      if (err) throw err;
      res.json({ message: "Delete success!" });
    });
  },
};
let getUsers = async (req, res) => {
  //http
  // 404 501
  // json/xml => object
  let { Name, Email, Phone, password } = req.body;

  if (!firstName || !lastName || !email || !address) {
      return res.status(200).json({
          message: 'missing required params'
      })
  }
  const [rows, fields] = await pool.execute('SELECT * FROM users WHERE email like %?%', email);

  return res.status(200).json({
      message: 'ok',
      data: rows
  })
}