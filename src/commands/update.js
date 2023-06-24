import { saveItems, items, loadItems } from "../database.js";

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
