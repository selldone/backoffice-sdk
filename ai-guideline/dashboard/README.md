# Dashboard Hierarchy

This folder stores the conceptual dashboard structure based on the current Backoffice hierarchy. The complete route catalog is in `_generated/route-index.md`; this folder provides human-readable and AI-oriented explanations.

## Root Shells

| Folder | Current base route | Meaning |
|---|---|---|
| `shuttle/` | `/shuttle` | User dashboard, shop list, wallet, roles, affiliate, company, and security. |
| `shop/` | `/shuttle/shop/:shop_id` | Administration of one shop and all operational modules. |
| `product/` | `/shuttle/shop/:shop_id/product/:product_id` | Details and operations for one product. |
| `commerce/` | Incentives, orders, POS, and marketplace routes. | Cross-module commerce operations. |
| `integrations/` | Channels, connect, apps, and automation. | External integrations and connected services. |

## Context Rule

All routes under `shop/` and `product/` require shop context. If `shop` is not loaded, the page must not run shop-specific API operations.

## Common Permission Regions

| Region | Used by |
|---|---|
| `PRODUCTS` | Products, listing, and some inventory operations. |
| `ORDERS` | Process Center and order details. |
| `ACCOUNTING` | Finance and payment gateways. |
| `INCENTIVES` | Gift cards, discount codes, coupons, offers, and cashback. |
| `LOGISTIC` | Inventory, warehouse, delivery, returns, and profiles. |
| `CUSTOMERS` | CRM and customer pages. |
| `COMMUNITY` | Community management. |
| `CATEGORIES` | Classification and hierarchy. |
| `PAGES` | Landing/static/popup/page builder. |
| `ACCESS` or `SETTINGS` | Staff, roles, API clients, and settings. |
| `APPLICATIONS` | PWA, iOS, Android, and Metaverse. |
| `AUTOMATION` | Webhooks, logging, and notification automation. |

## References

- Route catalog: `_generated/route-index.md`
- API usage by area: `_generated/api-usage-by-area.md`
- Source module index: `_generated/source-module-index.md`
