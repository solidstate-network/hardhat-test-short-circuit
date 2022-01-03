const os = require('os');
const fs = require('fs');
const path = require('path');
const { HardhatPluginError } = require('hardhat/plugins');

task(
  'short-circuit', 'Stop ongoing test execution and print results'
).setAction(async function () {
  const shortCircuitIndicator = path.resolve(
    os.tmpdir(),
    '.hardhat_test_short_circuit_indicator'
  );

  try {
    fs.rmSync(shortCircuitIndicator);
  } catch (e) {
    throw new HardhatPluginError('short circuit indicator file not found; are tests in progress?');
  }
});
