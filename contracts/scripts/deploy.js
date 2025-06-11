const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying from:", deployer.address);

  const Token = await ethers.getContractFactory("MonarkToken");
  const initialSupply = ethers.utils.parseUnits("25000000", 18); // 25M MONK

  const token = await Token.deploy(initialSupply);
  await token.deployed();

  console.log("MonarkToken deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
