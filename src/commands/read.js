import { filterItemsByTimeRange } from "../utils.js";
import { items, loadItems } from "../database.js";
import chalk from "chalk";

export function readItems(range = "") {
  loadItems();

  let itemsToDisplay = items;
  if (range) {
    if (range === "last") {
      const lastAdded = itemsToDisplay[itemsToDisplay.length - 1];
      const lastEntry = {
        value: lastAdded.value,
        desc: lastAdded.desc,
        activity: lastAdded.activity,
        created_at: new Date(lastAdded.created_at).toLocaleString(),
      };
      console.log(chalk.yellow("- - - - - - - - - - - - - - - - - - - -"));
      console.table(lastEntry);
      console.log(chalk.yellow("- - - - - - - - - - - - - - - - - - - -"));
      return;
    }
    itemsToDisplay = filterItemsByTimeRange(range);
  }

  if (itemsToDisplay.length === 0) {
    console.log(chalk.red("- - - - - - - - - - - - - - - - - - - -"));
    console.log("No items found.");
    console.log(chalk.red("- - - - - - - - - - - - - - - - - - - -"));
  } else {
    const formattedItems = itemsToDisplay.map((item) => ({
      ...item,
      created_at: new Date(item.created_at).toLocaleString(),
    }));
    console.log(chalk.yellow("- - - - - - - - - - - - - - - - - - - -"));
    console.table(formattedItems, ["value", "desc", "activity", "created_at"]);
    console.log(chalk.yellow("- - - - - - - - - - - - - - - - - - - -"));
  }
}
