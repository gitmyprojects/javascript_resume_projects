// timer
var seconds = 5
  function tick() {
      seconds = seconds - 1;
      timer.innerHTML = seconds;
      //The statement “setTimeout(tick, 1000);” 
      //means that the program is pausing for 1,000 milliseconds (i.e., 1 second).
      var time = setTimeout(tick, 1000);
      if (seconds == -1) {
          currentSlide(1);
          clearTimeout(time);
          timer.innerHTML = ""
      }
  }
tick()

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}