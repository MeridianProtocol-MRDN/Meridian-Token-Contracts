# Meridian Protocol — Technical Architecture Note

## Contract

`LaunchToken` is an OpenZeppelin Contracts 5.6.1 ERC-20 compiled with Solidity `0.8.24`, optimizer enabled for 200 runs, and EVM target `paris`.

The constructor accepts:

1. human-readable name;
2. token symbol;
3. whole-token initial supply;
4. display decimals, capped at 18;
5. non-zero initial-holder address.

The constructor mints `initialSupply × 10^decimals` base units once. The contract overrides only `decimals()` to return the frozen constructor value.

## Post-deployment surface

The supplied contract has no owner or admin role and no post-deployment controls for minting, burning, pausing, blacklisting, whitelisting, taxes, fees, proxy upgrades, or arbitrary external calls. Transfers and allowances use OpenZeppelin ERC-20 behavior.

## Mainnet build evidence

- Contract: `0xd4025a390a0b2a606f24Ea33A902D10D978715F2`
- Chain ID: `56`
- Compiler: `0.8.24`
- Optimizer: 200 runs
- EVM: `paris`
- Source verification: https://bscscan.com/address/0xd4025a390a0b2a606f24Ea33A902D10D978715F2#code

## Security boundary

The absence of admin controls reduces one class of upgrade and privileged-role risk, but it is not a security audit. Risks remain in wallet custody, concentrated supply ownership, user interfaces, integrations, liquidity arrangements, operational controls, and legal/compliance status. An independent reviewer should confirm the deployed source, constructor arguments, bytecode, and ABI before relying on this note.