// change I AM secText
let secTextElement = document.querySelector(".secText");
let replacementWords = ["Full Stack Developer", "Designer", "Believe My Work"];
let currentIndex = 0;

function changeText() {
  secTextElement.textContent = replacementWords[currentIndex];
  currentIndex = (currentIndex + 1) % replacementWords.length;
}

setInterval(changeText, 1000);

//icon bar
document.addEventListener("DOMContentLoaded", function () {
  let icons = document.querySelectorAll(".icon");

  icons.forEach(function (icon, index) {
    setTimeout(function () {
      icon.classList.toggle("active");
    }, 200 * index);
  });
});

//function Nav display
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".nav-list").classList.toggle("active");
});

// Function open Projects Links
document
  .querySelector(".dropdown > li > a")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".dropdown-content").classList.toggle("active");
  });

//CardFlip
const projects = document.querySelectorAll(".js_project");

projects.forEach((project) => {
  const openButton = project.querySelector("#openButton");
  const modal = project.querySelector(".modal");

  project.addEventListener("click", function (event) {
    event.stopPropagation();
    this.classList.toggle("flipped");
  });
  // Open a Window
  openButton.addEventListener("click", function (event) {
    event.stopPropagation();
    modal.style.display = "block";
  });

  const closeButton = modal.querySelector(".close");
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
  // DownLoad btn

  const downloadButton = modal.querySelector("#downloadButton");
  downloadButton.addEventListener("click", function () {
    alert("התחיל פעולת הורדה...");
  });
});

//Requierd Form Inputo
const myForm = document.getElementById("myForm");

if (myForm) {
  myForm.setAttribute("action", "/action_page.php");
  myForm.addEventListener("submit", validateForm);

  // Add event listener for the button click
  const submitBtn = document.getElementById("submitBtn");
  if (submitBtn) {
    submitBtn.addEventListener("click", function (event) {
      myForm.dispatchEvent(new Event("submit"));
    });
  }
} else {
  console.error("Form with id 'myForm' not found");
}

function validateForm(event) {
  const nameInput = document.getElementById("fname");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  if (!nameInput || !emailInput || !phoneInput) {
    console.error("One or more input elements not found");
    return;
  }

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const phoneValue = phoneInput.value.trim();

  if (nameValue === "" || emailValue === "" || phoneValue === "") {
    alert("Please fill out all fields");
    event.preventDefault();
  } else if (!isValidEmail(emailValue)) {
    alert("Please enter a valid email address");
    event.preventDefault();
  } else if (!isValidPhone(phoneValue)) {
    alert("Please enter a valid phone number");
    event.preventDefault();
  }
}

function isValidEmail(email) {
  // Simple email validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  // Simple phone number validation using a regular expression
  const phoneRegex = /^\d{10}$/;

  return phoneRegex.test(phone);
}
