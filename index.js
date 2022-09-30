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

//following array will have questions to be asked when 
const addDepartmentArray=[
    {
        type: 'input',
        name: 'add_department',
        message: 'what Department would you like to add?'
    }
]

const db = new DB_Queries()

//following code will be run when the user chooses to add a department.
const addDepartment=()=>{
    return inquirer.prompt(addDepartmentArray)
        .then((answers)=>{
            //console.log(answers.add_department);
        });
        
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
            }
        })
}

mainMenu();