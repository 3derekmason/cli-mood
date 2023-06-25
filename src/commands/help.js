import chalk from "chalk";

export function showHelp() {
  const helpData = [
    {
      Command: "add <value> <desc> <activity>",
      Description: "Create a new item",
    },
    {
      Command: "read <range>",
      Description: "Read items. Keys: wk (week), mo (month), day (day)",
    },
    {
      Command: "update <index> <value> <desc> <activity>",
      Description: "Update an item at index",
    },
    {
      Command: "delete <index>",
      Description: "Delete an item at index",
    },
    {
      Command: "avg/n <range>",
      Description: "Calculate average. Keys: wk (week), mo (month), day (day)",
    },
    {
      Command: "act <activity>",
      Description: "Read items for a specific activity",
    },
    { Command: "help", Description: "Show available commands" },
    { Command: "exit", Description: "Exit the application" },
  ];
  console.log(chalk.magenta("- - - - - - - - - - - - - - - - - - - -"));
  console.log("Available commands:");
  console.table(helpData);
  console.log(chalk.magenta("- - - - - - - - - - - - - - - - - - - -"));
}
