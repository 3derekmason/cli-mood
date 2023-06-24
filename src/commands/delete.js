import { saveItems, items, loadItems } from "../database.js";
import chalk from "chalk";

export function deleteItem(index) {
  loadItems();

  if (index < 0 || index >= items.length) {
    console.log(chalk.red("- - - - - - - - - - - - - - - - - - - -"));
    console.log("Invalid index.");
    console.log(chalk.red("- - - - - - - - - - - - - - - - - - - -"));
    return;
  }

  items.splice(index, 1);
  saveItems();

  console.log(chalk.red("- - - - - - - - - - - - - - - - - - - -"));
  console.log("Item deleted successfully.");
  console.log(chalk.red("- - - - - - - - - - - - - - - - - - - -"));
}
