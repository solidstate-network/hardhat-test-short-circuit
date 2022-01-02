const fs = require('fs');
const path = require('path');

let skip = false;

module.exports = {
  mochaHooks: {
    beforeEach: async function () {
      const shortCircuitIndicator = path.resolve(
        hre.config.paths.cache,
        '.short_circuit_indicator'
      );

      if (!skip && fs.existsSync(shortCircuitIndicator)) {
        fs.rmSync(shortCircuitIndicator);
        skip = true;
      }

      if (skip) this.skip();
    },
  },
};
