module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        /** Отключает ошибки отсутпов */
        '@typescript-eslint/indent': 'off',

        /** Предупреждение о неиспользуемых переменных */
        '@typescript-eslint/no-unused-vars': 'warn',
        /**Отключает обязателную проверку на null */
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/comma-dangle': 'off',

        /*----React----**/
        'react/jsx-props-no-spreading': 'warn',
        /** Отклчает импорт React from 'react' в каждый файл */
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'react/jsx-ident': 'off',
        /** метод render устарел, используйте createRoot из react 18 */
        'react/no-deprecated': 'off',
    },
}
