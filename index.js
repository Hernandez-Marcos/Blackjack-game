/*let age = Math.floor(Math.random() * 100);

if (age < 21) {
    console.log("You can not enter the club!");
} else {
    console.log("Welcome")
}*/

let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
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
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];  
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
    if (isAlive && !hasBlackJack) {
        card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards)
        renderGame();
    } 
}