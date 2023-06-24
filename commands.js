import fs from "fs";
import { filterItemsByTimeRange, getUniqueActivities } from "./utils.js";
import { dbFilePath, saveItems, items, loadItems } from "./database.js";

export function createItem(value, desc, activity) {
  loadItems();

  const newItem = {
    value: Number(value),
    desc,
    activity,
    created_at: new Date().toISOString(),
  };

  items.push(newItem);
  saveItems();

  console.log("\n\nItem created successfully.");
}

export function readItems(range = "") {
  loadItems();

  let itemsToDisplay = items;

  if (range) {
    itemsToDisplay = filterItemsByTimeRange(range);
  }

  if (itemsToDisplay.length === 0) {
    console.log("No items found.");
  } else {
    const formattedItems = itemsToDisplay.map((item) => ({
      ...item,
      created_at: new Date(item.created_at).toLocaleString(),
    }));
    console.log("\n\n");
    console.table(formattedItems, ["value", "desc", "activity", "created_at"]);
  }
}

export function readItemsByActivity(activity) {
  loadItems();

  const itemsToDisplay = items.filter((item) => item.activity === activity);

  if (itemsToDisplay.length === 0) {
    console.log(`No items found for activity: ${activity}`);
  } else {
    const formattedItems = itemsToDisplay.map((item) => ({
      ...item,
      created_at: new Date(item.created_at).toLocaleString(),
    }));
    console.log("\n\n");
    console.table(formattedItems, ["value", "desc", "activity", "created_at"]);
  }
}

export function updateItem(index, newValue, newDesc, newActivity) {
  loadItems();

  if (index < 0 || index >= items.length) {
    console.log("\n\nInvalid index.");
    return;
  }

  const item = items[index];
  item.value = Number(newValue);
  item.desc = newDesc;
  item.activity = newActivity;
  saveItems();

  console.log("\n\nItem updated successfully.");
}

export function deleteItem(index) {
  loadItems();

  if (index < 0 || index >= items.length) {
    console.log("\n\nInvalid index.");
    return;
  }

  items.splice(index, 1);
  saveItems();

  console.log("\n\nItem deleted successfully.");
}

export function calculateAverage() {
  loadItems();

  if (items.length === 0) {
    console.log("\n\nNo items found.");
  } else {
    const totalValue = items.reduce((sum, item) => sum + item.value, 0);
    const average = totalValue / items.length;

    console.log("\n\nAverage:");
    console.table([average.toFixed(2)]);
  }
}

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

export function listActivities() {
  const activities = getUniqueActivities(items);

  console.log("\n\nActivities:");
  if (activities.length > 0) {
    console.table(activities);
  } else {
    console.log("\nNo activities found.");
  }
  console.log();
}

export function actCommand(activity) {
  if (!activity) {
    listActivities();
  } else {
    readItemsByActivity(activity);
  }
}
