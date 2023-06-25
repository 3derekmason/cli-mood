import { saveItems, items, loadItems } from "../database.js";
import chalk from "chalk";

export function createItem(value, desc, activity) {
  loadItems();

  const newItem = {
    value: Number(value),
    desc,
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
