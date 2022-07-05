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
const Deploy = require("./celo_deploy")

task(`celo-account`,`Print account address or create a new one`, async (taskArgs, hre) => {
  fs.existsSync(privateKeyFile)? console.log(`Account Address: ${Account.getAccount().address}`): Account.setAccount();
});

task(`celo-deploy`,`Deploy TinyVillage solidity ethereum in celo staging`, async (taskArgs, hre) => {
  const tx = await Deploy.TinyVillage();
  console.log(tx);
  console.log(`Save the contract address: ${tx.contractAddress}`);
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
