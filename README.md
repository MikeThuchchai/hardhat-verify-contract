# Hardhat verify contract

1. `yarn install`

2. copy your contract (`*.sol`) to contracts folder

3. `yarn hardhat compile`

4. Verify contract

4.1 All in cli

```sh
yarn hardhat verify --network rei {address} {constructor arguments 1} {constructor arguments 2} {constructor arguments ...}
```

Eg.

```sh
yarn hardhat verify --network rei 0x48C9F52aa8982bc28752D8bfD9153CbB36a48dBe ABC 123
```

4.2 With `arguments.js`

- update `arguments.js` file with your constructor arguments
-

```sh
yarn hardhat verify --network rei --constructor-args arguments.js {address}
```
