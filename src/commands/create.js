import { saveItems, items, loadItems } from "../database.js";
import chalk from "chalk";

export function createItem(value, desc, activity) {
  if (value > 10 || value < 0 || typeof value != "number") {
    console.log(chalk.red("\n Value must be a number between 1 - 10\n"));
    return;
  }
  loadItems();

  let description = desc;

  if (description.includes("_")) {
    description = description.split("_").join(" ");
  }

  const newItem = {
    value: Number(value),
    desc: description,
    activity,
    created_at: new Date().toISOString(),
  };

  items.push(newItem);
  saveItems();
  newItem.created_at = new Date().toLocaleString();

  console.log(chalk.green("- - - - - - - - - - - - - - - - - - - -"));
  console.log("Item created successfully.\n");
  console.log(newItem);
  console.log(chalk.green("- - - - - - - - - - - - - - - - - - - -"));
}
