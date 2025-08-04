/* function sapa() {
  console.log(
    "Sapa is a beautiful place in Vietnam, known for its terraced rice fields and stunning mountain scenery."
  );
}

sapa();

const row = 50; // Eror
let nilai = 50;
nilai = 100;

if (nilai >= 75) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
}

for (let i = 0; i < 5; i++) {
  console.log("Perulangan ke-" + i);
} 


  // --Sedang Belajar--
function sapa(nama) {
  console.log("Halo, " + nama + "!");
}

sapa("Joy");
sapa("Seulgi");

function tambah(a, b) {
  return a + b;
}

let hasil = tambah(5, 3);
console.log("Hasil penjumlahan: " + hasil);


// --Belajar Objek Properties
let car = {
  name: "Fiat",
  model: 500,
  weight: "850kg",
  color: "white",

  start: function () {
    console.log("Mobil dinyalakan.");
  },
  drive: function () {
    console.log("Mobil berjalan.");
  },
  bake: function () {
    console.log("Mobil mengerem.");
  },
  stop: function () {
    console.log("Mobil berhenti.");
  },
};



// ---Function

console.log(car.name); // Output propeti
car.start(); // Menjalankan method
*/

/*let BIRN = {
  name: "Name: " + "Polygon",
  gear: "Gear: " + 7,
  color: "Color: " + "Merah",

  start: function () {
    console.log("Mobil mulai dikayuh.");
  },

  brake: function () {
    console.log("Mobil mengerem.");
  },
};

console.log(BIRN.name); // Output properti
console.log(BIRN.gear); // Output properti
console.log(BIRN.color); // Output properti
BIRN.start(); // Menjalankan method
BIRN.brake(); // Menjalankan method*/

/*function Car(name, model, weight, color) {
  this.name = name;
  this.model = model;
  this.weight = weight;
  this.color = color;

  this.start = function () {
    console.log(`${this.name} sedang berjalan.`);
  };
  this.drive = function () {
    console.log(`${this.name} sedang berjalan.`);
  };
}

let car1 = new Car("Fiat", 500, "850kg", "white");
console.log(car1.name, car1.model, car1.weight, car1.color);
car1.start();
console.log(car1.name, car1.model, car1.weight, car1.color);
car1.drive();*/

/*class Car {
  constructor(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
  }

  start() {
    console.log(`${this.name}, ${this.model}, ${this.color} dinyalakan.`);
  }

  drive() {
    console.log(`${this.name} berjalan.`);
  }
}

let car1 = new Car("Fiat", 500, "white");
car1.start();
car1.drive();*/

/*class Sepeda {
  constructor(merk, gear, color) {
    this.merk = merk;
    this.gear = gear;
    this.color = color;
  }

  start() {
    console.log(
      `Name: ${this.merk}, Gear: ${this.gear}, ${this.color} mulai dikayuh.`
    );
  }

  brake() {
    console.log(`${this.merk} mengerem.`);
  }
}

let sepeda1 = new Sepeda("Polygon", 7, "Merah");
sepeda1.start();
sepeda1.brake();*/

class student {
  constructor(name, department, year) {
    this.name = name;
    this.department = department;
    this.year = year;
  }

  introduce() {
    console.log(
      `Hello, my name is ${this.name}, am from ${this.department} for ${this.year} ago.`
    );
  }
}

let student1 = new student("John", "ITK", "4k");
student1.introduce();
