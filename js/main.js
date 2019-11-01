window.addEventListener("resize", setMobile);
var gui = document.getElementById("GUI");
var thirdFloor = document.getElementById("thirdFloor");
var courtyard = document.getElementById("ctyard3");
var a3 = document.getElementById("a3");
var b3 = document.getElementById("b3");
var c3 = document.getElementById("c3");
var a3o1 = document.getElementById("a3o1");
var a3o2 = document.getElementById("a3o2");
var a3o3 = document.getElementById("a3o3");
var a3o4 = document.getElementById("a3o4");
var a3o5 = document.getElementById("a3o5");
var a3o6 = document.getElementById("a3o6");
var a3o7 = document.getElementById("a3o7");

function setMobile() {
  var w = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  if (w > 600) {
  // desktop styles
  gui.className = "guid";
  thirdFloor.className = "thirdfloord";
  courtyard.className = "courtyardd";
  a3.className = "buildingAd";
  b3.className = "buildingBd";
  c3.className = "buildingC3d";

  a3o1.style.left = "2%";
  a3o1.style.top = "2.5%";

  a3o2.style.left = "16%";
  a3o2.style.top = "2.5%";

  a3o3.style.left = "30%";
  a3o3.style.top = "2.5%";

  a3o4.style.left = "44%";
  a3o4.style.top = "2.5%";

  a3o5.style.left = "58%";
  a3o5.style.top = "2.5%";

  a3o6.style.left = "72%";
  a3o6.style.top = "2.5%";

  a3o7.style.left = "86%";
  a3o7.style.top = "2.5%";


  } else {
  // mobile style
  gui.className = "guim";
  thirdFloor.className = "thirdfloorm";
  courtyard.className = "courtyardm";
  a3.className = "buildingAm";
  b3.className = "buildingBm";
  c3.className = "buildingC3m";

  a3o1.style.left = "2%";
  a3o1.style.top = "2.5%";

  a3o2.style.left = "16%";
  a3o2.style.top = "2.5%";

  a3o3.style.left = "30%";
  a3o3.style.top = "2.5%";

  a3o4.style.left = "44%";
  a3o4.style.top = "2.5%";

  a3o5.style.left = "58%";
  a3o5.style.top = "2.5%";

  a3o6.style.left = "72%";
  a3o6.style.top = "2.5%";

  a3o7.style.left = "86%";
  a3o7.style.top = "2.5%";

  }
}
