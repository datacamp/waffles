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
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      require.resolve('./mocks/image-file-mock.js'),
  },
};
