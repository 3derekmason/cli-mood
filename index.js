import readline from "readline";
import { createItem, readItems, updateItem, deleteItem } from "./commands.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("Enter a command (create, read, update, delete, exit): ");
rl.prompt();

rl.on("line", (input) => {
  const [command, ...args] = input.trim().split(" ");

  switch (command) {
    case "create":
      const [value, desc, ...activityParts] = args;
      const activity = activityParts.join(" ");
      createItem(value, desc, activity);
      break;
    case "read":
      readItems(args[0]);
      break;
    case "update":
      const [indexToUpdate, newValue, newDesc, ...newActivityParts] = args;
      const newActivity = newActivityParts.join(" ");
      const itemIndexToUpdate = parseInt(indexToUpdate, 10);
      updateItem(itemIndexToUpdate, newValue, newDesc, newActivity);
      break;
    case "delete":
      const indexToDelete = parseInt(args[0], 10);
      deleteItem(indexToDelete);
      break;
    case "exit":
      rl.close();
      break;
    default:
      console.log("Invalid command. Please try again.");
  }

  rl.prompt();
});

rl.on("close", () => {
  console.log("Exiting the application.");
  process.exit(0);
});
