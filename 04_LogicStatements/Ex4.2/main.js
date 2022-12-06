let userAge = prompt("How old are you?");
console.log(userAge);
Number(userAge);
userAge = Number;
let message = "";

if ((userAge) => 21) {
  message = "Confirm entry to a venue and the ability to purchase the alcohol!";
} else if ((userAge) => 19) {
  message = "Confirm entry to the venue but deny the purchase od alcohol!";
} else {
  message = "You can not enter!";
}

console.log(message);
