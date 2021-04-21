/* eslint-disable */
module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "react-native",
    "react-hooks"
  ],
  "globals": {
    "__DEV__": true,
    "fetch": true,
    "LocalStorage": true,
  },
  "parser": "babel-eslint",
  "rules": {
    "max-len": ["error", 200],
    "no-console": 0,
    "react/forbid-prop-types": [0, { "forbid": ["any", "array", "object"] }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/destructuring-assignment": [0],
    "react/prop-types": [0],
    "camelcase": 0,
    "prefer-destructuring": ["error", {"object": false, "array": false}],
    "no-param-reassign": ["error", { "props": false }],
    "no-underscore-dangle": 0,
    "max-classes-per-file": ["error", 5],
    "react/jsx-props-no-spreading": ["error", {"custom": "ignore"}],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
    // "react/jsx-fragments": [true],
  },
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
  }
};
