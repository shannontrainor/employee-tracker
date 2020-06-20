-- Database
-- Table for dept, role, employee

DROP DATABASE IF EXISTS employee_management;

CREATE DATABASE employee_management;

USE employee_management;

CREATE TABLE department (       --parent table for role
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (         -- child table for dept
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL (6,2),
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_department
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES role(id)
);
