// modal started
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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
let payment = document.getElementById("payment");
let score = document.getElementById("score");
let range = document.querySelector(".range");
let showPaymentVal = document.querySelector(".showPaymentVal");
let showCreditVal = document.querySelector(".showCreditVal");
let minGap = 500;
let sliderTrack = document.querySelector(".slider-track");
let minAmount = document.querySelector(".minAmount");
let maxAmount = document.querySelector(".maxAmount");
let sliderMaxValue = document.getElementById("slider-1").max;
function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = `$ ${sliderOne.value}`;
  minAmount.textContent = `${sliderOne.value}`;
  fillColor();
}
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = `$ ${sliderTwo.value}`;
  maxAmount.textContent = `${sliderTwo.value}`;
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

const getPaymentVal = () => {
  showPaymentVal.textContent = payment?.value
}

const getCreditVal = () => {
  showCreditVal.textContent = score?.value
}
// modal ended
