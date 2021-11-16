const {resolve} = require('path');

module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  parserOptions: {
    project: resolve(__dirname, 'tsconfig.json'),
  },
  settings: {
    'import/extensions': [
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
    ],
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx-a11y/no-autofocus': 'off',
    'import/extensions': ['error', 'never', {
      json: 'always',
    }],
    'react/jsx-tag-spacing': ['error', {
      beforeSelfClosing: 'never',
    }],
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-props-no-spreading': 'off',
    'object-curly-newline': ['error', {
      ObjectExpression: {minProperties: 8, multiline: true, consistent: true},
      ObjectPattern: {minProperties: 8, multiline: true, consistent: true},
      ImportDeclaration: {minProperties: 8, multiline: true, consistent: true},
      ExportDeclaration: {minProperties: 8, multiline: true, consistent: true},
    }],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'react/no-array-index-key': 'off',
    'react/no-danger': 'off',
    'react/require-default-props': 'off',
    "react/jsx-no-bind": 'off',
    "no-console": "off",
  },
};
