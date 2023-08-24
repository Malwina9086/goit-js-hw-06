"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("input");
const bthCreate = document.querySelector("[data-create]");
const bthDestroy = document.querySelector("[data-destroy]");
const parentBox = document.querySelector("#boxes");

const createBoxes = () => {
  parentBox.innerHTML = "";
  const amount = inputNumber.value;

  for (let i = 0; i < amount; i++) {
    const element = document.createElement("div");
    element.style.backgroundColor = getRandomHexColor();
    element.style.width = `${30 + index * 10}px`;
    element.style.height = `${30 + index * 10}px`;
    parentBox.append(element);
  }
};

const destroyBoxes = () => {
  parentBox.innerHTML = "";
};

bthCreate.addEventListener("click", createBoxes);
bthDestroy.addEventListener("click", destroyBoxes);
