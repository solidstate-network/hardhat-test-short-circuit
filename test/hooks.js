const os = require('os');
const fs = require('fs');
const path = require('path');

let skip = false;

module.exports = {
  mochaHooks: {
    beforeAll: function () {
      const shortCircuitIndicator = path.resolve(
        os.tmpdir(),
        '.hardhat_test_short_circuit_indicator'
      );

      fs.closeSync(fs.openSync(shortCircuitIndicator, 'w'));

      fs.watch(shortCircuitIndicator, function () {
        skip = true;
      });
    },
    beforeEach: function () {
      if (skip) this.skip();
    },
    afterAll: function () {
      const shortCircuitIndicator = path.resolve(
        os.tmpdir(),
        '.hardhat_test_short_circuit_indicator'
      );

      try {
        fs.rmSync(shortCircuitIndicator);
      } catch (e) {
        // assume that indicator was removed via short-circuit task; do nothing
      }
    },
  },
};
