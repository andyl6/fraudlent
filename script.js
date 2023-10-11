const number = Math.floor(Math.random()*100)+1;
let attempts = 0;

const playerguess = document.getElementById("guess");
const check = document.getElementById("check");
const message = document.getElementById("message");

check.addEventListener("click",function(){
    const guess = parseInt(playerguess.value);

    if(isNaN(guess) || guess < 1 || guess > 100){
        message.textContent = "enter a number 1-100";
        return;
    
}

attempts++;

if(number==guess){
    message.textContent = "you got it"
}else if(number-guess<6){
    message.textContent = "very hot";
} else if(number-guess<9){
    message.textContent = "hot";
} else if(number-guess<16){
    message.textContent = "very warm";
} else if(number-guess<21){
    message.textContent = "warm";
} else if(number-guess<31){
    message.textContent = "cool";
} else if(number-guess<41){
    message.textContent = "very cool";
} else if(number-guess<56){
    message.textContent = "cold"
}else{
    message.textContent = "very cold";
}
});