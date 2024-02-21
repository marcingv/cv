/* eslint-disable */
export default {
  displayName: 'nestjs-feature-rest-healthcheck',
  preset: '../../../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../../../../../coverage/libs/nestjs/api/rest/feature-rest-healthcheck',
};
