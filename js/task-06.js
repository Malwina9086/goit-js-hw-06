"use strict";
const validationInput = document.querySelector("#validation-input");

const attributeValue = validationInput.getAttribute("data-length");

const doValidation = () => {
  if (validationInput.value.length < attributeValue) {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  } else {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  }
};

validationInput.addEventListener("blur", doValidation);
