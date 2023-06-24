import { getUniqueActivities } from "../utils.js";
import { items, loadItems } from "../database.js";
import chalk from "chalk";

export function readItemsByActivity(activity) {
  loadItems();

  const itemsToDisplay = items.filter((item) => item.activity === activity);

  if (itemsToDisplay.length === 0) {
    console.log(chalk.red("- - - - - - - - - - - - - - - - - - - -"));
    console.log(`No items found for activity: ${activity}`);
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

export function listActivities() {
  const activities = getUniqueActivities(items);

  console.log(chalk.yellow("- - - - - - - - - - - - - - - - - - - -"));
  console.log("Activities:");
  if (activities.length > 0) {
    console.table(activities);
  } else {
    console.log("No activities found.");
  }
  console.log(chalk.yellow("- - - - - - - - - - - - - - - - - - - -"));
}

export function actCommand(activity) {
  if (!activity) {
    listActivities();
  } else {
    readItemsByActivity(activity);
  }
}
