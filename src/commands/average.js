import { items, loadItems } from "../database.js";
import chalk from "chalk";

export function calculateAverage() {
  loadItems();

  if (items.length === 0) {
    console.log(chalk.red("- - - - - - - - - - - - - - - - - - - -"));
    console.log("No items found.");
    console.log(chalk.red("- - - - - - - - - - - - - - - - - - - -"));
  } else {
    const totalValue = items.reduce((sum, item) => sum + item.value, 0);
    const average = totalValue / items.length;

    console.log(chalk.blue("- - - - - - - - - - - - - - - - - - - -"));
    console.log("Average:");
    console.table([average.toFixed(2)]);
    console.log(chalk.blue("- - - - - - - - - - - - - - - - - - - -"));
  }
}
