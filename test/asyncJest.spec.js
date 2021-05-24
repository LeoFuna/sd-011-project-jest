const assert = require('assert');
const { exception } = require('console');
const { execPath, hasUncaughtExceptionCaptureCallback } = require('process');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  /** A asserção abaixo é responsável por verificar se o retorno da função é Oi */
  test('atende', () => {
    expect.assertions(1);
    expect(answerPhone(true)).resolves.toBe('Oi!');
  });

  /** A asserção abaixo é responsável por verificar a mensagem de erro */
  test('ocupado', () => {
    expect.assertions(1);
    expect(answerPhone(false)).rejects.toThrow(new Error('Infelizmente não podemos atender...'));
  });
});
