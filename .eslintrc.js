const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = exports = {
    "root": true,

    "env": {
        "es6": true,
    },

    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true,
      "modules": true
    },

    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
    },

    "plugins": [
        "react"
    ],

    "extends": "eslint:recommended",

    "rules": {
        "semi": 2
    }
};
