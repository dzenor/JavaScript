//console.log("Dzeno");
/*Dzenis 
Redzovic
*/

/*
let userAge = prompt("How old are you?");
alert("vasite godini " + userAge + " se procesirani");
console.log(userAge);
*/

let randomNum = Math.random() * 3;
console.log("my random number: " + randomNum);
let roundNum = Math.floor(randomNum) + 1;
console.log("my rounded number: " + roundNum);

let num = prompt("Guess a number from 1 to 3");

if (roundNum == num) {
  alert("You guessed right");
} else {
  alert("You guessed wrong");
}
