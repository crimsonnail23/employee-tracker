//make a class with methods that make SQL queries. 

//make one class called DB Queries, and inside the class have different functions to query the database.
// one example: findAll departments. 
//export to index.js
const db = require('./connection')

class DB_Queries{

    findDepartments(callback){
       const sql=  `SELECT *
                    FROM department`;
        db.query(sql,callback);
    };
    findRoles(callback){
        const sql = `SELECT *
                    FROM role`
        db.query(sql, callback);            
    };
    findEmployees(callback){
        const sql=`SELECT * FROM EMPLOYEE`
        db.query(sql,callback);
    }
    addDepartment(newDepartment){
        console.log(newDepartment+ ' is the new department');
        const sql = `INSERT INTO department (name) VALUES (?)`
        db.query(sql, newDepartment);
    }
}

module.exports = DB_Queries;