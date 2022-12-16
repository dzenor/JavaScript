let gridArray = [];
let cells = 64;
let counter = 0;
let rowArray;

for (let i = 0; i < cells + 1; i++) {
  if (counter % 8 === 0) {
    if (rowArray != undefined) {
      grid.push(rowArray);
    }
    rowArray = [];
  }
  rowArray.push(++counter);
}
console.log(gridArray);
