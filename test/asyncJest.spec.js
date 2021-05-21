const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  it('atende', async () => {
    expect.assertions(1);
    const returnTrue = await answerPhone(true);
    expect(returnTrue).toEqual('Oi!');
  });
  it('ocupado', async () => {
    expect.assertions(1);
    const returnFalse = answerPhone(false);
    const msgError = 'Infelizmente não podemos atender...';
    await expect(returnFalse).rejects.toThrowError(new Error(msgError));
  });
});
