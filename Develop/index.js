// passing requirements
var fs = require("fs");
var inquirer = require('inquirer');

// intro message
console.log('Hi! Let\'s generate a README.md file together.' );

// questions for the end user
var questions = [
    {
      type: "input",
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: "input",
      name: 'description',
      message: 'Please describe your project.',
    },
    {
      type: "input",
      name: 'installation',
      message: 'How do you install this application?',
    },
    {
      type: "input",
      name: 'usage',
      message: 'How is the application used?',
    },
    {
      type: "checkbox",
      name: 'license',
      message: 'Which license should be used?',
      choices: [
        'MIT', 
        'ISC', 
        'Creative Commons', 
        'European Union Public License 1.1', 
        'Do What the F*ck You Want to Public License'
      ],
    },
    {
      type: "input",
      name: 'contributing',
      message: 'Who contributed to this project?',
    },
    {
      type: "input",
      name: 'tests',
      message: 'How do you test this project?',
    },
    {
      type: "input",
      name: 'questions',
      message: 'Who should be e-mailed for questions about this project?',
    },
    {
      type: "input",
      name: 'githubUsername',
      message: 'What is your Github Username?',
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log(answers); 
    //fs.writeFile('./generated/README.md', generateMarkdown(answers));
});
