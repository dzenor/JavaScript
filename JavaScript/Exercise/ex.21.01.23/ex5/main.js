const marks = [80, 80, 50];
function calculateGrades(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;

  for (let value of array) sum += value;
  return sum / array.lenght;
}

console.log(calculateGrades(marks));

let students = [
  ["David", 80],
  ["Vinoth", 77],
  ["Divya", 88],
  ["Ishitha", 95],
  ["Thomas", 68],
];
//Davame array so iminija i vrenosti
let Avgmarks = 0;
//deklariame varijabla za Avgmarks so vrednost nula
let avg;
//deklariram varihabla avg za da ja iskoristime ponatamu
for (let i = 0; i < students.length; i++) {
  Avgmarks += students[i][1];
  let avg = Avgmarks / students.length;
}
//for loop kade so Avgmarks += students[i][1] se sobiraat site vrednost od arajot
console.log("Average grade: " + Avgmarks / students.length);
//consol log kade se deli vkupnata brojka so brojot na studenti
if (avg < 60) {
  console.log("Grade : F");
} else if (avg < 70) {
  console.log("Grade : D");
} else if (avg < 80) {
  console.log("Grade : C");
} else if (avg < 90) {
  console.log("Grade : B");
} else if (avg < 100) {
  console.log("Grade : A");
}
