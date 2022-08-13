const {defaults} = require('jest-config');

module.exports = {
    preset: 'ts-jest',
    testMatch: ['**/src/**/*.spec.ts'],
    collectCoverageFrom: [
        'src/**/*.ts',
        '!**/main.ts'
    ]
}