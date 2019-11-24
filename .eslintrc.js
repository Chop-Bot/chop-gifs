module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  ignorePatterns: ['dist'],
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'arrow-parens': 'off',
  },
};
