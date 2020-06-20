-- Department:
    -- name

INSERT INTO department (name) VALUES ("Security");
INSERT INTO department (name) VALUES ("Bar");
INSERT INTO department (name) VALUES ("Maintanence");
INSERT INTO department (name) VALUES("Management");

-- Role:
    -- title
    -- salary (decimal)
    -- department_Id

INSERT INTO role (title, salary, department_id) VALUES ("Bouncer", 1500.00, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Bartender", 1200.00, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Janitor", 50.00, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Manager", 9000.00, 4);

-- Employee:
    -- first_name
    -- last_name
    -- role_id
    -- manager_id
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Ronald Mac", "McDonald", 1, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Dee", "Reynolds", 2, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Charlie", "Kelly", 3, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Dennis", "Reynolds", 4);