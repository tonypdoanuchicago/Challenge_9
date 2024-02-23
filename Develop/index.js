// TODO: DONE Include packages needed for this application
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [];

import * as fs from 'fs';

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
        name: 'answerTitle',
        message: 'What is the title?'
      },
      {
        name: 'answerSubtitle',
        message: 'What is the subtitle?'
      },
      {
        name: 'answerDescription',
        message: 'What is the main description?'
      },
      {
        name: 'answerProblem',
        message: 'What is the problem?'
      },
      {
        name: 'answerSolution',
        message: 'What is the solution?'
      },
      {
        name: 'answerLearn',
        message: 'What did you learn?'
      },
      {
        type: 'list',
        name: 'answerPurpose',
        message: 'Which is the purpose of this readme?',
        choices: ['Study', 'Professional Development', 'Work', 'Hobby'],
      }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var dataString = "#" + answers.answerTitle + "\n\n";
    dataString += "##" + answers.answerSubtitle + "\n\n";
    dataString += "## Description\n\n" + answers.answerDescription + "\n\n";
    dataString += "## Problem\n\n" + answers.answerProblem + "\n\n";
    dataString += "## Solution\n\n" + answers.answerSolution + "\n\n";
    dataString += "## Learnings\n\n" + answers.answerLearn + "\n\n";
    dataString += "## Purpose\n\n" + answers.answerPurpose + "\n\n";

    dataString += "| TO DO Num     | Item          | Due Date  |\n";
    dataString += "| ------------- |:-------------:| ---------:|\n";
    dataString += "| 1             | JavaScript    | May 1st   |\n";
    dataString += "| 2             | HTML          | May 15th  |\n";
    dataString += "| 3             | CSS           | May 31st  |\n";    

    writeToFile("PROFESSIONAL_README.md", dataString);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
