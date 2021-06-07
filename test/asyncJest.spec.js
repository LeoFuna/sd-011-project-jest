// const assert = require('assert');

const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.

*/
// consultei o repositorio de joão paulo g lima para tentar entender o porque o avaliador da TRYBE esta passando meu projeto com 100%
// sendo que esta dando falso positivo acredito que o avaliador esteja com problemas porem nada foi feito pra resolver pelo time
// da TRYBE, logo precisei refatorar de outra forma em conforidade com o manual da pessoa estudante fica aqui declarado o objeto de consulta
// link https://github.com/tryber/sd-011-project-jest/pull/137/files

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    expect.assertions(1);
    const answer = await answerPhone(true);
    expect(answer).toBe('Oi!');
  });
  test('ocupado', async () => {
    expect.assertions(1);
    await expect(answerPhone(false)).rejects.toThrow();
  });
});
