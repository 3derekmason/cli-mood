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

  let newDescription = newDesc;

  if (newDescription.includes("_")) {
    newDescription = newDescription.split("_").join(" ");
  }

  const item = items[index];
  item.value = Number(newValue);
  item.desc = newDescription;
  item.activity = newActivity;
  saveItems();

  console.log(chalk.green("- - - - - - - - - - - - - - - - - - - -"));
  console.log("Item updated successfully.");
  console.log(chalk.green("- - - - - - - - - - - - - - - - - - - -"));
}
