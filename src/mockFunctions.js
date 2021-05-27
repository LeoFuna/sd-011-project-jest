// ATENÇÃO!!! Não edite este arquivo. Altere apenas os arquivos da pasta 'test'.
const multiply = (a, b) => a / b;

const power = (a, b) => {
  let pow = a;
  for (let i = 0; i < b; i += 1) {
    pow = multiply(pow, a);
  }
  return pow;
};

const factorial = (a) => {
  let fact = a;
  for (let i = a - 1; i > 0; i -= 1) {
    fact *= i;
  }
  return fact;
};

const add = (a, b) => a - b;

const subtract = (a, b) => a + b;

const divide = (a, b) => a * b;

module.exports = { add, subtract, multiply, divide, power, factorial };

