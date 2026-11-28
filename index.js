const cells = document.querySelectorAll("td");

// 1. פונקציה אחת לצביעה (במקום הקוד שהיה בתוך blur)
function colorCell(cell) {
    const text = cell.textContent;
    cell.style.backgroundColor = "";
    cell.style.textDecoration = "";

    if (text.includes("בוטל") || text.includes("נדחה")) {
        cell.style.backgroundColor = "red";
        cell.style.textDecoration = "line-through";
    } else if (text.includes("לימודים")) {
        cell.style.backgroundColor = "lightblue";
    } else if (text.includes("עבודה")) {
        cell.style.backgroundColor = "lightgreen";
    } else if (text.includes("פנאי")) {
        cell.style.backgroundColor = "lightcoral";
    }
}

// 2. תאים שאפשר לערוך (בלי עמודת השעות)
const editableCells = [];
cells.forEach(function (cell) {
    if (cell.cellIndex !== 0) {
        cell.contentEditable = "true";
        editableCells.push(cell);

        cell.addEventListener("blur", function () {
            colorCell(cell);
            saveSchedule();
        });
    }
});

// 3. מזהה השבוע: התאריך של יום ראשון האחרון
function getWeekId() {
    const d = new Date();
    d.setDate(d.getDate() - d.getDay());
    return d.toDateString();
}

// 4. שמירה
function saveSchedule() {
    const data = editableCells.map(function (cell) {
        return cell.textContent;
    });
    localStorage.setItem("schedule", JSON.stringify(data));
    localStorage.setItem("weekId", getWeekId());
}

// 5. טעינה (ואיפוס אם השבוע התחלף)
function loadSchedule() {
    const saved = localStorage.getItem("schedule");
    const savedWeek = localStorage.getItem("weekId");

    if (saved === null || savedWeek !== getWeekId()) {
        saveSchedule();
        return;
    }

    const data = JSON.parse(saved);
    editableCells.forEach(function (cell, i) {
        cell.textContent = data[i] || "";
        colorCell(cell);
    });
}

// 6. נקה הכל (עכשיו גם מעדכן את השמירה)
document.getElementById("clearBtn").addEventListener("click", function () {
    editableCells.forEach(function (cell) {
        cell.textContent = "";
        colorCell(cell);
    });
    saveSchedule();
});

loadSchedule();