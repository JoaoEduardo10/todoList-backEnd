const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSLQ_PASSWORD,
  database: process.env.MYSLQ_DATABASE,
});

module.exports = connection;
