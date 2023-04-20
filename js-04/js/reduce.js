const numeros = [1, 2, 3, 4, 5];

const total = numeros.reduce(
  (accumulator, currentValue) => accumulator + currentValue, // 15
  0
);

console.log(total);
