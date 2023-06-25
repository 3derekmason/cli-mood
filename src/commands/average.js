import { filterItemsByTimeRange, calculateAverageValue } from "../utils.js";
import { items } from "../database.js";
import chalk from "chalk";

export function calculateAverage(range) {
  let filteredItems = items;

  if (range) {
    filteredItems = filterItemsByTimeRange(range);
  }

  const average = calculateAverageValue(filteredItems);

  console.log(chalk.blue("- - - - - - - - - - - - - - - - - - - -"));
  console.log(`Average for ${range ? `(${range})` : "(all time)"}:`);
  console.log(chalk.bold(`\n     ${average.toFixed(2)}`));
  console.log(chalk.blue("- - - - - - - - - - - - - - - - - - - -"));
}
