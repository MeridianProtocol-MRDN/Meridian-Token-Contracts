# Contract starter

`LaunchToken.sol` is a deliberately small, fixed-supply, non-upgradeable ERC-20 starter intended for review and testnet rehearsal before any BNB Chain deployment. It has no owner and no post-deployment administrative surface.

## Required review before use

- Confirm whether a token is necessary for the product at all.
- Replace the placeholder contract name, token name, and symbol.
- Decide and record the exact supply, decimals, and initial holder.
- Confirm the initial holder is the approved treasury or distribution wallet, not a casual personal hot wallet.
- Pin the exact OpenZeppelin package and Solidity compiler version.
- Compile and test from a clean checkout.
- Review the constructor and ownership model with an experienced Solidity reviewer.
- Deploy to BNB Chain testnet first and verify the exact build.

## Intentionally excluded

There are no taxes, blacklist functions, hidden mint paths, upgradeable proxies, anti-bot bypasses, pause controls, burn controls, or arbitrary admin transfer hooks. The deployed contract cannot change supply or transfer rules. Adding any of these is a material trust and security decision and should be documented, tested, and independently reviewed as a separate contract version.

This is a starter, not a claim that the resulting token is safe, compliant, audited, or suitable for a public launch.