# Meridian Protocol (MRDN) — Mainnet Developer Handoff

## Purpose

This package is ready for a qualified developer to compile, preflight, deploy, verify, and document the Meridian Protocol token on **BNB Smart Chain Mainnet**.

This document is an execution handoff, not proof that mainnet deployment has already happened. The developer must replace every `PENDING` field with evidence from the actual mainnet transaction. Do not copy testnet values into a mainnet record.

## Frozen contract inputs

| Input | Value |
|---|---|
| Contract | `contracts/LaunchToken.sol` |
| Token name | `Meridian Protocol` |
| Symbol | `MRDN` |
| Whole-token supply | `1000000000` |
| Decimals | `18` |
| Initial holder | `0x9954585529c7FC22b47E6562C9726082F810903C` |
| Network | BNB Smart Chain Mainnet |
| Chain ID | `56` |
| Solidity | `0.8.24` |
| EVM version | `paris` |
| Optimizer | enabled, `200` runs |
| OpenZeppelin | `5.6.1` |

Do not change the name, symbol, supply, decimals, holder, compiler, optimizer, or EVM settings without a written change record and a fresh review.

## Security boundary

- The contract has a fixed supply and no post-deployment owner, mint, pause, blacklist, whitelist, tax, fee, proxy, or upgrade path.
- The deployer must sign from the owner's wallet or an explicitly approved deployment wallet.
- Never request, paste, upload, or store a private key, seed phrase, wallet password, OTP, or recovery code in this repository, Replit Secrets, a ZIP file, chat, or a developer ticket.
- The owner should review and confirm the MetaMask transaction themselves. The developer may prepare the transaction but must not take custody of signing secrets.
- A BscScan green checkmark means source-code verification. It is not a security audit, legal opinion, Binance approval, or guarantee of safety.

## Required developer sequence

Run from `contract-kit/`:

```bash
pnpm install --frozen-lockfile
pnpm run compile
pnpm run test
```

Before any broadcast, confirm:

```text
Network: BNB Smart Chain Mainnet
Chain ID: 56
Deployer: owner-approved public wallet
Initial holder: 0x9954585529c7FC22b47E6562C9726082F810903C
```

The repository's `preflight:testnet` command is intentionally testnet-only. For mainnet, the developer must perform an equivalent **read-only** preflight against chain ID `56`, including:

- connected chain ID;
- deployer public address;
- initial-holder address;
- whether those addresses match the approved plan;
- deployer BNB balance;
- estimated gas and estimated BNB cost;
- confirmation that no transaction was broadcast.

After the owner reviews the preflight and the transaction details, deploy with:

```bash
TOKEN_NAME="Meridian Protocol" \
TOKEN_SYMBOL="MRDN" \
TOKEN_SUPPLY="1000000000" \
TOKEN_DECIMALS="18" \
INITIAL_HOLDER="0x9954585529c7FC22b47E6562C9726082F810903C" \
pnpm run deploy:mainnet
```

The RPC URL and explorer API credential must be supplied through the developer's approved secure environment. Never commit them or put them in evidence files.

## Required post-deployment evidence

Immediately after the transaction confirms, record:

- mainnet contract address;
- deployment transaction hash;
- block number and UTC timestamp;
- deployer address;
- actual constructor arguments;
- chain ID `56`;
- compiler, optimizer, EVM, and OpenZeppelin versions;
- deployment receipt status;
- `name()`, `symbol()`, `decimals()`, `totalSupply()`;
- initial-holder balance;
- bytecode-present check;
- mainnet BscScan URL.

Then run:

```bash
CONTRACT_ADDRESS="0x..." pnpm run verify:mainnet
```

The current verification script reads the mainnet address from `evidence/deployment.json`. The developer must update that file with the actual mainnet record only after the mainnet receipt is confirmed, and must preserve the historical testnet record separately.

## Mainnet go/no-go checklist

- [ ] Independent Solidity review completed or explicitly waived in writing
- [ ] Legal/compliance review completed for the target jurisdictions
- [ ] Final constructor values independently checked
- [ ] Deployer and initial-holder addresses independently checked
- [ ] Wallet owner reviewed the transaction in MetaMask
- [ ] Mainnet chain ID is `56`
- [ ] Receipt status is successful
- [ ] Mainnet contract address recorded from the receipt
- [ ] On-chain readback matches all frozen inputs
- [ ] BscScan mainnet source verification succeeded
- [ ] Public evidence links were checked by a second reviewer
- [ ] Investor documents use only evidence that actually exists

## Deliverable to return after deployment

The developer must return the following public information:

1. Mainnet contract address
2. Mainnet deployment transaction hash
3. Mainnet BscScan contract link
4. Mainnet BscScan source-code link
5. Deployment receipt/status
6. Readback evidence for supply and holder balance
7. Compiler and constructor settings used for verification

No private credential is part of the return package.