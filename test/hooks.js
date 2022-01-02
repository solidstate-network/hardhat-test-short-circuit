const fs = require('fs');
const path = require('path');

let skip = false;

module.exports = {
  mochaHooks: {
    beforeAll: function () {
      const shortCircuitIndicator = path.resolve(
        hre.config.paths.tests,
        '.short_circuit_indicator'
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
        hre.config.paths.tests,
        '.short_circuit_indicator'
      );

      fs.rmSync(shortCircuitIndicator);
    },
  },
};
