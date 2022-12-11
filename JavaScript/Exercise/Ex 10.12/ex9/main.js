let name = parseInt(prompt("Enter your name"));
let marks = prompt("Enter your marks");

if (marks >= 90 && marks <= 100) {
  alert("You recieved S grade");
} else if (marks >= 80 && marks <= 90) {
  alert("You recieved A grade");
} else if (marks >= 70 && marks <= 80) {
  alert("You recieved B grade");
} else if (marks >= 60 && marks <= 70) {
  alert("You recieved C grade");
} else if (marks >= 50 && marks <= 60) {
  alert("You recieved D grade");
} else if (marks >= 40 && marks <= 50) {
  alert("You recieved E grade");
} else if (marks >= 0 && marks <= 40) {
  alert("You have failed");
} else {
  alert("Invalid marks");
}
