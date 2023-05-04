function esperar(condicion) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (condicion) {
        resolve("Pasaron 2 segundos");
      } else {
        reject("Hubo un error");
      }
    }, 2000);
  });
}

console.log("1");
// console.log(esperar());
esperar(true)
  .then((res) => console.log(res)) // resolve
  .catch((err) => console.log(err)) // reject
  .finally(() => console.log("Siempre"));
console.log("2");
