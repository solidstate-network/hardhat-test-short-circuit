import { name as pluginName } from '../../package.json';
import resolveIndicatorFile from '../lib/resolve_indicator_file';
import fs from 'fs';
import { task } from 'hardhat/config';
import { HardhatPluginError } from 'hardhat/plugins';

task(
  'short-circuit',
  'Stop ongoing test execution and print results',
).setAction(async function () {
  try {
    fs.rmSync(resolveIndicatorFile());
  } catch (e) {
    throw new HardhatPluginError(
      pluginName,
      'short circuit indicator file not found; are tests in progress?',
    );
  }
});
