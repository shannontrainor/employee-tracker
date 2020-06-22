// require mysql, util, dotenv
const mysql = require("mysql");
const util = require("util");
require("dotenv").config();

//create connection from .env
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
});

connection.connect((err) => {
    if (err) {
        throw err;
    }

    console.log("Connection to DB successful");
});

connection.query = util.promisify(connection.query);

module.exports = connection;