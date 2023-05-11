const multiplicar = (num1, num2) => {
  if (typeof num1 != "number" || typeof num2 != "number") {
    return Promise.reject("Los valores no son numeros");
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = num1 * num2;
      resolve({ num1, num2, result });
    }, Math.floor(Math.random() * 2000));
  });
};

multiplicar(2, 1)
  .then((res) => {
    console.log(`${res.num1} * ${res.num2} = ${res.result}`);
    return multiplicar(2, 2);
  })
  .then((res) => {
    console.log(`${res.num1} * ${res.num2} = ${res.result}`);
    return multiplicar(2, 3);
  })
  .then((res) => {
    console.log(`${res.num1} * ${res.num2} = ${res.result}`);
  })
  .catch((error) => console.log(error));
