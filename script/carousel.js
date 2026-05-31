"use strict";

const imgsWrappers = document.querySelectorAll(".imgs-wrapper");

class Carousel {
  constructor(imgs) {
    // references to the next/previous buttons (assumed to be siblings)
    this.next = imgs.nextElementSibling;
    this.prev = imgs.previousElementSibling;

    // wrapper that contains the images
    this.imgs = imgs;

    // live HTMLCollection of child <img> elements
    this.imgsList = imgs.children;

    // first image used to measure height
    let firstImg = imgs.children[0];

    // function to set the wrapper height to the rendered height of the first image
    const setWrapperHeight = () => {
      this.imgs.style.height = `${firstImg.getBoundingClientRect().height}px`;
    };

    // if first image exists: set wrapper height immediately if already loaded,
    // otherwise wait for its load event (once)
    if (firstImg) {
      if (firstImg.complete) {
        setWrapperHeight();
      } else {
        firstImg.addEventListener("load", setWrapperHeight, { once: true });
      }
    }

    // recalculate wrapper height on window resize (for responsive images)
    window.addEventListener("resize", setWrapperHeight);

    // number of images
    this.imgsLength = imgs.children.length;

    // create container for the navigation circles and append to DOM
    this.circles = document.createElement("div");
    this.circles.classList.add("imgs__circles");
    imgs.parentElement.appendChild(this.circles);

    // index of the currently active image
    this.currentImg = 0;

    // populate circles and position images
    this.load();
    this.loadImgs();

    // add click handlers for navigation using arrow functions to keep `this`
    this.next.addEventListener("click", () => this.nextImg());
    this.prev.addEventListener("click", () => this.prevImg());
  }

  // create one circle per image and mark the first as active
  load() {
    for (let i = 0; i < this.imgsLength; i++) {
      const circle = document.createElement("span");
      if (i === 0) {
        circle.style.backgroundColor = "var(--text-color)";
      }
      this.circles.appendChild(circle);
    }
  }

  // set each image's left position in percent (0%, 100%, 200%, ...)
  loadImgs() {
    for (let i = 0; i < this.imgsLength * 100; i += 100) {
      this.imgsList[i / 100].style.left = i.toString() + "%";
    }
  }

  // move to the next image
  nextImg() {
    // prevent going past the last image
    if (this.currentImg >= this.imgsLength - 1) return;

    // update circle indicators
    this.circles.children[this.currentImg].style.backgroundColor =
      "transparent";
    this.currentImg++;
    this.circles.children[this.currentImg].style.backgroundColor =
      "var(--text-color)";

    // shift every image left by 100%
    for (let img of this.imgsList) {
      let currentLeft = parseFloat(img.style.left) || 0;
      currentLeft -= 100;
      img.style.left = currentLeft.toString() + "%";
      console.log(img.style.left);
    }
  }

  // move to the previous image
  prevImg() {
    // prevent going before the first image
    if (this.currentImg <= 0) return;

    // update circle indicators
    this.circles.children[this.currentImg].style.backgroundColor =
      "transparent";
    this.currentImg--;
    this.circles.children[this.currentImg].style.backgroundColor =
      "var(--text-color)";

    // shift every image right by 100%
    for (let img of this.imgsList) {
      let currentLeft = parseFloat(img.style.left) || 0;
      currentLeft += 100;
      img.style.left = currentLeft.toString() + "%";
      console.log(img.style.left);
    }
  }
}

// instantiate a Carousel for each .imgs-wrapper found
for (let imgsWrapper of imgsWrappers) {
  new Carousel(imgsWrapper);
}
