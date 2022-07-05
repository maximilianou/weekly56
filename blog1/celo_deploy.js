const Web3 = require("web3");
const ContractKit = require("@celo/contractkit");

const web3 = new Web3("https://celo-alfajores--rpc.datahub.figment.io/apikey/094a99d801d2c655e20225146b42cbca/");
const kit = ContractKit.newKitFromWeb3(web3);
const data = require("./artifacts/contracts/TinyVillage.sol/TinyVillage.json");
const Account = require("./celo_account");

const TinyVillage = async () => {
  const account = Account.getAccount();
  kit.connection.addAccount(account.privateKey);
  let tx = await kit.connection.sendTransaction({
    from: account.address,
    data: data.bytecode,
  });
  return tx.waitReceipt();
} 

module.exports = {
  TinyVillage
}