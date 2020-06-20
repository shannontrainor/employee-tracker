// require connection
const connection = require("./connection.js");

class DB {
    constructor(connection) {
        this.connection = connection;
    };

    //view all employees
    getAllEmployees() {
        return this.connection.query("SELECT * FROM employee"), (err,res) => {
            if (err) throw error;
            console.log(res);  //log results
            connection.end();
        };
    };
    //view all roles
    getAllRoles() {
        return this.connection.query("SELECT * FROM role"), (err,res) => {
            if (err) throw error;
            console.log(res);  //log results
            connection.end();
        };
    };
    //view all departments
    getAllDepartments() {
        return this.connection.query("SELECT * FROM department"), (err,res) => {
            if (err) throw error;
            console.log(res);  //log results
            connection.end();
        };
    };

    //add new employee
    addNewEmployee(employee) {
        return this.connection.query("INSERT INTO employee SET ?", employee);
    }

    //add new role
    addNewRole(role) {
        return this.connection.query("INSERT INTO role SET ?", role);
    }

    //add new dept
    addNewDepartment(department) {
        return this.connection.query("INSERT INTO department SET ?", department);
    }

    //update role
    updateRole() {
        return this.connection.query("UPDATE role SET ? WHERE ?", [role, title ]);
    }

    














}

module.exports = DB;