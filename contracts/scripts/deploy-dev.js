const { run, ethers } = require("hardhat");

async function main() {
  await run('compile');

  const NFTContract = await ethers.getContractFactory("NFTContract");
  const nft = await NFTContract.deploy("CozyBears", "CBEARS", 8888, ethers.utils.parseEther("0.005"), ethers.utils.parseEther("0.01"), 10, 5);
  await nft.deployed();
  console.log("NFT deployed to:", nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
