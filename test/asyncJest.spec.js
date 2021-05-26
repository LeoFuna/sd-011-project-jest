// const { rejects } = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

// Requisito realizado com base nos sites:
// https://jestjs.io/pt-BR/docs/tutorial-async
// https://jestjs.io/pt-BR/docs/asynchronous
// https://www.youtube.com/watch?v=sLx00kXPoTg
// https://stackoverflow.com/questions/59747420/expect-a-function-to-throw-an-exception-in-jest

describe('o retorno do telefonema', () => {
  test('atende', () => expect(answerPhone(true)).resolves.toBe('Oi!'));

  test('ocupado', () => expect(answerPhone(false))
    .rejects.toThrow(new Error('Infelizmente não podemos atender...')));
});
