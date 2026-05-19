"use strict";

const languageSelector = document.getElementById("language_selector");

let currentLanguage = document.cookie.split("=")[1].slice(0, 2);

const applyLanguage = async () => {
  if (currentLanguage === "en") {
    history.go();
    return;
  }

  let request = await fetch(`lang/${currentLanguage}.json`);
  let result = await request.json();

  for (let elementTranslated in result) {
    let element = document.getElementById(elementTranslated);
    element.textContent = result[elementTranslated];
  }
};

const changeLanguage = (language) => {
  let monthLater = new Date();
  monthLater.setTime(monthLater.getTime() + 30 * 24 * 60 * 60 * 1000);

  currentLanguage = language;
  document.cookie = `lan=${language}, expires=${monthLater.toUTCString()}`;

  applyLanguage();
};

if (languageSelector != null) {
  languageSelector.addEventListener("change", () =>
    changeLanguage(languageSelector.value)
  );
}
if (currentLanguage !== undefined && currentLanguage !== "en") {
  languageSelector.value = currentLanguage;
  applyLanguage();
}
