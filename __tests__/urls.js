const gifs = require('../dist/chop-gifs');

test('should generate valid urls', () => {
  [
    'blush',
    'coffee',
    'confused',
    'cry',
    'cuddle',
    'cute',
    'highfive',
    'holdhands',
    'hug',
    'kiss',
    'laugh',
    'lick',
    'pout',
    'punch',
    'slap',
    'smug',
    'stare',
  ].forEach(type => {
    const regex = new RegExp(`https:\/\/cdn.chop.coffee\/${type}\/[0-9]{1,3}\.gif`);

    console.log('Testing', type);
    const url = gifs[type]();
    for (let i = 0; i < 200; i++) {
      if (!regex.test(url)) {
        throw new Error(`Url ${url} is not valid!`);
      }
    }
  });
});

test('regex should not accept invalid urls', () => {
  [
    'blush',
    'coffee',
    'confused',
    'cry',
    'cuddle',
    'cute',
    'highfive',
    'holdhands',
    'hug',
    'kiss',
    'laugh',
    'lick',
    'pout',
    'punch',
    'slap',
    'smug',
    'stare',
  ].forEach(type => {
    const regex = new RegExp(`https:\/\/cdn.chop.coffee\/${type}\/[0-9]{1,3}\.gif`);

    const url = gifs[type]();
    for (let i = 0; i < 200; i++) {
      if (regex.test('https://cdn.chop/coffee/BACON.gif')) {
        throw new Error(`Url ${url} is not valid!`);
      }
    }
  });
});
