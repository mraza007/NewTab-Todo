# Todo New Tab Extension

Todo New Tab is a browser extension that replaces your new tab page with a simple, elegant todo list. It allows you to manage your daily tasks efficiently while providing a clean, distraction-free interface.


### LINK TO THE EXTENSION: [Todo New Tab](https://addons.mozilla.org/en-US/firefox/addon/new-tab-todo-app/)

## Features

- Replace new tab page with a todo list
- Add, edit, and delete tasks
- Mark tasks as completed

## Installation

1. Clone this repository or download the source code.
2. Open your browser's extension page:
   - For Firefox: Navigate to `about:addons`
3. Enable "Developer mode" (usually a toggle in the top right corner).
4. Click `Load Temporary Add-on` (Firefox).
5. Select the directory containing the extension files.

## Usage

1. Open a new tab in your browser.
2. You'll see the current date and time at the top of the page.
3. To add a new task, type it into the input field and press Enter.
4. To mark a task as completed, click the circle next to the task.
5. To edit a task, click the `edit` button or directly click on the task text.
6. To delete a task, click the `×` button.

## File Structure

- `index.html`: The main HTML structure of the new tab page
- `styles.css`: CSS styles for the todo list and overall layout
- `script.js`: JavaScript code for todo list functionality
- `manifest.json`: Extension manifest file

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Browser Storage API

## Browser Compatibility

This extension is designed to work with:

- Mozilla Firefox

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).


_Note: This extension was inspired by [this](https://chromewebstore.google.com/detail/todo-tab/ljkjodkdilmmlaiphehiceeblnnndhnd?hl=en)._