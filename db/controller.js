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
    addRole(newRoleData){
        console.log('controller js ln 30 ',newRoleData)
        const{add_role_title,add_role_salary,add_department_id}=newRoleData
        console.log(add_role_title,add_role_salary,add_department_id)
        const destructuredNewRoleData =[add_role_title,add_role_salary,add_department_id]
        const sql = `INSERT INTO role (title, salary, department_id) VALUES(?,?,?)`
        db.query(sql,destructuredNewRoleData);
    }
}

module.exports = DB_Queries;