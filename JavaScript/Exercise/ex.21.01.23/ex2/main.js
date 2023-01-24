///2. Write a JavaScript program to capitalize the first letter of each word of a given string.
function capital_letter(str) {
  //kreirame funkcija
  str = str.split(" ");
  //sekoj string treba da bide razdvoen so metodot split
  for (let i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    //i ulazi u rijec i uzima prvi element prvu bukvu sa indexom 0 i pravi je uppercase posle ide kod drugog i spaja ga
    //for loop kade sekoj razdvoen string kje bide ednakov na prvata pozicija (bukva) [0] vo
    //vo golema bukva i kje bide dodaden ostatokot od stringot koj e podelen primer:
    //     const str = 'Mozilla';
    // console.log(str.substring(1)); out put "ozilla"
  }
  return str.join(" ");
}
console.log(
  capital_letter(
    "Write a JavaScript program to capitalize the first letter of each word of a given string."
  )
);
