// const sumarConsole = function (num1, num2) {
//   console.log(num1 + num2);
// };

// const sumarAlert = function (num1, num2) {
//   alert(num1 + num2);
// };

// const sumar = function (num1, num2, output) {
//   let resultado = num1 + num2;
//   if (output == "console") {
//     console.log(resultado);
//   } else if (output == "alert") {
//     alert(resultado);
//   }
// };

// sumar(7, 5, "console");
// sumar(5, 4, "alert");

const sumar = function (num1, output, num2) {
  //   console.log(typeof num1, typeof num2, typeof output);
  if (typeof output == "function") {
    output(num1 + num2);
  }
};

const write = (suma) => document.write(suma);

// sumar(3, 6, console.log);
// sumar(6, 3, alert);
sumar(3, write, 8);

// console.log(1);

// setTimeout(() => {
//   console.log("Hola");
// }, 3000);

// console.log(2);
// console.log(3);
