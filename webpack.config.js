const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chop-gifs.js',
    library: 'chopGifs',
    libraryTarget: 'umd',
    // umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
};
