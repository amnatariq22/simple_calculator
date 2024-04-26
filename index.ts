#! /usr/bin/env node

import inquirer from "inquirer";
const answers = await inquirer.prompt([
  { message: "Enter first Number", type: "number", name: "firstNumber" },
  { message: "Enter second Number", type: "number", name: "secondNumber" },
  {
    message: "select one of the Operators to perform Operations",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtractions", "Multiplication", "Division"],
  },
]);
// conditional statement
if (answers.operator === "Addition") {
  console.log(answers.firstNumber + answers.secondNumber);
} else if (answers.operator === "Subtractions") {
  console.log(answers.firstNumber - answers.secondNumber);
} else if (answers.operator === "Multiplication") {
  console.log(answers.firstNumber * answers.secondNumber);
} else if (answers.operator === "Division") {
  console.log(answers.firstNumber / answers.secondNumber);
} else {
  console.log("Please select valid operator");
}
