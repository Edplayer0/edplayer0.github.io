"use strict";

const showMoreBtn = document.getElementById("show-more");
const showMoreText = document.getElementById("show-more-text");
const showLessText = document.getElementById("show-less-text");
const showMoreIcon = showMoreBtn.querySelector(".material-icons");

let more = 1;

showMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (more % 2 === 0) {
    showMoreIcon.textContent = "arrow_downward";
    showMoreText.style.display = "inline";
    showLessText.style.display = "none";
    showMoreBtn.childNodes[5].checked = false;
  } else {
    showMoreIcon.textContent = "arrow_upward";
    showMoreText.style.display = "none";
    showLessText.style.display = "inline";
    showMoreBtn.childNodes[5].checked = true;
  }
  more++;
});
