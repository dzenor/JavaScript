let choises = ["rock", "paper", "scissors"];
let computerChoise = Math.floor(Math.random() * 3);

let playerChoise = Math.floor(Math.random() * 3);

let showChoise = choises[computerChoise];

console.log("Computer choise: " + showChoise);

showChoise = choises[playerChoise];
console.log("Player choise: " + showChoise);

if (choises[computerChoise] === choises[playerChoise]) {
  console.log("It`s a tie!!");
} else if (
  choises[computerChoise] === "rock" &&
  choises[playerChoise] === "paper"
) {
  console.log("Player wins");
} else if (
  choises[computerChoise] === "paper" &&
  choises[playerChoise] === "scissors"
) {
  console.log("Player wins");
} else if (
  choises[computerChoise] === "scissors" &&
  choises[playerChoise] === "rock"
) {
  console.log("Player wins");
} else if (
  choises[playerChoise] === "rock" &&
  choises[computerChoise] === "paper"
) {
  console.log("Computer wins");
} else if (
  choises[playerChoise] === "paper" &&
  choises[computerChoise] === "scissors"
) {
  console.log("Computer wins");
} else if (
  choises[playerChoise] === "scissors" &&
  choises[computerChoise] === "rock"
) {
  console.log("Computer wins");
}
