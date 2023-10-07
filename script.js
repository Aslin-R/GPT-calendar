// JavaScript to populate calendar dates

const calendarDates = document.getElementById('calendar-dates');
const currentYearElement = document.getElementById('current-year');

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();

currentYearElement.textContent = currentYear;

function generateCalendar() {
    // Clear existing dates
    calendarDates.innerHTML = '';

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    for (let i = 0; i < firstDay; i++) {
        // Add empty cells for days before the first day of the month
        const emptyCell = document.createElement('div');
        calendarDates.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateCell = document.createElement('div');
        dateCell.textContent = day;
        calendarDates.appendChild(dateCell);
    }
}

generateCalendar();
