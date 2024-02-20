import {
  time,
  selectElement,
  timeZoneElement,
  intervalChange,
} from "./src/worldClock.js";
import { timerBtn, timer, intervalCount } from "./src/timer.js";
import {
  swStartBtnS,
  swStartBtn,
  swLapBtnS,
  swLapBtn,
  swInterval,
  loadItemsFromLocalStorage,
} from "./src/stopWatch.js";

timerBtn.addEventListener("click", timer);
selectElement.oninput = () => time();
swStartBtn.addEventListener("click", swStartBtnS);
swLapBtn.addEventListener("click", swLapBtnS);
loadItemsFromLocalStorage();

function showWorld() {
  document.getElementById("worldclock").style.display = "block";
  document.getElementById("timer").style.display = "none";
  document.getElementById("stopwatch").style.display = "none";

  document.getElementById("timerIcon").style.boxShadow = "none";
  document.getElementById("stopwatchIcon").style.boxShadow = "none";
  resetClock();
}
function showTimer() {
  document.getElementById("timer").style.display = "flex";
  document.getElementById("timer").style.flexDirection = "column";
  document.getElementById("timer").style.alignItems = "center";
  document.getElementById("timer").style.justifyContent = "center";
  document.getElementById("currentTime").style.paddingTop = "120px";

  document.getElementById("worldclock").style.display = "none";
  document.getElementById("stopwatch").style.display = "none";

  document.getElementById("worldIcon").style.boxShadow = "none";
  document.getElementById("stopwatchIcon").style.boxShadow = "none";
  resetClock();
}
function showStopWatch() {
  document.getElementById("stopwatch").style.display = "block";
  document.getElementById("worldclock").style.display = "none";
  document.getElementById("timer").style.display = "none";
  document.querySelector(".swListWrap").style.display = "block";
  document.getElementById("currentTime").style.paddingTop = "0px";

  document.getElementById("worldIcon").style.boxShadow = "none";
  document.getElementById("timerIcon").style.boxShadow = "none";
  resetClock();
}
function resetClock() {
  timeZoneElement.innerText = new Date().toLocaleString(
    "en-us",
    { timeStyle: "short" },
    { dateStyle: "short" }
  );
  clearInterval(intervalCount);
  clearInterval(intervalChange);
  clearInterval(swInterval);
  timerBtn.disabled = false;
}
// Function to clear local storage

document
  .getElementById("worldClockSection")
  .addEventListener("click", showWorld);
document.getElementById("timerSection").addEventListener("click", showTimer);
document
  .getElementById("stopwatchSection")
  .addEventListener("click", showStopWatch);

// Get the current date and time in Israel's timezone
const israelCurrentDateTime = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Jerusalem",
});

// Display the formatted time in the specified element
document.getElementById("current_timezone").textContent = israelCurrentDateTime;
