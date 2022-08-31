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

let umur = (a + b < 4) ? 'Kurang' : 'Lebih';

let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}