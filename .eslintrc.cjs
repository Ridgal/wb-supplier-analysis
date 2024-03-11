module.exports = {
  root: true,
  env: { browser: true, es2020: true, "jest": true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-unused-vars": "warn",
    "prefer-const": "error",
    "no-console": "warn",
    "quotes": ["error", "single"],
    "jsx-quotes": ["error", "prefer-double"],
    "indent": ["warn", 2],
    "comma-dangle": ["warn", "always-multiline"],
    "semi": ["warn", "always"]
  },
}
