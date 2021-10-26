const inquirer = require('inquirer');
const consoleTable = require('console.table');
const connection = require('./connection');


//Run App
connection.connect((error) => {
    if (error) throw error;
    console.log('Employee Tracker');
    promptUser();
});


const promptUser = () => {
    inquirer.prompt([
        {
          name: 'choices',
          type: 'list',
          message: 'What would you like to do?',
          choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add Department',
            'Add Role',
            'Add Employee',
            'Update Employee Role'
            ]
        }
      ])
      .then((answers) => {
        const {choices} = answers;
  
        if (choices === 'View All Departments') {
          viewAllDepartments();
        }

        if (choices === 'View All Roles') {
            viewAllRoles();
        }

        if (choices === 'View All Employees') {
            viewAllEmployees();
        }

        if (choices === 'Add Department') {
            addDepartment();
        }

        if (choices === 'Add Role') {
            addRole();
        }
  
        if (choices === 'Add Employee') {
            addEmployee();
        }
  
        if (choices === 'Update Employee Role') {
            updateEmployeeRole();
        }
    });
};

// View All Departments
const viewAllDepartments = () => {
    const sql =   `SELECT department.id AS id, department.department_name AS department FROM department`; 
    connection.query(sql, (error, response) => {
      if (error) throw error;
      console.log(`All Departments:`);
      console.table(response);
      promptUser();
    });
};

// View All Roles
const viewAllRoles = () => {
  console.log(`Current Employee Roles:`);
  const sql =
    `SELECT role.id, role.title, department.department_name AS department
    FROM role
    INNER JOIN department ON role.department_id = department.id`;
  connection.query(sql, (error, response) => {
    if (error) throw error;
      response.forEach((role) => {console.log(role.title);});
      promptUser();
  });
};

// View All Employees
const viewAllEmployees = () => {
  let sql = 
    `SELECT employee.id, 
    employee.first_name, 
    employee.last_name, 
    role.title, 
    department.department_name AS 'department', 
    role.salary
    FROM employee, role, department 
    WHERE department.id = role.department_id 
    AND role.id = employee.role_id
    ORDER BY employee.id ASC`;
  connection.query(sql, (error, response) => {
    if (error) throw error;
    console.log(`Current Employees:`);
    console.table(response);
    promptUser();
  });
};