import os from 'os';
import path from 'path';

export default function () {
  return path.resolve(os.tmpdir(), '.hardhat_test_short_circuit_indicator');
}
