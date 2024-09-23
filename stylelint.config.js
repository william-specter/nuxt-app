module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "declaration-block-no-duplicate-properties": [
      true,
      {
        "ignore": ["consecutive-duplicates-with-different-syntaxes"]
      }
    ],
    "media-query-no-invalid": false
  }
}
