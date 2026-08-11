const fs = require("node:fs");
const path = require("node:path");
const hre = require("hardhat");

async function main() {
  const file = path.resolve(__dirname, "../../evidence/deployment.json");
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}; deploy or fill it first`);
  const deployment = JSON.parse(fs.readFileSync(file, "utf8"));
  if (!deployment.contractAddress) throw new Error("deployment.json has no contractAddress");

  await hre.run("verify:verify", {
    address: deployment.contractAddress,
    constructorArguments: [
      deployment.constructor.name,
      deployment.constructor.symbol,
      deployment.constructor.supply,
      deployment.constructor.decimals,
      deployment.constructor.initialHolder,
    ],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});