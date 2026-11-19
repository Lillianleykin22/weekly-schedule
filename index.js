const cells = document.querySelectorAll("td");
const buttons = document.querySelectorAll(".color-btn");
let selectedColor = "";

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        selectedColor = button.dataset.color;
        console.log(selectedColor);
    });
});

cells.forEach(function(cell) {
    if (cell.cellIndex !== 0) {
        cell.contentEditable = "true";

        cell.addEventListener("click", function() {
            if (selectedColor !== "") {
                cell.style.backgroundColor = selectedColor;
            }
        });
    }
});