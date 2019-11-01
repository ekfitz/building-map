window.addEventListener("resize", setMobile);
var gui = document.getElementById("GUI");
var thirdFloor = document.getElementById("thirdFloor");
var courtyard = document.getElementById("ctyard3");
var a3 = document.getElementById("a3");
var b3 = document.getElementById("b3");
var c3 = document.getElementById("c3");


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

  } else {
  // mobile style
  gui.className = "guim";
  thirdFloor.className = "thirdfloorm";
  courtyard.className = "courtyardm";
  a3.className = "buildingAm";
  b3.className = "buildingBm";
  c3.className = "buildingC3m";

  }
}
