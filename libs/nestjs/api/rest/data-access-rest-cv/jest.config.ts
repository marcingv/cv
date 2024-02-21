/* eslint-disable */
export default {
  displayName: 'nestjs-data-access-rest-cv',
  preset: '../../../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../../../../../coverage/libs/nestjs/api/rest/data-access-rest-cv',
  passWithNoTests: true,
};
