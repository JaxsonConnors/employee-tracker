const inquirer = require('inquirer');
const consoleTable = require('console.table');

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

promptUser();