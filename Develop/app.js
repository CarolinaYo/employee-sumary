const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//code to use inquirer to gather information about the development team members

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter your name",
        default: "CarolinaYo",
        
      type: "input",
      name: "name",
      message: "Enter your name",
      default: "CarolinaYo",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the name of your GitHub repository"
      default: "readme-gen",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your e-mail address.",
    }
]
const egineerQuestions =[
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      default: "Project Title",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe your project.",
      default: "Project Description.",
    },
    {
      type: "input",
      name: "installation",
      message: "Please describe the steps required to install your project.",
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide instructions and examples.",
    },
    {
      type: "input",
      name: "contributing",
      message: "Please provide guideline for others to contribute.",
    },
    {
      type: "input",
      name: "test",
      message: "Please provide examples on how to run your project.",
    },
    {
      type: "list",
      name: "license",
      message: "Please choose a license.",
      choices: ["Apache License 2.0", "GNU GPLv3", "MIT License"],
    },
  ];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


// // function to initialize program
// function init() {
//     inquirer.prompt(questions).then((answer) =>
//       fs.writeFile("sampleREADME.md", generateMarkdown(answer), (err) => {
//         if (err) {
//           return console.log(err);
//         }
//         console.log("Success!");
//       })
//     );
//   }
//   // function call to initialize program
//   init();