// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');



//modules
const generateMarkdown = require('./utils/generateMarkdown.js');


// An array of questions for user input
//const questions = [
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'README-Generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Describe the process required to install your project.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "How could this app will be applicable in professional way.",
        name: 'usage'
    },
    {
        type: 'input',
        message: " Who are the contributers for this project.",
        name: 'contribution'
    },
    {
        type: 'input',
        message: "Provide any tests if written for your application.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['MPL',
            'EPL',
            'Apache',
            'ISC',
            'MIT',
            'IPL',],
        name: 'license'
    },

    {
        type: 'input',
        message: "What is your GitHub username? ",
        name: 'username',
        default: 'Rajesh295-dev',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: 'What is your email address',
        name: 'email',
        default: 'rajeshgautam766@yahoo.com',
    },


];


// TODO: Create a function to write README file
function writeToFile(fileName, response) {
    fs.writeFile(fileName, (response), err => {
        if (err) {
            return console.log(err);
        }
        console.log('Successfully created README.md!')
    });
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! ");


        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses);
        console.log(markdown);

        // Write markdown to file
        await writeFileAsync('GeneratedREADME.md', markdown);
        console.log("Success!");

    }
    catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
