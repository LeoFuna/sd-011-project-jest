// ATENÇÃO!!! Não edite este arquivo. Altere apenas os arquivos da pasta 'test'.
const https = require('https');

const url = 'https://randomuser.me/api/';

const fetchURL = () => new Promise(function (resolve, reject) {
  https.get(url, (res) => {
    res.setEncoding('utf8');
    let userInfo = '';
    res.on('data', (data) => {
      userInfo += data;
    });
    res.on('error', reject);
    res.on('close', () => resolve(JSON.parse(userInfo).results[0]));
  });
});

module.exports = { fetchURL };

const tunico = {
  gender: 'male',
  name: { title: 'Mr', first: 'Antônio', last: 'Britto' },
  location: {
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
    country: 'Brazil',
  },
  email: 'tunico@bol.com.br',
  login: {
    username: 'tunicao123',
    password: '1234567890',
    salt: 'XKOOGc2x',
  },
};

const fetchURL2 = () => new Promise(function (resolve, reject) {
  https.get(tunico, (res) => {
    res.setEncoding('utf8');
    let userInfo = '';
    res.on('data', (data) => {
      userInfo += data;
    });
    res.on('error', reject);
    res.on('close', () => resolve(JSON.parse(userInfo).results[0]));
  });
});


// async function teste() {
//   const teste1 = await fetchURL();
//   console.log(teste1)
// };

// teste();
