// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("../utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project name?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a description regarding your project",
    name: "description",
  },
  {
    type: "input",
    message: "What are the intallation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "What are the usage instructions?",
    name: "usage",
  },
  {
    type: "list",
    message: "What license would you like to use?",
    choices: ["MIT", "ISC", "GPL", ""],
    name: "license,",
  },
  {
    type: "input",
    message: "Who are the contributors?",
    name: "contributors",
  },
  {
    type: "input",
    message: "Any tests for your project?",
    name: "test",
  },
  {
    type: "input",
    message: "What is your github?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //path - join method
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    //figure out how to take those responses from the user and write them to a file
    writeToFile("README.md", generateMarkdown(data));
  });
}
// Function call to initialize app
init();
