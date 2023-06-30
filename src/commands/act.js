import { calculateAverageValue, getUniqueActivities } from "../utils.js";
import { items, loadItems } from "../database.js";
import chalk from "chalk";

export function readItemsByActivity(activity) {
  loadItems();

  const itemsToDisplay = items.filter((item) => item.activity === activity);
  const average = calculateAverageValue(itemsToDisplay);

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
    console.log(chalk.bold(`\n Average for this activity:`));
    if (average >= 0 && average < 2) {
      console.log(chalk.hex("#ef4444").bold(`\n     ${average.toFixed(2)}`));
    }
    if (average >= 2 && average < 4) {
      console.log(chalk.hex("#f97316").bold(`\n     ${average.toFixed(2)}`));
    }
    if (average >= 4 && average < 6) {
      console.log(chalk.hex("#eab308").bold(`\n     ${average.toFixed(2)}`));
    }
    if (average >= 6 && average < 8) {
      console.log(chalk.hex("#84cc16").bold(`\n     ${average.toFixed(2)}`));
    }
    if (average >= 8) {
      console.log(chalk.hex("#22c55e").bold(`\n     ${average.toFixed(2)}`));
    }
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
