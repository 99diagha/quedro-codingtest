module.exports = {
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules', 'pages', 'components'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  setupFilesAfterEnv: ['<rootDir>/config/setup.ts'],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](build|docs|node_modules|.next)[/\\\\]',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  testRegex: '/__tests__/.*\\.(test|spec)\\.tsx?$',
}
