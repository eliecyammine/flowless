/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ['apps/**', 'packages/**', 'templates/**'],

  extends: ['@flowless/eslint-config/library.js'],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: true,
  },
};
