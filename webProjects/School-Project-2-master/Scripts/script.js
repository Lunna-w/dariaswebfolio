var playicon = document.getElementById("playi");

var vid = document.getElementById("video");

function displaynone() {
  if (vid.play == true) {
    vid.pause();

    playicon.classList.remove = "hidden";
  } else {
    vid.play();

    playicon.className = "hidden";
  }
}

const d = new Date();
var day = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();

document.getElementById("days").innerHTML = day;
document.getElementById("months").innerHTML = month;
document.getElementById("years").innerHTML = year;

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
