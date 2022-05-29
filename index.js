const inquirer = require("inquirer");
const fs = require("fs");

const createTeamPage = require("./src/template.js");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// created an array for team portfolio
const staffDataArray = [];

// manager first, then manager can add other employees
const createManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the manager's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
        validate: (input) => {
          if (isNaN(input)) {
            console.log("Please enter the manager's id");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the manager's email",
        validate: (email) => {
          valid = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter an email for the manager");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter office number for the manager",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the office number");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      staffDataArray.push(manager);
      console.log(manager);
    });
};

const addEmployee = () => {
  console.log(`Add employees to profile`);

  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please select the employee's role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's id?",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the employee's id");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter employee's email.",
        validate: (email) => {
          valid = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter an email for the employee");
            return false;
          }
        },
      },
      {
        // engineer's git hub
        type: "input",
        name: "github",
        message: "Enter employee's github.",
        when: (input) => input.role === "Engineer",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the engineer's github username");
          }
        },
      },
      {
        // intern's school
        type: "input",
        name: "school",
        message: "Enter the intern's school",
        when: (input) => input.role === "Intern",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the intern's school");
          }
        },
      },
      {
        // option for adding more employees
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeData) => {
      // data for employee types

      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeData;
      let employee;

      // engineer data
      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.log(employee);

        // intern data
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);

        console.log(employee);
      }

      // add new employee to staff data array
      staffDataArray.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(staffDataArray);
      } else {
        return staffDataArray;
      }
    });
};

// generate HTML
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    // if there is an error
    if (err) {
      console.log(err);
      return;
      // when the profile has been created
    } else {
      console.log(
        "Your team profile has been successfully created! Please check out the index.html"
      );
    }
  });
};

createManager()
  .then(addEmployee)
  .then((staffDataArray) => {
    return createTeamPage(staffDataArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
