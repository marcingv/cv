/* eslint-disable */
export default {
  displayName: 'nestjs-data-access-rest-export',
  preset: '../../../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../../../../../coverage/libs/nestjs/api/rest/data-access-rest-export',
  passWithNoTests: true,
};
