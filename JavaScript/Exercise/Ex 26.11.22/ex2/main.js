let nameOfTheShuttle = "Determination";
console.log(nameOfTheShuttle);
console.log(typeof nameOfTheShuttle);

let ShuttleSpeedMph = 17500;
console.log(ShuttleSpeedMph);
console.log(typeof ShuttleSpeedMph);

let DistanceToMarsKm = 225000000;
console.log(DistanceToMarsKm);
console.log(typeof DistanceToMarsKm);

let DistanceToMoonKm = 384400;
console.log(DistanceToMoonKm);
console.log(typeof DistanceToMoonKm);

let MilesPerKilometer = 0.621;
console.log(MilesPerKilometer);
console.log(typeof MilesPerKilometer);

let MilesToMars = DistanceToMarsKm * MilesPerKilometer;
console.log(MilesToMars + " mls");

let hours = MilesToMars / ShuttleSpeedMph;
console.log(hours + " hrs");

let daysToMars = hours / 24;
console.log(daysToMars + " days");

let milesToMoon = DistanceToMoonKm * MilesPerKilometer;
console.log(milesToMoon);

let hoursMoon = milesToMoon / ShuttleSpeedMph;
console.log(hoursMoon);

let daysToMoon = hoursMoon / 24;
console.log(daysToMoon);

console.log(`${nameOfTheShuttle} will take ${daysToMars} days to reach Mars `);
console.log(`${nameOfTheShuttle} will take ${daysToMoon} days to reach Moon`);
