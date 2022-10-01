//make one class called DB Queries, and inside the class have different functions to query the database.
// one example: findAll departments. 
//export to index.js
const db = require('./connection')

class DB_Queries{
    //method to view all departments.
    findDepartments(callback){
       const sql=  `SELECT *
                    FROM department`;
        db.query(sql,callback);
    };
    //method to view all roles.
    findRoles(callback){
        const sql = `SELECT *
                    FROM role`
        db.query(sql, callback);            
    };
    //method to view all employees.
    findEmployees(callback){
        const sql=`SELECT * FROM EMPLOYEE`
        db.query(sql,callback);
    }
    //method to add a new department.
    addDepartment(newDepartment){
        console.log(newDepartment+ ' is the new department');
        const sql = `INSERT INTO department (name) VALUES (?)`
        db.query(sql, newDepartment);
    }
    //method to add a new role.
    addRole(newRoleData){
        //console.log('controller js ln 30 ',newRoleData)

        //following line destructures incoming data.
        const{add_role_title,add_role_salary,add_department_id}=newRoleData
        //console.log(add_role_title,add_role_salary,add_department_id)

        //following line puts destructured data into an array to then pass through the second argument of db.quiery().
        const destructuredNewRoleData =[add_role_title,add_role_salary,add_department_id]
        const sql = `INSERT INTO role (title, salary, department_id) VALUES(?,?,?)`
        db.query(sql,destructuredNewRoleData);
    }
    addEmployee(newEmployeeData){
        //destructures incoming data.
        const{employee_first_name,employee_last_name,employee_role,employee_manager}=newEmployeeData
        //puts destructured data into an array that will then pass through as the second argument of the db.quer().
        const newEmployeeDataArray =[employee_first_name,employee_last_name,employee_role,employee_manager]

        const sql = `INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?)`
        db.query(sql, newEmployeeDataArray);
    }
    updateEmployeeRole(updatedInfo){
        //console.log(updatedInfo)

        //destructures incoming data.
        const{employee, new_role}=updatedInfo
        //puts destructured data into an array that will be passed as the second argument in db.query();
        const updatedInfoArray=[new_role,employee]
        
        const sql = `UPDATE employee SET role_id=? WHERE id =?`
        db.query(sql,updatedInfoArray);
    }
}

module.exports = DB_Queries;