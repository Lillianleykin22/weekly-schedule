const cells = document.querySelectorAll("td");

cells.forEach(function(cell) {
    if (cell.cellIndex !== 0) {
        cell.contentEditable = "true";
    }
});