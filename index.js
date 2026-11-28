const cells = document.querySelectorAll("td");

cells.forEach(function(cell) {
    if (cell.cellIndex !== 0) {
        cell.contentEditable = "true";

        cell.addEventListener("blur", function () {
            const text = cell.textContent;
            cell.style.backgroundColor = "";
            cell.style.textDecoration = "";

            if (text.includes("בוטל") || text.includes("נדחה")){
                cell.style.backgroundColor = "red";
                cell.style.textDecoration = "line-through";
            }
            else if (text.includes("לימודים")) {
                cell.style.backgroundColor = "lightblue";
            } else if (text.includes("עבודה")) {
                cell.style.backgroundColor = "lightgreen";
            } else if (text.includes("פנאי")) {
                cell.style.backgroundColor = "lightcoral";
            }
        });
    }
});