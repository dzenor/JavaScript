function addZero(number) {
  if (number < 10) {
    return "0" + number.toString();
  } else {
    return number.toString();
  }
}

window.setInterval(function () {
  let currentTime = new Date();

  let hours = currentTime.getHours();

  let minutes = currentTime.getMinutes();

  let seconds = currentTime.getSeconds();

  document.getElementById("hour").innerHTML = addZero(hours);
  document.getElementById("minutes").innerHTML = addZero(minutes);
  document.getElementById("seconds").innerHTML = addZero(seconds);
}, 1000);
