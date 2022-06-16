// DEFINICAO DAS VARIAVEIS DOS BOTOES

let body = document.body;

body.style.backgroundImage = "url('img/back.jpg')";

let content = document.getElementById("content");

let btnA = document.createElement("input");
btnA.type = "button";
btnA.setAttribute("id", "btnA");
btnA.setAttribute("class", "btn");
btnA.value = "A";
content.appendChild(btnA);

let btnS = document.createElement("input");
btnS.type = "button";
btnS.setAttribute("id", "btnS");
btnS.setAttribute("class", "btn");
btnS.value = "S";
content.appendChild(btnS);

let btnD = document.createElement("input");
btnD.type = "button";
btnD.setAttribute("id", "btnD");
btnD.setAttribute("class", "btn");
btnD.value = "D";
content.appendChild(btnD);

let btnF = document.createElement("input");
btnF.type = "button";
btnF.setAttribute("id", "btnF");
btnF.setAttribute("class", "btn");
btnF.value = "F";
content.appendChild(btnF);

let btnG = document.createElement("input");
btnG.type = "button";
btnG.setAttribute("id", "btnG");
btnG.setAttribute("class", "btn");
btnG.value = "G";
content.appendChild(btnG);

let btnH = document.createElement("input");
btnH.type = "button";
btnH.setAttribute("id", "btnH");
btnH.setAttribute("class", "btn");
btnH.value = "H";
content.appendChild(btnH);

let btnJ = document.createElement("input");
btnJ.type = "button";
btnJ.setAttribute("id", "btnJ");
btnJ.setAttribute("class", "btn");
btnJ.value = "J";
content.appendChild(btnJ);

let btnK = document.createElement("input");
btnK.type = "button";
btnK.setAttribute("id", "btnK");
btnK.setAttribute("class", "btn");
btnK.value = "K";
content.appendChild(btnK);

let btnL = document.createElement("input");
btnL.type = "button";
btnL.setAttribute("id", "btnL");
btnL.setAttribute("class", "btn");
btnL.value = "L";
content.appendChild(btnL);

const audio1 = new Audio("./sounds/kick.wav");
const audio2 = new Audio("./sounds/boom.wav");
const audio3 = new Audio("./sounds/snare.wav");
const audio4 = new Audio("./sounds/clap.wav");
const audio5 = new Audio("./sounds/openhat.wav");
const audio6 = new Audio("./sounds/tink.wav");
const audio7 = new Audio("./sounds/hihat.wav");
const audio8 = new Audio("./sounds/tom.wav");
const audio9 = new Audio("./sounds/ride.wav");

let key = Event.key;
function apertarTecla(event) {
  switch (event.key) {
    case "a":
      audio1.play();
      break;
    case "s":
      audio2.play();
      break;
    case "d":
      audio3.play();
      break;
    case "f":
      audio4.play();
      break;
    case "h":
      audio5.play();
      break;
    case "j":
      audio6.play();
      break;
    case "k":
      audio7.play();
      break;
    case "l":
      audio8.play();
      break;
    case "g":
      audio9.play();
      break;
  }
}
window.addEventListener("keydown", apertarTecla);

btnA.addEventListener("click", function () {
  audio1.play();
});

btnS.addEventListener("click", function () {
  audio2.play();
});

btnD.addEventListener("click", function () {
  audio3.play();
});

btnF.addEventListener("click", function () {
  audio4.play();
});

btnH.addEventListener("click", function () {
  audio5.play();
});

btnJ.addEventListener("click", function () {
  audio6.play();
});

btnK.addEventListener("click", function () {
  audio7.play();
});
btnL.addEventListener("click", function () {
  audio8.play();
});
btnG.addEventListener("click", function () {
  audio9.play();
});
