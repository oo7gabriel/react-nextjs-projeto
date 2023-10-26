module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transformIgnorePatterns: [
      "<rootDir>/node_modules/"
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  };