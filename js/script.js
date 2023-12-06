document.addEventListener("DOMContentLoaded", function () {
  let slideshowIndex = 0;
  const slides = document.getElementsByClassName("mySlides");

  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
    }

    slideshowIndex++;
    if (slideshowIndex > slides.length) {
      slideshowIndex = 1;
    }

    slides[slideshowIndex - 1].style.opacity = 1;
  }

  setInterval(showSlides, 2000);
});
