"use strict";

// SETTINGS MENU DISSAPPEARS WHEN CLICKING OUTSIDE

document
  .getElementById("settings__background")
  .addEventListener("click", () => {
    document.getElementById("open-settings-checkbox").checked = false;
    document.getElementById("settings-mobile-checkbox").checked = false;
  });

// DON'T DISSAPPEAR WHEN CLICKING INSIDE
document
  .getElementById("settings")
  .addEventListener("click", (e) => e.stopPropagation());
