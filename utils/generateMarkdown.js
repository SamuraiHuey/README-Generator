// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  - [Description] (Look up on Google)

  # Description
  ${data.description}

  # Installation directions
  ${data.installation}

  #

`;
}

module.exports = generateMarkdown;
