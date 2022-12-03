var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elText1 = document.querySelector(".list__text1");
var elText2 = document.querySelector(".list__text2");
var elText3 = document.querySelector(".list__text3");
var elText4 = document.querySelector(".list__text4");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  function userSpeed(elInputValue, user) {
    var user = 3.6;
    var elInputValue = +elInput.value;
    return elInputValue / user + " Soat";
  }
  elText1.textContent = userSpeed();

  function biceSpeed(elInputValue, bycicle) {
    var bycicle = 20.1;
    var elInputValue = +elInput.value;
    return elInputValue / bycicle + " Soat";
  }
  elText2.textContent = biceSpeed();

  function carSpeed(elInputValue, car) {
    var elInputValue = +elInput.value;
    var car = 70;
    return elInputValue / car + " Soat";
  }
  elText3.textContent = carSpeed();

  function planeSpeed(elInputValue, airPlane) {
    var airPlane = 800;
    var elInputValue = +elInput.value;
    return elInputValue / airPlane + " Soat";
  }
  elText4.textContent = planeSpeed();
});
