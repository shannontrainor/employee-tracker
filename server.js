//require inquirer
//require db folder
//require console.table
const inquirer = require("inquirer");
const db = require("./db/index");
require("console.table");


//inquire.prompt

const database = new db();

const startPrompt = () => {
    inquirer.prompt({
        name: "firstChoice",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View Employees",
            "View Departments",
            "View Roles",
            "Add Employee",
            "Add Department",
            "Add Role",
            "Update Employee Role",
            "exit",
        ],
    }).then ((answer) => {
        switch (answer.firstChoice) {
            case "View Employees":
                database.getAllEmployees().then((response) => {     //access database & console response in table
                    console.table(response);
                });
                startPrompt();  //call back start prompt function for next step
                break;
            
            case "View Departments":
                database.getAllDepartments().then((response) => {
                    console.table(response);
                });
                startPrompt();
                break;

            case "View Roles":
                database.getAllRoles()
                .then((reponse) => {
                    console.table(reponse);
                 });
                startPrompt();
                break;
            
            case "Add Employee":
                employeeAdd();
                break;

            case "Add Department":
                departmentAdd();
                break;
            
            case "Add Role":
                roleAdd();
                break;
                
            case "Update Employee Role":
                break;

            case "exit":
                break;
        }
    })
}
startPrompt();

//add new employee, prompt next question
const employeeAdd = () => {
    inquirer.prompt({
        name: "name",
        type: "input",
        message: "What is your employee's name?",
    })
    .then((answer) => {
        database.addNewEmployee(answer.name)
        .then(() => {
            console.log("Added Successfully");
        });
        startPrompt();
    });
}

//add new dept, prompt next question
const departmentAdd = () => {
    inquirer.prompt({
        name: "name",
        type: "input",
        message: "What is the name of the department you would like to add?",
    })
    .then((answer) => {
        database.addNewDepartment(answer.name)
        .then(() => {
            console.log("Added Successfully");
        });
        startPrompt();
    });
}
//add new role, prompt next question
const roleAdd = () => {
    inquirer.prompt({
        name: "name",
        type: "input",
        message: "What is the name of the role you would like to add?",
    })
    .then((answer) => {
        database.addNewRole(answer.name)
        .then(() => {
            console.log("Added Successfully");
        });
        startPrompt();
    });
}