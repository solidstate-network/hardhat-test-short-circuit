# Hardhat Test Short Circuit

Stop Hardhat test execution on demand and print output from completed tests.

## Installation

```bash
npm install --save-dev @solidstate/hardhat-test-short-circuit
# or
yarn add --dev @solidstate/hardhat-test-short-circuit
```

## Usage

Load plugin in Hardhat config:

```javascript
require('@solidstate/hardhat-test-short-circuit');
```

Run the included Hardhat task while tests are running to skip all pending tests:

```bash
npx hardhat short-circuit 
# or
yarn run hardhat short-circuit
```
