"use strict";

console.log("running index.js");

const tabLinks = document.querySelectorAll(".tabs");
const tabContents = document.querySelectorAll(".tab-content");

const tabLink = document.getElementsByClassName("tabs");
const tabContent = document.getElementsByClassName("tab-content");

function openTab(tabName) {
  for (const link of tabLink) {
    link.classList.remove("active-tab");
  }
  for (const content of tabContent) {
    content.classList.remove("active-cont");
  }
  event.currentTarget.classList.add("active-tab");
  document.getElementById(tabName).classList.add("active-cont");
}

const mobileNavBtn = document.querySelector(".mobile-nav-btn");

const navBar = document.querySelector(".header-nav");

const navOpen = () => {
  navBar.classList.toggle("nav-open");
  // mobileNavBtn.classList.toggle("nav-open");
};
mobileNavBtn.addEventListener("click", navOpen);
