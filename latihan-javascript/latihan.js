// variabel
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

// komentar
addWhiskey(glass);
addJuice(glass);

function addWhiskey(container) {
  for(let i = 0; i < 10; i++) {
    let drop = getWhiskey();
  }
}

function addJuice(container) {
  for(let t = 0; t < 3; t++) {
    let tomato = getTomato();
  }
}

// kode ninja
function ninjaFunction(elem) {
  // 20 baris kode berjalan dengan elem
  elem = clone(elem);
  // 20 baris lagi, sekarang berjalan dengan clone dari elem!
}

// pengetesan terotomasi dengan mocha
describe("Raises x to power n", function() {
  it("5 in the power of 1 equals 5", function() {
    assert.equal(pow(5, 1), 5);
  });

  it("5 in the power of 2 equals 25", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5 in the power of 3 equals 125", function() {
    assert.equal(pow(5, 3), 125);
  });
})

// polyfill dan transpiler
if (!Math.trunc) {
  // kalo gaada fungsi seperti ini implementasikan
  Math.trunc = function(number) {
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}

// objek
let user = {};
user.name = "Novia";
user.surname = "Putri";
user.name = "Nabila";
delete user.name;

// referensi objek dan menyalinnya
const user = {
  name: "Novia"
};
user.name = "Nabila";
alert(user.name);

// pengumpulan sampah
function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;
  return {
    father: man,
    mother: woman
  }
}
let family = marry({
  name: "Novia"
}, {
  name: "Putri"
});

// metode objek 'this'
function makeUser() {
  return {
    name: "Novia",
    ref: this
  };
}
let user = makeUser();
alert(user.ref.name);

// konstruktor, operator "new"
let obj = {};
function A() { return obj; }
function B() { return obj; }
alert(new A() == new B() );

// optional chaining '?'
let user = null;
alert(user?.address);
alert(user?.address.street);

// tipe simbol
let id2 = Symbol("id");
let user = {
  name: "Novia",
  [id]: 345
};

// menolak konversi primitif
waspada (obj);
lainObj[obj] = 345;

// metode primitif
let string = "Hello";
string.test = 5;
alert(string.test);

// angka
let a = +prompt("The first number?", "");
let b = +prompt("The second number", "");
alert( a + b );

// string
let newStr = str[0].toUpperCase() + str.slice(1);

// array
let animal = ["Cat", "Dog", "Bird"];

// metode array
let arr = ["I", "go", "home"];
delete arr[1];
alert( arr[1] );
alert( arr.length );

// iterables atau bisa di iterasi
let range = {
  from: 1,
  to: 5
};

// map dan set
map.set('1', 'str1')
   .set(1, 'num1')
   .set(true, 'bool1');

// weakmap dan weakset
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
let readMessages = new WeakSet();
//dua pesan telah dibaca
readMessages.add(messages[0]);
readMessages.add(messages[1]);
alert("Read message 0: " + readMessages.has(messages[0]));
messages.shift();

// objek.kunci, nilai, entri
let user = {
  name: "Pia",
  age: 17
};

// destrukturisasi penugasan
let user = {
  name: "Pia",
  age: 17
};
let { years: age, isAdmin = false} = user;
alert(age);
alert(isAdmin);

// tanggal dan waktu
// metode JSON, toJSON
// rekursi dan tumpukan
// parameter rest dan sintaks spread
// lingkup variabel
// si tua "var"
// objek global
// objek fungsi 
// sintaks "new function"
// pendadwalan 
// decorators dan forwading
// function binding
// membahas kembali fungsi arrow
// properti flag dan deskriptor
// properti getter dan setter



