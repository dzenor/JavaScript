let denovi = [
  "nedela",
  "ponedelnik",
  "vtornik",
  "sreda",
  "cetvrtok",
  "petok",
  "sabota",
];

let indexZaDen = new Date().getDay();
console.log(`Denes e: ${denovi[indexZaDen]}`);

let datum = new Date();
let saat = datum.getHours();
let sekundi = datum.getSeconds();
let minuti = datum.getMinutes();
let saatNov;
let amPM;
if (saat > 12) {
  saatNov = saat - 12;
  amPM = "PM";
} else {
  saatNov = saat;
  amPM = "AM";
}

console.log(
  `Momentalnoto vreme e : ${saatNov} ${amPM} : ${minuti} : ${sekundi}`
);
