import child_process from 'child_process';

const TASK_SHORT_CIRCUIT = 'short-circuit';

let noTestsRunningError: any;

// attempt to call the short circuit task outside of the test suit
// with the expectation that it will fail
try {
  child_process.execSync(`yarn run hardhat ${TASK_SHORT_CIRCUIT}`);
} catch (error) {
  noTestsRunningError = error;
}

describe(TASK_SHORT_CIRCUIT, () => {
  describe('before test suite execution', () => {
    it('throws an error', async () => {
      if (!(noTestsRunningError instanceof Error)) {
        throw new Error('Pre-mocha short circuit did not throw an error');
      }
    });

    it('does not interfere with subsequent tests', async () => {
      // this test should pass
    });
  });

  describe('during test suite execution', () => {
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
