import { saveItems, items, loadItems } from "../database.js";
import chalk from "chalk";

export function updateItem(index, newValue, newDesc, newActivity) {
  loadItems();

  if (index < 0 || index >= items.length) {
    console.log(chalk.red("- - - - - - - - - - - - - - - - - - - -"));
    console.log("Invalid index.");
    console.log(chalk.red("- - - - - - - - - - - - - - - - - - - -"));
    return;
  }

  const item = items[index];
  item.value = Number(newValue);
  item.desc = newDesc;
  item.activity = newActivity;
  saveItems();

  console.log(chalk.green("- - - - - - - - - - - - - - - - - - - -"));
  console.log("Item updated successfully.");
  console.log(chalk.green("- - - - - - - - - - - - - - - - - - - -"));
}
