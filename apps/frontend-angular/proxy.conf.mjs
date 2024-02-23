const DEFAULT_HOST_TARGET = 'http://api:3000';
const ENV_HOST_TARGET = process.env['API_PROXY_TARGET_HOST'];

let hostTarget = ENV_HOST_TARGET ?? DEFAULT_HOST_TARGET;
if (ENV_HOST_TARGET) {
  console.log(`Frontend API proxy set to target: "${hostTarget}"`);
}

export default [
  {
    context: [
      '/api',
      '/graphql'
    ],
    target: hostTarget,
    secure: false
  }
]
