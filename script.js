//function Nav display
const myFunction = () => {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

document.querySelector(".hamburger").addEventListener("click", myFunction);

//Requierd
const myForm = document.getElementById("myForm");

if (myForm) {
  myForm.setAttribute("action", "/action_page.php");
  myForm.addEventListener("submit", validateForm);

  // Add event listener for the button click
  const submitBtn = document.getElementById("submitBtn");
  if (submitBtn) {
    submitBtn.addEventListener("click", function (event) {
      // Trigger the form submission when the button is clicked
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
