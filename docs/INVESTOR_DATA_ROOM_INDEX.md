# Meridian Protocol (MRDN) — Investor / Partner Data Room Index

> Status: Mainnet deployment + BscScan source verification COMPLETE. Business, legal, audit, allocation, liquidity, and team diligence remain pending.
> Last updated: 2026-08-08

---

## Contract quick reference

| Item | Value |
|---|---|
| Token name | Meridian Protocol |
| Symbol | MRDN |
| Total supply | 1,000,000,000 MRDN (fixed, no mint) |
| Decimals | 18 |
| Chain | BNB Smart Chain (testnet: 97 / mainnet: 56) |
| Testnet contract | `0xeF8abA1703439CcdEA58f12CFb56235232Fa022C` |
| BscScan testnet (verified ✅) | https://testnet.bscscan.com/address/0xeF8abA1703439CcdEA58f12CFb56235232Fa022C#code |
| Mainnet contract | `0xd4025a390a0b2a606f24Ea33A902D10D978715F2` |
| BscScan mainnet (verified) | https://bscscan.com/address/0xd4025a390a0b2a606f24Ea33A902D10D978715F2#code |
| Contract type | Fixed-supply ERC-20, non-upgradeable, no owner/admin |

---

## Data room structure and status

### 01 — Executive
| Document | Status |
|---|---|
| One-pager | ✅ TECHNICAL DRAFT — `docs/INVESTOR_ONE_PAGER.md`; utility/business details pending founder input |
| Concept note / whitepaper | PENDING — requires factual product utility details |
| Roadmap | PENDING |

### 02 — Tokenomics
| Document | Status |
|---|---|
| Allocation table | PENDING — recommended: Ecosystem 35%, Treasury 20%, Liquidity 15%, Community 15%, Team 10% locked, Partnerships 5% locked |
| Vesting schedule | PENDING — recommended: Team/partners 12-month cliff + 24-month linear unlock |
| Treasury policy | PENDING |

### 03 — Technical
| Document | Status |
|---|---|
| Contract source | ✅ COMPLETE — `contracts/LaunchToken.sol` |
| BscScan verified source | ✅ COMPLETE — https://bscscan.com/address/0xd4025a390a0b2a606f24Ea33A902D10D978715F2#code |
| ABI | ✅ COMPLETE — `evidence/LaunchToken-ABI.json` |
| Unit tests (5 passing) | ✅ COMPLETE |
| Architecture note | ✅ COMPLETE — `docs/TECHNICAL_ARCHITECTURE.md` |

### 04 — Security
| Document | Status |
|---|---|
| Security review | ✅ PARTIAL — automated tests complete; independent Solidity review PENDING |
| Formal audit | PENDING — do not claim "audited" until a firm delivers a signed report |
| Risk register | PENDING |
| Bug bounty policy | PENDING |

### 05 — Deployment
| Document | Status |
|---|---|
| Deployment log | ✅ COMPLETE — `evidence/deployment-mainnet.json` |
| Deployment receipt | ✅ TX: `0xd825e375572b4057b7f802c9e7db21664df864db043952eecf9aee8b8d395b09` |
| BscScan verification | ✅ COMPLETE (mainnet) |
| Mainnet deployment | ✅ COMPLETE — successful chain-56 receipt, block `114774718` |
| Contract addresses (mainnet) | ✅ `0xd4025a390a0b2a606f24Ea33A902D10D978715F2` |

### 06 — Operations
| Document | Status |
|---|---|
| Liquidity disclosure | PENDING — no liquidity provided yet |
| Launch day SOP | PENDING |
| Incident response | PENDING |

### 07 — Legal
| Document | Status |
|---|---|
| Legal review issues | PENDING — requires qualified local counsel |
| Risk disclosures | PENDING |
| Privacy and terms | PENDING |

### 08 — Team
| Document | Status |
|---|---|
| Team and roles | PENDING |
| Wallet responsibility matrix | PARTIAL — testnet deployer documented |

---

## Mandatory truth standards

- **Do not** claim Binance investment, listing, endorsement, or approval — none exists.
- **Do not** claim an audit unless an auditor delivered a signed public report.
- **Do not** claim locked liquidity unless the lock transaction and terms are publicly verifiable.
- **Do not** claim a guaranteed price, return, yield, or profit.
- **Do not** claim decentralization when a privileged role or concentrated wallet remains.

## Next required actions (in order)

1. Commission independent Solidity security review
2. Engage qualified legal counsel for jurisdiction-specific review
3. Draft whitepaper / one-pager with actual product utility details
4. Define and document tokenomics allocation wallets with public addresses
5. Arrange transparent liquidity with documented custody
6. Publish official social channels and contract address simultaneously
