const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const tsEslint = require('@typescript-eslint/eslint-plugin');

module.exports = defineConfig([
  {
    plugins: {
      '@typescript-eslint': tsEslint,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    },
    files: ['**/*.ts', '**/*.tsx'],
  },
  expoConfig,
  {
    ignores: ['dist/*', '.eslintrc.js'],
  },
]);
