import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";

export default [
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true, 
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      quotes: ["warn", "single"],
      camelcase: "warn",
      "max-len": ["warn", { code: 80 }],
      curly: ["warn", "all"],
      "no-useless-concat": "warn",
      "prefer-template": "warn",
      "no-useless-return": "warn",
      "no-new-object": "warn",
      "no-const-assign": "warn",
      eqeqeq: ["warn", "always"],
      "no-empty-function": "warn",
      "no-duplicate-imports": "warn",
      "prefer-const": "warn",
      "no-setter-return": "warn",
      "no-useless-constructor": "warn",
      "no-else-return": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "react/prop-types": "off",
    },
  },
  js.configs.recommended, 
  
];
