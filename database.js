import fs from "fs";

export const dbFilePath = "./data.json";

// Load the existing items from the database
export let items = [];
if (fs.existsSync(dbFilePath)) {
  const data = fs.readFileSync(dbFilePath, "utf8");
  items = JSON.parse(data);
}

export function saveItems() {
  fs.writeFileSync(dbFilePath, JSON.stringify(items), "utf8");
}
