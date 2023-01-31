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
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'block-scoped-var': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['error', 'never'],
    'comma-style': ['error', 'last'],
    'curly': ['error', 'all'],
    'dot-notation': ['error', { allowKeywords: true }],
    'eol-last': 'error',
    'eqeqeq': ['error', 'allow-null'],
    'guard-for-in': 'error',
    'import/no-anonymous-default-export': 'off',
    'indent': ['error', 2, { SwitchCase: 1 }],
    'key-spacing': ['off', { afterColon: true }],
    'keyword-spacing': ['error', {}],
    'no-caller': 'error',
    'no-cond-assign': ['error', 'except-parens'],
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-debugger': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-implicit-coercion': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-loop-func': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': 'error',
    'no-nested-ternary': 'off',
    'no-new': 'error',
    'no-proto': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
    'no-var': 'error',
    'no-with': 'error',
    'object-curly-spacing': ['error', 'always', { arraysInObjects: true, objectsInObjects: true }],
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'semi': 'error',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', { anonymous: 'ignore', named: 'never' }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { words: false, nonwords: false }],
    'strict': 'error',
    'valid-typeof': 'error',
    'wrap-iife': 'error'
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
