// initial state of game
const startingPokerChips = 100; // points
const players = 3; // numbers of players
const noOfStarterCards = 2;
let gameHasEnded = false;

// players name
let playerOneName = "Chloe";
let playerTwoName = "Jasmine";
let playerThreeName = "Jen";

// specific players starting chips
let playerOnePoints = startingPokerChips; // 100 points
let playerTwoPoints = startingPokerChips; // 100 points
let playerThreePoints = startingPokerChips; // 100 points

// start game
console.log(
  `Welcome to Texas Hold'em.
    The championship title will be awarded to one of these three players:
    ${playerOneName}, ${playerTwoName} and ${playerThreeName}.
    Each player has ${startingPokerChips} in their pot.
    We have an exciting game ahead of us. 
    May the best player win!`
);

// specific game and state of game in this moment
playerOnePoints -= 50; // lost 50 points pointed
playerTwoPoints -= 25; // lost 25 points pointed
playerThreePoints += 75; // win 50 points of first player + and 25 points of second player

gameHasEnded =
  playerOnePoints + playerTwoPoints == 0 ||
  playerTwoPoints + playerThreePoints == 0 ||
  playerOnePoints + playerThreePoints == 0;

console.log("Game has ended: ", gameHasEnded);
