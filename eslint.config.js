// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import cypress from 'eslint-plugin-cypress';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier/flat';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import { defineConfig } from 'eslint/config';
import { includeIgnoreFile } from '@eslint/compat';
import { fileURLToPath } from 'node:url';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
    includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns'),
    {
        // your overrides
    },
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: { js, cypress, prettier, noOnlyTests },
        extends: [js.configs.recommended, cypress.configs.recommended, prettierConfig],
        rules: {
            'prettier/prettier': 'off', // Prettier introduces a lot of noise
            'no-plusplus': 'off',
            'max-len': ['warn', { code: 100, ignoreUrls: true, ignoreStrings: true }],
            'spaced-comment': 'off',
            'no-undef': ['error', { typeof: true }],
            'cypress/no-unnecessary-waiting': 'off',
            'noOnlyTests/no-only-tests': [
                'warn',
                {
                    block: ['test', 'it', 'assert', 'describe'],
                    focus: ['only', 'focus', 'skip'],
                },
            ],
        },
        languageOptions: { globals: { ...globals.node } },
        ignores: ['**/eslint.config.mjs'], // This is an auto-generated file, so we don't have control over it
    },
    {
        files: ['**/*.json'],
        plugins: { json },
        language: 'json/json',
        extends: ['json/recommended'],
        ignores: ['**/package-lock.json'], // This is an auto-generated file, so we don't have control over it
    },
    {
        files: ['**/*.md'],
        plugins: { markdown },
        language: 'markdown/commonmark',
        extends: ['markdown/recommended'],
    },
    prettierConfig,
]);
