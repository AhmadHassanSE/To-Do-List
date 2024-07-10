"use strict";

const list = document.querySelectorAll(".list");
for (let i = 0; i < 5; i++) {
  list.textContent = "";
}

const container1 = document.querySelectorAll(".container1");
for (let i = 0; i < 5; i++) {
  container1[i].classList.add("hidden");
}

const submitbutton = document.querySelector(".submit-button");
const input = document.querySelector(".input");

let index = 0;
let value1;

submitbutton.addEventListener("click", function () {
  value1 = input.value;
  container1[index].classList.remove("hidden");
  list[index].textContent = value1;
  index++;
});

const cross1 = document.getElementById("cross1");
const cross2 = document.getElementById("cross2");
const cross3 = document.getElementById("cross3");
const cross4 = document.getElementById("cross4");
const cross5 = document.getElementById("cross5");

cross1.addEventListener("click", function () {
  container1[0].classList.add("hidden");
});
cross2.addEventListener("click", function () {
  container1[1].classList.add("hidden");
});
cross3.addEventListener("click", function () {
  container1[2].classList.add("hidden");
});
cross4.addEventListener("click", function () {
  container1[3].classList.add("hidden");
});
cross5.addEventListener("click", function () {
  container1[4].classList.add("hidden");
});
