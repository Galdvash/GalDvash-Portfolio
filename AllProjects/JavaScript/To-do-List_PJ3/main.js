const addButton = document.getElementById("btn-add");
const outPutList = document.getElementById("outPutList");
const input = document.getElementById("input-text");

// Load saved data from localStorage
window.onload = function () {
  const savedData = localStorage.getItem("todoList");
  if (savedData) {
    outPutList.innerHTML = savedData;
    addClickListeners();
  }
};

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    handleAddButtonClick();
  }
});

addButton.addEventListener("click", handleAddButtonClick);

function handleAddButtonClick() {
  const inputValue = input.value.trim();

  if (inputValue !== "") {
    const item = document.createElement("li");
    item.innerHTML = inputValue;
    outPutList.appendChild(item);

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    item.appendChild(span);

    if (outPutList.firstChild) {
      outPutList.insertBefore(item, outPutList.firstChild);
    } else {
      outPutList.appendChild(item);
    }

    addClickListeners();
    saveData();
    clearText();
  }
}

function clearText() {
  input.value = "";
}

function addClickListeners() {
  const listItems = outPutList.querySelectorAll("li");
  listItems.forEach((item) => {
    item.addEventListener("click", handleItemClick);
  });
}

function handleItemClick(event) {
  const target = event.target;
  if (target.tagName === "LI") {
    target.classList.toggle("clicked");
    saveData();
  } else if (target.tagName === "SPAN") {
    target.classList.toggle("clicked");
    target.parentElement.remove();
    saveData();
  }
}

function saveData() {
  localStorage.setItem("todoList", outPutList.innerHTML);
}
