# Meridian Protocol — Smart Contract

On-chain source, deployment records, and verification evidence for the
Meridian Protocol (MRDN) token contract.

**Website:** https://meridianprotocol.site

## Contract

| Field | Value |
|---|---|
| Name | Meridian Protocol |
| Symbol | MRDN |
| Standard | BEP-20 (ERC-20 compatible) |
| Network | BNB Smart Chain Mainnet (chain ID 56) |
| Contract address | `0xd4025a390a0b2a606f24Ea33A902D10D978715F2` |
| Total supply | 1,000,000,000 MRDN (fixed, non-mintable) |
| Decimals | 18 |

**Verify independently on BscScan:**
https://bscscan.com/address/0xd4025a390a0b2a606f24Ea33A902D10D978715F2#code

## Security status

- Automated unit tests: passing (see `contract-kit/tests/`)
- Source verified on BscScan: yes (exact match)
- Independent third-party audit: **not yet commissioned**

See [`docs/SECURITY_REVIEW.md`](./docs/SECURITY_REVIEW.md) for full scope and
status, and [`docs/RISK_DISCLOSURES.md`](./docs/RISK_DISCLOSURES.md) before
interacting with the token.

## Repository layout

```
contracts/            Canonical Solidity source (LaunchToken.sol)
contract-kit/          Hardhat project — compile, test, deploy, verify
evidence/               Deployment receipts, ABI, on-chain readback, hashes
docs/                   Security review, architecture, risk disclosures,
                        investor one-pager, deployment records
token-assets/           Official token icon
```

## Building and testing locally

```bash
cd contract-kit
npm install
npx hardhat compile
npx hardhat test
```

No `.env` file or private key is included in this repository. To deploy or
verify yourself, copy `.env.example` (if present) and supply your own
`DEPLOYER_PRIVATE_KEY` and RPC values locally — never commit them.

## Disclaimer

This repository documents a deployed, source-verified smart contract. It is
not financial advice, an audit report, or an offer to sell securities.
Nothing here should be read as a guarantee of value, liquidity, or future
performance. See [`docs/RISK_DISCLOSURES.md`](./docs/RISK_DISCLOSURES.md).

## License

MIT — see [LICENSE](./LICENSE).
