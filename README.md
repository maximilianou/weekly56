# weekly56

javascript typescript blockchain solidity hardhat reactjs nextjs linux

----
- 5 Create account local hardhat -> .secret pk

```tsx
debian@debian:~/projects/weekly56/blog1$ npx hardhat celo-account
Address: 0x6C..
```
- ./celo-account.js
```tsx
const Web3 = require("web3");
const fs = require("fs");
const path = require("path");
const web3 = new Web3();
const privateKeyFile = path.join( __dirname, './.secret');
const getAccount = () => {
  const secret = fs.readFileSync(privateKeyFile);
  const account = web3.eth.accounts.privateKeyToAccount(secret.toString());
  return account;
}
const setAccount = () => {
  const newAccount = web3.eth.accounts.create();
  fs.writeFileSync(privateKeyFile, newAccount.privateKey, (err) => {
    if(err){
      console.err(err);
      console.log(err);
    }
  });
  console.log(`Address: ${newAccount.address}`);
}
module.exports = {
  getAccount,
  setAccount
}
```
- ./hardhat.config.ts
```tsx
import * as dotenv from "dotenv";
import fs from 'fs';
import path from 'path';
//import Account from './celo_account';
const Account = require('./celo_account');
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
dotenv.config();
const privateKeyFile = path.join( __dirname, './.secret');
task(`celo-account`,`Print account address or create a new one`, async (taskArgs, hre) => {
  fs.existsSync(privateKeyFile)? console.log(`Account Address: ${Account.getAccount().address}`): Account.setAccount();
});
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
export default config;
```

----
- 4. 

<https://tailwindcss.com/docs/guides/nextjs>

- global.css
```tsx
@tailwind base;
@tailwind components;
@tailwind utilities;
```

----
- tailsind.config.js
```tsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
----
- 3. 

```tsx
npx create-next-app blog1 --typescript
cd blog1
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

----
- 2. 
```tsx
npm i -g zx
```
----
- 1. 
<https://github.com/google/zx>

```tsx
npx zx <<'EOF'
await $`ip a`
EOF
```

----
----

