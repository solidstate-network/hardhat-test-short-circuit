import hre from 'hardhat';

const TASK_SHORT_CIRCUIT = 'short-circuit';

describe(TASK_SHORT_CIRCUIT, () => {
  describe('before task execution', () => {
    it('does not interfere with tests', async () => {
      // this test should pass
    });
  });

  describe('after task execution', () => {
    before(async () => {
      await hre.run(TASK_SHORT_CIRCUIT);
    });

    it('skips tests (⚠️ this test should be skipped)', async () => {
      throw new Error('Failed to short circuit test execution');
    });
  });
});
