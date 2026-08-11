# Meridian Protocol — Mainnet Delivery Manifest

**Evidence date:** 2026-08-08 UTC

## Included

- `contracts/LaunchToken.sol` — fixed-supply, non-upgradeable ERC-20 baseline
- `contract-kit/` — pinned Hardhat compile, test, deployment, and BscScan verification workflow
- `contract-kit/contracts/LaunchToken.sol` — canonical build copy used by Hardhat
- `contract-kit/tests/LaunchToken.test.js` — five automated behavior and surface-area tests
- `contract-kit/evidence/build/` — locally compiled ABI, bytecode, and build metadata
- `docs/` — security, mainnet developer handoff, verification, investor data-room, and project handover documents
- `docs/A_TO_Z_EXECUTION_GUIDE_URDU.md` — practical Roman Urdu/English deployment, verification, security, liquidity, and risk runbook
- `docs/MAINNET_DEPLOYER_HANDOFF.md` — mainnet-only execution sequence and security boundary
- `docs/MAINNET_EVIDENCE_TEMPLATE.md` — template to complete from the actual chain-56 receipt
- `docs/MAINNET_EVIDENCE_RECORD.md` — completed mainnet receipt and readback record
- `docs/DEPLOYMENT_RECEIPT_SUMMARY.md` — public deployment links and receipt summary
- `docs/INVESTOR_ONE_PAGER.md` — investor-facing technical one-pager with explicit limitations
- `docs/TECHNICAL_ARCHITECTURE.md` — contract architecture and security boundary
- `docs/TOKENOMICS_COMPLETION_TEMPLATE.md` — allocation and vesting completion template
- `docs/RISK_DISCLOSURES.md` — technical, market, wallet, and legal risk draft
- `evidence/deployment-testnet.json` — historical BNB Testnet deployment evidence; not mainnet evidence
- `evidence/deployment-mainnet.json` — confirmed BNB Smart Chain Mainnet deployment record
- `evidence/onchain-readback-mainnet.json` — mainnet RPC readback and public links
- `evidence/testnet-onchain-readback.json` — historical BNB Testnet readback
- `evidence/source-and-abi-sha256.txt` — hashes for the canonical source and ABI
- `token-assets/meridian-token-icon.png` — Meridian Protocol token icon

## Verification recorded

- Compile: passed
- Automated tests: 5 passing
- Token: Meridian Protocol (`MRDN`)
- Mainnet chain: BNB Smart Chain Mainnet (`56`)
- Supply: `1,000,000,000` whole tokens
- Decimals: `18`
- Testnet deployment: performed and recorded separately
- Mainnet deployment: completed and independently read back from chain
- Mainnet BscScan verification: completed
- Independent Solidity review/audit: not completed

## Excluded

- `node_modules/`
- Hardhat cache
- Private keys, seed phrases, RPC credentials, BscScan API keys
- Any claim of audit, listing, investment, or endorsement

## Provenance note

The supplied checksum file references `Meridian-Protocol-delivery.zip`, while the uploaded archive is named `Meridian-Protocol-mainnet-handoff_1786207929813.zip`. The supplied checksum does not match the uploaded archive's SHA-256. This mismatch is preserved as a diligence note and should be resolved by the project owner before external distribution.