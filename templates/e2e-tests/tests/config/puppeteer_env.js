const NodeEnvironment = require('jest-environment-node');
class PuppeteerEnvironment extends NodeEnvironment {
  // eslint-disable-next-line no-useless-constructor
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();

    // Setup url
    this.global.__BASE_URL__ = process.env.BASE_URL.trim();
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = PuppeteerEnvironment;
