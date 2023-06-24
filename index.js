import readline from "readline";
import fs from "fs";
import moment from "moment";

const dbFilePath = "./data.json";

// Load the existing items from the database
let items = [];
if (fs.existsSync(dbFilePath)) {
  const data = fs.readFileSync(dbFilePath, "utf8");
  items = JSON.parse(data);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function saveItems() {
  fs.writeFileSync(dbFilePath, JSON.stringify(items), "utf8");
}

function createItem(value, desc, activity) {
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

function filterItemsByTimeRange(range) {
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

function readItems(range = "") {
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

function updateItem(index, newValue, newDesc, newActivity) {
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

function deleteItem(index) {
  if (index >= 0 && index < items.length) {
    const deletedItem = items.splice(index, 1)[0];
    saveItems();
    console.log(`Item at index ${index} deleted: ${deletedItem.value}`);
  } else {
    console.log(`Invalid index. Item at index ${index} does not exist.`);
  }
}

rl.setPrompt("Enter a command (create, read, update, delete, exit): ");
rl.prompt();

rl.on("line", (input) => {
  const [command, ...args] = input.trim().split(" ");

  switch (command) {
    case "create":
      const [value, desc, ...activityParts] = args;
      const activity = activityParts.join(" ");
      createItem(value, desc, activity);
      break;
    case "read":
      const [range] = args;
      readItems(range);
      break;
    case "update":
      const [indexToUpdate, newValue, newDesc, ...newActivityParts] = args;
      const newActivity = newActivityParts.join(" ");
      const itemIndexToUpdate = parseInt(indexToUpdate, 10);
      updateItem(itemIndexToUpdate, newValue, newDesc, newActivity);
      break;
    case "delete":
      const indexToDelete = parseInt(args[0], 10);
      deleteItem(indexToDelete);
      break;
    case "exit":
      rl.close();
      break;
    default:
      console.log("Invalid command. Please try again.");
  }

  rl.prompt();
});

rl.on("close", () => {
  console.log("Exiting the application.");
  process.exit(0);
});
