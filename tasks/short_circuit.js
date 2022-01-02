const fs = require('fs');
const path = require('path');

task(
  'short-circuit', 'Stop ongoing test execution and print results'
).setAction(async function (args, hre) {
  const shortCircuitIndicator = path.resolve(
    hre.config.paths.cache,
    '.short_circuit_indicator'
  );

  fs.closeSync(fs.openSync(shortCircuitIndicator, 'w'));
});
