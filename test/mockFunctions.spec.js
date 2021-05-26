const mockFunctions = require('../src/mockFunctions');

/*
Criamos uma série de funções com eficiência duvidosa.
Elas estão no arquivo 'src/mockFunctions.js'.
Crie mock functions para cada uma das operações de modo que os cálculos sejam feitos corretamente,
não como estão sendo feitos no arquivo original.
A idéia é que os novos testes sobrescrevam os testes
importados apenas na suite de testes abaixo.

Importante! A correção de código via mock functions não é uma aplicação usual.
O foco aqui é a utilização de mock functions.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('verifica as funções e os mocks', () => {
  // Crie suas mock functions aqui
  // mockFunctions.add.mockImplementation((a, b) => a + b);
  // mockFunctions.subtract.mockImplementation((a, b) => a - b);
  // mockFunctions.divide.mockImplementation((a, b) => a / b);
  // mockFunctions.multiply.mockImplementation((a, b) => a * b);
  // mockFunctions.power.mockImplementation((a, b) => a ** b);
  // mockFunctions.factorial.mockImplementation((a) => {
  //   let factorial = array;
  //   for (let index = 1; index < array.length; index += 1) {
  //     factorial *= index;
  //   }
  //   return factorial;
  // });
  mockFunctions.add = jest.fn().mockImplementation((a, b) => a + b);

  test('testa função add', () => {
    expect(mockFunctions.add(1, 2)).toBe(3);
    expect(mockFunctions.add(8, 37)).toBe(45);
    expect(mockFunctions.add(-11, 25)).toBe(14);
    expect(mockFunctions.add(13, -188)).toBe(-175);
    expect(mockFunctions.add(7, 26)).toBe(33);
  });

  mockFunctions.subtract = jest.fn().mockImplementation((a, b) => a - b);

  test('testa função subtract', () => {
    expect(mockFunctions.subtract(899, 35)).toBe(864);
    expect(mockFunctions.subtract(-17, 333)).toBe(-350);
    expect(mockFunctions.subtract(45, 97)).toBe(-52);
    expect(mockFunctions.subtract(23, -108)).toBe(131);
    expect(mockFunctions.subtract(-133, -29)).toBe(-104);
  });

  mockFunctions.multiply = jest.fn().mockImplementation((a, b) => a * b);

  test('testa função multiply', () => {
    expect(mockFunctions.multiply(1, 2)).toBe(2);
    expect(mockFunctions.multiply(0, 5)).toBe(0);
    expect(mockFunctions.multiply(-4, 9)).toBe(-36);
    expect(mockFunctions.multiply(-12, -7)).toBe(84);
    expect(mockFunctions.multiply(19, 23)).toBe(437);
  });

  mockFunctions.divide = jest.fn().mockImplementation((a, b) => a / b);

  test('testa função divide', () => {
    expect(mockFunctions.divide(169, 13)).toBe(13);
    expect(mockFunctions.divide(-1900, 5)).toBe(-380);
    expect(mockFunctions.divide(42, 7)).toBe(6);
    expect(mockFunctions.divide(729, 243)).toBe(3);
    expect(mockFunctions.divide(1331, 11)).toBe(121);
  });

  mockFunctions.power = jest.fn().mockImplementation((a, b) => a ** b);

  test('testa função power', () => {
    expect(mockFunctions.power(10, 2)).toBe(100);
    expect(mockFunctions.power(2, 10)).toBe(1024);
    expect(mockFunctions.power(5, 5)).toBe(3125);
    expect(mockFunctions.power(1, 10)).toBe(1);
    expect(mockFunctions.power(0, 0)).toBe(1);
  });

  mockFunctions.factorial = jest.fn().mockImplementation((a) => {
    let num = a;
    for (let index = 1; index < a; index += 1) {
      num *= index;
    }
    return num;
  });

  test('testa função factorial', () => {
    expect(mockFunctions.factorial(5)).toBe(120);
    expect(mockFunctions.factorial(10)).toBe(3628800);
    expect(mockFunctions.factorial(3)).toBe(6);
    expect(mockFunctions.factorial(8)).toBe(40320);
    expect(mockFunctions.factorial(2)).toBe(2);
  });
});
