const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    // Insira seu teste assíncrono aqui
    answerPhone(true).then((result) => expect(result).toBe('Oi!'));
  });
  test('ocupado', async () => {
    // Insira seu teste assíncrono aqui
    answerPhone(false).catch((result) =>
      expect(result).toEqual(new Error('Infelizmente não podemos atender...')));
  });
});

// para esse teste eu tinha entendido um pouco sobre toBe e toEqual na aula porém ainda tinha dúvidas que esclaresci em:
// https://stackoverflow.com/questions/22413009/jasmine-javascript-testing-tobe-vs-toequal
