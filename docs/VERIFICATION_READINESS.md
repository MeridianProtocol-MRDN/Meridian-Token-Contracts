# Verification Readiness — Meridian Protocol (MRDN)

## Status: TESTNET VERIFIED ✅

BscScan testnet source verification completed on 2026-08-06.
Link: https://testnet.bscscan.com/address/0xeF8abA1703439CcdEA58f12CFb56235232Fa022C#code

---

## Exact build inputs used (freeze these for mainnet)

| Setting | Value |
|---|---|
| Contract file | `contracts/LaunchToken.sol` |
| Solidity compiler | `0.8.24` |
| EVM version | `paris` |
| Optimizer | enabled |
| Optimizer runs | `200` |
| OpenZeppelin | `5.6.1` |
| Hardhat | `2.29.0` |
| Hardhat Toolbox | `5.0.0` |

## Constructor arguments used

| Argument | Value |
|---|---|
| name_ | Meridian Protocol |
| symbol_ | MRDN |
| initialSupply_ | 1000000000 |
| decimals_ | 18 |
| initialHolder_ | 0x9954585529c7FC22b47E6562C9726082F810903C |

## Testnet deployment receipt

| Field | Value |
|---|---|
| Contract address | `0xeF8abA1703439CcdEA58f12CFb56235232Fa022C` |
| Transaction hash | `0x2d8361af22e43f538cfda35c78f40ccf385d94ac666d4d82efbec46e2a0f136b` |
| Chain ID | `97` |
| Deployed at UTC | `2026-08-06T11:10:35.022Z` |
| BscScan source verified | ✅ YES |

## Verification checklist — testnet

- [x] Compiler version matches: 0.8.24
- [x] EVM version matches: paris
- [x] Optimizer settings match: enabled, 200 runs
- [x] Source file submitted: `contracts/LaunchToken.sol`
- [x] Constructor arguments encoded correctly
- [x] BscScan returned: "Successfully verified"
- [x] Source tab shows green checkmark on BscScan
- [x] Read functions accessible via BscScan UI

## Verification checklist — mainnet (pending)

- [ ] Same compiler/optimizer/EVM settings as testnet
- [ ] New contract address from mainnet deployment
- [ ] Run: `npm run verify:mainnet` from `contract-kit/`
- [ ] Confirm green checkmark on mainnet BscScan

## Common failure diagnosis

| Symptom | Likely cause | Fix |
|---|---|---|
| Bytecode mismatch | Compiler, optimizer, or EVM setting differs | Rebuild from archived settings |
| Constructor mismatch | Values or encoding differ | Re-check constructor arguments |
| V1 endpoint error | Old BscScan API | Use Etherscan V2: `api.etherscan.io/v2/api?chainid=97` |
| Already verified | Contract previously submitted | Check BscScan — may already be green |
