const mkdirp = require('mkdirp');
const path = require('path');
const os = require('os');
const rimraf = require('rimraf');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');
const TEMP = path.join(__dirname, '..', 'temp');

module.exports = async function () {
  // Delete screenshot directory
  rimraf.sync(TEMP);
  // Create a temp directory for screenshots
  mkdirp.sync(TEMP);
};
