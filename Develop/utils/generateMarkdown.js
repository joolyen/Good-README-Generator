// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description:
  ### ${answers.description}

  #### ![license image](https://img.shields.io/badge/License-${answers.license}-color=orange.svg)
  ![screenshot](images/readme.png)

  ## Table of Contents:
  ###     [1. Installation](#Installation)
  ###     [2. Usage](#Usage)
  ###     [3. License](#License)
  ###     [4. Contributing](#Contributing)
  ###     [5. Testing](#Tests)
  ###     [6. Questions](#Questions)

  ### 1. Installation
  #### ${answers.installation}

  ### 2. Usage
  #### ${answers.usage}

  ### 3. License
  #### ${answers.license[0] || null}

  #### This application is licensed by:
  #### ![license image](https://img.shields.io/badge/License-${answers.license}-color=orange.svg)

  ### 4. Contributing
  #### ${answers.contributing}

  ### 5. Tests
  #### ${answers.tests}

  ### 6. Questions
  #### With any questions send an e-mail to ${answers.questions}
  #### Visit https://github.com/${answers.githubUsername}

`;
}

module.exports = generateMarkdown;
