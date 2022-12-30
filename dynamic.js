let slideIndex = 1;
let projectIndex = 1;
showSlides(slideIndex, projectIndex);

function plusSlides(n) {
  showSlides((slideIndex += n) && (projectIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n) && (projectIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let projects = document.getElementsByClassName("projects");
  let dots = document.getElementsByClassName("dot");
  //si num de slides es mayor a cantidad de slides, volver a 1
  if ((n > slides.length) && (n > projects.length)) { slideIndex = 1; projectIndex = 1 }
  // if (n < 1) { slideIndex = slides.length }
  //esconder las 3 slides
  for (i = 0; (i < slides.length) && (i < projects.length); i++) {
    slides[i].style.display = "none";
    projects[i].style.display = "none";
  }
  //marcar dots activos en mobile
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //mostrar slide sig
  slides[slideIndex - 1].style.display = "block";
  projects[projectIndex -1].style.display = "block";
  //marcar dot sig
  dots[slideIndex - 1].className += " active";
}