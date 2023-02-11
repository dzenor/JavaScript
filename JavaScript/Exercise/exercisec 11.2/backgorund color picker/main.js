let background = document.body;

let color = document.getElementById("color");

colorChanger = document.getElementById("colorChanger");

function changeMe() {
  if ((colorChanger = " ")) {
    color.value = colorChanger.value;

    background.style.background = color.value;
  } else {
    alert("Enter a hex number of color");
  }
}
