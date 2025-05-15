// slider.js
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slider-image");
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });
}

function moveSlide(direction) {
  showSlide(currentSlide + direction);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
  setInterval(() => moveSlide(1), 5000); // Auto-slide every 5 sec
});
