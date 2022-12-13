let userInput = parseInt(prompt("Enter a number between 0 and 100"));

let randomNumber = Math.floor(Math.random() * 100);

console.log(randomNumber);

if (userInput > randomNumber) {
  alert("Your number is greater than mine");
} else if (userInput < randomNumber) {
  alert("Your number is less than mine");
} else {
  alert("Our number are equals");
}
