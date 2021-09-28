var leapYearInput = document.querySelector(".leap-year-input");
var buttonCheckLeapYear = document.querySelector(".btn-check-leap-year");
var output = document.querySelector(".output");

buttonCheckLeapYear.addEventListener("click", clickHandler);

function clickHandler() {
  var yearToBeChecked = Number(leapYearInput.value);
  console.log(yearToBeChecked);
  if (yearToBeChecked % 4 != 0) {
    output.innerText = "Not a leap year";
  } else if (yearToBeChecked % 100 != 0) {
    output.innerText = "This is a leap year";
  } else if (yearToBeChecked % 400 !== 0) {
    output.innerText = "Not a leap year";
  } else {
    output.innerText = "This is a leap year";
  }
}
