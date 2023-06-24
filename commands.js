import fs from "fs";
import { filterItemsByTimeRange } from "./utils.js";
import { dbFilePath, saveItems, items } from "./database.js";

export function createItem(value, desc, activity) {
  const newItem = {
    id: items.length + 1,
    value: Number(value),
    desc,
    activity,
    created_at: new Date().toISOString(),
  };
  items.push(newItem);
  saveItems();
  console.log(`Item created with id: ${newItem.id}`);
}

export function readItems(range = "") {
  let itemsToDisplay = items;
  if (range) {
    itemsToDisplay = filterItemsByTimeRange(range);
  }

  console.log("Items in the database:");
  itemsToDisplay.forEach((item) => {
    console.log(
      `ID: ${item.id}, Value: ${item.value}, Description: ${item.desc}, Activity: ${item.activity}, Created At: ${item.created_at}`
    );
  });
}

export function updateItem(index, newValue, newDesc, newActivity) {
  if (index >= 0 && index < items.length) {
    items[index].value = Number(newValue);
    items[index].desc = newDesc;
    items[index].activity = newActivity;
    saveItems();
    console.log(`Item at index ${index} updated.`);
  } else {
    console.log(`Invalid index. Item at index ${index} does not exist.`);
  }
}

export function deleteItem(index) {
  if (index >= 0 && index < items.length) {
    const deletedItem = items.splice(index, 1)[0];
    saveItems();
    console.log(`Item at index ${index} deleted: ${deletedItem.value}`);
  } else {
    console.log(`Invalid index. Item at index ${index} does not exist.`);
  }
}
