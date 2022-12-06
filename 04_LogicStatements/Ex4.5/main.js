let prize = prompt("Enter a number between 0 - 10.");
let selectedNumber = Number(prize);
console.log(prize);

let message = "My selection: ";

switch (selectedNumber) {
  case 0:
    message += "bear";
    break;
  case 1:
    message += "bunny";
    break;
  case 2:
  case 3:
    message += "girafe";
    break;
  case 4:
    message += "horse";
    break;
  case 5:
  case 10:
  case 6:
    message += "turtle";
    break;
  case 7:
    message += "fish";
    break;
  case 8:
  case 9:
    message += "bird";
    break;

  default:
    message = "Invalid input";
    break;
}

alert(message);
