//Packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js')
//Array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: (value) => { if (value) {return true} else {return 'Please enter a title for your Project.'}}
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
        validate: (value) => { if (value) {return true} else {return 'Please enter a title for your Project.'}}
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What dependencies are needed to run the application?',
        validate: (value) => { if (value) {return true} else {return 'Please enter a title for your Project.'}}
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is the application used?',
        validate: (value) => { if (value) {return true} else {return 'Please enter a title for your Project.'}}
    },
    {
        type: 'list',
        name: 'License',
        message: 'What license did you use (if any)?',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
        validate: (value) => { if (value) {return true} else {return 'Please enter a title for your Project.'}}
    },
    {
        type: 'input',
        name: 'contributers',
        message: 'Please list the contributers, if any:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests do you have for your application?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: (value) => { if (value) {return true} else {return 'Please enter a title for your Project.'}}
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email address?',
        validate: (value) => { if (value) {return true} else {return 'Please enter a title for your Project.'}}
    }
]).then((data) => {
    const fileName = `${data.title}.md`
    fs.writeFile(fileName, markdown(data), (err) => err ? console.log(err) : console.log("Success! README Created!"))

})