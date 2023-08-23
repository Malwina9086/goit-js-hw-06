"use strict";
const validationInput = document.querySelector("#validation-input");

const attributeValue = validationInput.getAttribute("data-length");

const doValidation = () => {
  if (validationInput.value.length < attributeValue) {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  } else {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  }
};

validationInput.addEventListener("blur", doValidation);
