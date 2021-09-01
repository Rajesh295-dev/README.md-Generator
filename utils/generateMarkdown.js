// TODO: Create a function that returns a license badge based on which license is passed in
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function generateMarkdown(response){
     
   return`

  # ${response.title}


  [![License](https://img.shields.io/badge/License-${response.license}-brightgreen.svg)](https://opensource.org/licenses/${response.license})

  ## License:
     For more informtion about the License, click on the link below.
  - [License](https://opensource.org/licenses/${response.license})
  
  # Table of Contents

  - [License](#license)
  - [Description](#description) 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Credits](#credits)
  - [Test](#test)
  - [Questions](#questions)

  ## Description:
  
     ${response.description}

  ## Installation:
       ${response.installation}

  ## Usage
       ${response.usage}
  
  ## Contribution:
       ${response.contribution}


  ## Test:
        ${response.tests}
  
  

  ## Questions:
  For additional questions about this project you can go to my 
  GitHub page at the following Link:

  - [GitHub Profile](https://www.github.com/${response.username})

  For any futher informations do not hesitate to reach out to my email at: ${response.email}
  `;
}


module.exports = generateMarkdown;
