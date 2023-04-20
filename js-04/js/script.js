const numeros = [6, 5, 10, 2, 8, 56, 5, 7];
const letras = ["a", "b", "c"];

// const numeros_filtrados = numeros.filter((numero) => numero >= 10);
// const numero = numeros.find((numero) => numero >= 18);
const index = numeros.findIndex((numero) => numero >= 18);

// numeros.forEach((numero) => console.log(numero));
// const todos = numeros.every((numero) => numero > 18 || numero == 18);
// const algunos = numeros.some((numero) => numero >= 18);

// const numeros_texto = numeros.map((numero) =>
//   numero % 2 == 0 ? "par" : "impar"
// );

// const numeros_nuevos = numeros.map((numero) => numero ** 2);

// ---

// function compare(a, b) {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   // a debe ser igual b
//   return 0;
// }

// console.log(numeros.sort((a, b) => a - b));

// ---

// const algunos_numeros = numeros.slice(2, 4);
// const algunos_numeros = numeros.splice(2, 2);
// const algunos_numeros = numeros.splice(2, 0, "Juan");

// ---

// const numeros_join = numeros.join("|");
// const numeros_split = numeros_join.split("|");

// const numeros_letras = [numeros, letras];
// console.log(numeros_letras[0][2]);

// const numeros_letras = numeros.concat(letras);

// numeros[5] = 2;
// numeros[numeros.length] = 3;
// numeros.push(1);

// let numero = numeros.pop();

// numeros.unshift(-10);
// let numero = numeros.shift();

// console.log(numeros, numero, numeros[2]);

// ---

// numeros[2] = "Juan";
// console.log(numeros[2]);
// console.log(numeros.at(2));

// console.log(numeros[numeros.length - 2]);
// console.log(numeros.at(-2));
