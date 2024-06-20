import resolveIndicatorFile from '../lib/resolve_indicator_file';
import fs from 'fs';
import { Context, RootHookObject } from 'mocha';

let skip = false;

const mochaHooks: RootHookObject = {
  beforeAll: function () {
    const shortCircuitIndicator = resolveIndicatorFile();

    fs.closeSync(fs.openSync(shortCircuitIndicator, 'w'));

    fs.watch(shortCircuitIndicator, function () {
      skip = true;
    });
  },
  beforeEach: function () {
    if (skip) (this as Context).skip();
  },
  afterAll: function () {
    const shortCircuitIndicator = resolveIndicatorFile();

    try {
      fs.rmSync(shortCircuitIndicator);
    } catch (e) {
      // assume that indicator was removed via short-circuit task; do nothing
    }
  },
};

export default mochaHooks;
