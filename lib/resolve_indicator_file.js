const os = require('os');
const path = require('path');

module.exports = function () {
  return path.resolve(os.tmpdir(), '.hardhat_test_short_circuit_indicator');
};
