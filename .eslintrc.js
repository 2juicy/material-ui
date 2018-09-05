const path = require('path');

module.exports = {
  // So parent files don't get applied
  root: true,
  globals: {
    preval: false,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
  },
  extends: ['plugin:import/recommended', 'airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
<<<<<<< HEAD
  plugins: [
    'babel',
    'react',
    'mocha',
    "import",
    "flowtype"
  ],
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': 'error',
    'arrow-parens': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', {before: false, after: true}],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'consistent-return': 'off', // Wishlist, one day
    'dot-notation': 'error',
    'dot-location': ['error', 'property'],
    'eqeqeq': ['error', 'smart'],
    'eol-last': 'error',
    'indent': ['error', 2, {SwitchCase: 1}],
    'id-blacklist': ['error', 'e'],
    'jsx-quotes': ['error', 'prefer-double'],
    'keyword-spacing': 'error',
    'key-spacing': 'error',
    'max-len': ['error', 120, 4],
    'new-cap': ['off', {capIsNew: true, newIsCap: true}], // Wishlist, one day
    'no-unused-expressions': 'error',
    'no-unused-vars': 'error',
    'no-shadow': 'off', // Wishlist, one day
    'no-spaced-func': 'error',
    'no-multiple-empty-lines': 'error',
    'no-multi-spaces': 'error',
    'no-undef': 'error',
    'no-empty-pattern': 'error',
    'no-dupe-keys': 'error',
    'no-dupe-args': 'error',
    'no-duplicate-case': 'error',
    'no-cond-assign': 'error',
    'no-extra-semi': 'error',
    'no-extra-boolean-cast': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'prefer-arrow-callback': 'off', // Wishlist, one day
    'prefer-const': 'error',
    'prefer-template': 'error',
    'quotes': ['error', 'single', 'avoid-escape'],
    'semi': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'spaced-comment': 'error',
    'yoda': 'error',
    'babel/object-curly-spacing': ['error', 'never'],
    'generator-star-spacing': 'error',
    'babel/no-await-in-loop': 'error',
    'flowtype/object-type-delimiter': 'error',
    'react/display-name': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': ['error', {maximum: 3}],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-space-before-closing': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/no-danger': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-multi-comp': 'off', // Wishlist, one day
    'react/no-render-return-value': 'error',
    'react/no-is-mounted': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-arrow-callback': 'off', // Wishlist, one day
    'react/prefer-es6-class': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'import/extensions': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'error',
=======
  plugins: ['babel', 'import', 'jsx-a11y', 'mocha', 'flowtype', 'material-ui', 'prettier'],
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, './docs/webpackBaseConfig.js'),
      },
    },
  },
  rules: {
    'linebreak-style': 'off', // Don't play nicely with Windows
    'arrow-body-style': 'off', // Incompatible with prettier
    'arrow-parens': 'off', // Incompatible with prettier
    'object-curly-newline': 'off', // Incompatible with prettier
    'function-paren-newline': 'off', // Incompatible with prettier
    indent: 'off', // Incompatible with prettier
    'implicit-arrow-linebreak': 'off', // Incompatible with prettier
    'space-before-function-paren': 'off', // Incompatible with prettier
    'no-confusing-arrow': 'off', // Incompatible with prettier
    'no-mixed-operators': 'off', // Incompatible with prettier
    'consistent-this': ['error', 'self'],
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
      },
    ], // airbnb is allowing some edge cases
    'no-console': 'error', // airbnb is using warn
    'prefer-destructuring': 'off', // airbnb is using error. destructuring harm grep potential.
    'no-alert': 'error', // airbnb is using warn
    'no-param-reassign': 'off', // airbnb use error
    'no-prototype-builtins': 'off', // airbnb use error
    'operator-linebreak': 'off', // airbnb use error

    // It would be better to enable this rule, but it might slow us down.
    'import/no-extraneous-dependencies': 'off',
    'import/namespace': ['error', { allowComputed: true }],
    'import/order': [
      'error',
      {
        groups: [['index', 'sibling', 'parent', 'internal', 'external', 'builtin']],
        'newlines-between': 'never',
      },
    ],

    'react/jsx-indent': 'off', // Incompatible with prettier
    'react/jsx-closing-bracket-location': 'off', // Incompatible with prettier
    'react/jsx-wrap-multilines': 'off', // Incompatible with prettier
    'react/jsx-indent-props': 'off', // Incompatible with prettier
    'react/jsx-one-expression-per-line': 'off', // Incompatible with prettier
    'react/jsx-handler-names': [
      'error',
      {
        // airbnb is disabling this rule
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-curly-brace-presence': 'off', // airbnb use error, it's buggy
    'react/forbid-prop-types': 'off', // airbnb use error
    'react/require-default-props': 'off', // airbnb use error, it's buggy
    'react/destructuring-assignment': 'off', // airbnb use error
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb is using .jsx
    'react/no-danger': 'error', // airbnb is using warn
    'react/no-direct-mutation-state': 'error', // airbnb is using off
    'react/no-find-dom-node': 'off', // airbnb use error
    'react/sort-prop-types': 'error', // airbnb use off

    'material-ui/docgen-ignore-before-comment': 'error',

>>>>>>> master
    'mocha/handle-done-callback': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/no-skipped-tests': 'error',

<<<<<<< HEAD
    'react/no-string-refs': 'warn', // Wishlist, one day.

    'strict': 'off',
    'no-case-declarations': 'off',
    'react/jsx-key': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/jsx-sort-props': 'off',
    'react/no-set-state': 'off',
    'react/forbid-prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/require-optimization': 'off',
    'mocha/no-synchronous-tests': 'off',
    'mocha/valid-suite-description': 'off',
    'mocha/valid-test-description': 'off',
    'babel/object-shorthand': 'off',
    'babel/new-cap': 'off',
=======
    'flowtype/define-flow-type': 'error',
    'flowtype/require-valid-file-annotation': 'off',
    'flowtype/require-parameter-type': 'off',
    'flowtype/require-return-type': 'off',
    'flowtype/space-after-type-colon': 'off',
    'flowtype/space-before-type-colon': 'off',
    'flowtype/type-id-match': 'off',
    'flowtype/use-flow-type': 'error',

    'prettier/prettier': 'error',

    'jsx-a11y/label-has-associated-control': 'error',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-autofocus': 'off', // We are a library, people do what they want.
>>>>>>> master
  },
};
