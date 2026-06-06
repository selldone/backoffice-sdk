# Shop Process Center And Orders

## Purpose

Process Center separates orders by basket/order type. Each type has its own list, detail, timeline, and tracking behavior.

## Routes

| Path segment | Current route name | Meaning |
|---|---|---|
| `process/physical` | `BPageShopOrdersPhysical` | Physical product orders. |
| `process/virtual` | `BPageShopOrdersVirtual` | Virtual product orders. |
| `process/file` | `BPageShopOrdersFile` | File/download product orders. |
| `process/service` | `BPageShopOrdersService` | Service orders. |
| `process/pos` | `BPageShopOrdersPos` | POS orders. |
| `process/dropshipping` | `BPageShopOrdersDropShipping` | Dropshipping orders. |
| `process/avocado` | `BPageShopOrdersAvocado` | Avocado orders. |
| `process/hyper` | `BPageShopOrdersHyper` | Hyper orders. |
| `process/subscription` | `BPageShopOrdersSubscription` | Subscription orders. |

## Required context

- `shop` and `orderQue` from the shop shell.
- `ORDERS` permission.
- Order type code for selecting the endpoint, columns, status filters, and detail layout.

## Core operations

- List orders with status, delivery, payment, and date filters.
- Open order detail.
- Show order timeline and tracking.
- Change delivery/status depending on order type.
- Show chat or messages for order types that support communication.
- Handle return/refund flows for physical, virtual, file, and service orders where supported.
- Manage input/forms for service, subscription, or fulfillment flows.
- Export, print PDF, or print labels depending on type and backend support.

## API calls

Use the full order endpoints listed in the generated API catalog. Common examples are `GET https://api.selldone.com/shops/{shop_id}/process-center/baskets-{type}` for order lists and `GET https://api.selldone.com/shops/{shop_id}/process-center/baskets/{basket_id}` for order detail. For exact endpoint names by order type, use:

- `_generated/api-usage-by-area.md`: areas `shop/orders`, `order-physical`, `order-virtual`, `order-file`, `order-service`, `order-pos`, `order-avocado`, `order-hyper`, `order-subscription`, and `order-fulfillment`.
- `_generated/api-url-builders.md`: full endpoints related to order, basket, timeline, transportation, return, fulfillment, export, and print.

## UI behavior

- Each order type should display badge counts from `orderQue`.
- Filters and tabs should be shareable through URL query or persistent state.
- Order detail should apply state transitions with confirmation and limited optimistic updates.
- Timeline should be rendered as append-only history and refreshed after actions.
- Type-specific columns and actions should not be shown on incompatible order types.
