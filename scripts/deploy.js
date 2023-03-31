
const hre = require("hardhat");

async function main() {

  const SR = await hre.ethers.getContractFactory("StakingRewards");
  const sr = await Lock.deploy();

  await st.deployed();

  console.log(`Staking rewards contract deployed to ${lock.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
