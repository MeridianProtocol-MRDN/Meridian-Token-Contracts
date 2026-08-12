# MeridianStaking — Contract Notes

## What it does
Holders deposit (`stake`) MRDN into this contract and earn MRDN rewards
continuously, for as long as they stay staked. They can `unstake` their
full principal at any time — no lock period, no penalty. Rewards are paid
only from a pool the project owner deposits in advance via
`fundRewardPool()`.

## What the owner CAN do
- `setRewardRate(uint256)` — set how many reward tokens are emitted per
  second, going forward only (does not change rewards already earned).
- `fundRewardPool(uint256)` — deposit more tokens into the reward pool.
  This only adds tokens to the contract; it cannot remove them.

## What the owner CANNOT do (by design)
- Cannot withdraw, freeze, or move a staker's principal.
- Cannot withdraw reward-pool tokens back to themself — there is no
  sweep/rescue/emergency-withdraw function in the contract.
- Cannot pause the contract or blacklist a staker.

## Known limitations — disclose these honestly
- **Not audited.** This is project-authored code, reviewed manually, not
  by an independent security firm. Treat it as PENDING until a real audit
  happens, exactly like the token contract's own security status.
- If the reward pool runs out before a staker claims, `claimReward()`
  will revert until the owner tops up the pool again — stakers keep
  earning on paper but can't be paid until funded. This should be
  disclosed to users up front, not discovered later.
- Uses the standard "reward-per-token" accounting pattern. This pattern
  is well understood and widely used, but it has still not been
  independently audited in this specific contract.

## Before deploying anywhere real
1. Run the full test suite yourself: `npm install && npm test`
   (this repo's sandbox could not run npm install — network was
   unavailable — so this has only been reviewed manually, not executed).
2. Deploy to BSC testnet first. Stake, unstake, claim, and let time pass
   to confirm the reward math behaves as expected.
3. Only deploy to mainnet after testnet behaves correctly for at least a
   few days of real testing.
