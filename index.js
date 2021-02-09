module.exports = {
  extends: 'stylelint-config-recommended',
  plugins: [
    'stylelint-order',
    'stylelint-scss'
  ],
  rules: {
    'at-rule-no-unknown': null,
    'color-named': 'never',
    'declaration-property-unit-disallowed-list': {
      'font-size': ['vw', 'vh', 's']
    },
    indentation: 2,
    'no-descending-specificity': [
      true, {
        ignore: ['selectors-within-list'],
        severity: 'warning'
      }
    ],
    'no-eol-whitespace': true,
    'number-leading-zero': 'always',
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
    'value-no-vendor-prefix': true
  }
}
