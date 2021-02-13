/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node'
}
