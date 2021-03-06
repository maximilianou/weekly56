const { expect } = require('chai');
describe(`Tiny Village Test`, () => {
  it(`should mint village`, async () => {
    const accounts = await ethers.getSigners();
    const TinyVillage = await ethers.getContractFactory("TinyVillage"); // create the contract/class/definition
    const tinyVillage = await TinyVillage.deploy(); // Create an instance of the contract when deployment in one blockchain network, let say mainnet
    await tinyVillage.mintVillage();
    const balance = await tinyVillage.balanceOf(accounts[0].address, 0);
    expect(1).to.equal(Number(balance.toString()))
  });
  it(`Should mint Castle`, async () => {
    const accounts = await ethers.getSigners();
    const TinyVillage = await ethers.getContractFactory('TinyVillage');
    const tinyVillage = await TinyVillage.deploy();
    await tinyVillage.mintVillage();
    await tinyVillage.mintMine();
    await tinyVillage.mintFarm();
    await tinyVillage.mintMill();
    await tinyVillage.mintCastle();
    const balance = await tinyVillage.balanceOf( accounts[0].address, 4);
    expect(1).to.equal(Number(balance.toString()));
  });
});