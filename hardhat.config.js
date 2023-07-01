require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  paths:{
    sources: './contracts',
    artifacts: './frontend/src/artifacts'
  },
  defaultNetwork: 'goerli',
  networks:{
    goerli:{
      url: process.env.WEB3_ALCHEMY,
      accounts: [process.env.PRIVATE_KEY_GOERLI]
    },
    mumbai:{
      url: process.env.WEB3_ALCHEMY_MUMBAI,
      accounts: [process.env.PRIVATE_KEY_GOERLI]
    }
  }
};