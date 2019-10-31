window.addEventListener("resize", setMobile);
var gui = document.getElementById("GUI");
var thirdFloor = document.getElementById("thirdFloor");
var a3 = document.getElementById("a3");
var b3 = document.getElementById("b3");
var c3 = document.getElementById("c3");


function setMobile() {
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
if (w > 600) {
// desktop styles
  gui.style.width = "60%";
  gui.style.height = "80vh";
  gui.style.top = "10vh";

  thirdFloor.style.top = "7.5vh"
  thirdFloor.style.left = "15%";
  thirdFloor.style.width = "70%";
  thirdFloor.style.height = "90%";

  a3.style.width = "30%";
  a3.style.height = "40%";
  a3.style.top = "2.5%";
  a3.style.borderRadius = "0.5em";

  b3.style.top = "15%";
  b3.style.left = "40%";
  b3.style.width = "30%";
  b3.style.height = "40%";
  b3.style.borderRadius = "0.5em";

  c3.style.top = "50%";
  c3.style.left = "5%";
  c3.style.width = "30%";
  c3.style.height = "40%";
  c3.style.borderRadius = "0.5em";


} else {
  // mobile styles
  gui.style.width = "97%";
  gui.style.height = "70vh";
  gui.style.top = "15vh";

  thirdFloor.style.top = "7.5vh"
  thirdFloor.style.left = "1.5%";
  thirdFloor.style.width = "95%";
  thirdFloor.style.height = "80%";

  a3.style.top = "0vh";
  a3.style.width = "45%";
  a3.style.height = "45%";
  a3.style.borderRadius = "0.25em";

  b3.style.top = "5%";
  b3.style.left = "53%";
  b3.style.width = "45%";
  b3.style.height = "45%";
  b3.style.borderRadius = "0.25em";

  c3.style.top = "50%";
  c3.style.left = "5%";
  c3.style.width = "45%";
  c3.style.height = "45%";
  c3.style.borderRadius = "0.25em";
  }
}
