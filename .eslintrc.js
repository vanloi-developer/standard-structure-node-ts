module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warings',
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier', 'import'],
    rules: {
        'prettier/prettier': 'error',
        'import/extensions': 'off',
        'no-console': 'off',
        'import/order': [
            'error',
            {
                'newlines-between': 'never',
                groups: [
                    ['builtin', 'external'],
                    ['internal', 'parent', 'sibling', 'index'],
                ],
            },
        ],
    },

    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                /**
                 * 
                 * Choose from one of the "project" configs below or omit to use <root@types> directory even
                 * it doesn't contain any source code, like '@types/unit'
                 * 
                 * Use <root>/path/to/folder/tsconfig.json
                 */
                project: './tsconfig.json',
            },
        },
    },
};

/**
 * import add from '../../math/add'
 * 
 * import add from '@src/math/add;
 */