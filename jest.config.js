/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',

    collectCoverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.{ts, js}'],
    coverageThreshold: {
        global: {
            branched: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
    moduleNameMapper: {
        'src/(.*)': '<rootDir>/src/$1',
    },
    moduleDirectories: [
        'node_modules',
        'src'
    ]
};