module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}'
    ],
    coverage: 'coverage',
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    }
}