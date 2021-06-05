module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
    "es2020": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "google",
  ],
  "rules": {
    "quotes": ["error", "double"],
    "valid-jsdoc": 0,
    "max-len": 0,
    "no-unused-vars": 0,
  },
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "parser": "babel-eslint",
};
