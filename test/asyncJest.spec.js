const assert = require('assert');
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
    const trueData = answerPhone(true);
    await expect(trueData).resolves.toEqual('Oi!');
  });
    it('ocupado', async () => {
      const falseData = answerPhone(false);
      await expect(falseData).rejects.toThrow('Infelizmente não podemos atender...');
  });
});
//
