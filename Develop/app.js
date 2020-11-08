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
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const managerQuestions = [
    {
      type: "input",
      name: "mgrName",
      message: "Welcome to team builder app.  Please enter manager name: ",
      default: "CarolinaYo",
    },
    {
      type: "input",
      name: "mgrId",
      message: "Enter employee ID: ",
      default: "007",
    },
    {
      type: "input",
      name: "mgrEmail",
      message: "Enter manager E-mail: ",
      default: "manager@team.bld"
    }
    {
        type: "input",
        name: "mgrOffice",
        message: "Enter manager office number: ",
        default: "100"
      }
];

const addMemberOption = [

    {
        type: "confirm",
        name: "addMember",
        message: "Would you like to add another team member?",
    },
    {
        type: "list",
        name: "teamRole",
        message: "Please choose team member to be added: ",
        choices: ["Engineer", "Intern"]
    },
    
];

const engineerQuestions =[

    {
        type: "input",
        name: "engName",
        message: "Enter team member's name: ",
        default: "Jane Joy",
        },
        {
        type: "input",
        name: "engId",
        message: "Enter employee ID: ",
        default: "000",
        },
        {
        type: "input",
        name: "engEmail",
        message: "Enter E-mail: ",
        default: "engineer@team.bld"
        },      
        {
        type: "input",
        name: "github",
        message: "Enter github username: ",
        default: "JaneJoy",
    },
];

const internQuestions = [

    {
      type: "input",
      name: "intName",
      message: "Enter team member's name: ",
      default: "Julie Mae",
    },
    {
      type: "input",
      name: "intId",
      message: "Enter employee ID: ",
      default: "000"
    },
    {
      type: "input",
      name: "intEmail",
      message: "Enter E-mail: ",
      default: "intern@team.bld",
    },
    {
      type: "input",
      name: "school",
      message: "Enter intern school name: ",
      default: "University of Washington",
    }
];

let teamMembers = [];

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
function managerInfo() {
    let mgrAnswer = inquirer.prompt(managerQuestions);
    let newManager = new Manager(mgrAnswer.mgrname, mgrAnswer.mgrID, mgrAnswer.mgrEmail, mgrAnswer.mgrOffice);
    teamMembers.push(newManager);
}

//need switch case to ask if they want to add new employee, if yes, need another switch case to ask if it is engineer or intern.


function engineerInfo() {
    let engAnswer = inquirer.prompt(engineerQuestions);
    let newEngineer = new Engineer(engAnswer.engname, engAnswer.engID, engAnswer.engEmail, engAnswer.github);
    teamMembers.push(newEngineer);
}

function internInfo() {
    let intAnswer = inquirer.prompt(internQuestions);
    let newIntern = new Engineer(intAnswer.intname, intAnswer.intID, intAnswer.intEmail, intAnswer.school);
    teamMembers.push(newIntern);
}

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