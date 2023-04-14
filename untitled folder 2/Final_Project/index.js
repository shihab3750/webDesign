let d = new Date();
let day = d.getDate();
console.log(day);

let heading = document.getElementById("heading");
let background = document.querySelector("body");

background.style.backgroundColor = "black";
heading.style.color = "white";

if ((day %= 2)) {
  change_color("green");
} else {
  change_color("black");
}

function change_color(color) {
  document.body.style.color = color;
}
