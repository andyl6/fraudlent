const number = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameend = false; 

const playerguess = document.getElementById("guess");
const check = document.getElementById("check");
const message = document.getElementById("message");
const add1 = document.getElementById("add1");
const add5 = document.getElementById("add5");
const add10 = document.getElementById("add10");
const add25 = document.getElementById("add25");
const sub1 = document.getElementById("sub1");
const sub5 = document.getElementById("sub5");
const sub10 = document.getElementById("sub10");
const sub25 = document.getElementById("sub25");
const guesstable = document.getElementById("guesstable");
const reloadButton = document.getElementById("reload"); 

reloadButton.addEventListener("click", function () {
    location.reload();
});

check.addEventListener("click", function () {
    if (gameend) {
        return;
    }

    const guess = parseInt(playerguess.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Enter a number 1-100";
        return;
    }

    attempts++;

    if (number == guess) {
        message.textContent = "you got it";
    } else if (Math.abs(number - guess) < 6) {
        message.textContent = "very hot";
    } else if (Math.abs(number - guess) < 9) {
        message.textContent = "hot";
    } else if (Math.abs(number - guess) < 16) {
        message.textContent = "very warm";
    } else if (Math.abs(number - guess) < 21) {
        message.textContent = "warm";
    } else if (Math.abs(number - guess) < 31) {
        message.textContent = "cool";
    } else if (Math.abs(number - guess) < 41) {
        message.textContent = "very cool";
    } else if (Math.abs(number - guess) < 56) {
        message.textContent = "cold";
    } else {
        message.textContent = "very cold";
    }
    addtoguesstable(attempts, guess, message.textContent);

    if (attempts >= 10) {
        gameend = true;
        message.textContent="you lost reload the game to play again"
    }
});

add1.addEventListener("click", function () {
    adjustguess(1);
});

add5.addEventListener("click", function () {
    adjustguess(5);
});

add10.addEventListener("click", function () {
    adjustguess(10);
});

add25.addEventListener("click", function () {
    adjustguess(25);
});

sub1.addEventListener("click", function () {
    adjustguess(-1);
});

sub5.addEventListener("click", function () {
    adjustguess(-5);
});

sub10.addEventListener("click", function () {
    adjustguess(-10);
});

sub25.addEventListener("click", function () {
    adjustguess(-25);
});

function adjustguess(value) {
    const currentguess = parseInt(playerguess.value);
    const newguess = currentguess + value;
    if (newguess >= 1 && newguess <= 100) {
        playerguess.value = newguess;
    }
}

function addtoguesstable(attempt, guess, result) {
    const newrow = guesstable.insertRow();
    newrow.insertCell(0).textContent = attempt;
    newrow.insertCell(1).textContent = guess;
    newrow.insertCell(2).textContent = result;
}