export default {
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    plugins: ['prettier-plugin-jsdoc'],
    tabWidth: 4,
    useTabs: false,
    overrides: [
        {
            files: ['*.json', '*.jsonc'],
            options: {
                tabWidth: 2,
            },
        },
        {
            files: '*.yml',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
