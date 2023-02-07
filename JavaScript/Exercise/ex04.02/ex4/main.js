let currentDate = new Date();

let day = currentDate.getDate();

let month = currentDate.getMonth() + 1;
//+1 bidejki pocnuva od 0

let year = currentDate.getFullYear();

//ako denot e pomal od 10 dodadi 0 da napravis konzistenten format

if (day < 10) {
  day = "0" + day;
}

//ako denot e pomal od 10 dodadi 0
if (month < 10) {
  month = "0" + month;
}

const formattedDate1 = month + "/" + day + "/" + year;
console.log(formattedDate1);

const formattedDate2 = month + "-" + day + "-" + year;
console.log(formattedDate2);

const formattedDate3 = day + "-" + month + "-" + year;
console.log(formattedDate3);
