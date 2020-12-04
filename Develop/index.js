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

// function init(){
//     inquirer.prompt(questions).then((answers) => {
//         fs.writeFile('./generated/README.md', generateMarkdown(answers));
//     });
// };

// // function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, function(err, buf) {
//       if (err) console.log(err)
//       if (buf) console.log(buf)
//     });
//   }

// init();

try {
    var answers = await inquirer.prompt(questions);
    let file = `IG_USERNAME=${answers.username}\nIG_PASSWORD=${answers.password}\n#ONLINE_MODE=true`;
    await fs.promises.writeFile("./generated/README.md", file);
    await login();
  } catch (error) {
    console.error("Any error::", error);
  }
