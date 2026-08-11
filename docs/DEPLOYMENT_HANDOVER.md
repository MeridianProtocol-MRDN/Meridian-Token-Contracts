# BNB Token Deployment Handover — Meridian Protocol (MRDN)

This file records the historical testnet rehearsal. Use `MAINNET_DEPLOYER_HANDOFF.md` for the developer's mainnet execution and `MAINNET_EVIDENCE_TEMPLATE.md` for real mainnet evidence. Never put private keys, seed phrases, API keys, or passwords in this folder.

## 1. Project identity

- Project name: Meridian Protocol
- Token name: Meridian Protocol
- Token symbol: MRDN
- Network: BNB Smart Chain Testnet (historical rehearsal)
- Chain ID: 97
- Contract source: `contracts/LaunchToken.sol` (OpenZeppelin ERC-20, fixed supply)
- Deployment date and UTC time: 2026-08-06T11:10:35.022Z
- Independent reviewer: PENDING

## 2. Build inputs

- Solidity compiler version: 0.8.24
- OpenZeppelin package version: 5.6.1
- EVM version: paris
- Optimizer enabled: YES
- Optimizer runs: 200
- Build command: `npm run compile` (from `contract-kit/`)
- Standard JSON input archived: `contract-kit/evidence/build/`
- ABI archived: `contract-kit/evidence/build/artifacts/contracts/LaunchToken.sol/LaunchToken.json`
- Bytecode artifact archived: YES (in build artifacts)
- Source checksum: use `sha256sum contracts/LaunchToken.sol` to verify

## 3. Constructor and deployment evidence

| Field | Value |
|---|---|
| Constructor name | Meridian Protocol |
| Constructor symbol | MRDN |
| Constructor initial supply | 1000000000 |
| Constructor decimals | 18 |
| Constructor initial holder | 0x9954585529c7FC22b47E6562C9726082F810903C |
| Deployer address | 0x9954585529c7FC22b47E6562C9726082F810903C |
| Transaction hash | 0x2d8361af22e43f538cfda35c78f40ccf385d94ac666d4d82efbec46e2a0f136b |
| Contract address | **0xeF8abA1703439CcdEA58f12CFb56235232Fa022C** |
| Explorer URL | https://testnet.bscscan.com/address/0xeF8abA1703439CcdEA58f12CFb56235232Fa022C |
| BscScan source verified | YES — https://testnet.bscscan.com/address/0xeF8abA1703439CcdEA58f12CFb56235232Fa022C#code |
| Deployment receipt status | SUCCESS (status: 1) |

## 4. Wallet responsibility matrix

| Role | Address | Signer policy | Purpose |
|---|---|---|---|
| Deployer / Initial holder | 0x9954585529c7FC22b47E6562C9726082F810903C | Owner-approved wallet signature; never share signing secrets | Contract deployment + full MRDN supply received |
| Treasury (future) | TBD | Multisig recommended | Long-term token treasury |
| Liquidity (future) | TBD | Time-locked recommended | DEX liquidity provision |
| Observer | Read-only | No signing | Monitoring and evidence |

## 5. Go / no-go gate — testnet ✅ / mainnet ⏳

- [x] Testnet deployment succeeded — contract address confirmed
- [x] Contract address and chain ID independently verifiable on BscScan
- [x] Total supply matches: 1,000,000,000 MRDN
- [x] Holder balance equals total supply at deployment
- [x] No unexpected privileged function (no owner, mint, pause, blacklist)
- [x] BscScan source verification completed (green checkmark)
- [ ] Independent Solidity review — PENDING
- [ ] Legal review issues assigned to qualified counsel — PENDING
- [ ] Mainnet wallet separation (separate deployer from treasury) — PENDING
- [ ] Mainnet deployment — PENDING

## 6. Mainnet checklist (do not skip)

1. Separate deployer wallet from treasury wallet
2. Fund deployer with real BNB (not tBNB) — ~0.01 BNB minimum
3. Change `BSC_TESTNET_RPC_URL` → `BSC_MAINNET_RPC_URL` in Secrets
4. Run `npm run deploy:mainnet` from `contract-kit/`
5. Immediately verify: `npm run verify:mainnet`
6. Update this document and `evidence/deployment.json` with mainnet values
