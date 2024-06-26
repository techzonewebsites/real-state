// modal started
// Get the modal
var modal = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// range control with two control
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 500;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  if (sliderOne.value > 999) {
    let formattedNumber = (sliderOne.value / 1000).toFixed(0) + 'K';
    displayValOne.textContent = `$ ${formattedNumber}`;
  } else {
    displayValOne.textContent = `$ ${sliderOne.value}`;
  }
  fillColor();
}
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  if (sliderTwo.value > 999) {
    let formattedNumber = (sliderTwo.value / 1000).toFixed(0) + 'K';
    displayValTwo.textContent = `$ ${formattedNumber}`;
  }else{
    displayValTwo.textContent = `$ ${sliderTwo.value}`
  }
  fillColor();
}
function fillColor() {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #000000 ${percent1}% , #000000 ${percent2}%, #dadae5 ${percent2}%)`;
}

window.addEventListener('load', () => {
  fillColor()
})

// modal ended
