"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundColored = document.querySelector("body");
const textSpan = document.querySelector(".color");
const bthChangeColor = document.querySelector(".change-color");

let currentColor = getRandomHexColor();

const changeColor = () => {
  backgroundColored.style.backgroundColor = currentColor;
  textSpan.innerHTML = currentColor;
};

bthChangeColor.addEventListener("click", changeColor);
