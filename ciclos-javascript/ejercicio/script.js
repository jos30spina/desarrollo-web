function contarParesImpares(array) {
  let pares = 0;
  let impares = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }

  return { pares, impares };
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = contarParesImpares(numeros);

console.log("Cantidad de números pares:", resultado.pares);
console.log("Cantidad de números impares:", resultado.impares);
