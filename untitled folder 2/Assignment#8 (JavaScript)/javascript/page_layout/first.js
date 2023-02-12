let d = new Date();
let day = d.getDate();
console.log(day); 

let heading = document.getElementById('heading');
let background = document.querySelector('body');

background.style.backgroundColor = 'black';
heading.style.color = 'white';

if (day==0){ 
    change_color('green');
}
else if (day==1){ 
  change_color('red');
}
else if (day==2){ 
  change_color('purple');
}
else if (day==3){ 
  change_color('blue');
}
else if (day==4){ 
  change_color('yellow');
}
else if (day==5){ 
  change_color('pink');
}
else if (day==6){ 
  change_color('brown');
}

function change_color(color){
  document.body.style.color = color;
}

function check_price(book){
  if (book==first_book){
    alert("16.52");
  }
  else if (book==second_book){
    alert("26.95");
  }
  else if (book==third_book){
    alert("9.99");
  }
}

let first_book = document.getElementById("book1");
let second_book = document.getElementById("book2");
let third_book = document.getElementById("book3");

first_book.addEventListener("onclick", check_price(first_book));
second_book.addEventListener("onclick", check_price(second_book));
third_book.addEventListener("onclick", check_price(third_book));