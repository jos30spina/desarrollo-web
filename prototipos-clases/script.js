class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  obtenerDetalles() {
    console.log(this.modelo);
    console.log(this.marca);
    console.log(this.año);
  }
}

class automovil extends Vehiculo {
  constructor(marca, modelo, año, puerta) {
    super(marca, modelo, año, puerta);
    this.puerta = puerta;
  }
  obtenerDetalles() {
    super.obtenerDetalles();
    console.log(`Puertas: ${this.puertas}`);
  }
}
class motocicleta extends Vehiculo {
  constructor(marca, modelo, año, cilindrada) {
    super(marca, modelo, año, cilindrada);
    this.cilindrada;
  }
  obtenerDetalles() {
    super.obtenerDetalles();
    console.log(`cilindrada: ${this.cilindrada}`);
  }
}
const carrito1 = new Vehiculo("mazda", "CX5", 2023, 4);
const carrito2 = new Vehiculo("renault", "sandero", 2006, 6);
const carrito3 = new Vehiculo("porshe", "carreraGT", 2005, 2);
const motico1 = new motocicleta("Pulsar", "Fi", 2010, 200);
const motico2 = new motocicleta("honda", "CBR", 2012, 190);
