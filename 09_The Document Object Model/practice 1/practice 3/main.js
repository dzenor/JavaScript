const main = document.querySelector(".main");
console.dir(main);
const table = main.querySelector("table");
console.dir(table);

let divArr = main.querySelectorAll("div");
console.dir(divArr);

divArr.forEach((element, index) => {
  element.classList.add(index + 1);
});

//vtor nacin
// for (let i = 0; i < divArr.length; i++) {
//   const element = divArr[i];
//   element.classList.add(i + 1);
// }

let tableBody = document.querySelector("tbody");
let bodyElementsArr = tableBody.querySelectorAll("tr");

for (let i = 0; i < bodyElementsArr.length; i++) {
  const element = bodyElementsArr[i];
  if (i % 2 !== 0) {
    element.style.backgroundColor = "green";
  } else {
    element.style.backgroundColor = "blue";
  }
}
