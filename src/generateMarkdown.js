function generateMarkdown(data) {

    return `

# <h1> ${data.project}</h1>

![License](https://img.shields.io/static/v1?label=License&message=${encodeURIComponent(data.license)}&color=brightgreen)
    
# Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Inquiries](#inquiries)
    
## Description:
    
${data.description}
    
## Installation:
    
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
    
GitHub: <https://github.com/${encodeURIComponent(data.username)}>
    
Email: <${data.email}>

`;
}

module.exports = generateMarkdown;