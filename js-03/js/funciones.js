// function saludar() {
//   console.log("Hola");
// }

// const saludar = function () {
//   console.log("Hola");
// };

// function saludar() {
//   console.log("Esto se muestra");
//   return "Hola";
//   console.log("Esto NO se muestra");
// }

// saludar();

// const mensaje = saludar();
// console.log(mensaje);

// console.log(saludar());

const saludar = function (nombre) {
  return `Hola ${nombre}`;
};

const mensaje = saludar('Juan');
console.log(mensaje);
