let admin, nama; // bisa mendeklarasikan dua variabel sekaligus
    nama = "Pia";
    admin = nama;
    alert( admin ); // "Pia";

let n = 123;
n = 12.345;

let name = prompt("Siapakah nama Anda?", "Pia");
alert(name);

let str = "123";
alert(typeof str); // string
let num = Number(str); // menjadi angka 123
alert(typeof num); // angka

let s = "my" + "string";
alert(s); // mystring

let result = 5 > 4; // tetapkan hasil perbandingan
alert( result ); // true

// kondisi bercabang if
if ("0") {
  alert( 'Hello' );
}

// operator logika
alert( alert(1) || 2 || alert(3) );

let umur = (a + b < 4) ? 'Kurang' : 'Lebih';

let hour = 12;
let minute = 30;

// operator penggabungan nulish
if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

// perulangan while dan for
let i = 3;
while (i) {
  alert( i-- );
}

// pernyataan switch
if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

// fungsi
function checkAge(age) {
  if (age > 17) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}

// expresi fungsi
function sayHi() {
  alert( "Hello" );
}

// dasar dasar fungsi arrow
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

// spesial javascript
alert( '1' + 2 ); // '12', string
alert( 1 + '2' ); // '12', string

// mendebug di chrome
for (let i = 0; i < 5; i++) {
  console.log("value,", i);
}

// gaya mengkode 
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
let x = prompt("x?", "");
// let n = prompt("n?", "");
if (n <= 0) {+
  
  alert(`Power ${n} is not supported,
    please enter an integer number greater than zero`);
} else {
  alert( pow(x, n) );
}



