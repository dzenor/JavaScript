let userInput = prompt("Enter a number between 0 and 100");
let userNumber = Number(userInput);

let randomNumber = Math.random();
randomNumber = randomNumber * 100;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);

if (userInput > randomNumber) {
  alert("Your number is greater than mine");
} else if (userInput < randomNumber) {
  alert("Your number is less than mine");
} else if (userInput === randomNumber) {
  alert("Our number are equals");
}
