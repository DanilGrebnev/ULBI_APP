module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'eslint:recommended',
        'plugin:storybook/recommended',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },

    plugins: ['react', 'simple-import-sort', 'react-hooks'],
    ignorePatterns: ['.eslintrc.js', 'jest.config.js'],
    rules: {
        'react/prop-types': 'off',

        /** Отключает ошибки отсутпов */
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',
        '@typescript-eslint/promise-function-async': 'off',
        'no-inline-styles': 'off',
        'multiline-ternary': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        /**Отключает обязательную типизацию возвращаемого типа функцией */
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off',
        /** Предупреждение о неиспользуемых переменных */
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',

        /**Отключает обязателную проверку на null */
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/comma-dangle': 'off',

        //Отключает проверку пробела перед скобками при объявлении функции
        '@typescript-eslint/space-before-function-paren': 'off',

        /*----React----**/
        'react/jsx-props-no-spreading': 'off',
        // 'react-hooks/exhaustive-deps': 'off',

        /** Отклчает [import React from 'react'] в каждый файл */
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'react/jsx-ident': 'off',

        /** метод render устарел, используйте createRoot из react 18 */
        'react/no-deprecated': 'off',

        /**Настройка правил для react-хуков */
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
}
