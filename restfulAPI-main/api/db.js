// "use strict";
// const mysql = require("mysql");

// const db = mysql.createConnection({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "root",
//   password: process.env.DB_PASS || "",
//   database: process.env.DB_NAME || "nodejs_api",
// });

// module.exports = db;

"use strict";
const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST || "37.59.55.185",
  user: process.env.DB_USER || "DfZEg1rEf0",
  password: process.env.DB_PASS || "NbpjVjjxPy",
  database: process.env.DB_NAME || "DfZEg1rEf0",
  port: 3306

});

module.exports = db;
