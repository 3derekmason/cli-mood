import { filterItemsByTimeRange } from "../utils.js";
import { items, loadItems } from "../database.js";

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
