const userTable = document.querySelector(".users-table"); //Table in html with the users
const submitBtn = document.querySelector("#submitBtn");

// Load existing users from localStorage (if any)
const existingUsers = JSON.parse(localStorage.getItem("user")) || [];

// Callback Function
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const user = {
    fname: event.target.form["fname"].value,
    lname: event.target.form["lname"].value,
    email: event.target.form["email"].value,
    password: event.target.form["password"].value,
    isLogedin: true,
  };
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

  let btns = row.insertCell();

  let btn1 = document.createElement("button");
  btn1.textContent = "Delet";
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
  });

  let btn3 = document.createElement("button");
  btn3.textContent = "Edit";
  btn3.style.backgroundColor = "blue";
  (btn3.style.width = "50px"), (btn3.style.height = "30px");
  btns.appendChild(btn3);
  btn3.addEventListener("click", () => {
    let firstName = prompt("change name");
    let lastName = prompt("change last name");
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

// Load initial users from localStorage
existingUsers.forEach((user) => {
  let row = userTable.insertRow();
  for (let key in user) {
    let cell = row.insertCell();
    cell.textContent = user[key];
  }

  let btns = row.insertCell();

  let btn1 = document.createElement("button");
  btn1.textContent = "Delet";
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
  });

  let btn3 = document.createElement("button");
  btn3.textContent = "Edit";
  btn3.style.backgroundColor = "blue";
  (btn3.style.width = "50px"), (btn3.style.height = "30px");
  btns.appendChild(btn3);
  const userTable = document.querySelector(".users-table"); //Table in html with the users
  const submitBtn = document.querySelector("#submitBtn");

  // Load existing users from localStorage (if any)
  const existingUsers = JSON.parse(localStorage.getItem("user")) || [];

  // Callback Function
  submitBtn.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = {
      fname: event.target.form["fname"].value,
      lname: event.target.form["lname"].value,
      email: event.target.form["email"].value,
      password: event.target.form["password"].value,
      isLogedin: true,
    };
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

    let btns = row.insertCell();

    let btn1 = document.createElement("button");
    btn1.textContent = "Delet";
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
    });

    let btn3 = document.createElement("button");
    btn3.textContent = "Edit";
    btn3.style.backgroundColor = "blue";
    (btn3.style.width = "50px"), (btn3.style.height = "30px");
    btns.appendChild(btn3);
    btn3.addEventListener("click", () => {
      let firstName = prompt("change name");
      let lastName = prompt("change last name");
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

  // Load initial users from localStorage
  existingUsers.forEach((user) => {
    let row = userTable.insertRow();
    for (let key in user) {
      let cell = row.insertCell();
      cell.textContent = user[key];
    }

    let btns = row.insertCell();

    let btn1 = document.createElement("button");
    btn1.textContent = "Delet";
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
    });

    let btn3 = document.createElement("button");
    btn3.textContent = "Edit";
    btn3.style.backgroundColor = "blue";
    (btn3.style.width = "50px"), (btn3.style.height = "30px");
    btns.appendChild(btn3);
    btn3.addEventListener("click", () => {
      let firstName = prompt("change name");
      let lastName = prompt("change last name");
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

  btn3.addEventListener("click", () => {
    let firstName = prompt("change name");
    let lastName = prompt("change last name");
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
