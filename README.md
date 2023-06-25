# CLI-Mood

CLI-Mood is a mood tracker that allows users to track their moods and activities from the command line. It provides a simple and convenient way to record how you're feeling and what you're doing at any given moment.

## Features

- Add new entries with your mood and activity information.
- View and filter entries based on time ranges and activities.
- Calculate the average mood value for a given time range.
- Update or delete existing entries.
- User-friendly command-line interface.

## Requirements

To use CLI-Mood, ensure that you have the following installed on your system:

- Node.js (v14 or higher)

## Installation

After cloning this repo into a local directory, simply:

1. Install dependencies

   ```bash
   npm i
   ```

2. and start CLI-Mood

   ```bash
   npm start
   ```

## Available Commands

- **`add`** `<value> <desc> <activity>`

  - Creates a new entry with the specified value, description, and activity.

- **`read`** `<range>`

  - Read entries. Range options: wk (week), mo (month), day (day). _If no range is given, returns all entries._

- **`update`** `<index> <value> <desc> <activity>`

  - Update an entry at the specified index.

- **`delete`** `<index>`

  - Delete an entry at the specified index.

- **`avg`** `<range>`

  - Calculate the average mood value. Range options: wk (week), mo (month), day (day). _If no range is given, returns all time average._

- **`act`** `<activity>`

  - Show entries for a specific activity or list all unique activities if no argument is provided.

- **`help`**

  - Show available commands.

## Contributing

Contributions to CLI-Mood are welcome! If you have any ideas, improvements, or bug fixes, please submit a pull request. For major changes, please open an issue first to discuss the proposed changes.
