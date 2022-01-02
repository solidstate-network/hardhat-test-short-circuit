const { extendConfig } = require('hardhat/config');

require('./tasks/short_circuit.js');

const { mochaHooks: rootHooks } = require('./test/hooks.js');

extendConfig(function (config, userConfig) {
  // TODO: prevent overwrite of userConfig or other plugins' hooks
  config.mocha.rootHooks = rootHooks;
});
