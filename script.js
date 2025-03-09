// change I AM secText
let secTextElement = document.querySelector(".secText");
let replacementWords = ["Hello World", "WELCOME !", "To My Portfolio"];
let currentIndex = 0;

function changeText() {
  secTextElement.textContent = replacementWords[currentIndex];
  currentIndex = (currentIndex + 1) % replacementWords.length;
}

setInterval(changeText, 1200);

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
document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".nav-list li a");
  listItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      listItems.forEach((a) => a.classList.remove("activeLinksline"));
      // מוסיפים את המחלקה active לקישור שנלחץ
      item.classList.add("activeLinksline");
    });
  });
});

var app = {
  words: [
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "React",
    "Vue",
    "MongoDB",
    "Express",
    "TypeScript",
    "Webpack",
    "GitHub",
    "Docker",
    "Console.log()",
    "Bootstrap",
    "Tailwind",
    "Hello World",
    "SQL",
    "NoSQL",
    "Firebase",
    "REST",
    "API",
  ],

  init: function () {
    app.container = document.createElement("div");
    app.container.className = "animation-container";
    // במקום להוסיף ל-body, מוסיפים לאלמנט עם id="animation-wrapper"
    var targetContainer = document.getElementById("animation-wrapper");
    if (targetContainer) {
      targetContainer.appendChild(app.container);
    } else {
      console.error(
        'לא נמצא אלמנט עם id="animation-wrapper". ודא שקיים HTML מתאים.'
      );
    }
    window.setInterval(app.add, 240);
  },

  add: function () {
    var element = document.createElement("span");
    app.container.appendChild(element);
    app.animate(element);
  },

  animate: function (element) {
    var word = app.words[Math.floor(Math.random() * app.words.length)];
    var duration = Math.floor(Math.random() * 24) + 1;
    var offset = Math.floor(Math.random() * (80 - duration * 2)) + 3;
    var size = 16 + (16 - duration);
    element.style.cssText =
      "left:" +
      offset +
      "vw; font-size:" +
      size +
      "px; animation-duration:" +
      duration +
      "s";

    element.innerHTML = word;
    window.setTimeout(app.remove, duration * 1500, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element);
  },
};

document.addEventListener("DOMContentLoaded", app.init);
