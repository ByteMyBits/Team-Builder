const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let manager;
let engineerArray = [];
let internArray = [];


console.log("Welcome to the Team Builder. Please start by providing the manager's details -->");

getManagerDetails();

function getManagerDetails() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Name:",
                name: "name",
            },
            {
                type: "input",
                message: "Employee ID:",
                name: "id"
            },
            {
                type: "input",
                message: "E-mail address:",
                name: "email"
            },
            {
                type: "input",
                message: "Office number",
                name: "office"
            }
        ])

        .then(answers => {

            manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            promptToContinue();
        })

        .catch(error => {
            console.log("Something went wrong --> " + error)
        });
}

function promptToContinue() {

    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to add another team member?",
                name: "addNew",
                choices: [
                    "Yes",
                    "No"
                ]
            }
        ])

        .then(answers => {
            answers.addNew === "Yes" ? selectTeamMember() : renderHTML();
        })

}

function selectTeamMember() {

    inquirer
        .prompt([
            {
                type: "list",
                message: "Please select the team member to add -->",
                name: "pickTeamMember",
                choices: [
                    "Engineer",
                    "Intern"
                ]
            }
        ])

        .then(answers => {
            answers.pickTeamMember === "Engineer" ? addEngineer() : addIntern();
        })
}


function addEngineer() {
    console.log("Please enter the engineer's details -->")
    inquirer
        .prompt([
            {
                type: "input",
                message: "Name:",
                name: "name",
            },
            {
                type: "input",
                message: "Employee ID:",
                name: "id"
            },
            {
                type: "input",
                message: "E-mail address:",
                name: "email"
            },
            {
                type: "input",
                message: "GitHub:",
                name: "github"
            }
        ])
        .then(answers => {
            let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            engineerArray.push(engineer);
            promptToContinue();
        })

}

function addIntern() {
    console.log("Please enter the intern's details -->")
    inquirer
        .prompt([
            {
                type: "input",
                message: "Name:",
                name: "name",
            },
            {
                type: "input",
                message: "Employee ID:",
                name: "id"
            },
            {
                type: "input",
                message: "E-mail address:",
                name: "email"
            },
            {
                type: "input",
                message: "University:",
                name: "uni"
            }
        ])
        .then(answers => {
            let intern = new Intern(answers.name, answers.id, answers.email, answers.uni);
            internArray.push(intern);
            promptToContinue();
        })

}

function renderHTML() {

    console.log("finished");
    console.log(`Manager's Details:
    Role: ${manager.getRole()}
    Name: ${manager.getName()}
    Id: ${manager.getID()}
    Office no.: ${manager.getOfficeNumber()}

    ${engineerArray}
    ${internArray}

    `

    )

}
