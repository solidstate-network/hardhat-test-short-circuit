import './tasks/short_circuit';
import mochaHooks from './test/hooks';
import { extendConfig } from 'hardhat/config';

extendConfig(function (config, userConfig) {
  // TODO: prevent overwrite of userConfig or other plugins' hooks
  config.mocha.rootHooks = mochaHooks;
});
