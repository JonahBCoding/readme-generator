

function generateMarkdown(data) {
    return `
# <h1> ${data.project}</h1>
    
# Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Inquiries](#inquire)
    
## Description:
    
${data.description}
    
## Installtion:
    
${data.installation}
    
## Usage:
    
${data.usage}
    
## License: 

${data.license}
    
## Contributing:
    
${data.contributing}
    
## Tests:
    
${data.tests}
    
## Inquiries:
    
Any questions on this project, feel free to contact the developer at:
    
GitHub: <https://github.com/${data.githubusername}>
    
Email: <${data.email}>

`;
}

module.exports = generateMarkdown;