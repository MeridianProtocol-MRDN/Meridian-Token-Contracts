# Meridian Protocol (MRDN) — A to Z Practical Execution Guide (Urdu/Hindi)

> Ye guide current project ki sachchi status hai. Jahan evidence nahi hai, status `PENDING` rahega.

## 0. Project ki maujooda (current) sachchi status

| Item | Current Status |
|---|---|
| Token | Meridian Protocol (`MRDN`) |
| Chain | BNB Smart Chain — Testnet chain ID `97` |
| Supply | `1,000,000,000` MRDN (fixed, koi mint nahi) |
| Decimals | `18` |
| Contract model | Fixed supply, non-upgradeable, koi owner/admin nahi |
| Tax/fee | None (koi bhi nahi) |
| Mint after deployment | None |
| Pause/blacklist/whitelist | None |
| Local compile | ✅ COMPLETE |
| Automated tests | ✅ 5/5 passing |
| Testnet deployment | ✅ COMPLETE — `0xeF8abA1703439CcdEA58f12CFb56235232Fa022C` |
| Testnet TX hash | `0x2d8361af22e43f538cfda35c78f40ccf385d94ac666d4d82efbec46e2a0f136b` |
| BscScan testnet verification | ✅ COMPLETE — green checkmark confirmed |
| BscScan testnet link | https://testnet.bscscan.com/address/0xeF8abA1703439CcdEA58f12CFb56235232Fa022C#code |
| Independent Solidity review/audit | ⏳ PENDING — commission karna hai |
| Mainnet deployment | ⏳ PENDING — review ke baad |
| Liquidity | ⏳ PENDING |
| Binance listing/investment | ⚠️ Guaranteed nahi — process alag hai |

---

## 1. Abhi tak kya ho gaya (Summary)

### ✅ Compile
```
npm run compile — 6 Solidity files compiled (EVM: paris, optimizer: 200 runs)
```

### ✅ Tests (5/5 pass)
```
✔ mints the exact fixed supply to the initial holder
✔ supports standard transfers and approvals
✔ rejects a zero initial holder and zero initial supply
✔ rejects unsupported decimals above 18
✔ has no mint, pause, blacklist, tax, or owner administration surface
```

### ✅ Testnet Deployment
```
Network: bscTestnet (chain ID 97)
Contract: 0xeF8abA1703439CcdEA58f12CFb56235232Fa022C
TX hash:  0x2d8361af22e43f538cfda35c78f40ccf385d94ac666d4d82efbec46e2a0f136b
Holder:   0x9954585529c7FC22b47E6562C9726082F810903C
Supply:   1,000,000,000 MRDN (1000000000 * 10^18 wei)
```

### ✅ BscScan Verification
```
Source code verified — green checkmark ✅
https://testnet.bscscan.com/address/0xeF8abA1703439CcdEA58f12CFb56235232Fa022C#code
```

---

## 2. Aage kya karna hai (Next Steps — Priority order)

### Step 1 — Independent Security Review (ZAROORI)
- Ek qualified Solidity auditor se contract review karwao
- Firms: Trail of Bits, Hacken, CertiK, QuillAudits
- BscScan pe "Audited by" badge ke liye auditor ka public report zaroori hai
- Investors audit report maangenge

### Step 2 — Tokenomics Wallets banao
- Treasury wallet (multisig recommended) ka public address document karo
- Liquidity wallet ka public address document karo
- Team wallet (time-locked/vesting) ka public address document karo
- Ye addresses investor data room mein daalo

### Step 3 — Legal Review
- Token distribution, marketing, aur utility ke liye local qualified counsel engage karo
- Securities law compliance check karo (jurisdiction ke hisaab se)
- Risk disclosures draft karo

### Step 4 — Whitepaper / One-Pager
- Actual product utility explain karo (token ka real use case kya hai?)
- Roadmap document karo
- Investor one-pager banao

### Step 5 — Mainnet Deployment
```bash
# Contract-kit directory mein:
npm run deploy:mainnet
npm run verify:mainnet
```
- Steps 1-4 complete hone ke baad hi mainnet pe jaao
- Mainnet ke liye real BNB chahiye deployer wallet mein (~0.01 BNB)
- Alag deployer wallet aur treasury wallet use karo mainnet pe

### Step 6 — Liquidity
- DEX (PancakeSwap) pe transparent liquidity provide karo
- Lock duration aur custody document karo
- Rug-pull reputation se bachne ke liye lock proof zaroori hai

### Step 7 — Binance Listing Process
- Binance listing ke liye: https://www.binance.com/en/my/coin-apply
- Requirements: audit report, legal opinion, working product, liquidity proof, community
- Listing fee: approximately $50,000–$100,000+ (Binance ka official process hai)
- Alternative: PancakeSwap (BSC DEX) pe pehle list karo — free hai

---

## 3. Contract-kit se commands

```bash
# Contract-kit directory:
cd artifacts/bnb-token-studio/contract-kit

# Compile
npm run compile

# Tests
npm test

# Testnet deploy (DONE ✅)
npm run deploy:testnet

# Testnet verify (DONE ✅)
npm run verify:testnet

# Mainnet deploy (jab ready ho)
npm run deploy:mainnet

# Mainnet verify (jab ready ho)
npm run verify:mainnet
```

---

## 4. Investor ko kya dikhana hai (Data Room)

✅ Dikhao:
- BscScan verified source: https://testnet.bscscan.com/address/0xeF8abA1703439CcdEA58f12CFb56235232Fa022C#code
- Test results (5/5 passing)
- Deployment evidence (deployment.json)
- Security review document

⏳ Pending (pehle complete karo):
- Audit report (signed, from qualified firm)
- Mainnet contract address + BscScan verification
- Whitepaper / product roadmap
- Tokenomics with wallet addresses
- Legal opinion letter

⚠️ Kabhi mat kaho:
- "Binance ne invest kiya" (jab tak official confirmation na ho)
- "Audit ho gaya" (jab tak signed report na mile)
- "Guaranteed returns"
- "100% safe"

---

## 5. Secret handling reminder

Ye cheezen sirf Replit Secrets mein honi chahiye, chat mein nahi:
- `DEPLOYER_PRIVATE_KEY`
- `BSC_TESTNET_RPC_URL`
- `BSC_MAINNET_RPC_URL`
- `BSCSCAN_API_KEY`
