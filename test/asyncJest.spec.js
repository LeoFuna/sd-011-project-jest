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
    expect.hasAssertions();
    await expect(answerPhone(true)).toEqual('oi');
    // Insira seu teste assíncrono aqui
  });

  test('ocupado', async () => {
    expect.hasAssertions();
    await expect(answerPhone(false)).rejects.toThrowError('Infelizmente não podemos atender...');
    // Insira seu teste assíncrono aqui
  });
});
