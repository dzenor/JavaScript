let start = function (par1) {
  console.log(par1);
};

start("dzeno");

// function start(par1) {
//   console.log(par1);
// }

// start("dzeno");

function executeStaff(par2) {
  console.log("par2");
}

function doFlexibleStuff(executeStaff) {
  executeStaff("redzo");
  console.log("Inside doFlexible");
}

doFlexibleStuff(start);

let logName = function () {
  console.log("dzeno web developer");
};
setTimeout(logName, 5000);

setTimeout(logName, 1000);
setInterval(
  () =>
    console.log(
      new Date().getHours().toString(),
      ":",
      new Date().getMinutes().toString(),
      ":",
      new Date().getSeconds().toString()
    ),
  1000
);
