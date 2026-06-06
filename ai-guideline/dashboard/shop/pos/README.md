# POS And Cash Register

## Purpose

POS, or cash register, supports in-person sales and local business mode. In shop navigation it is shown when the `POS` option is enabled.

## Routes

POS routes come from the cash-register route pack and related pages:

| Section | Current examples | Purpose |
|---|---|---|
| POS panel | `BPagePosPanel` | In-person selling workspace. |
| POS orders | `BPagePosOrders` and Process Center POS | POS order history and processing. |
| POS devices | `BPagePosDevices` | Devices and hub management. |
| POS customers | `BPagePosCustomers` | POS-specific customer list. |
| POS inventory | `BPagePosInventory` | POS inventory view. |
| POS products | `BPosProductsList` | Product selection inside POS. |
| Customer screen | `BPagePosCustomerScreen` | Customer-facing device view. |

## Required context

- `shop` from the shop shell.
- `POS` permission.
- Shop options must include POS.
- Customer screen routes may use device/user identifiers and may not have the same admin shell context.

## Core operations

- Browse and search products for in-person sale.
- Build a POS basket/order.
- Select customer and apply coupon/campaign where supported.
- Process payment and receipt.
- Manage devices, hubs, and customer screen.
- Update inventory and review order history.

## API calls

- POS, basket, payment, device, customer-screen, and affiliate POS endpoints are listed in `_generated/api-url-builders.md` with full `https://api.selldone.com/...` URLs. Vendor-specific POS endpoints are listed there as well when available.
- See `_generated/api-usage-by-area.md` areas `pos`, `components/pos`, `affiliator-pos`, and `components/affiliate`.
- See `_generated/api-url-builders.md` for exact POS-related endpoints.

## UI behavior

- POS must be touch-friendly and keyboard-shortcut friendly.
- Design for unstable network or offline-adjacent states.
- Customer screen routes should show only customer-facing data and no admin controls.
- Payment and receipt steps should be explicit and recoverable.
