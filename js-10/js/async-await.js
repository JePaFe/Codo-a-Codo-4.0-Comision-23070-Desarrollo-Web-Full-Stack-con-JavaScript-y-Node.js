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

const tabla = async () => {
  try {
    for (let i = 1; i <= 10; i++) {
      let res = await multiplicar(2, i);
      console.log(`${res.num1} * ${res.num2} = ${res.result}`);
    }

    /* res = await multiplicar(2, 2);
    console.log(`${res.num1} * ${res.num2} = ${res.result}`);

    res = await multiplicar(2, 3);
    console.log(`${res.num1} * ${res.num2} = ${res.result}`); */
  } catch (error) {
    console.log(error);
  }
};

tabla();
