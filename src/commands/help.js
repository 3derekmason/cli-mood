export function showHelp() {
  const helpData = [
    {
      Command: "create <value> <desc> <activity>",
      Description: "Create a new item",
    },
    {
      Command: "read [<range>]",
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
    { Command: "avg", Description: "Calculate the average value of all items" },
    {
      Command: "act <activity>",
      Description: "Read items for a specific activity",
    },
    { Command: "help", Description: "Show available commands" },
    { Command: "exit", Description: "Exit the application" },
  ];

  console.log("\n\nAvailable commands:");
  console.table(helpData);
}
