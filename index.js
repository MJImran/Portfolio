"use strict";

// Selecting elements

const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const navBar = document.querySelector(".header-nav");
const tabContainer = document.querySelector(".tab-container");
const tabLinks = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

// Functions

const mobileNavOpen = () => {
  navBar.classList.toggle("nav-open");
};

const aboutTabSwitch = function (e) {
  const current = e.target;
  const tabName = e.target.getAttribute("data");

  if (current.classList.contains("tab")) {
    // Remove active class from all tabs and contents
    tabLinks.forEach((tab) => tab.classList.remove("active-tab"));
    tabContents.forEach((content) => content.classList.remove("active-cont"));

    // Add active class to the clicked tab and corresponding content

    current.classList.add("active-tab");
    document.getElementById(tabName).classList.add("active-cont");
  }
};

// Event handlers

tabContainer.addEventListener("click", aboutTabSwitch);
mobileNavBtn.addEventListener("click", mobileNavOpen);
