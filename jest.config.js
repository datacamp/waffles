module.exports = {
  preset: 'ts-jest',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'src/asset',
    'src/icon',
    'src/tokens',
  ],
  rootDir: '.',
  testEnvironment: 'jsdom',
  coverageDirectory: './coverage',
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/build/', '/packages/'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testRegex: '(.|-)spec\\.(js|ts|tsx|jsx)$',
  snapshotSerializers: ['@emotion/jest/serializer'],
};
