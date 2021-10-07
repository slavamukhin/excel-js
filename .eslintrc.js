module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'semi': 'off',
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'eol-last': 'off',
    'require-jsdoc': 'off',
  }
}