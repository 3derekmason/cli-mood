import { getUniqueActivities } from "../utils.js";
import { items, loadItems } from "../database.js";

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
