var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elResult1 = document.querySelector(".result1");
var elResult2 = document.querySelector(".result2");
var elText1 = document.querySelector(".list__text1");
var elText2 = document.querySelector(".list__text2");
var elText3 = document.querySelector(".list__text3");
var elText4 = document.querySelector(".list__text4");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var elInputValue = +elInput.value;
  if (elInputValue <= 0 || isNaN(elInputValue)) {
    elResult2.textContent = "0 dan katta son kiriting yoki harf kiritmang";
    elResult2.classList.add("is-invalid");
    elResult2.classList.remove("is-valid");
    elResult1.classList.add("triangle");
    return;
  } else {
    elResult2.textContent = "✅";
    elResult2.classList.remove("is-invalid");
    elResult2.classList.add("is-valid");
    elResult1.classList.remove("triangle");
  }

  function userSpeed(elInputValue, user) {
    var user = 3.6;
    var elInputValue = +elInput.value;
    return (elInputValue / user).toFixed(1) + " Soat";
  }
  elText1.textContent = userSpeed();

  function biceSpeed(elInputValue, bycicle) {
    var bycicle = 20.1;
    var elInputValue = +elInput.value;
    return (elInputValue / bycicle).toFixed(1) + " Soat";
  }
  elText2.textContent = biceSpeed();

  function carSpeed(elInputValue, car) {
    var elInputValue = +elInput.value;
    var car = 70;
    return (elInputValue / car).toFixed(1) + " Soat";
  }
  elText3.textContent = carSpeed();

  function planeSpeed(elInputValue, airPlane) {
    var airPlane = 800;
    var elInputValue = +elInput.value;
    return (elInputValue / airPlane).toFixed(1) + " Soat";
  }
  elText4.textContent = planeSpeed();
});
