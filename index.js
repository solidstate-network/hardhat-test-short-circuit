const { extendConfig } = require('hardhat/config');
const { mochaHooks: rootHooks } = require('./test/hooks.js');

require('./tasks/short_circuit.js');

extendConfig(function (config, userConfig) {
  // TODO: prevent overwrite of userConfig or other plugins' hooks
  config.mocha.rootHooks = rootHooks;
});
