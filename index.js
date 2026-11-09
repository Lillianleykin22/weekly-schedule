const cells = document.querySelectorAll("td");

cells.forEach(function(cell) {
    cell.addEventListener("click", function() {
        if (cell.cellIndex === 0) {
            return;
        }
        const text = prompt("מה יש בשעה הזו?");
        if (text !== null) {
            cell.textContent = text;
        }
    });
});