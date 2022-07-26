"use strict";
const slides = document.querySelectorAll(".panel");

slides.forEach((sldie) => {
  sldie.addEventListener("click", function (e) {
    console.log(e);
    e.target.classList.toggle("open");
  });
});

slides.forEach((slide) => {
  slide.addEventListener("transitionend", function (e) {
    if (e.propertyName.includes("flex")) {
      e.target.classList.toggle("active");
    }
  });
});
