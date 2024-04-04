// modal started
// Get the modal
var modal = document.getElementById("myModal7");

// Get the button that opens the modal
var btn = document.getElementById("myBtn7");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close7")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// carousal started

let currentSlide = 0;

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  currentSlide = (n + slides.length) % slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[currentSlide].style.display = "block";
}

function moveSlide(n) {
  showSlide(currentSlide += n);
}

window.onload = function() {
  showSlide(currentSlide);
} 

// modal endeda
