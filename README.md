# random-color
---
This code allows you to randomly change background color of a cell or a range in Google Sheet.
## How to use it ?
- Go to your Google spreadsheet and open `Extensions` > `App Script`
- Copy `code.gs` and paste it in a new file after removing the existing code
- Copy this code to execute the function from the user interface
```javascript
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('My new tab')//You can change your tab name here
    .addItem('Generate random color', 'randomColor')
    .addToUi();
}
```
- Save and execute
- After authorizing, go back to your spreadsheet and refresh the page to see your new tab
