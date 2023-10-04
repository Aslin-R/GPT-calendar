
        // Get the current date
const currentDate = new Date();

// Function to render the calendar for a given month and year
function renderCalendar(year, month) {
    const calendarBody = document.getElementById("calendar-body");
    const currentMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = currentMonth.getDay();

    // Clear the calendar
    calendarBody.innerHTML = '';

    // Fill in the previous month's days if necessary
    for (let i = 0; i < firstDayOfWeek; i++) {
        const cell = document.createElement("td");
        cell.textContent = '';
        calendarBody.appendChild(cell);
    }

    // Fill in the current month's days
    for (let day = 1; day <= lastDayOfMonth; day++) {
        const cell = document.createElement("td");
        cell.textContent = day;
        calendarBody.appendChild(cell);
    }
}

// Event listeners for changing the month
document.getElementById("prev-month").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

document.getElementById("next-month").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

// Initial rendering
renderCalendar(currentDate.getFullYear(), currentDate.getMonth());

