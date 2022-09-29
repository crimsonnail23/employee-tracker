//make a class with methods that make SQL queries. 

//make one class called DB Queries, and inside the class have different functions to query the database.
// one example: findAll departments. 
//export to index.js
const db = require('./connection')

class DB_Queries{

    findDepartments(){
       const sql=  `SELECT name
                    FROM department`;
        db.query(sql);
    }
}

module.exports = DB_Queries;