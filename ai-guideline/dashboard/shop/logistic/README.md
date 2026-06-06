# Shop Logistic

## Purpose

Logistic covers inventory, warehouse, delivery, return requests, included items, logistic profiles, shipping, print, property sets, and boxes.

## Routes

| Path segment | Current route name | Purpose |
|---|---|---|
| `logistic/inventory` | `BPageShopLogisticInventoryList` | Inventory list. |
| `logistic/inventory/import` | `InventoryImporter` | Inventory import. |
| `logistic/inventory/export` | `InventoryExporter` | Inventory export. |
| `logistic/warehouse` | `BPageShopLogisticWarehouse` | Warehouse management. |
| `logistic/delivery` | `BPageShopLogisticShipping` | Delivery management. |
| `logistic/return` | `BPageShopLogisticReturns` | Return requests. |
| `logistic/includes` | `BPageShopLogisticIncludes` | Included items. |
| `logistic/profiles` | `BPageShopLogisticProfiles` | Logistic profiles. |
| `logistic/print` | `BPageShopLogisticPrint` | Print and labels. |
| `logistic/property-set` | `BPageShopLogisticPropertySets` | Property sets. |
| `logistic/boxes` | `BPageShopLogisticBoxes` | Packages and boxes. |

## Required context

- `shop` from the shop shell.
- `LOGISTIC` permission.
- Product inventory and variants for inventory pages.
- Transportation and shipping configuration for delivery pages.

## Core operations

- List inventory with search, filter, and sorting.
- Run bulk price, discount, and quantity operations.
- Import and export inventory.
- Manage warehouse and stock locations.
- Manage return requests.
- Define logistic profiles and assign them to products or categories.
- Define boxes and property sets.
- Print labels and delivery documents.

## API calls

- Logistic profiles are listed by `GET https://api.selldone.com/shops/{shop_id}/logistic-profiles`.
- One logistic profile is loaded by `GET https://api.selldone.com/shops/{shop_id}/logistic-profiles/{profile_id}`.
- Inventory, warehouse, return, shipping, box, and property-set endpoints are listed in `_generated/api-url-builders.md` with full `https://api.selldone.com/...` URLs.
- See `_generated/api-usage-by-area.md` areas `shop/logistic`, `components/inventory`, `components/box`, and `components/category`.

## UI behavior

- Inventory must be variant-aware.
- Bulk operations need preview or confirmation.
- Logistic profiles must be assignable from product and category bulk actions.
- Delivery queues should be visible in pages with delivery metadata.
- Import/export actions should show progress and failed-row feedback.
