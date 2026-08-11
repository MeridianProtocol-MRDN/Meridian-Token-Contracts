const hre = require("hardhat");

const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required`);
  return value;
};

async function main() {
  if (hre.network.name !== "bscTestnet") {
    throw new Error(`Preflight is testnet-only, got ${hre.network.name}`);
  }

  const expectedChainId = 97;
  const network = await hre.ethers.provider.getNetwork();
  if (Number(network.chainId) !== expectedChainId) {
    throw new Error(`Wrong chain ID: expected ${expectedChainId}, received ${network.chainId}`);
  }

  const initialHolderInput = required("INITIAL_HOLDER");
  if (!/^0x[a-fA-F0-9]{40}$/.test(initialHolderInput)) {
    throw new Error("INITIAL_HOLDER must be a valid EVM address");
  }
  const initialHolder = hre.ethers.getAddress(initialHolderInput);
  const [deployer] = await hre.ethers.getSigners();
  const deployerAddress = await deployer.getAddress();
  const balance = await hre.ethers.provider.getBalance(deployerAddress);
  const Token = await hre.ethers.getContractFactory("LaunchToken");
  const deployTx = await Token.getDeployTransaction(
    "Meridian Protocol",
    "MRDN",
    "1000000000",
    18,
    initialHolder,
  );
  const gasEstimate = await hre.ethers.provider.estimateGas({
    from: deployerAddress,
    data: deployTx.data,
  });
  const feeData = await hre.ethers.provider.getFeeData();
  const gasPrice = feeData.gasPrice || feeData.maxFeePerGas;
  const estimatedCost = gasPrice ? gasEstimate * gasPrice : null;

  console.log(JSON.stringify({
    network: hre.network.name,
    chainId: Number(network.chainId),
    deployerAddress,
    initialHolder,
    sameWallet: deployerAddress.toLowerCase() === initialHolder.toLowerCase(),
    balanceBNB: hre.ethers.formatEther(balance),
    estimatedGas: gasEstimate.toString(),
    gasPriceGwei: gasPrice ? hre.ethers.formatUnits(gasPrice, "gwei") : null,
    estimatedCostBNB: estimatedCost ? hre.ethers.formatEther(estimatedCost) : null,
    note: "Read-only preflight; no transaction was broadcast.",
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});