# Excel Export
Export an HTML table to an Excel file using PHP and jQuery with just a single line of code:

```javascript
$('#mytable').export({filename:'sample.xls',scriptPath:'../src/export.php'});
```

You just need to include the `export.js` file.

## Table classes

You can add classes to rows and cells to allow for greater control of how the data is exported.

| Class name | Applies to | Description |
| ---------- | ---------- | ----------- |
| `export-ignore` | `tr`, `th` and `td` | Ignores this data when exporting |
| `export-type-date` | `th` and `td` | Formats the value as a date in Excel |
| `export-protected` | `th` and `td` | Ensures data is exported correctly (such as when a number begins with a 0, for instance) |
| `export-text` | Any tag within a `th` or `td` | Exports only this text for the cell |
