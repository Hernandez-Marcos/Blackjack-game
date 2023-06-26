/*let age = Math.floor(Math.random() * 100);

if (age < 21) {
    console.log("You can not enter the club!");
} else {
    console.log("Welcome")
}*/

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1;
    console.log(randomNumber)
    return randomNumber > 10 ? 10 : randomNumber === 1 ? 11 : randomNumber;
}

function startGame() {
    renderGame()
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    };

    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
}

function newCard() {
    card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards)
    renderGame();
}