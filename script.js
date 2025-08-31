let slideIndex = 0; // mulai dari 0

function showSlides() {
  let slides = document.querySelectorAll("#slideshow .slides");
  let dots = document.querySelectorAll(".dot");

  // sembunyikan semua slide
  slides.forEach(slide => slide.style.display = "none");

  // tampilkan slide saat ini
  slides[slideIndex].style.display = "block";

  // update dot
  dots.forEach(dot => dot.classList.remove("active"));
  dots[slideIndex].classList.add("active");

  // naikkan index untuk slide berikutnya
  slideIndex++;
  if(slideIndex >= slides.length) slideIndex = 0;

  setTimeout(showSlides, 4000); // ganti slide tiap 4 detik
}

// jalankan setelah DOM siap
document.addEventListener("DOMContentLoaded", showSlides);
