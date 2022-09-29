const mysql = require('mysql2');

//connect to mySQL database.
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employee_db'
    }
);

module.exports = db;

