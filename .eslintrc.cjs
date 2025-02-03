/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    rules: {
        'no-console': 'off',
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
            },
        ],
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier',
    ],
    overrides: [
        {
            files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
            extends: ['plugin:cypress/recommended'],
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
}
