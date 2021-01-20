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
    'no-descending-specificity': [
      true, {
        ignore: ['selectors-within-list'],
        severity: 'warning'
      }
    ],
    'number-leading-zero': 'always',
    'order/order': [
      'custom-properties',
      'declarations'
    ],
    'order/properties-alphabetical-order': true,
    'scss/at-rule-no-unknown': true
  }
}