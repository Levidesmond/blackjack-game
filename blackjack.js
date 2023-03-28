
/*This line is creating a new object called 'player', with two properties: 'name' and 'chips'. 
The value for 'name' is "per", and the value for 'chips' is 200. 
*/
let player = {
  name: "per",
  chips: 200,
};

/*creating a new array called 'cards', which will be used to store the cards that are dealt during the game.
and a new variable called 'sum', which will store the total value of the cards the player currently has. 
and a new variable called 'hasBlackjack', which will be set to true or false depending on whether 
the player has a blackjack (21). 
and a new variable called 'isAlive', which will be set to true or false depending
on whether the player is still in the game. 
and a new variable called 'message', which will store a message to be displayed to the player. 

*/
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

/* using the getElementById() method to get an element on the 
page with an id of 'message-el'. The result of this method is then stored in the 'messageEl' variable. 
*/
let messageEl = document.getElementById("message-el");
/*using the getElementById() method to get an element on the page with an id of 'sum-el'. 
The result of this method is then stored in the 'sumEL' variable. 
*/

let sumEL = document.getElementById("sum-el");

/* using the getElementById() method to get an element on the page with an id of 'cards-el'. 
The result of this method is then stored in the 'cardsEl' variable. 
*/

let cardsEl = document.getElementById("cards-el");
/*using the getElementById() method to get an element on the page with an id of 'playre-el'. 
The result of this method is then stored in the 'playerEl' variable. 
*/
let playerEl = document.getElementById("playre-el");
playerEl.textContent = player.name + ": #" + player.chips;

/* defining a function called 'getRandomCard', which will generate a random number between 1 and 13, 
and return the corresponding card value. 
*/
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}
//defining a function called 'startGame', which will initialize all the necessary variables and render the game. 
function startGame() {
  isAlive = true;

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}
//defining a function called 'renderGame', which will display the player's current cards, sum, and message.
function renderGame() {
  sumEL.textContent = "sum: " + sum;
  cardsEl.textContent = "cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " , ";
  }

  if (sum <= 20) {
    message = "do you want a new card";
  } else if (sum === 21) {
    message = "blackjack";
    hasBlackjack = true;
  } else {
    message = "you are out of the game";
    isAlive = false;
  }

  messageEl.textContent = message;
}

/*defining a function called 'newCard', which will deal a new card to the player 
if they are still in the game and don't have a blackjack.
*/
function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);

    renderGame();
  }
}
