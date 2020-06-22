// require connection
const connection = require("./connection.js");

class DB {
    constructor() {
        this.connection = connection;
    };

    //view all employees
    getAllEmployees() {
        return this.connection.query("SELECT * FROM employee");
    };
    //view all roles
    getAllRoles() {
        return this.connection.query("SELECT * FROM role");
    };
    //view all departments
    getAllDepartments() {
        return this.connection.query("SELECT * FROM department");
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
        return this.connection.query("INSERT INTO department (name) VALUES (?)", [department]);
    }

    //update role
    updateRole(employeeId, roleId) {
        return this.connection.query("UPDATE role SET role_id = ? WHERE id = ?", [roleId, employeeId ]);
    }
















}

module.exports = DB;