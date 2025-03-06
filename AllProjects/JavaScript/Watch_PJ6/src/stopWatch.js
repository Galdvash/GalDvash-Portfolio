const swStartBtn = document.getElementById("swStartBtn");
const swLapBtn = document.getElementById("swLapBtn");
const swTimer = document.getElementById("currentTime");
const swList = document.getElementById("swList");
let counter = 0;
let swInterval;
let isRunning = false;

window.addEventListener("DOMContentLoaded", () => {
  loadItemsFromLocalStorage();
});

const swStartBtnS = () => {
  if (isRunning) {
    clearInterval(swInterval);
    swStartBtn.textContent = "Start";
    swLapBtn.textContent = "Restart";
  } else {
    swInterval = setInterval(() => {
      counter++;
      updateTimer(counter);
    }, 1);
    swStartBtn.textContent = "Stop";
    swLapBtn.textContent = "Lap";
  }
  isRunning = !isRunning;
};

const swLapBtnS = () => {
  if (!isRunning) {
    counter = 0;
    swTimer.textContent = counter;
    while (swList.firstChild) {
      swList.removeChild(swList.firstChild);
    }
    swTimer.innerText = new Date().toLocaleString(
      "en-us",
      { timeStyle: "short" },
      { dateStyle: "short" }
    );
  } else {
    let li = document.createElement("li");
    let liCount = swList.children.length + 1;
    li.textContent = `${liCount}. ` + swTimer.textContent;
    swList.appendChild(li);
    saveItemsToLocalStorage();
  }
};

function updateTimer(count) {
  const minutes = Math.floor(count / 6000);
  const seconds = Math.floor((count % 6000) / 100);
  const milliseconds = count % 100;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}.${String(milliseconds).padStart(2, "0")}`;
  swTimer.textContent = formattedTime;
}

function saveItemsToLocalStorage() {
  const items = Array.from(swList.children).map((li) => li.textContent);
  localStorage.setItem("swListItems", JSON.stringify(items));
}

function loadItemsFromLocalStorage() {
  const storedItems = localStorage.getItem("swListItems");
  if (storedItems) {
    const items = JSON.parse(storedItems);
    items.forEach((item) => {
      let li = document.createElement("li");
      li.textContent = item;
      swList.appendChild(li);
    });
  }
}
// Function to clear local storage
function clearLocalStorage() {
  localStorage.removeItem("swListItems");
}

// Add event listener for the lap button
swLapBtn.addEventListener("click", clearLocalStorage);

export {
  swLapBtnS,
  swStartBtnS,
  swStartBtn,
  swLapBtn,
  swInterval,
  loadItemsFromLocalStorage,
};
