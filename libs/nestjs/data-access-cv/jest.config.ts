/* eslint-disable */
export default {
  displayName: 'nestjs-data-access-cv',
  preset: '../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/nestjs/data-access-cv',
  passWithNoTests: true,
};
