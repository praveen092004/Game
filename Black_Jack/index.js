let player = {
    name: "Per",
    chips: 200
}

let cards = [];
var sum = 0;
let hashBlackJack = false;
let isAlive = false;
let message = "";


let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");
let playerEL = document.getElementById("player");

playerEL.textContent = player.name + " : $" + player.chips

function getRandomCard() {
    let randomnumber = Math.ceil(Math.random() * 13)  //Random number return randomnumberue from 0.0000 to 0.9999

    if (randomnumber == 1) return 11;
    else if (randomnumber > 10) return 10;
    else return randomnumber;
}

function StartGame() {
    let card1 = getRandomCard();
    let card2 = getRandomCard();
    cards.push(card1);
    cards.push(card2);
    isAlive = true;
    sum += card1 + card2;
    renderGame();
}

function renderGame() {
    if (sum <= 20) {
        message = "Do You want to draw a new card ?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hashBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    // console.log(message);
    messageEl.textContent = message;
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
}

function Newcard() {
    if (isAlive && !hashBlackJack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame()
    }
}