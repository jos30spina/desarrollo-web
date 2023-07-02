// Crear objetos de cada marca con atributos y métodos

let xiaomi = {
  nombre: "Xiaomi",
  encendido: false,
  camaras: 3,
  encender: function () {
    this.encendido = true;
    console.log("Encendiendo " + this.nombre);
  },
  apagar: function () {
    this.encendido = false;
    console.log("Apagando " + this.nombre);
  },
};

let samsung = {
  nombre: "Samsung",
  encendido: false,
  camaras: 2,
  encender: function () {
    this.encendido = true;
    console.log("Encendiendo " + this.nombre);
  },
  apagar: function () {
    this.encendido = false;
    console.log("Apagando " + this.nombre);
  },
};

let huawei = {
  nombre: "Huawei",
  encendido: false,
  camaras: 4,
  encender: function () {
    this.encendido = true;
    console.log("Encendiendo " + this.nombre);
  },
  apagar: function () {
    this.encendido = false;
    console.log("Apagando " + this.nombre);
  },
};

let iPhone = {
  nombre: "iPhone",
  encendido: false,
  camaras: 2,
  encender: function () {
    this.encendido = true;
    console.log("Encendiendo " + this.nombre);
  },
  apagar: function () {
    this.encendido = false;
    console.log("Apagando " + this.nombre);
  },
};

let motorola = {
  nombre: "Motorola",
  encendido: false,
  camaras: 2,
  encender: function () {
    this.encendido = true;
    console.log("Encendiendo " + this.nombre);
  },
  apagar: function () {
    this.encendido = false;
    console.log("Apagando " + this.nombre);
  },
};

// Crear arreglo con las marcas
let marcas = [xiaomi, samsung, huawei, iPhone, motorola];
