const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown');

const criteria = [
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Enter a valid GitHub Username!");
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'repository',
        message: 'Enter the name of the GitHub repository.',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid GitHub repository!");
            } else {
                return true;
            }
        }

    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter an email address',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid GitHub repository!");
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'project',
        message: 'Please enter the title of your Project',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter the title of your project!");
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a project description!");
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe how to download your application',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples to use in the Usage section of your README',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter guidelines on how to contribute to your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter any tests for application and provide examples on how to run them.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project (Choose One)',
        choices: [
            'MIT License',
            'The Unlicense',
            'Apache License 2.0',
            'Mozilla Public License 2.0'
        ],

        validate: licenseList => {
            if (licenseList) {
                return true;
            } else {
                console.log('Please enter a License! ');
                return false;
            }
        },
        //generateLicense()
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README.md file has been generated!")
    });
};

function init() {
    inquirer.prompt(criteria)
        .then(answers => {
            const generateData = generateMarkdown(answers);
            writeToFile('./README.md', generateData);
        });
};

init();


