import { saveItems, items, loadItems } from "../database.js";

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
