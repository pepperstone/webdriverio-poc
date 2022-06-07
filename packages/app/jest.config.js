module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  modulePaths: ['<rootDir>'],
  transformIgnorePatterns: [
    '../../node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)',
  ],
};
