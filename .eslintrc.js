const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'linebreak-style': ['off', 'windows'],
  },
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, 'config/webpack.common.js'),
      },
    },
  },
};
