"use strict";

const showMore = document.getElementById("show-more");

let more = 1;

showMore.addEventListener("click", (e) => {
  e.preventDefault();
  if (more % 2 === 0) {
    showMore.childNodes[1].textContent = "arrow_downward";
    showMore.childNodes[2].textContent = "Show more";
    showMore.childNodes[3].checked = false;
  } else {
    showMore.childNodes[1].textContent = "arrow_upward";
    showMore.childNodes[2].textContent = "Show less";
    showMore.childNodes[3].checked = true;
  }
  more++;
});
