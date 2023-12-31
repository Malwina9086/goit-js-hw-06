"use strict";
const form = document.querySelector(".login-form");

const sendForm = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("All fields should be filled in");
  }

  const objectData = {
    email: email.value,
    password: password.value,
  };

  console.log(objectData);
  event.currentTarget.reset();
};

form.addEventListener("submit", sendForm);
