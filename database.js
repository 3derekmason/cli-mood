import fs from "fs";

export const dbFilePath = "data.json";

export let items = [];

export function loadItems() {
  try {
    const data = fs.readFileSync(dbFilePath, "utf8");
    items = JSON.parse(data);
  } catch (err) {
    items = [];
  }
}

export function saveItems() {
  const data = JSON.stringify(items);
  fs.writeFileSync(dbFilePath, data, "utf8");
}
