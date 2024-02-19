const userTable = document.querySelector(".users-table"); // Table in HTML with the users
const submitBtn = document.querySelector("#submitBtn");
const formContainer = document.querySelector(".form-container");

// Load existing users from localStorage (if any)
let existingUsers = JSON.parse(localStorage.getItem("user")) || [];

// Function to toggle visibility of submit button based on input fields
function toggleSubmitButton() {
  submitBtn.style.display = areAllInputsFilled() ? "block" : "none";
}

// Check if all input fields are filled correctly (non-empty)
function areAllInputsFilled() {
  // Select all input fields except submit button
  const inputElements = document.querySelectorAll('input:not([type="submit"])');
  // Check if every input field has a non-empty value
  return Array.from(inputElements).every((input) => input.value.trim() !== "");
}

// Event listener for input fields
document.querySelectorAll("input").forEach((input) => {
  // Attach input event listener to each input field
  input.addEventListener("input", toggleSubmitButton);
});

// Callback Function for submit button
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // Create a user object with input field values
  const user = {
    fname: event.target.form["fname"].value,
    lname: event.target.form["lname"].value,
    email: event.target.form["email"].value,
    password: event.target.form["password"].value,
    isLogedin: true,
  };

  // Insert a new row in the user table with user data
  let row = userTable.insertRow();
  for (let key in user) {
    let cell = row.insertCell();
    cell.textContent = user[key];
  }

  // Add the new user to the existing users array
  existingUsers.push(user);

  // Save the updated users array to localStorage
  localStorage.setItem("user", JSON.stringify(existingUsers));

  // Clear input fields
  const inputElements = event.target.form.querySelectorAll(
    'input:not([type="submit"])'
  );
  inputElements.forEach((input) => {
    input.value = "";
  });

  // Hide the submit button again
  submitBtn.style.display = "none";

  // Create buttons for delete, logout, and edit actions
  let btns = row.insertCell();

  let btn1 = document.createElement("button");
  btn1.textContent = "Delete";
  btn1.style.backgroundColor = "red";
  btn1.style.width = "50px";
  btn1.style.height = "30px";
  btns.appendChild(btn1);
  btn1.addEventListener("click", () => {
    // Find the index of the user in the array
    const index = existingUsers.indexOf(user);
    if (index !== -1) {
      // Remove the user from the array
      existingUsers.splice(index, 1);

      // Update localStorage
      localStorage.setItem("user", JSON.stringify(existingUsers));

      // Remove the row from the table
      userTable.deleteRow(row.rowIndex);
    }
  });

  let btn2 = document.createElement("button");
  btn2.textContent = "LogOut";
  btn2.style.backgroundColor = "yellow";
  btn2.style.width = "50px";
  btn2.style.height = "30px";
  btns.appendChild(btn2);
  btn2.addEventListener("click", () => {
    user.isLogedin = false;
    // Update the cell in the table to reflect the logout status
    row.cells[4].textContent = user.isLogedin;
  });

  let btn3 = document.createElement("button");
  btn3.textContent = "Edit";
  btn3.style.backgroundColor = "blue";
  btn3.style.width = "50px";
  btn3.style.height = "30px";
  btns.appendChild(btn3);
  btn3.addEventListener("click", () => {
    let firstName = prompt("Change first name");
    let lastName = prompt("Change last name");
    if (firstName !== null && firstName !== "") {
      user.fname = firstName;
      row.cells[0].textContent = user.fname;
    }
    if (lastName !== null && lastName !== "") {
      user.lname = lastName;
      row.cells[1].textContent = user.lname;
    }

    // Update localStorage
    localStorage.setItem("user", JSON.stringify(existingUsers));
  });
});

// Initially hide the submit button
submitBtn.style.display = "none";

// Load initial users from localStorage
existingUsers.forEach((user) => {
  let row = userTable.insertRow();
  for (let key in user) {
    let cell = row.insertCell();
    cell.textContent = user[key];
  }

  // Create buttons for delete, logout, and edit actions
  let btns = row.insertCell();

  let btn1 = document.createElement("button");
  btn1.textContent = "Delete";
  btn1.style.backgroundColor = "red";
  btn1.style.width = "50px";
  btn1.style.height = "30px";
  btns.appendChild(btn1);
  btn1.addEventListener("click", () => {
    const index = existingUsers.indexOf(user);
    if (index !== -1) {
      existingUsers.splice(index, 1);
      localStorage.setItem("user", JSON.stringify(existingUsers));
      userTable.deleteRow(row.rowIndex);
    }
  });

  let btn2 = document.createElement("button");
  btn2.textContent = "LogOut";
  btn2.style.backgroundColor = "yellow";
  btn2.style.width = "50px";
  btn2.style.height = "30px";
  btns.appendChild(btn2);
  btn2.addEventListener("click", () => {
    user.isLogedin = false;
    // Update the cell in the table to reflect the logout status
    row.cells[4].textContent = user.isLogedin;
  });

  let btn3 = document.createElement("button");
  btn3.textContent = "Edit";
  btn3.style.backgroundColor = "blue";
  btn3.style.width = "50px";
  btn3.style.height = "30px";
  btns.appendChild(btn3);
  btn3.addEventListener("click", () => {
    let firstName = prompt("Change first name");
    let lastName = prompt("Change last name");
    if (firstName !== null && firstName !== "") {
      user.fname = firstName;
      row.cells[0].textContent = user.fname;
    }
    if (lastName !== null && lastName !== "") {
      user.lname = lastName;
      row.cells[1].textContent = user.lname;
    }

    localStorage.setItem("user", JSON.stringify(existingUsers));
  });
});
