# Dropshipping And Wholesaler

## Purpose

Dropshipping and Wholesaler areas are used by shops that sell through dropshipping, supply products for other shops, or connect products to a parent/source product. This section intersects with products, marketplace, finance, and orders.

## Routes

Routes come from `ShuttleShopDropShippingRoutes.ts` and pages under `wholesaler`, `wholesaler-shop`, `product/dropshipping`, and dropshipping order routes.

| Area | Purpose |
|---|---|
| Wholesaler dashboard | Manage supplier-facing overview and activity. |
| Dropshipping products | View and manage products sourced from another supplier. |
| Product dropshipping | Configure source/parent product connection. |
| Finance reseller checkout/accounts | Manage dropshipping checkout and reseller accounts. |
| Dropshipping orders | Process dropshipping-specific orders. |

## Required context

- `shop` from the shop shell.
- Dropshipping or wholesaler capability for the current shop.
- `WHOLESALER` permission or related route metadata permissions.
- Parent/source product data when editing product-level dropshipping settings.

## Core operations

- Manage wholesaler dashboard and settings.
- View and manage dropshipping products.
- Connect a product to its parent/source product.
- Review dropshipping checkout and account flows in Finance.
- Process dropshipping orders.
- Show vendor/source inventory and pricing origin when applicable.

## API calls

- Dropshipping, wholesaler, product parent/vendor, and finance reseller endpoints are listed in `_generated/api-url-builders.md` with full `https://api.selldone.com/...` URLs.
- See `_generated/api-usage-by-area.md` areas `wholesaler`, `wholesaler-shop`, `product`, `shop/finance`, and `components/drop-shipping`.
- See `_generated/api-url-builders.md` for exact dropshipping and wholesaler endpoints.

## UI behavior

- Parent/source product must be visible in product detail.
- Pricing and inventory may come from the supplier, so show the source of truth clearly.
- Checkout and account views should link to Finance routes.
- Product actions that change source linkage should require confirmation because they can affect catalog availability.
