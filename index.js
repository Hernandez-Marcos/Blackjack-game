let age = Math.floor(Math.random() * 100);

if (age < 21) {
    console.log("You can not enter the club!");
} else {
    console.log("Welcome")
}

let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true
let message = ""

if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
} else {
    message = "You're out of the game! 😭";
    isAlive = false;
}

console.log(message)