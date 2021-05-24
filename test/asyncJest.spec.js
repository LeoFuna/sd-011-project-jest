const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', () => {
    expect.assertions(1);
    return answerPhone(true).then((answer) => {
      expect(answer).toBe('Oi!');
    });
  });
  test('ocupado', () => {
    return answerPhone(false).catch((error) => {
      expect(error).toEqual(new Error('Infelizmente não podemos atender...'));
    });
  });
});

/**
 * Consultei o repositório de Diego Ribeiro, para resolver o primeiro test, e descobri que o que estava faltando na minha resolução era o resolves...
 * Link: https://github.com/tryber/sd-011-project-jest/pull/12/commits/92ff56d8307ca5f27151a68f80e474e4cd0e41b7
 */
