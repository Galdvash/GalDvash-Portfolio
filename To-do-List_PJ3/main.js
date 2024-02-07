const addButton = document.getElementById("btn-add");
const outPutList = document.getElementById("outPutText");
const input = document.getElementById("input-text");

// Event listener for the "keyup" event on the input field
input.addEventListener("keyup", (event) => {
  // Check if the Enter key is pressed (key code 13)
  if (event.key === "Enter") {
    // Trigger the same functionality as addButton click
    handleAddButtonClick();
  }
});

// Event listener for the addButton click
addButton.addEventListener("click", handleAddButtonClick);

function handleAddButtonClick() {
  const inputValue = input.value.trim();

  if (input && inputValue !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = inputValue;
    listItem.classList = "li";

    // Insert the new list item as the first child of outPutList
    outPutList.insertBefore(listItem, outPutList.firstChild);

    listItem.addEventListener("click", () => {
      listItem.style.textDecoration = "line-through";
    });

    const deleteLineBtn = document.createElement("button");
    deleteLineBtn.innerHTML = "\u00d7";
    deleteLineBtn.classList = "deleteLineBtn";

    // Insert the delete button as the second child of outPutList
    outPutList.insertBefore(deleteLineBtn, outPutList.firstChild.nextSibling);

    deleteLineBtn.addEventListener("click", () => {
      outPutList.removeChild(listItem);
      outPutList.removeChild(deleteLineBtn);
    });

    // Add the item to localStorage
    saveItemToLocalStorage(inputValue);

    clearText();
  }
}

function clearText() {
  input.value = "";
}

// Function to load stored items from localStorage
function loadStoredItems() {
  // Retrieve the stored items from localStorage
  const storedItems = JSON.parse(localStorage.getItem("myItems")) || [];

  // Create UI elements based on the stored items
  storedItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = item;
    listItem.classList = "li";

    // Insert the stored list item as the first child of outPutList
    outPutList.insertBefore(listItem, outPutList.firstChild);

    listItem.addEventListener("click", () => {
      listItem.style.textDecoration = "line-through";
    });

    const deleteLineBtn = document.createElement("button");
    deleteLineBtn.innerHTML = "\u00d7";
    deleteLineBtn.classList = "deleteLineBtn";

    // Insert the delete button as the second child of outPutList
    outPutList.insertBefore(deleteLineBtn, outPutList.firstChild.nextSibling);

    deleteLineBtn.addEventListener("click", () => {
      outPutList.removeChild(listItem);
      outPutList.removeChild(deleteLineBtn);
    });
  });
}

// Function to save an item to localStorage
function saveItemToLocalStorage(value) {
  // Retrieve the existing items from localStorage
  const storedItems = JSON.parse(localStorage.getItem("myItems")) || [];

  // Add the new item
  storedItems.push(value);

  // Save the updated items to localStorage
  localStorage.setItem("myItems", JSON.stringify(storedItems));
}

// Load stored items from localStorage
loadStoredItems();
