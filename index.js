// ECMAScript modules are the official standard format to package JavaScript code for reuse (https://nodejs.org/api/esm.html)
// Import using an ES module
import inquirer from "inquirer";
import { promises } from "fs";
const { writeFile } = promises;
import { generateSvg } from "./generateSvg.js";

const fileName = "logo.svg";

const enter = "PRESS 'Enter' to skip or save.";
const enterYellow = `\x1b[33m${enter}\x1b[0m`;
const arrowKeys = "Use Arrow Keys to Navigate Licenses.";
const enterarrowKeys = `\x1b[33m${arrowKeys}\x1b[0m`;
const success = "Generatedlogo.svg";
const successGreen = `\x1b[32m${success}\x1b[0m`;

const shapes = ["circle", "square", "triangle"];

const init = async () => {
  try {
    const answers = await inquirer.prompt([
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

    await writeFile(fileName, generateSvg(answers));
    console.log(`${successGreen}`);
  } catch (err) {
    console.error(err);
  }
};

init();
