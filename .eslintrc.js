module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
    node: true,
  },
  rules: {
    "prettier/prettier": ["error", { "singleQuote": true }],
    "@typescript-eslint/explicit-function-return-type": ["error", { "allowExpressions": true,"allowTypedFunctionExpressions": true,"allowHigherOrderFunctions": true }]
  },
  settings: {
    react: {
      "pragma": "React",
      "version": "detect"
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
}
