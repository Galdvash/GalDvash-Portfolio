// script.js

const addButton = document.getElementById("btn-add");
const outPutList = document.getElementById("outPutText");

addButton.addEventListener("click", () => {
  const input = document.getElementById("input-text");
  const inputValue = input.value.trim();

  if (input && inputValue !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = inputValue;
    listItem.classList = "li";
    outPutList.appendChild(listItem);

    listItem.addEventListener("click", () => {
      listItem.style.textDecoration = "line-through";
      updateItemInLocalStorage(inputValue, true);
    });

    const deleteLineBtn = document.createElement("button");
    deleteLineBtn.innerHTML = "\u00d7";
    deleteLineBtn.classList = "deleteLineBtn";
    outPutList.appendChild(deleteLineBtn);

    deleteLineBtn.addEventListener("click", () => {
      outPutList.removeChild(listItem);
      outPutList.removeChild(deleteLineBtn);
      removeItemFromLocalStorage(inputValue);
    });

    // Add the item to localStorage
    saveItemToLocalStorage(inputValue, false);

    clearText();
  }
});

function clearText() {
  const input = document.getElementById("input-text");
  input.value = "";
}

// Function to load stored items from localStorage
function loadStoredItems() {
  // Retrieve the stored items from localStorage
  const storedItems = JSON.parse(localStorage.getItem("myItems")) || [];

  // Create UI elements based on the stored items
  storedItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = item.value;
    listItem.classList = "li";
    outPutList.appendChild(listItem);

    if (item.isCrossedOut) {
      listItem.style.textDecoration = "line-through";
    }

    listItem.addEventListener("click", () => {
      listItem.style.textDecoration = "line-through";
      // Update the item in localStorage when it's clicked
      updateItemInLocalStorage(item.value, true);
    });

    const deleteLineBtn = document.createElement("button");
    deleteLineBtn.innerHTML = "\u00d7";
    deleteLineBtn.classList = "deleteLineBtn";
    outPutList.appendChild(deleteLineBtn);

    deleteLineBtn.addEventListener("click", () => {
      outPutList.removeChild(listItem);
      outPutList.removeChild(deleteLineBtn);
      // Remove the item from localStorage when the delete button is clicked
      removeItemFromLocalStorage(item.value);
    });
  });
}

// Function to save an item to localStorage
function saveItemToLocalStorage(value, isCrossedOut) {
  // Retrieve the existing items from localStorage
  const storedItems = JSON.parse(localStorage.getItem("myItems")) || [];

  // Add the new item
  storedItems.push({ value, isCrossedOut });

  // Save the updated items to localStorage
  localStorage.setItem("myItems", JSON.stringify(storedItems));
}

// Function to update an item in localStorage
function updateItemInLocalStorage(value, isCrossedOut) {
  // Retrieve the existing items from localStorage
  const storedItems = JSON.parse(localStorage.getItem("myItems")) || [];

  // Find the item in the array and update its isCrossedOut property
  storedItems.forEach((item) => {
    if (item.value === value) {
      item.isCrossedOut = isCrossedOut;
    }
  });

  // Save the updated items to localStorage
  localStorage.setItem("myItems", JSON.stringify(storedItems));
}

// Function to remove an item from localStorage
function removeItemFromLocalStorage(value) {
  // Retrieve the existing items from localStorage
  const storedItems = JSON.parse(localStorage.getItem("myItems")) || [];

  // Filter out the item to be removed
  const updatedItems = storedItems.filter((item) => item.value !== value);

  // Save the updated items to localStorage
  localStorage.setItem("myItems", JSON.stringify(updatedItems));
}

// Load stored items from localStorage
loadStoredItems();
