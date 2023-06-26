module.exports = {
  extends: 'stylelint-config-recommended',
  plugins: [
    'stylelint-order',
    'stylelint-scss',
    'stylelint-stylistic'
  ],
  rules: {
    'at-rule-no-unknown': null,
    'color-hex-length': 'short',
    'color-named': 'never',
    'declaration-property-unit-disallowed-list': {
      'font-size': ['vw', 'vh', 's']
    },
    'function-no-unknown': null,
    'no-descending-specificity': [
      true, {
        ignore: ['selectors-within-list'],
        severity: 'warning'
      }
    ],
    'order/order': [
      {
        type: 'at-rule',
        name: 'extend'
      },
      {
        type: 'at-rule',
        name: 'include'
      },
      'custom-properties',
      'declarations',
      'at-rules'
    ],
    'order/properties-alphabetical-order': true,
    'property-no-vendor-prefix': [
      true, {
        ignoreProperties: [
          'appearance',
          'backface-visibility',
          'background-clip',
          'hyphens',
          'user-select'
        ],
        severity: 'warning'
      }
    ],
    'scss/at-rule-no-unknown': true,
    'scss/function-no-unknown': true,
    'selector-pseudo-element-colon-notation': 'double',
    'stylistic/color-hex-case': 'lower',
    'stylistic/indentation': 2,
    'stylistic/no-eol-whitespace': true,
    'stylistic/no-extra-semicolons': true,
    'stylistic/number-leading-zero': 'always',
    'value-no-vendor-prefix': true
  }
}
