module.exports = {
  env: {
    browser: true,
    commonjs: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  extends: ['airbnb-base'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['warn', 'as-needed'],
    'no-underscore-dangle': 'off',
    'operator-linebreak': ['warn', 'after']
  }
};
