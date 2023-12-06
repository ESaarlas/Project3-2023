let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }

  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slides[slideIndex].style.opacity = "1";
  setTimeout(showSlides, 2000); 
}

document.addEventListener("DOMContentLoaded", function () {
  showSlides();
});
