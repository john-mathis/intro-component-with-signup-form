# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Links

- Solution URL: [https://github.com/mackmathis/intro-component-with-signup-form]
- Live Site URL: [https://mackmathis.github.io/intro-component-with-signup-form/]

## My process

I began with a mobile first workflow, and once everything looked how I wanted it to on smaller screens, I added a desktop container, which was useful once my screen reached a certain size. Inside of the desktop container were two children divs, so I gave the parent container a display of flex. I made sure to give the children class names of left side and right side, and made sure to wrap the appropriate content in the specified child div.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

While building this project, I learned how to implement error classes. When a desired input is not inside of the input, a red border surrounds it, and an error message is revealed telling the user what needs to be done to resolve it. I also learned a small amount of form validation.

```html
<p class="error" id="first_error"></p>
<p class="error" id="last_error"></p>
<p class="error" id="email_error"></p>
<p class="error" id="password_error"></p>
```

```css
.invalid {
  border: 2px solid hsl(0, 100%, 74%) !important;
}
```

```js
const firstNameInput = document.querySelector("#first");
const lastNameInput = document.querySelector("#last");
const emailAddressInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const firstNameError = document.querySelector("#first_error");
const lastNameError = document.querySelector("#last_error");
const emailAddressError = document.querySelector("#email_error");
const passwordError = document.querySelector("#password_error");

const first = firstNameInput;
const last = lastNameInput;
const email = emailAddressInput;
const password = passwordInput;

if (first.value === null || first.value === "") {
  let firstError = "First Name cannot be empty";
  firstNameError.innerHTML = firstError;
  firstNameInput.classList.add("invalid");
  greenButton.disabled = true;
  greenButton.style.backgroundColor = "hsl(154, 42%, 63%)";
  first.placeholder = "";
}

if (last.value === null || last.value === "") {
  let lastError = "Last Name cannot be empty";
  lastNameError.innerHTML = lastError;
  lastNameInput.classList.add("invalid");
  greenButton.disabled = true;
  greenButton.style.backgroundColor = "hsl(154, 42%, 63%)";
  last.placeholder = "";
}

if (email.value === null || email.value === "") {
  let emailError = "Email Address cannot be empty";
  emailAddressError.innerHTML = emailError;
  emailAddressInput.classList.add("invalid");
  greenButton.disabled = true;
  greenButton.style.backgroundColor = "hsl(154, 42%, 63%)";
  email.placeholder = "";
}

if (password.value === null || password.value === "") {
  let passError = "Password cannot be empty";
  passwordError.innerHTML = passError;
  passwordInput.classList.add("invalid");
  greenButton.disabled = true;
  greenButton.style.backgroundColor = "hsl(154, 42%, 63%)";
  password.placeholder = "";
}

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if (email.value.match(emailRegex)) {
  emailAddressInput.classList.remove("invalid");
} else {
  let emailError = "Looks like this is not an email";
  emailAddressError.innerHTML = emailError;
  emailAddressInput.classList.add("invalid");
  greenButton.disabled = true;
  greenButton.style.backgroundColor = "hsl(154,42%,63%)";
}
```

### Continued development

I will continue working on creating more effecient functions to make it easier to manipulate larger pieces of code at once instead of hard-coding things.

I will continue working on refactoring my code to make it as effecient as possible.

I will continue working on media queries to make the breakpoints as clean and as smooth as possible.

### Useful resources

Stack overflow

This site helps me test if my site is mobile friendly.
https://search.google.com/test/mobile-friendly

## Author

John Mathis

- Frontend Mentor - [@mackmathis]https://www.frontendmentor.io/profile/mackmathis)
- Twitter - [@theMackCodes](https://twitter.com/TheMackCodes)
