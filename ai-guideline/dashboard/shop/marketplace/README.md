# Shop Marketplace

## Purpose

Marketplace is available only for shops whose business model is marketplace. It manages vendors, vendor requests, marketplace products, orders, accounts, payouts, pricing, and marketplace settings.

## Routes

Routes come from `ShuttleShopMarketplaceRoutes.ts`. Common path groups are:

| Section | Purpose |
|---|---|
| `marketplace/dashboard` | Marketplace summary and overview. |
| `marketplace/vendors` | Vendor list and vendor profiles. |
| `marketplace/requests` | Vendor join/request queue. |
| `marketplace/products` | Vendor and marketplace product management. |
| `marketplace/orders/*` | Marketplace orders by order type. |
| `marketplace/accounts` | Vendor/customer accounts. |
| `marketplace/payouts` | Payout management. |
| `marketplace/pricing` | Pricing and commission models. |
| `marketplace/setting` | Marketplace settings. |

## Required context

- `shop.model === MARKETPLACE`.
- `MARKETPLACE` permission for navigation and operations.
- Vendor/member permissions for vendor-facing views.
- Vendor account, payout, and assignment state where applicable.

## Core operations

- Approve or reject vendor requests.
- List, view, edit, and disable vendors.
- Assign vendors to products.
- Set marketplace pricing and commission models.
- Manage payouts and accounts.
- Process marketplace orders.
- Review vendor verification and performance state.

## API calls

Use these endpoints directly for common marketplace operations:

| Operation | HTTP endpoint |
|---|---|
| List vendors | `GET https://api.selldone.com/shops/{shop_id}/vendors` |
| Add vendor | `POST https://api.selldone.com/shops/{shop_id}/vendors` |
| Edit vendor | `PUT https://api.selldone.com/shops/{shop_id}/vendors/{vendor_id}` |
| Delete vendor | `DELETE https://api.selldone.com/shops/{shop_id}/vendors/{vendor_id}` |
| List product vendors | `GET https://api.selldone.com/shops/{shop_id}/products/{product_id}/vendors` |
| Bulk assign vendors to products | `POST https://api.selldone.com/shops/{shop_id}/marketplace/bulk-actions/assign-products-vendors` |

Marketplace request, payout, pricing, and account endpoints are listed in `_generated/api-url-builders.md`. See `_generated/api-usage-by-area.md` areas `shop/marketplace`, `marketplace`, `vendor`, `components/vendor`, and `components/pricing`.

## UI behavior

- Hide all marketplace UI when the shop is not a marketplace.
- Vendor status and verification must be visible.
- Payouts need a state machine such as pending, processing, paid, and failed.
- Pricing models should be previewable before vendor/product assignment.
- Marketplace orders should link back to the normal Process Center where the order type overlaps.
