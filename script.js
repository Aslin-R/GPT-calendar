// JavaScript to populate calendar dates and navigate months

const calendarDates = document.getElementById('calendar-dates');
const currentYearElement = document.getElementById('current-year');
const currentMonthElement = document.getElementById('current-month');

const navArrows = document.querySelector('.nav-arrows');
const prevMonthArrow = document.querySelector('.prev-month');
const nextMonthArrow = document.querySelector('.next-month');

const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
];

const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
let currentDate = today.getDate();

currentYearElement.textContent = currentYear;
currentMonthElement.textContent = monthNames[currentMonth];

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
        if (day === currentDate && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
            dateCell.classList.add('current-date'); // Highlight the current date
        }
        calendarDates.appendChild(dateCell);
    }
}

generateCalendar();

// Function to navigate to the previous month
function previousMonth() {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    updateCalendar();
}

// Function to navigate to the next month
function nextMonth() {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    updateCalendar();
}

// Function to update the calendar when navigating
function updateCalendar() {
    currentYearElement.textContent = currentYear;
    currentMonthElement.textContent = monthNames[currentMonth];
    generateCalendar();
}
