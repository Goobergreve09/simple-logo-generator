const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const generateShapes = require("./lib/shapes.js");

const fileName = "logo.svg";

const enter = "PRESS 'Enter' to skip or save.";
const enterYellow = `\x1b[33m${enter}\x1b[0m`;
const arrowKeys = "Use Arrow Keys to Navigate Licenses.";
const enterarrowKeys = `\x1b[33m${arrowKeys}\x1b[0m`;
const success = "Generatedlogo.svg";
const successGreen = `\x1b[32m${success}\x1b[0m`;

const shapes = ["Circle", "Square", "Triangle"];

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "acronym",
      message: `What 3 letter acronym would you like to use for your logo (ex:DET)? ${enterYellow}\n`,
    },
    {
      type: "input",
      name: "acronymColor",
      message: `\nWhat color would you like the acronym to be? You can type a color or use a hexadecimal. ${enterYellow}\n`,
    },
    {
      type: "list",
      name: "shape",
      message: `\nWhich of the following shapes would you like your logo to be? ${enterarrowKeys}\n`,
      choices: shapes,
    },
    {
      type: "input",
      name: "shapeColor",
      message: `\nWhat color would you like your shape to be? You can type a color or use a hexadecimal. ${enterYellow}\n`,
    },
  ]);
};

const init = () => {
  promptUser()
    .then((answers) => {
      // Adding the length validation for the acronym
      testLength(answers);
      testHexidecimal(answers);
      return answers;
    })
    .then((answers) => writeFile(fileName, generateShapes(answers)))
    .then(() => console.log(`${successGreen}`))
    .catch((err) => console.error(err));
};

init();

function testLength(answers) {
  if (`${answers.acronym}`.length > 3) {
    throw new Error("Acronym must not be more than 3 characters long.");
  }
}

function testHexidecimal(answers) {
  const pattern = /^[A-Za-z0-9#]+$/;

  if (
    !pattern.test(answers.shapeColor) ||
    !pattern.test(answers.acronymColor)
  ) {
    throw new Error(
      "A hexidecimal must only contain letters, numbers, and pound symbol (ex. #00013F)"
    );
  }
}

// function testShapecolor (answers) {

// }

module.exports = {
  testLength,
  testHexidecimal,
};
