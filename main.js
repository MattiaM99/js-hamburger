const hamburger = document.querySelector("div.hamburger-menu");
const headerRightOn = document.querySelector(".header-right > a");
const headerRightOff = document.querySelector(".close");

headerRightOn.addEventListener("click", function (){
  hamburger.classList.add("active");
});

headerRightOff.addEventListener("click", function (){
  console.log("hai chiuso il menu");
  hamburger.classList.remove("active");
});