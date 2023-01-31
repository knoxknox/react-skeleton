module.exports = {
  env: {
    es2021: true,
    browser: true
  },
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended'
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  rules: {
    'no-nested-ternary': 'off',
    'import/no-anonymous-default-export': 'off'
  },
  overrides: [
    {
      env: {
        jest: true,
        node: true
      },
      files: ['**.test.**', '**.spec.**']
    },
    {
      env: {
        node: true
      },
      files: ['.eslintrc.js', 'jest.config.js']
    }
  ]
};
