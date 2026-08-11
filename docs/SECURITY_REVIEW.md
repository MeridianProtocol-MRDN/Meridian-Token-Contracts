# Security Review Status

## Scope

The reviewed baseline is a fixed-supply, non-upgradeable ERC-20 using OpenZeppelin's ERC-20 implementation. The full supply is minted once to the constructor-provided initial holder.

## Explicitly absent

- No owner or admin role after deployment
- No mint, burn, pause, blacklist, whitelist, tax, fee, max-wallet, or max-transaction logic
- No proxy or upgrade path
- No external calls or callbacks in token transfer logic
- No custom transfer override

## Security properties to prove

- Total supply is created exactly once and remains constant.
- Zero address and zero supply constructor inputs revert.
- Decimals above the supported limit revert.
- Transfers, allowances, and transferFrom follow standard ERC-20 behavior.
- The initial holder address is independently checked before signing.
- The build inputs used for deployment are exactly the ones used for verification.

## Review status

- Automated unit tests: `COMPLETED — 5 passing on 2026-08-06`
- Independent Solidity review: `PENDING — not yet commissioned`
- Formal audit: `PENDING — not yet commissioned`
- Testnet deployment: `COMPLETED — 2026-08-06 UTC, contract 0xeF8abA1703439CcdEA58f12CFb56235232Fa022C on chain 97`
- BscScan testnet verification: `COMPLETED — https://testnet.bscscan.com/address/0xeF8abA1703439CcdEA58f12CFb56235232Fa022C#code`
- Mainnet deployment: `COMPLETED — 2026-08-08 UTC, contract 0xd4025a390a0b2a606f24Ea33A902D10D978715F2 on chain 56`
- BscScan mainnet verification: `COMPLETED — https://bscscan.com/address/0xd4025a390a0b2a606f24Ea33A902D10D978715F2#code`

## Deployment evidence

| Field | Value |
|---|---|
| Contract address (testnet) | `0xeF8abA1703439CcdEA58f12CFb56235232Fa022C` |
| Transaction hash | `0x2d8361af22e43f538cfda35c78f40ccf385d94ac666d4d82efbec46e2a0f136b` |
| Chain ID | `97` (BNB Testnet) |
| Deployer / Initial holder | `0x9954585529c7FC22b47E6562C9726082F810903C` |
| Compiler | `0.8.24` |
| EVM version | `paris` |
| Optimizer | `enabled, 200 runs` |
| OpenZeppelin | `5.6.1` |
| Deployed at UTC | `2026-08-06T11:10:35.022Z` |

## Mainnet deployment evidence

| Field | Value |
|---|---|
| Contract address | `0xd4025a390a0b2a606f24Ea33A902D10D978715F2` |
| Transaction hash | `0xd825e375572b4057b7f802c9e7db21664df864db043952eecf9aee8b8d395b09` |
| Block number | `114774718` |
| Chain ID | `56` (BNB Smart Chain Mainnet) |
| Deployer / Initial holder | `0x9954585529c7FC22b47E6562C9726082F810903C` |
| Receipt status | `1` |
| Gas used | `576782` |
| Deployed at UTC | `2026-08-08T17:12:04.000Z` |
| BscScan source | https://bscscan.com/address/0xd4025a390a0b2a606f24Ea33A902D10D978715F2#code |

## What an independent reviewer must confirm

1. Source on BscScan matches the local `contracts/LaunchToken.sol` — checksum both.
2. No hidden function exists in the deployed bytecode beyond ERC-20 standard and the constructor.
3. Constructor arguments match: name, symbol, supply (1 000 000 000), decimals (18), holder.
4. `totalSupply()` equals `1 000 000 000 × 10^18` and holder balance equals total supply.
5. No owner, no mint, no pause, no blacklist function is present in the ABI.

Do not describe this contract as audited, certified, exploit-proof, or guaranteed safe until qualified reviewers have completed and signed their work.