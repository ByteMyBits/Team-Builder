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


    let HTML = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Team Builder</title>
    </head>
    
    <body>
        <header>
            <h1 class="title">Team Builder</h1>
        </header>
    
        <div class="card-container">

        <div class="card manager">
        <div class="header">
            <h1>${manager.getName()}</h1>
            <h2>${manager.getRole()}</h2>
        </div>
        <div class="icon">
                <svg id="manager" height="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.51 62.47">
                    <defs>
                        <style>
                            .cls-1 {
                                fill: #fff
                            }
                        </style>
                    </defs>
                    <g>
                        <g>
                            <path class="cls-1"
                                d="M64 47.77a7.65 7.65 0 01-7.65-7.65v-.63A12.11 12.11 0 0164.78 28a9.48 9.48 0 1111.3 0 12.11 12.11 0 018.43 11.54 8.28 8.28 0 01-8.28 8.28z" />
                            <path class="cls-1"
                                d="M7.39 46.54A7.39 7.39 0 010 39.15v-.61a11.7 11.7 0 018.09-11.13 9.06 9.06 0 1112.68-1.92 9.2 9.2 0 01-1.92 1.92A11.7 11.7 0 0127 38.54a8 8 0 01-8 8H7.39z" />
                            <g>
                                <path class="cls-1"
                                    d="M55.12 60.94H28.17a9.51 9.51 0 01-9.49-9.5v-2.8A19.31 19.31 0 0132 30.29l2.85-.93-2.42-1.77a14.69 14.69 0 01-4.33-5 14.38 14.38 0 012.64-16.83 14.63 14.63 0 0120.58 0A14.34 14.34 0 0154 22.58a14.67 14.67 0 01-4.32 5l-2.43 1.77 2.86.93a19.11 19.11 0 015.3 2.72 19.68 19.68 0 014.22 4.18 19.13 19.13 0 013.76 11.45v4a8.28 8.28 0 01-8.27 8.31z" />
                                <path
                                    d="M55.12 59.41a6.75 6.75 0 006.73-6.74v-4a17.77 17.77 0 00-12.26-16.9l-5.7-1.85 4.84-3.53a13 13 0 003.87-4.49 12.66 12.66 0 001.45-5.9 13 13 0 00-26 0 12.65 12.65 0 001.44 5.91 13.16 13.16 0 003.87 4.49l4.85 3.53-5.71 1.85a17.77 17.77 0 00-12.26 16.9v2.8a8 8 0 008 8h26.88m0 3.06H28.17a11 11 0 01-11-11v-2.8a20.83 20.83 0 0114.36-19.91 16.08 16.08 0 1119 0 20.84 20.84 0 0114.39 19.81v4a9.8 9.8 0 01-9.8 9.83z"
                                    fill="#34343a" />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        <div class="lower">
            <p id="id">ID: ${manager.getID()}</p>
            <p id="email">E-mail: ${manager.getEmail()}</p>
            <p id="office">Office: ${manager.getOfficeNumber()}</p>
        </div>

    </div>

            ${renderEngineer()}
            ${renderIntern()}

    </div>
    </body>
    </html>`

    fs.writeFile('./dist/index.html', HTML, (err) =>
        err ? console.error(err) : console.log('Successfully generated HTML!')
    );

    // console.log("finished");
    // console.log(`Manager's Details:
    // Role: ${manager.getRole()}
    // Name: ${manager.getName()}
    // Id: ${manager.getID()}
    // Office no.: ${manager.getOfficeNumber()}

    // ${engineerArray}
    // ${internArray}

    // `

    // )

}

function renderEngineer() {

    let engineerString = "";
    engineerArray.forEach(element => {

        engineerString += `<div class="card engineer">
        <div class="header">
            <h1>${element.getName()}</h1>
            <h2>${element.getRole()}</h2>
        </div>
        <div class="icon"><svg id="spanner" height="45px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.29 49.48">
        <g data-name="Layer 2">
            <g data-name="Layer 1">
                <path
                    d="M12 49.31a13.26 13.26 0 01-5.69-2.63 10.81 10.81 0 005.11-.92 10.36 10.36 0 005.33-5.24A8.34 8.34 0 0011.57 29a10.42 10.42 0 00-7.47.45A10.74 10.74 0 000 32.59a13.09 13.09 0 011.85-6 10.13 10.13 0 014.44-3.93 9.78 9.78 0 014.59-.81 11.8 11.8 0 014.62 1.27 14.41 14.41 0 013.11 2.13l26.6-11.84v-.29A14.63 14.63 0 0145.62 8a11.81 11.81 0 012.14-4.28A9.84 9.84 0 0151.44.84a10.08 10.08 0 015.89-.67A13.26 13.26 0 0163 2.8a10.83 10.83 0 00-5.11.92A10.4 10.4 0 0052.58 9a8.34 8.34 0 005.14 11.56 10.42 10.42 0 007.47-.45 10.77 10.77 0 004.1-3.19 13.06 13.06 0 01-1.85 6A10 10 0 0163 26.8a9.79 9.79 0 01-4.59.82 11.85 11.85 0 01-4.62-1.27 14.83 14.83 0 01-1.71-1l-27.91 12.4a14.21 14.21 0 01-.5 3.73 11.78 11.78 0 01-2.14 4.29 9.84 9.84 0 01-3.68 2.87 10.08 10.08 0 01-5.85.67z"
                    fill="#ffd677" />
            </g>
        </g>
    </svg></div>
        <div class="lower">
            <p id="id">ID: ${element.getID()}</p>
            <p id="email">E-mail: <a href="mailto:">${element.getEmail()}</a></p>
            <p id="GitHub">GitHub: <a href="https://github.com/${element.getGithub()}">@${element.getGithub()}</a></p>
        </div>
    </div>`

    });

    return engineerString;
}


function renderIntern() {

    let internString = "";
    internArray.forEach(element => {

        internString += `<div class="card intern">
        <div class="header">
            <h1>${element.getName()}</h1>
            <h2>${element.getRole()}</h2>
        </div>
        <div class="icon">
                <svg height="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.65 58.19">
                    <g>
                        <path
                            d="M6.43 51.74A22 22 0 0113.3 16a12.05 12.05 0 01-3.81-4 11.08 11.08 0 01-1.31-9 11.06 11.06 0 017.31 5.36 12.32 12.32 0 011.62 4.43 20.15 20.15 0 014-6.63C24.58 2.36 28.93.19 32.76 0c.21 3.83-1.5 8.38-4.93 12.2a21.1 21.1 0 01-2.37 2.26 22 22 0 0113.19 7.36 15 15 0 000 28.73 22 22 0 01-31 2.3c-.44-.35-.83-.72-1.22-1.11z"
                            fill="#38f251" />
                    </g>
                </svg>
            </div>
        <div class="lower">
            <p id="id">ID: ${element.getID()}</p>
            <p id="email">E-mail: <a href="mailto:">${element.getEmail()}</a></p>
            <p id="school">University: ${element.getSchool()}</p>
        </div>
    </div>`

    });

    return internString;
}