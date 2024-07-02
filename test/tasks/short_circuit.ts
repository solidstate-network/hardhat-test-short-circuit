import child_process from 'child_process';

const TASK_SHORT_CIRCUIT = 'short-circuit';

describe(TASK_SHORT_CIRCUIT, () => {
  describe('before task execution', () => {
    it('does not interfere with tests', async () => {
      // this test should pass
    });
  });

  describe('after task execution', () => {
    before(async () => {
      // run short circuit task in separate process to simulate real-world usage
      await new Promise<void>((resolve) => {
        child_process.exec(`yarn run hardhat ${TASK_SHORT_CIRCUIT}`, () =>
          resolve(),
        );
      });
    });

    it('skips tests (✔ this test should be skipped)', async () => {
      throw new Error('Failed to short circuit test execution');
    });
  });
});
