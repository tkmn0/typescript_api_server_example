
console.log("jest config load...");
console.log(process.env.DB_NAME);

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  testMatch: ['**/*.test.+(ts|tsx|js)', '**/__test__/*.ts'],
  moduleNameMapper: {
    '^#/(.+)': '<rootDir>/src/$1',
  },
};
