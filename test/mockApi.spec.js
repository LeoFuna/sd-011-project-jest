const api = require('../src/mockApi');

/*
A função fetchURL retorna um JSON com informações de um usuário aleatório buscadas da API 'randomuser.me'.
No entanto, nos testes abaixo, queremos que todas as vezes que chamarmos a API a resposta contenha as informações do nosso adminis..Cof! Cof!.. programador favorito, Tunicão.

Faça um mock da função fetchURL() de forma que,
independa de chamadas de API e retorne as seguintes informações do Tunico:
- Gênero: Masculino
- Primeiro nome: Antônio
- Último nome: Britto
- País: Brasil
- Email: tunico@bol.com.br (Sim, é um email do bol mesmo...)
- Nome de usuário: tunicao123
- Senha: 1234567890 (Usem senhas fortes, crianças!)

Note que as informações devem estar de acordo com o JSON
presente no README.md do projeto.

Dica: Utilizem os métodos jest.fn() ou jest.spyOn().

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('verifica o usuário', () => {
  // Crie sua mock da função fetchURL() aqui
  const user2 = { gender: 'Masculino',
    name: { first: 'Antônio', last: 'Britto' },
    location: { country: 'Brasil' },
    email: 'tunico@bol.com.br (Sim, é um email do bol mesmo...)',
    login: { username: 'tunicao123', password: '1234567890 (Usem senhas fortes, crianças!)' },
  };
  test('verifica se o usuário é o tunico', () => {
    api.fetchURL = jest.fn().mockImplementation(user2);
    api.fetchURL = () => {
      expect(this.gender).toBe('male');
      expect(this.name.first).toBe('Antônio');
      expect(this.name.last).toBe('Britto');
      expect(this.location.country).toBe('Brazil');
      expect(this.email).toBe('tunico@bol.com.br');
      expect(this.login.username).toBe('tunicao123');
      expect(this.login.password).toBe('1234567890');
    };
  });
});
