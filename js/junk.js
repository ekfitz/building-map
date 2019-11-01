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

  courtyard.style.width = "55%";
  courtyard.style.height = "75%";
  courtyard.style.top = "8vh";
  courtyard.style.left = "8%";

  studio.style.width = "25%";
  studio.style.height = "33%";
  studio.style.top = "45%";
  studio.style.left = "45%";

  a3.style.width = "30%";
  a3.style.height = "40%";
  a3.style.top = "2.5%";
  a3.style.borderRadius = "0.5em";

  b3.style.top = "50%";
  b3.style.left = "5%";
  b3.style.width = "30%";
  b3.style.height = "40%";
  b3.style.borderRadius = "0.5em";


  c3.style.top = "15%";
  c3.style.left = "40%";
  c3.style.width = "30%";
  c3.style.height = "40%";
  c3.style.borderRadius = "0.5em";


} else {
  // mobile styles
  gui.style.width = "97%";
  gui.style.height = "70vh";
  gui.style.top = "15vh";

  thirdFloor.style.top = "7.5vh"
  thirdFloor.style.left = "3%";
  thirdFloor.style.width = "95%";
  thirdFloor.style.height = "80%";

  courtyard.style.width = "80%";
  courtyard.style.height = "75%";
  courtyard.style.top = "8vh";
  courtyard.style.left = "10%";

  studio.style.width = "40%";
  studio.style.height = "35%";
  studio.style.top = "45%";
  studio.style.left = "58%";

  a3.style.top = "0vh";
  a3.style.width = "45%";
  a3.style.height = "45%";
  a3.style.borderRadius = "0.25em";

  b3.style.top = "50%";
  b3.style.left = "5%";
  b3.style.width = "45%";
  b3.style.height = "45%";
  b3.style.borderRadius = "0.25em";

  c3.style.top = "5%";
  c3.style.left = "53%";
  c3.style.width = "45%";
  c3.style.height = "45%";
  c3.style.borderRadius = "0.25em";
  }
}
