const timerScreen = document.querySelector(".timer");
const btnStart = document.querySelector(".btn_start");
const btnStop = document.querySelector(".btn_stop");
let startTime = 0;
let elapsedTime = 0;
let timerWork;

btnStart.addEventListener("click", () => {
  if (!timerWork) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 1000);
  }
});
function updateTimer() {
  let timer = new Date();
  elapsedTime = timer - startTime;
  let allsecond = Math.floor(elapsedTime / 1000);
  let min = Math.floor(elapsedTime / (1000 * 60));
  let sec = allsecond % 60;
  let presentMinandSec = `${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
  timerScreen.textContent = presentMinandSec;
}
