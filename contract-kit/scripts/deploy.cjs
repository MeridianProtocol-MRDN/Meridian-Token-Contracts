const fs = require("node:fs");
const path = require("node:path");
const hre = require("hardhat");

const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required`);
  return value;
};

async function main() {
  const expectedChainId = hre.network.name === "bscTestnet" ? 97 : hre.network.name === "bscMainnet" ? 56 : null;
  if (!expectedChainId) {
    throw new Error(`Deployment is only allowed on bscTestnet or bscMainnet, got ${hre.network.name}`);
  }

  const name = process.env.TOKEN_NAME || "Meridian Protocol";
  const symbol = process.env.TOKEN_SYMBOL || "MRDN";
  const supply = process.env.TOKEN_SUPPLY || "1000000000";
  const decimals = Number(process.env.TOKEN_DECIMALS || "18");
  const initialHolderInput = required("INITIAL_HOLDER");

  if (!/^0x[a-fA-F0-9]{40}$/.test(initialHolderInput)) {
    throw new Error("INITIAL_HOLDER must be a checksummed or lowercase EVM address");
  }
  const initialHolder = hre.ethers.getAddress(initialHolderInput);

  const Token = await hre.ethers.getContractFactory("LaunchToken");
  const token = await Token.deploy(name, symbol, supply, decimals, initialHolder);
  await token.waitForDeployment();
  const address = await token.getAddress();
  const network = await hre.ethers.provider.getNetwork();
  if (Number(network.chainId) !== expectedChainId) {
    throw new Error(`Wrong chain ID: expected ${expectedChainId}, received ${network.chainId}`);
  }
  const [deployer] = await hre.ethers.getSigners();
  const deployerAddress = await deployer.getAddress();
  const deployment = {
    network: hre.network.name,
    chainId: Number(network.chainId),
    contractAddress: address,
    deployerAddress,
    constructor: { name, symbol, supply, decimals, initialHolder },
    compiler: { version: "0.8.24", optimizer: true, runs: 200, evmVersion: "paris" },
    transactionHash: token.deploymentTransaction()?.hash || null,
    recordedAtUtc: new Date().toISOString(),
  };

  const outputPath = path.resolve(__dirname, "../../evidence/deployment.json");
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(deployment, null, 2)}\n`);
  console.log(JSON.stringify(deployment, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});