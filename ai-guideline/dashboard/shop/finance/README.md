# Shop Finance

## Purpose

Finance covers shop accounting and payments: financial reports, invoices and bills, gateways, exchange rates, tax, valuations, dropshipping accounts, Ribbon subscriptions, and customer wallets.

## Routes

| Path segment | Current route name | Purpose |
|---|---|---|
| `finance/report` | `BPageShopFinanceReport` | Financial report. |
| `finance/bill` | `BPageShopFinanceBill` | Account and invoice view. |
| `finance/gateway` | `BPageShopFinanceGateways` | Payment methods and gateways. |
| `finance/exchange` | `BPageShopFinanceExchange` | Exchange rates. |
| `finance/tax` | `BPageShopFinanceTax` | Tax settings and profiles. |
| `finance/valuations` | `BPageShopFinanceValuations` | Custom pricing and valuation. |
| `finance/dropshipping-checkouts` | `BPageShopFinanceResellerFulfillment` | Dropshipping checkout. |
| `finance/dropshipping-accounts` | `BPageShopFinanceResellerWallets` | Dropshipping accounts. |
| `finance/ribbon` | `BPageShopFinanceRibbon` | Ribbon subscriptions. |
| `finance/wallets` | `BPageShopFinanceCustomerWallets` | Customer wallets. |

## Required context

- `shop`, `shopAccounts`, and `shopData` from the shop shell.
- `ACCOUNTING` permission.
- Shop currencies, exchange rates, and tax/valuation configuration.

## Core operations

- View finance reports by selected timespan.
- Manage gateways and payment methods.
- Connect, edit, disable, or delete gateway configuration.
- Manage exchange rates.
- Configure tax and valuation/custom pricing.
- Review invoices, bills, account transactions, and balances.
- List customer wallets and inspect wallet transactions.

## API calls

- Exchange rates are listed by `GET https://api.selldone.com/exchange/rates`.
- Gateway, account, bill, tax, valuation, and wallet endpoints are listed in `_generated/api-url-builders.md` with full `https://api.selldone.com/...` URLs.
- See `_generated/api-usage-by-area.md` areas `shop/finance`, `gateway`, `components/gateway`, `components/account`, and `components/tax`.

## UI behavior

- Every amount must be currency-aware.
- Reports should use the same timespan state as the shop shell.
- Gateway actions need clear status and validation errors.
- Exchange, tax, and valuation changes can affect product pricing, so refresh or invalidate pricing/product cache after updates.
- Finance pages should avoid mixing operational order status with accounting settlement status.
