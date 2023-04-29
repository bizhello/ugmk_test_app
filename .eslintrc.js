module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': ['off'],
    'class-methods-use-this': ['off'],
    'prefer-promise-reject-errors': ['off'],
    'no-underscore-dangle': ['off'],
    'max-len': ['off'],
    'jsx-a11y/label-has-associated-control': ['off'],
  },
};
