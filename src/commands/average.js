import { items, loadItems } from "../database.js";

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
