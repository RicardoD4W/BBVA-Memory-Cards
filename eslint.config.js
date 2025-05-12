import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import pluginLit from 'eslint-plugin-lit';

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': pluginTs,
      prettier: eslintPluginPrettier,
      lit: pluginLit,
    },
    rules: {
      ...pluginTs.configs.recommended.rules,
      ...pluginLit.configs.recommended.rules,
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      'coverage/',
      '.vscode/',
      '*.config.js',
    ],
  },
  eslintConfigPrettier,
];
