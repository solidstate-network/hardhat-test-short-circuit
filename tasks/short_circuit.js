const fs = require('fs');
const { HardhatPluginError } = require('hardhat/plugins');

const resolveIndicatorFile = require('../lib/resolve_indicator_file');

task(
  'short-circuit', 'Stop ongoing test execution and print results'
).setAction(async function () {
  try {
    fs.rmSync(resolveIndicatorFile());
  } catch (e) {
    throw new HardhatPluginError('short circuit indicator file not found; are tests in progress?');
  }
});
