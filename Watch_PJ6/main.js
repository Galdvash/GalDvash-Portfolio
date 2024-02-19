import { time, selectElement, timeZoneElement, intervalChange } from "";
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
  document.getElementById("worldIcon").style.boxShadow = "5px 5px 15px #000";
  document.getElementById("timerIcon").style.boxShadow = "none";
  document.getElementById("stopwatchIcon").style.boxShadow = "none";
  resetClock();
}
function showTimer() {
  document.getElementById("timer").style.display = "flex";
  document.getElementById("worldclock").style.display = "none";
  document.getElementById("stopwatch").style.display = "none";
  document.getElementById("timerIcon").style.boxShadow = "5px 5px 15px #000";
  document.getElementById("worldIcon").style.boxShadow = "none";
  document.getElementById("stopwatchIcon").style.boxShadow = "none";
  resetClock();
}
function showStopWatch() {
  document.getElementById("stopwatch").style.display = "flex";
  document.getElementById("stopwatch").style.flexDirection = "column";
  document.getElementById("worldclock").style.display = "none";
  document.getElementById("timer").style.display = "none";
  document.getElementById("stopwatchIcon").style.boxShadow =
    "5px 5px 15px #000";
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

document
  .getElementById("worldClockSection")
  .addEventListener("click", showWorld);
document.getElementById("timerSection").addEventListener("click", showTimer);
document
  .getElementById("stopwatchSection")
  .addEventListener("click", showStopWatch);
