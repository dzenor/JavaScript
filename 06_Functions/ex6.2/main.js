let arr = ["strong", "small", "tall", "fat"];

function askName() {
  let name = prompt("Enter your name:");
  let randomNumber = Math.floor(Math.random() * arr.length);

  console.log(name + " is  " + arr[randomNumber]);
}
askName();
