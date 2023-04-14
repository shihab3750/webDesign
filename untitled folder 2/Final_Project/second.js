let randomFloat = Math.random();
let randomInt = Math.floor(Math.random() * 10) + 1;

let flip = Math.round(Math.random());

let image = document.querySelector("#coin");

if (flip == 0) {
  image.src = "heads.png";
} else {
  image.src = "tails.png";
}
function play() {
  var audio = document.getElementById("audio");
  audio.play();
}
