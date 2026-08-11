# Meridian Protocol — Project Handover Document

**Date:** 2026-08-06
**Status:** Testnet complete. Mainnet pending independent review.

---

## Token summary

| Field | Value |
|---|---|
| Token name | Meridian Protocol |
| Symbol | MRDN |
| Total supply | 1,000,000,000 (fixed — no future minting) |
| Decimals | 18 |
| Contract type | Fixed-supply ERC-20, non-upgradeable |
| Admin surface | None (no owner, no mint, no pause, no blacklist) |
| Chain | BNB Smart Chain |

---

## Testnet deployment (COMPLETE ✅)

| Field | Value |
|---|---|
| Contract address | `0xeF8abA1703439CcdEA58f12CFb56235232Fa022C` |
| Transaction hash | `0x2d8361af22e43f538cfda35c78f40ccf385d94ac666d4d82efbec46e2a0f136b` |
| Chain ID | 97 (BNB Testnet) |
| Deployer / Holder | `0x9954585529c7FC22b47E6562C9726082F810903C` |
| BscScan verified | ✅ https://testnet.bscscan.com/address/0xeF8abA1703439CcdEA58f12CFb56235232Fa022C#code |
| Deployed at UTC | 2026-08-06T11:10:35.022Z |

---

## Build configuration (freeze for mainnet)

| Setting | Value |
|---|---|
| Solidity compiler | 0.8.24 |
| EVM version | paris |
| Optimizer | enabled, 200 runs |
| OpenZeppelin | 5.6.1 |
| Hardhat | 2.29.0 |

---

## What has been delivered

- [x] `contracts/LaunchToken.sol` — auditable, minimal fixed-supply ERC-20
- [x] Full compile/test/deploy/verify Hardhat kit (`contract-kit/`)
- [x] 5/5 automated unit tests passing
- [x] Historical testnet deployment with receipt saved to `evidence/deployment.json`
- [x] BscScan testnet source verification (green checkmark ✅; not mainnet)
- [x] Mainnet developer handoff and evidence template
- [x] Security review document (`docs/SECURITY_REVIEW.md`)
- [x] Deployment handover document (`docs/DEPLOYMENT_HANDOVER.md`)
- [x] Verification readiness document (`docs/VERIFICATION_READINESS.md`)
- [x] Investor data room index (`docs/INVESTOR_DATA_ROOM_INDEX.md`)
- [x] A-to-Z execution guide in Urdu (`docs/A_TO_Z_EXECUTION_GUIDE_URDU.md`)

---

## What is pending (required before mainnet / investors)

| Item | Owner | Priority |
|---|---|---|
| Independent Solidity audit | Founder — commission from CertiK/Hacken/QuillAudits | HIGH |
| Legal review (securities, distribution) | Founder — qualified local counsel | HIGH |
| Whitepaper / product utility document | Founder | HIGH |
| Tokenomics wallet addresses documented | Founder | MEDIUM |
| Mainnet deployment | Developer + wallet owner after review | HIGH |
| Mainnet BscScan verification | Developer after mainnet deployment | HIGH |
| Liquidity provision (transparent, documented) | After mainnet | MEDIUM |
| Binance listing application | After all above | LOW (long process) |

---

## Receiver sign-off (to be completed by human reviewer)

- [ ] I have independently verified the contract address on BscScan
- [ ] I have confirmed total supply = 1,000,000,000 MRDN
- [ ] I have confirmed my wallet balance = full supply
- [ ] I have read and accepted the security limitations (audit and legal review status are recorded separately)
- [ ] I accept custody of the deployer wallet and secrets

**Reviewer name:** ___________________
**Date:** ___________________
**Signature:** ___________________
