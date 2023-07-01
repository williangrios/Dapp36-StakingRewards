
const hre = require("hardhat");

async function main() {

  const TokenERC20 = await hre.ethers.getContractFactory("TokenERC20");
  const tokenERC20 = await TokenERC20.deploy();
  await tokenERC20.deployed();
  console.log(`TokenERC20 contract deployed to ${tokenERC20.address}`
  );


  const SR = await hre.ethers.getContractFactory("ERC20Staking");
  const sr = await SR.deploy(tokenERC20.address);
  await sr.deployed();
  console.log(`Staking rewards contract deployed to ${sr.address}`
  );

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
