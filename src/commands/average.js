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
  console.log(`${range ? `(${range})` : "(all time)"} average:`);

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
  console.log(chalk.blue("- - - - - - - - - - - - - - - - - - - -"));
}
