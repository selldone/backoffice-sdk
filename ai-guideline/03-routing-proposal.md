# Routing Proposal

This routing proposal is intended for a custom web app. See the [merchant route index](_generated/route-index.md) for existing paths and route names.

Use this file with `07-module-implementation-matrix.md`. This file proposes route shape; the matrix decides module placement, permission region, API lookup areas, and completion coverage.

## Base Routes

| Proposed path | Purpose |
|---|---|
| `/shuttle` | User dashboard and shop list. |
| `/shuttle/vendors` | Vendors related to the user. |
| `/shuttle/roles` | User roles across shops. |
| `/shuttle/wallet` | Wallet accounts. |
| `/shuttle/wallet/received` | Received gifts. |
| `/shuttle/wallet/send` | Send gifts. |
| `/shuttle/wallet/subscriptions` | User subscriptions. |
| `/shuttle/kyc` | Identity and KYC information. |
| `/shuttle/company` | User companies. |
| `/shuttle/security` | Security center. |
| `/shuttle/affiliate` | Affiliate overview. |

## Shop Admin Routes

All routes below require `shop_id` and must load `GET https://api.selldone.com/shops/me/{shop_id}` before rendering.

| Proposed path | Current route name | Purpose |
|---|---|---|
| `/shuttle/shop/:shop_id` | `BPageShopDashboard` | Shop dashboard. |
| `/shuttle/shop/:shop_id/product` | `BPageShopProductsList` | Products Manager. |
| `/shuttle/shop/:shop_id/product/import` | `BPageShopProductsImporter` | Product import. |
| `/shuttle/shop/:shop_id/product/export` | `BPageShopProductsExporter` | Product export. |
| `/shuttle/shop/:shop_id/product/products-que` | `BPageShopProductsProductsQue` | Product import queue. |
| `/shuttle/shop/:shop_id/product/images-que` | `BPageShopProductsImagesQue` | Image import queue. |
| `/shuttle/shop/:shop_id/product/:product_id` | `BPageProductDashboard` | Product details. |
| `/shuttle/shop/:shop_id/product/:product_id/edit` | `BPageProductEdit` | Product edit. |
| `/shuttle/shop/:shop_id/process/:type` | `BPageShopOrders*` | Order Process Center. |
| `/shuttle/shop/:shop_id/finance/:section` | `BPageShopFinance*` | Finance and accounting. |
| `/shuttle/shop/:shop_id/incentives/:section` | `BPageShopIncentives*` | Discounts, coupons, gift cards, cashback. |
| `/shuttle/shop/:shop_id/logistic/:section` | `BPageShopLogistic*` | Inventory, warehouse, delivery, returns. |
| `/shuttle/shop/:shop_id/classification/:section` | `BPageShopClassification*` | Category and hierarchy management. |
| `/shuttle/shop/:shop_id/channels/:section` | `BPageShopChannel*` | Channels and integrations. |
| `/shuttle/shop/:shop_id/crm/:section` | `BPageShopCrm*` | Customers, contacts, reviews. |
| `/shuttle/shop/:shop_id/marketing/:section` | `BPageShopMarketing*` | Campaigns, email, affiliate, stream. |
| `/shuttle/shop/:shop_id/page/:section` | `BPageShopPages*` | Landings, popups, static pages. |
| `/shuttle/shop/:shop_id/access/:section` | `BPageShopPermission*` | Staff, roles, API clients. |
| `/shuttle/shop/:shop_id/application/:section` | `BPageShopApplications*` | PWA, iOS, Android, Metaverse. |
| `/shuttle/shop/:shop_id/automation/:section` | `ShopAutomation*` | Webhooks, logging, notifications. |
| `/shuttle/shop/:shop_id/edit/:section` | `BPageShopSetting*` | Shop settings. |

## Query Conventions

| Query | Usage |
|---|---|
| `dir` | Current category/folder in Products Manager. Null means root. |
| `no-scroll` | Used only to avoid scrolling during internal folder navigation. |
| `page` | Pagination for lists. Some current pages keep this in local state, but route-based pagination is better for a new app. |
| `limit` | Page size. |
| `search` | Search text. |
| `sort`, `sortBy`, `sortDesc` | General sort and table sort. |
| `status`, `type` | Product or order filters. |
| `vendor` | Marketplace vendor filter. |

## Recommended Route Metadata

| Meta | Purpose |
|---|---|
| `requiresAuth` | Authentication requirement. Most Backoffice routes need this. |
| `verified` | Requires verified email. |
| `region` | Shop permission region. |
| `fullscreen` | Builder routes such as page and popup editors. |
| `hideHeader`, `hideFooter` | Editor or standalone mode. |
| `delivery` | Enables delivery queue UI. |
| `vendor` | Vendor-panel mode. |

The complete route catalog is available in `_generated/route-index.md`. Full coverage must also be checked against `07-module-implementation-matrix.md`.
