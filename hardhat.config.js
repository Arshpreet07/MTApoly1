require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: ["72e3977d3841fa4d2fbcb58d41520a0893e8957b0320da90c8df07661096e14e"],
    },
    goerli: {
      url: 'https://ethereum-goerli.publicnode.com',
      accounts: ["72e3977d3841fa4d2fbcb58d41520a0893e8957b0320da90c8df07661096e14e"],
    },
  }
};
