function convert() {
  let celsius = document.getElementById("celsius").value;

  farenheit = celsius * 1.8 + 32;

  document.getElementById("farenheit").value = farenheit;
}
