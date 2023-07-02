let numero = prompt("ingrese el numero");

if (numero % 5 == 0 && numero % 3 == 0) {
  console.log("fizzBuzz");
} else if (numero % 3 == 0) {
  console.log("fizz");
} else if (numero % 5 == 0) {
  console.log("Buzz");
} else {
  console.log("por favor digita un numero");
}

// ejercicio del IMC

// function calcularImc(peso, altura) {
//   let nombre = prompt("ingrese su nombre");
//   let altura = prompt("ingrese su altura en centimetros");
//   let peso = prompt("ingrese su peso en kilogramos");
//   let imc = peso / altura ** 2;
// }

// // Función para mostrar el estado según el IMC
// function mostrarEstado(imc) {
//   if (imc <= 18.5) {
//     console.log("Estás bajo de peso");
//   } else if (imc >= 18.5 && imc < 20.4) {
//     console.log("Estás en estado moderado");
//   } else {
//     console.log("Tu estado no corresponde a ninguna categoría específica");
//   }
// }

// let imc = calcularIMC(peso, altura);
// mostrarEstado(imc);
