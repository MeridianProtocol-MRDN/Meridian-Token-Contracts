require("dotenv/config");
require("@nomicfoundation/hardhat-toolbox");

const networkConfig = (urlName, chainId) => ({
  // Keep compile/test commands offline-friendly. Deployment commands validate
  // these values before connecting to a live network.
  url: process.env[urlName] || "",
  chainId,
  accounts: process.env.DEPLOYER_PRIVATE_KEY ? [process.env.DEPLOYER_PRIVATE_KEY] : [],
});

module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: { enabled: true, runs: 200 },
      evmVersion: "paris",
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./tests",
    artifacts: "./evidence/build/artifacts",
    cache: "./evidence/build/cache",
  },
  networks: {
    hardhat: { chainId: 31337 },
    bscTestnet: networkConfig("BSC_TESTNET_RPC_URL", 97),
    bscMainnet: networkConfig("BSC_MAINNET_RPC_URL", 56),
  },
  etherscan: {
    // Single Etherscan V2 API key (works for all chains via chainId routing)
    apiKey: process.env.BSCSCAN_API_KEY || "",
    customChains: [
      {
        network: "bscTestnet",
        chainId: 97,
        urls: {
          // Etherscan V2 unified endpoint with chainId routing
          apiURL: "https://api.etherscan.io/v2/api?chainid=97",
          browserURL: "https://testnet.bscscan.com",
        },
      },
      {
        network: "bscMainnet",
        chainId: 56,
        urls: {
          apiURL: "https://api.etherscan.io/v2/api?chainid=56",
          browserURL: "https://bscscan.com",
        },
      },
    ],
  },
};