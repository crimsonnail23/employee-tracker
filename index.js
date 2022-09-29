// this will be the application. wher i'm going to use Inquirer. 
//import controller class

const DB_Queries = require('./db/controller')

//following questions will be used as a sort of 'main menu', it's also the questions that will first be asked of the user.

const mainMenuArray =[
    {
        type: 'list',
        name: 'main_menu',
        message: 'What would you like to do?',
        choices: [{name: 'view all departments', value: 'view_departments'}]

    }
]

const mainMenu=()=>{
    return inquirer.prompt(mainMenuArray)
        .then(userChoice =>{
            if(userChoice.main_menu==='view_departments'){
                DB_Queries.findDepartments();
            }
        })
}