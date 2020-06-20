//require inquirer
//require db folder
//require console.table
const inquirer = require("inquirer");
const db = require("./db");
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
                break;
            
            case "View Departments":
                break;

            case "View Roles":
                break;
            
            case "Add Employee":
                break;

            case "Add Department":
                break;
            
            case "Add Role":
                break;
                
            case "Update Employee Role":
                break;

            case "exit":
                break;
        }
    })
}