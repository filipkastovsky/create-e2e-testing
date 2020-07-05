module.exports = {
  globalSetup: './tests/config/setup.js',
  globalTeardown: './tests/config/teardown.js',
  preset: 'ts-jest',
  testEnvironment: './tests/config/puppeteer_env.js',
  setupFilesAfterEnv: ['./jest.setup.js'],
  roots: ['tests/e2e/desktop', 'tests/e2e/mobile', 'tests/e2e/sharing'],
};
