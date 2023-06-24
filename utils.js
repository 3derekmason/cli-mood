import moment from "moment";
import { items } from "./database.js";

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
