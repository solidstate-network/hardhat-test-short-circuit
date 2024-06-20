# Hardhat Test Short Circuit

Stop Hardhat test execution on demand and print output from completed tests.

## Installation

```bash
yarn add --dev @solidstate/hardhat-test-short-circuit
```

## Usage

Load plugin in Hardhat config:

```javascript
require('@solidstate/hardhat-test-short-circuit');
```

Run the included Hardhat task while tests are running to skip all pending tests:

```bash
yarn run hardhat short-circuit
```

## Development

Install dependencies via Yarn:

```bash
yarn install
```

Setup Husky to format code on commit:

```bash
yarn prepare
```
