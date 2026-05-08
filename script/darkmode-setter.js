"use strict";

const toggle = document.getElementById("dark-mode");

if (localStorage.getItem("dark-mode") === "true") {
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  localStorage.setItem("dark-mode", toggle.checked);
  darkMode();
});
