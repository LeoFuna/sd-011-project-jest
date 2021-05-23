const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/
// ==============================================================>
/*
Todos os testes aqui nesse requisto fazem a mesma coisa um para os retoros true e false.
A ideia é de mostrar varias formas de fazer o mesmo teste:
async / await + resolve / reject
async / await
.then / .catch
fiz isso para aprender o requisito do projeto so pedia 2 testes
Achei mais simples a forma com o async / await
*/
// ==============================================================>
// => Quando eu uso o async + resolve/reject o await deve vir antes do expect
// ==============================================================>
describe('o retorno do telefonema', () => {
  test('atende => usando async/await + Resolve', async () => {
    expect.assertions(1);
    const response = answerPhone(true);
    await expect(response).resolves.toBe('Oi!');
  });

  test('ocupado = usando async/await + Reject', async () => {
    expect.assertions(1);
    const response = answerPhone(false);
    await expect(response).rejects.toThrowError('Infelizmente não podemos atender...');
  });
});
// ==============================================================>
// => Quando uso somente o async sem o resolve o await vem antes da atribuição da função
// ==============================================================>
//   test('atende => usando async/await', async () => {
//     expect.assertions(1);
//     const response = await answerPhone(true);
//     return expect(response).toBe('Oi!');
//    });
// ==============================================================>
// => Quando não uso o reject preciso usar o try/catch dessa forma ->
// ==============================================================>
//   test('oucpado com o async/try catch', async () => {
//     try {
//       await answerPhone(false);
//     } catch (error) {
//       expect(error).toEqual(new Error('Infelizmente não podemos atender...'));
//     }
//   });
// ==============================================================>
// => para usar o .then devo fazer dessa forma
// ==============================================================>
describe('o retorno do telefonema', () => {
  test('atende => usando o .then', () => {
    expect.assertions(1);
    return answerPhone(true).then((response) => {
      expect(response).toBe('Oi!');
    });
  });
  // ==============================================================>
  // => e usando o .catch para quando ocorre um erro
  // obs. preciso usar o toEqual + o new Error se nao da errado a verificação =)
  // ==============================================================>
  test('ocupado => usando o .catch', () => {
    expect.assertions(1);
    return answerPhone(false).catch((response) =>
      expect(response).toEqual(new Error('Infelizmente não podemos atender...')));
  });
});
