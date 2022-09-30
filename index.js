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
const db = new DB_Queries()
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
            }
        })
}

mainMenu();