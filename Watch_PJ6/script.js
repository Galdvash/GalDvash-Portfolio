// Timer
const btnStart = document.querySelector(".btn_start");
const btnRestart = document.querySelector(".btn_restart");
const btnDelete = document.querySelector(".btn_delete"); // New delete button
const divScreen = document.querySelector(".timer");
const output = document.querySelector(".output");
let inputMin = document.getElementById("inputMin");
let inputSec = document.getElementById("inputSec");
let intervalChange = null;

// Function to start the timer with initial input values
function startTimerFromInitialInput() {
  clearInterval(intervalChange); // Clear any existing interval

  let min = parseInt(inputMin.value);
  let sec = parseInt(inputSec.value);
  let totalSec = min * 60 + sec;

  if (totalSec > 0) {
    intervalChange = setInterval(() => {
      if (totalSec <= 0) {
        clear();
      } else {
        const displayMin = Math.floor(totalSec / 60);
        const displaySec = Math.floor(totalSec % 60);
        output.innerHTML = `${String(displayMin).padStart(2, "0")}:${String(
          displaySec
        ).padStart(2, "0")}`;
        totalSec--;
        btnStart.disabled = true;
      }
    }, 1000);
  } else {
    alert("Please enter a valid time.");
  }
}

// Event listener for the start button
btnStart.addEventListener("click", () => {
  startTimerFromInitialInput(); // Start the timer
});

// Event listener for the restart button
btnRestart.addEventListener("click", () => {
  startTimerFromInitialInput(); // Restart the timer from the initial input values
});

// Event listener for the delete button
btnDelete.addEventListener("click", () => {
  clearInterval(intervalChange); // Stop the timer
  inputMin.value = ""; // Clear minutes input
  inputSec.value = ""; // Clear seconds input
  output.innerHTML = "00:00"; // Reset timer display
  btnStart.disabled = false; // Enable the start button
});

// Function to clear the interval and show a message when the timer is over
function clear() {
  clearInterval(intervalChange);
  alert("Timer Over");
  btnStart.disabled = false;
}

const img = document.querySelector(".list_item img");
const text = document.querySelector(".list_item p");
