const mockFunctions = require('../src/mockFunctions');

describe('verifica as funções e os mocks', () => {
  jest.spyOn(mockFunctions, 'add').mockImplementation((a, b) => a + b);
  jest.spyOn(mockFunctions, 'subtract').mockImplementation((a, b) => a - b);
  jest.spyOn(mockFunctions, 'multiply').mockImplementation((a, b) => a * b);
  jest.spyOn(mockFunctions, 'divide').mockImplementation((a, b) => a / b);
  jest.spyOn(mockFunctions, 'power').mockImplementation((a, b) => (a ** b));
  jest.spyOn(mockFunctions, 'factorial').mockImplementation(function factorial(a) {
    return (a > 1) ? a * factorial(a - 1) : 1;
  });

  test('testa função add', () => {
    expect(mockFunctions.add(1, 2)).toEqual(3);
    expect(mockFunctions.add(8, 37)).toEqual(45);
    expect(mockFunctions.add(-11, 25)).toEqual(14);
    expect(mockFunctions.add(13, -188)).toEqual(-175);
    expect(mockFunctions.add(7, 26)).toEqual(33);
  });
  test('testa função subtract', () => {
    expect(mockFunctions.subtract(899, 35)).toEqual(864);
    expect(mockFunctions.subtract(-17, 333)).toEqual(-350);
    expect(mockFunctions.subtract(45, 97)).toEqual(-52);
    expect(mockFunctions.subtract(23, -108)).toEqual(131);
    expect(mockFunctions.subtract(-133, -29)).toEqual(-104);
  });
  test('testa função multiply', () => {
    expect(mockFunctions.multiply(1, 2)).toEqual(2);
    expect(mockFunctions.multiply(0, 5)).toEqual(0);
    expect(mockFunctions.multiply(-4, 9)).toEqual(-36);
    expect(mockFunctions.multiply(-12, -7)).toEqual(84);
    expect(mockFunctions.multiply(19, 23)).toEqual(437);
  });
  test('testa função divide', () => {
    expect(mockFunctions.divide(169, 13)).toEqual(13);
    expect(mockFunctions.divide(-1900, 5)).toEqual(-380);
    expect(mockFunctions.divide(42, 7)).toEqual(6);
    expect(mockFunctions.divide(729, 243)).toEqual(3);
    expect(mockFunctions.divide(1331, 11)).toEqual(121);
  });
  test('testa função power', () => {
    expect(mockFunctions.power(10, 2)).toEqual(100);
    expect(mockFunctions.power(2, 10)).toEqual(1024);
    expect(mockFunctions.power(5, 5)).toEqual(3125);
    expect(mockFunctions.power(1, 10)).toEqual(1);
    expect(mockFunctions.power(0, 0)).toEqual(1);
  });
  test('testa função factorial', () => {
    expect(mockFunctions.factorial(5)).toEqual(120);
    expect(mockFunctions.factorial(10)).toEqual(3628800);
    expect(mockFunctions.factorial(3)).toEqual(6);
    expect(mockFunctions.factorial(8)).toEqual(40320);
    expect(mockFunctions.factorial(2)).toEqual(2);
  });
});
