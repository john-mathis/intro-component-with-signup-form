"use strict";

// Selecting all of the elements I need to target.

const firstNameInput = document.querySelector("#first");
const lastNameInput = document.querySelector("#last");
const emailAddressInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const firstNameError = document.querySelector("#first_error");
const lastNameError = document.querySelector("#last_error");
const emailAddressError = document.querySelector("#email_error");
const passwordError = document.querySelector("#password_error");

const greenButton = document.querySelector("#green_button");
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// This function is checking if the inputs are empty. It is also adding the error messages and disabling the button if they are.

document.getElementById("freeTrialForm").onsubmit = function (evt) {
  evt.preventDefault();
  const first = firstNameInput;
  const last = lastNameInput;
  const email = emailAddressInput;
  const password = passwordInput;

  // Checking if the first name input is empty. If so, then it's adding the error code, adding the red border around the input, disabling the submit button, and removing the placeholder text.
  if (first.value === null || first.value === "") {
    let firstError = "First Name cannot be empty";
    firstNameError.innerHTML = firstError;
    firstNameInput.classList.add("invalid");
    greenButton.disabled = true;
    greenButton.style.backgroundColor = "hsl(154, 42%, 63%)";
    first.placeholder = "";
  }

  // Checking if the last name input is empty. If so, then it's adding the error code, adding the red border around the input, disabling the submit button, and removing the placeholder text.
  if (last.value === null || last.value === "") {
    let lastError = "Last Name cannot be empty";
    lastNameError.innerHTML = lastError;
    lastNameInput.classList.add("invalid");
    greenButton.disabled = true;
    greenButton.style.backgroundColor = "hsl(154, 42%, 63%)";
    last.placeholder = "";
  }

  //Checking if the email input is empty. If so, then it's adding the error code, adding the red border around the input, disabling the submit button, and removing the placeholder text.
  if (email.value === null || email.value === "") {
    let emailError = "Email Address cannot be empty";
    emailAddressError.innerHTML = emailError;
    emailAddressInput.classList.add("invalid");
    greenButton.disabled = true;
    greenButton.style.backgroundColor = "hsl(154, 42%, 63%)";
    email.placeholder = "";
  }

  // Email Validation
  // This is checking if the email's input value is actually a email address. If not it is asking the user to correctly formulate one.
  if (email.value.match(emailRegex)) {
    emailAddressInput.classList.remove("invalid");
  } else {
    let emailError = "Looks like this is not an email";
    emailAddressError.innerHTML = emailError;
    emailAddressInput.classList.add("invalid");
    greenButton.disabled = true;
    greenButton.style.backgroundColor = "hsl(154,42%,63%)";
  }

  // Checking if the password input is empty. If so, then it's adding the error code, adding the red border around the input, disabling the submit button, and removing the placeholder text.
  if (password.value === null || password.value === "") {
    let passError = "Password cannot be empty";
    passwordError.innerHTML = passError;
    passwordInput.classList.add("invalid");
    greenButton.disabled = true;
    greenButton.style.backgroundColor = "hsl(154, 42%, 63%)";
    password.placeholder = "";
  }

  return submit;
};

// This function will remove the error messages, enabled the submit button, as well as change it back from it's greyed out (disabled state) if the input valid and not empty.

const removeError = function () {
  document.getElementById(this.id + "_error").innerHTML = "";
  document.getElementById(this.id).classList.remove("invalid");
  greenButton.disabled = false;
  greenButton.style.backgroundColor = "hsl(154, 59%, 51%)";
};

// Here I am calling the above function whenever the user presses down and releases a key on the keyboard.
document.getElementById("first").onkeyup = removeError;
document.getElementById("last").onkeyup = removeError;
document.getElementById("email").onkeyup = removeError;
document.getElementById("password").onkeyup = removeError;
