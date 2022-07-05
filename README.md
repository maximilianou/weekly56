# weekly56

javascript typescript blockchain solidity hardhat reactjs nextjs linux

----
- 6 
- Add founds by access this url **https://celo.org/developers/faucet** 
- And copy and paste your **account address** 
- From **celo-account** task
- Execute: **npx hardhat celo-deploy --verbose** after using the browser and anti robot checks to get free credit in testnet ( Goood, Cooool, simpler than any other testnet )
  
```tsx
debian@debian:~/projects/weekly56/blog1$ npx hardhat celo-deploy --verbose
  hardhat:core:config Loading Hardhat config from /home/debian/projects/weekly56/blog1/hardhat.config.ts +0ms
  hardhat:core:global-dir Looking up Client Id at /home/debian/.local/share/hardhat-nodejs/analytics.json +0ms
  hardhat:core:global-dir Client Id found: ab228f69-26d1-4f56-b586-442706e37b64 +1ms
  hardhat:core:analytics Sending hit for /task/custom +0ms
  hardhat:core:analytics Hit payload: {"v":"1","t":"pageview","tid":"UA-117668706-3","cid":"ab228f69-26d1-4f56-b586-442706e37b64","dp":"/task/custom","dh":"cli.hardhat.org","ua":"Node/v16.15.1 (X11; Linux x86_64)","cs":"Developer","cm":"User Type","cd1":"hardhat-project","cd2":"Developer","cd3":"Hardhat 2.9.9"} +1ms
  hardhat:core:hre Creating HardhatRuntimeEnvironment +0ms
  hardhat:core:hre Running task celo-deploy +144ms
  hardhat:core:analytics Hit for "/task/custom" sent successfully +305ms
{
  blockHash: '0x6eeb76078395beaaa6b71d10167534839606e58a1d347d1f908bde9bf74d0ff2',
  blockNumber: 12340080,
  contractAddress: '0x4226eB7Dd8530B1E15d88df906fFd1c818653069',
  cumulativeGasUsed: 2913357,
  effectiveGasPrice: '0x1dcd6500',
  from: '0x6cda5ef035a581e37198aaf09005d98e2d8ae857',
  gasUsed: 2913357,
  logs: [],
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: null,
  transactionHash: '0xf23a28554dd02b3db7c133a5bab019fdb31a016f1b52e806076e1e0cc0f430b3',
  transactionIndex: 0
}
Save the contract address: 0x4226eB7Dd8530B1E15d88df906fFd1c818653069
  hardhat:core:cli Killing Hardhat after successfully running task celo-deploy +0ms
```

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

