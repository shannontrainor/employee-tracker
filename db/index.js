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

    //add new employee - first/last name, role, manager
    addNewEmployee(first_name, last_name, role_id, manager_id) {
        return this.connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?,?,?)", [first_name, last_name, role_id, manager_id]);
    };

    //add new role - title, salar, dept id
    addNewRole(title, salary, department_id) {
        return this.connection.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", [title, salary, department_id]);
    };

    //add new dept - name
    addNewDepartment(department) {
        return this.connection.query("INSERT INTO department (name) VALUES (?)", [department]);
    };

    //update role
    updateRole(employee, role) {
        return this.connection.query("UPDATE role SET role_id = ? WHERE id = ?", [employee, role]);
    };

};

module.exports = DB;