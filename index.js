import readline from "readline";
import chalk from "chalk";
import {
  createItem,
  readItems,
  updateItem,
  deleteItem,
  showHelp,
  calculateAverage,
  actCommand,
} from "./src/commands/index.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function processCommand(command, args) {
  switch (command) {
    case "create":
      const [value, desc, activity] = args;
      createItem(Number(value), desc, activity);
      break;
    case "read":
      const range = args[0];
      readItems(range);
      break;
    case "act":
      actCommand(...args);
      break;
    case "avg":
      calculateAverage();
      break;
    case "update":
      const [index, newValue, newDesc, newActivity] = args;
      updateItem(Number(index), Number(newValue), newDesc, newActivity);
      break;
    case "delete":
      const indexToDelete = args[0];
      deleteItem(Number(indexToDelete));
      break;
    case "help":
      showHelp();
      break;
    case "exit":
      rl.close();
      break;
    default:
      console.log("Invalid command. Please try again.");
  }

  rl.prompt();
}

rl.on("line", (input) => {
  const [command, ...args] = input.trim().split(" ");
  processCommand(command, args);
});

console.log(chalk.cyan("- - - - - - - - - - - - - - - - - - - -"));
console.log(chalk.yellow.bold("Welcome to the CLI-Mood!"));
console.log(
  chalk.magenta('\nEnter a command or type "help" for available commands.\n')
);
console.log(chalk.cyan("- - - - - - - - - - - - - - - - - - - -"));
rl.prompt();
