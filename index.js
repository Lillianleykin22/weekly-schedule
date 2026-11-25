const cells = document.querySelectorAll("td");

cells.forEach(function(cell) {
    if (cell.cellIndex !== 0) {
        cell.contentEditable = "true";

        cell.addEventListener("blur", function() {
            const text = cell.textContent;

            if (text.includes("לימודים")) {
                cell.style.backgroundColor = "lightblue";
            } else if (text.includes("עבודה")) {
                cell.style.backgroundColor = "lightgreen";
            } else if (text.includes("פנאי")) {
                cell.style.backgroundColor = "lightcoral";
            } else {
                cell.style.backgroundColor = "";
            }
        });
    }
});