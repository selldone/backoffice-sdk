# AI Agent Entrypoint (Universal, Full-Coverage)

## Mission

Build a **full-function Selldone dashboard** in any framework by reproducing:

1. Route structure and navigation behavior.
2. Permission and context lifecycle.
3. API integrations using **full endpoint URLs**.
4. Operational behaviors across all modules (products, orders, finance, CRM, settings, etc.).

This guide is framework-agnostic and should be used as the mandatory start point for implementation agents.

## Non-Negotiable Rules

1. **Do not skip modules.** Coverage must follow `06-feature-inventory.md`.
2. **Use full API URLs only** (`https://api.selldone.com/...`), never abstract builder names as runtime contract.
3. **Shop context first** for every `/shuttle/shop/:shop_id/...` route:
   - `GET https://api.selldone.com/shops/me/{shop_id}`
4. **Permission-gated navigation and actions** must follow region access rules.
5. **Do not couple to Vue internals.** Treat source paths as traceability, not implementation dependency.

## Required Reading Order

1. `01-dashboard-architecture.md`
2. `06-feature-inventory.md`
3. `02-ai-build-guide.md`
4. `03-routing-proposal.md`
5. `04-api-and-data-contracts.md`
6. `05-ui-patterns.md`
7. `dashboard/` section file for current module
8. `_generated/route-index.md`
9. `_generated/api-usage-by-area.md`
10. `_generated/api-url-builders.md`

## How To Resolve Exact API Calls

For each feature/module:

1. Find module area in `_generated/api-usage-by-area.md` (e.g., `shop/orders`, `components/product`, `components/listing`).
2. Collect used API builder names.
3. Resolve each builder in `_generated/api-url-builders.md`.
4. Use the full URL + HTTP method shown there.

Example full endpoints:

- `GET https://api.selldone.com/shops/me/{shop_id}`
- `GET https://api.selldone.com/shops/{shop_id}/products/all-admin`
- `GET https://api.selldone.com/shops/{shop_id}/products/{product_id}/admin`
- `DELETE https://api.selldone.com/shops/{shop_id}/products/{product_id}/delete`
- `POST https://api.selldone.com/shops/{shop_id}/pages/{page_id}/upload/content-image`

## Implementation Sequence (Mandatory)

1. **Foundation:** auth, locale, HTTP client, error contract, notifications.
2. **Shuttle shell (`/shuttle`):** shops, wallet, roles, security, affiliate, company.
3. **Shop shell (`/shuttle/shop/:shop_id`):** context loading + permission filtering + navigation.
4. **Core commerce path:** products list/folders, product detail modules, process center.
5. **Operational modules:** finance, incentives, logistic, CRM, channels, marketing, pages.
6. **Control modules:** access, applications, automation, settings.
7. **Advanced modules:** listing, marketplace, dropshipping, POS, transportation/provider paths.
8. **Parity pass:** run through all modules in `06-feature-inventory.md` and confirm route + permission + API parity.

## Done Criteria

A dashboard implementation is complete only when:

1. Every inventory module in `06-feature-inventory.md` has at least one implemented route/screen.
2. Every implemented feature maps to full URLs in `_generated/api-url-builders.md`.
3. Shop-context and permission gates are enforced consistently.
4. CRUD and upload behaviors include loading, success, and explicit error states.

