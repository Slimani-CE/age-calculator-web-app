// ********* CONSTANT AND GLOBAL VARIABLES ********* //
// Inputs
let yearInput = document.getElementById("year-input");
let monthInput = document.getElementById("month-input");
let dayInput = document.getElementById("day-input");

// Input error spans
let yearInputErrorSpan = document.getElementById("year-input-error");
let monthInputErrorSpan = document.getElementById("month-input-error");
let dayInputErrorSpan = document.getElementById("day-input-error");

// Input containers
let yearInputContainer = document.getElementById("year-input-div");
let monthInputContainer = document.getElementById("month-input-div");
let dayInputContainer = document.getElementById("day-input-div");

function calculate() {
  let isValid = true;

  // Check if inputs are not empty
  console.log(yearInput.value);
  if (yearInput.value === "") {
    yearInputContainer.classList.add("error");
    yearInputErrorSpan.innerHTML = "This field is required";
    isValid = false;
  } else {
    yearInputContainer.classList.remove("error");
  }

  if (monthInput.value === "") {
    monthInputContainer.classList.add("error");
    monthInputErrorSpan.innerHTML = "This field is required";
    isValid = false;
  } else {
    monthInputContainer.classList.remove("error");
  }

  if (dayInput.value === "") {
    dayInputContainer.classList.add("error");
    dayInputErrorSpan.innerHTML = "This field is required";
    isValid = false;
  } else {
    dayInputContainer.classList.remove("error");
  }

  //   Check if inputs are valid
  if (
    yearInput.value > new Date().getFullYear() ||
    !isValidDate(
      yearInput.value + "-" + monthInput.value + "-" + dayInput.value
    ) ||
    new Date(
      yearInput.value + "-" + monthInput.value + "-" + dayInput.value
    ).getTime() > new Date().getTime()
  ) {
    yearInputContainer.classList.add("error");
    yearInputErrorSpan.innerHTML = "Must be in the past";
    isValid = false;
  } else {
    yearInputContainer.classList.remove("error");
  }

  if (
    monthInput.value < 1 ||
    monthInput.value > 12 ||
    new Date(
      yearInput.value + "-" + monthInput.value + "-" + dayInput.value
    ).getTime() > new Date().getTime()
  ) {
    monthInputContainer.classList.add("error");
    monthInputErrorSpan.innerHTML = "Must be a valid month";
    isValid = false;
  } else {
    monthInputContainer.classList.remove("error");
  }

  if (
    !isValidDate(
      yearInput.value + "-" + monthInput.value + "-" + dayInput.value
    ) ||
    new Date(
      yearInput.value + "-" + monthInput.value + "-" + dayInput.value
    ).getTime() > new Date().getTime()
  ) {
    dayInputContainer.classList.add("error");
    dayInputErrorSpan.innerHTML = "Must be a valid day";
    isValid = false;
  } else {
    dayInputContainer.classList.remove("error");
  }

  // If all inputs are valid calculate and display the result
  if (isValid) {
  }
}

function isValidDate(dateString) {
  // Extract year, month, and day from the date string
  const [year, month, day] = dateString.split("-").map(Number);

  // Try to create a Date object
  const date = new Date(year, month - 1, day); // Note: months are zero-based in JavaScript Dates

  // Check if the Date object is valid
  // and if the input date string matches the parsed date (to handle cases like "2020-02-30")
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day &&
    !isNaN(date.getTime())
  );
}

// Example usage:
const validDate = isValidDate("2023-9-29"); // true
const invalidDate = isValidDate("2023-02-30"); // false
