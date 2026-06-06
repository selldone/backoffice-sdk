# Selldone Custom Dashboard Agent Bootstrap

This file is kept for compatibility with tools that open `Agent.md` first. The authoritative start point is `00-ai-agent-entrypoint.md`.

## Required Action

1. Read `00-ai-agent-entrypoint.md` first.
2. Build a module registry from `06-feature-inventory.md` and `07-module-implementation-matrix.md`.
3. Use `_generated/api-usage-by-area.md` to discover API usage for each module.
4. Use `_generated/api-url-builders.md` to resolve every runtime call to a full endpoint such as `GET https://api.selldone.com/shops/me/{shop_id}`.
5. Do not use generic or invented endpoints such as `/api/shops/{shop_id}/orders`.
6. Keep the implementation framework-agnostic. Vue source paths are traceability references only.

## Dashboard Goal

Build a customizable, full-function Selldone dashboard where business-critical modules are visible by default and advanced modules remain discoverable without cluttering the main workspace.

Primary workspace defaults:

- Shop dashboard
- Products
- Process Center and orders
- Customers and CRM
- Finance
- Logistics and inventory
- Marketing
- Settings

Secondary and conditional areas:

- Blogs, pages, incentives, channels, access, applications, automation, classification, community
- Listing, marketplace, dropshipping, POS, transportation, provider/connect, affiliate POS, metaverse
- Entity dashboards for product, order, campaign, coupon, gift card, gateway, affiliate, customer, role, account, and related deep links

Completion is defined by the done criteria in `00-ai-agent-entrypoint.md`, not by this compatibility file.
