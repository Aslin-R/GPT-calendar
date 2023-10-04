// Get the current month and year
var currDate = new Date();
var currMonth = currDate.getMonth();
var currYear = currDate.getFullYear();

// Display the current month's calendar
renderCalendar(currMonth, currYear);

// Function to render the calendar
function renderCalendar(month, year) {
  // Get the number of days in the month
  var numberOfDaysInMonth = new Date(year, month + 1, 0).getDate();

  // Create a list element to store the days of the month
  var daysList = document.querySelector('.days');
  daysList.innerHTML = '';

  // Iterate over the days of the month and add them to the list element
  for (var i = 1; i <= numberOfDaysInMonth; i++) {
    var dayElement = document.createElement('li');
    dayElement.classList.add('day');
    dayElement.textContent = i;
    daysList.appendChild(dayElement);
  }
}
