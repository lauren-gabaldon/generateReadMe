// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "") {
    licenseBadge = "";
  } else {
    licenseBadge = `![${license}](https://img.shields.io/badge/LICENSE-${license}-blue) \n`;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "") {
    license = "";
  } else {
    license = "- [License](#license)\n";
  }
  return license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "") {
    licenseSection = `## License \n This project is licensed under the terms of the ${license} license. For more information please, refer to [https://choosealicense.com/]. `;
  } else {
    licenseSection = "";
  }
  return licenseSection;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}


## Table of Contents
- [Installion](#installation)
- [Usage](#usage)

${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}



${renderLicenseSection(data.license)}
## Contributing
${data.contributors}
  
## Tests
  
${data.test}
 
## Questions
  
For questions contact me here! Github: ${data.github} Email: ${data.email}`;
}

module.exports = generateMarkdown;
