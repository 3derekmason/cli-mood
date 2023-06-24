import { saveItems, items, loadItems } from "../database.js";

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
