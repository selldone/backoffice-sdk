# Shuttle Dashboard

## Purpose

`/shuttle` is the generic user dashboard. It is used before entering a specific shop admin area and contains the shop list, vendor list, wallet, roles, KYC, company, security, affiliate, expert, and deals pages.

## Routes

| Proposed path | Current route name | Purpose |
|---|---|---|
| `/shuttle` | `BPageShuttleShops` | User shop list. |
| `/shuttle/vendors` | `BPageShuttleVendors` | Vendor list for marketplace/vendor flows. |
| `/shuttle/roles` | `BPageShuttleRoles` | Roles the user has in other shops. |
| `/shuttle/wallet` | `BPageShuttleWalletAccounts` | Wallet accounts. |
| `/shuttle/wallet/received` | `BPageShuttleWalletGiftsReceived` | Received gifts. |
| `/shuttle/wallet/send` | `BPageShuttleWalletGiftsSend` | Send gifts. |
| `/shuttle/wallet/subscriptions` | `BPageShuttleWalletSubscriptions` | User subscriptions. |
| `/shuttle/kyc` | `BPageShuttleIdentity` | Identity and KYC. |
| `/shuttle/company` | `BPageShuttleCompanies` | Companies. |
| `/shuttle/security` | `BPageShuttleSecurity` | Password, sessions, 2FA, and security. |
| `/shuttle/affiliate` | `BPageShuttleAffiliate` | Affiliate overview. |
| `/shuttle/expert` | `BPageShuttleExpert` | Expert panel. |
| `/shuttle/deals` | `BPageShuttleDeals` | Partner deals. |

## Required Context

- Authenticated user must be loaded.
- Wallet and security pages usually require verified email.
- Shop list requires user/shop summary data.

## API Calls

For exact usage, see `_generated/api-usage-by-area.md` areas `shuttle`, `account`, `role`, and `components/account`.

Common endpoints:

- Shop list: `GET https://api.selldone.com/shops/me`.
- Wallet: use the full gift, account, and wallet endpoints in `_generated/api-url-builders.md`.
- Security overview: `GET https://api.selldone.com/user/security`.
- Login devices: `GET https://api.selldone.com/user/security/devices`.
- Change password: `POST https://api.selldone.com/user/security/password/change`.
- Enable 2FA: `POST https://api.selldone.com/user/security/2fa/enable`.
- Disable 2FA: `POST https://api.selldone.com/user/security/2fa/disable`.
- Affiliate/referral: use the full endpoints in `_generated/api-url-builders.md`.

## UI Behavior

- The root page should show cards or a list of shops. Clicking a shop navigates to `/shuttle/shop/:shop_id`.
- Wallet should separate account list, charge/deposit, transfer, and history.
- Security should separate devices, password, and 2FA actions with confirmations.
- User preferences and language are global and affect the whole dashboard.
