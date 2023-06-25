import moment from "moment";
import { items } from "./database.js";

export function calculateAverageValue(items) {
  if (items.length === 0) {
    return 0;
  }

  const total = items.reduce((sum, item) => sum + item.value, 0);
  return total / items.length;
}

export function filterItemsByTimeRange(range) {
  const currentDate = moment();
  let startDate;

  switch (range) {
    case "wk":
      startDate = currentDate.clone().subtract(1, "week");
      break;
    case "mo":
      startDate = currentDate.clone().subtract(1, "month");
      break;
    case "day":
      startDate = currentDate.clone().subtract(1, "day");
      break;
    default:
      return items;
  }

  return items.filter((item) => {
    const itemDate = moment(item.created_at);
    return itemDate.isBetween(startDate, currentDate);
  });
}

export function getUniqueActivities(items) {
  const activities = new Set();

  items.forEach((item) => {
    activities.add(item.activity);
  });

  return Array.from(activities);
}
