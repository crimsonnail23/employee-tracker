// this will be the application. wher i'm going to use Inquirer. 
//import controller class

const inquirer = require('inquirer');
const DB_Queries = require('./db/controller')

//following questions will be used as a sort of 'main menu', it's also the questions that will first be asked of the user.

const mainMenuArray =[
    {
        type: 'list',
        name: 'main_menu',
        message: 'What would you like to do?',
        choices: ['view all departments','view all roles', 'view all employees','add a department', 'add a role', 'add an employee', 'update an employee role']

    }
]

//following array will have questions to be asked when use chooses 'add a department' from the mainMenu();
const addDepartmentArray=[
    {
        type: 'input',
        name: 'add_department',
        message: 'what Department would you like to add?'
    }
]

//following array will have questions to be asked when use chooses 'add a role' from the mainMenu();
const addRoleArray=[
    {
        type:'input',
        name:'add_role_title',
        message: 'what is the title of the role?'
    },
    {
        type: 'input',
        name: 'add_role_salary',
        message: 'what is the salary of the new role'
    },
    {
        type: 'list',
        name: 'add_department_id',
        message: 'which department does this role belong to? pick the department by their id',
        choices: [1,2,3]
    }
]

//following array will have questions to be asked when use chooses 'add an employee' from the mainMenu();
const addEmployeeArray =[
    {
        type: 'input',
        name: 'employee_first_name',
        message: 'what is the first name of the new employee'
    },
    {
        type: 'input',
        name: 'employee_last_name',
        message: 'what is their last name?'
    },
    {
        type: 'list',
        name:'employee_role',
        message: 'what is their role? pick the role by the id',
        choices: [1,2,3]
    },
    {
        type: 'list',
        name: 'employee_manager',
        message: 'who is their manager? pick by employee id of the manager',
        choices: [1,2,3]
    }
]

//following array will have questions to be asked when use chooses 'update an employee role' from the mainMenu();
const updateEmployeeRoleArray = [
    {
        type: 'list',
        name: 'employee',
        message: 'which employee is being updated? pick by their employee id',
        choices: [1,2,3,4]
    },
    {
        type: 'list',
        name: 'new_role',
        message: 'what is the new role of the employee? pick by the id of the role',
        choices: [1,2,3]
    }
]


const db = new DB_Queries()

//following code will be run when the user chooses to add a department.
const addDepartment=()=>{
    return inquirer.prompt(addDepartmentArray)
        .then((answers)=>{
            db.addDepartment(answers.add_department);
            console.log(`${answers.add_department} was added`);
            mainMenu();
        });
        
}

const addRole=()=>{
    return inquirer.prompt(addRoleArray)
        .then((answers)=>{
            //console.log(answers);
            db.addRole(answers);
            console.log(`${answers.add_role_title} was added.`)
            mainMenu();
        });
}

const addEmployee=()=>{
    return inquirer.prompt(addEmployeeArray)
        .then((answers)=>{
            //console.log(answers);
            db.addEmployee(answers);
            console.log(`${answers.employee_first_name} ${answers.employee_last_name} was added`)
            mainMenu();
        })
}

const updateEmployeeRole=()=>{
    return inquirer.prompt(updateEmployeeRoleArray)
        .then((answers)=>{
            //console.log(answers)
            db.updateEmployeeRole(answers)
            console.log('employee was updated');
            mainMenu();
        })
}

//following code will be run when index.js is run in the terminal.
const mainMenu=()=>{
    return inquirer.prompt(mainMenuArray)
        .then(userChoice =>{
            switch(userChoice.main_menu) {
                case 'view all departments':
                    db.findDepartments((err,data)=>{
                        console.table(data);
                        mainMenu();
                    });
                    
                    break
                case 'view all roles':
                    db.findRoles((err,data)=>{
                        console.table(data);
                        mainMenu();
                    });
                    break;
                case 'view all employees':
                    db.findEmployees((err, data)=>{
                        console.table(data);
                        mainMenu();
                    })
                    break;
                case 'add a department':
                    addDepartment();
                    break;
                case 'add a role':
                    addRole();
                    break;
                case 'add an employee':
                    addEmployee();
                    break;
                case 'update an employee role':
                    updateEmployeeRole();
                    break        
            }
        })
}

mainMenu();