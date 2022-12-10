let randomNumber = Math.random();
randomNumber = randomNumber * 3;
randomNumber = Math.floor(randomNumber);

let compChoice = "Computer selection is: ";

if (randomNumber === 0) {
  compChoice += "rock";
} else if (randomNumber === 1) {
  compChoice += "paper";
} else if (randomNumber === 2) {
  compChoice += "scissors";
}

console.log(compChoice);

let userChoice = prompt("Choose rock paper or scissors");

console.log(`User selection is: ${userChoice} `);
let result = "The winner is: ";

function compare() {
  if (userChoice == compChoice) {
    console.log("The result is a tie!");
  } else if (
    (userChoice == "rock" && compChoice == "scissors") ||
    (userChoice == "paper" && compChoice == "rock") ||
    (userChoice == "scissors" && compChoice == "paper")
  ) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}

console.log("Your choice = " + userChoice);
console.log("Computer Choice = " + compChoice);
compare();
