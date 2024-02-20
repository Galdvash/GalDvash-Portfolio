let intervalChange;
const selectElement = document.getElementById("list");
let timeZoneElement = document.getElementById("currentTime");

timeZoneElement.innerText = new Date().toLocaleString(
  "en-us",
  { timeStyle: "short" },
  { dateStyle: "short" }
);

document.addEventListener("DOMContentLoaded", () => {
  fetch("/Watch_PJ6/src/worldclock.json")
    .then((response) => response.json())
    .then((data) =>
      data.map((country) => {
        const option = document.createElement("option");
        option.innerText = country.name;
        option.value = country.timezone;
        selectElement.appendChild(option);
      })
    )
    .catch((err) => console.log(err));
});

selectElement.oninput = () => time();

function time() {
  console.log(selectElement.value);
  clearInterval(intervalChange);

  intervalChange = setInterval(() => {
    const ctime = new Date().toLocaleString("en-us", {
      timeZone: selectElement.value,
      timeStyle: "medium",
      dateStyle: "short",
    });
    timeZoneElement.innerText = ctime;
  }, 1000);
}

export { time, selectElement, timeZoneElement, intervalChange };
