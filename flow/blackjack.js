// initial state of game

let cardOne = 7
let cardTwo = 5
let sum = cardOne + cardTwo // 15 points

// card bank

let cardOneBank = 7
let cardTwoBank = 5
let cardThreeBank = 5
let cardFourBank = 4

// check operation

let cardThree = 7
sum += cardThree

if (sum > 21) {
    console.log("You lost")
    process.exit(1) // exit program
}
console.log(`You have ${sum} points`) // 19 points

let bankSum = cardOneBank + cardTwoBank + cardThreeBank + cardFourBank

if (bankSum > 21 || (sum <= 21 && sum > bankSum)) {
    console.log("You Win")
    process.exit(1) // exit program
} else {
    console.log(`Bank's ${bankSum} points`)
    console.log("Bank Wins")
}
