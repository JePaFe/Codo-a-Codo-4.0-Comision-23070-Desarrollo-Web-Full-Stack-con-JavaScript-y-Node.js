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

async function manejoError(condicion) {
  try {
    // if (condicion) {
    //   console.log("Todo OK");
    // } else {
    //   throw new Error("Hubo un error");
    // }

    const resultado = await esperar(condicion);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

console.log('1')
manejoError(false);
console.log('2')
