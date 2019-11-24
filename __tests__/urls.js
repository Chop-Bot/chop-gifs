const gifs = require('../dist/chop-gifs');

test('should generate valid urls', () => {
  const regex = /https:\/\/cdn.chop.coffee\/[\d]{1,3}\.gif/;
  [
    'blush',
    'coffee',
    'confused',
    'cry',
    'cuddle',
    'cute',
    'holdhands',
    'hug',
    'kiss',
    'laugh',
    'pout',
    'punch',
    'smug',
    'stare',
  ].forEach(type => {
    const url = gifs[type]();
    for (let i = 0; i < 200; i++) {
      if (regex.test(url)) {
        throw new Error(`Url ${url} is not valid!`);
      }
    }
  });
});
