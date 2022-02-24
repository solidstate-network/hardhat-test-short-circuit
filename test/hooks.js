const fs = require('fs');

const resolveIndicatorFile = require('../lib/resolve_indicator_file');

let skip = false;

module.exports = {
  mochaHooks: {
    beforeAll: function () {
      const shortCircuitIndicator = resolveIndicatorFile();

      fs.closeSync(fs.openSync(shortCircuitIndicator, 'w'));

      fs.watch(shortCircuitIndicator, function () {
        skip = true;
      });
    },
    beforeEach: function () {
      if (skip) this.skip();
    },
    afterAll: function () {
      const shortCircuitIndicator = resolveIndicatorFile();

      try {
        fs.rmSync(shortCircuitIndicator);
      } catch (e) {
        // assume that indicator was removed via short-circuit task; do nothing
      }
    },
  },
};
