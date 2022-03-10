const hre = require("hardhat");

async function main() {
  await hre.run('compile');

  const NFTContract = await hre.ethers.getContractFactory("NFTContract");
  const nft = await NFTContract.deploy("CozyBears", "CBEARS", 8888, '500000000000000', '70000000000000000', 10, 5);
  await nft.deployed();

  console.log("NFT deployed to:", nft.address);

  await nft.reserveAndStart(5);
  await nft.setAllowListMerkleRoot('0x3687f350d4cb92ed3fd4cefb1d6f9815d320e3c0732b089ac855df0826a7169d');
  await nft.togglePublicSale();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
