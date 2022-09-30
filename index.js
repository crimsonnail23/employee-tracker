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
        choices: ['view all departments']

    }
]
const db = new DB_Queries()
const mainMenu=()=>{
    return inquirer.prompt(mainMenuArray)
        .then(userChoice =>{
            if(userChoice.main_menu==='view all departments'){
                db.findDepartments((err,data)=>{
                    console.table(data);
                });
            }

            // switch(userChoice.main_menu) {
            //     case 'view_departments':

            //         break
            //     case 'another value':

            //         break
            // }
        })
}

mainMenu();