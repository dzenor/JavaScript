let uri = "https://javaguides.net/?x=шеллы";
let encoded = encodeURI(uri);
console.log(encoded);

try {
  let decode = decodeURI(encoded);
  console.log(decode);
} catch (e) {
  console.error(e);
}
