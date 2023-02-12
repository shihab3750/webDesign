// random numbers
let randomFloat = Math.random();
let randomInt = Math.floor((Math.random() * 10)) + 1;

// coin toss
let flip = Math.round(Math.random());

// dom queries
let image = document.querySelector("#coin");

if (flip == 0){
    //heads
    image.src = 'heads.png';
}
else{
    //tails
    image.src = 'tails.png';
}