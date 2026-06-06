# AI Agent Entrypoint For A Full Selldone Dashboard

## Mission

Build a full-function Selldone Backoffice dashboard in any frontend framework. The dashboard must preserve Selldone behavior across routing, shop context, permissions, API calls, data contracts, and operational workflows while allowing any UI design.

The current Vue source is only a traceability source. A new implementation can use React, Vue, Angular, Svelte, native mobile, server-rendered HTML, or any other stack.

## Non-Negotiable Rules

1. Do not skip modules. Use `06-feature-inventory.md` and `07-module-implementation-matrix.md` as the coverage checklist.
2. Use full API URLs only, always beginning with `https://api.selldone.com`.
3. Never invent REST paths. If a full endpoint is not in `_generated/api-url-builders.md`, mark a documentation gap instead of guessing.
4. Do not couple implementation to Vue, Vuetify, Pinia/Vuex, or Backoffice globals. Source names are references, not dependencies.
5. Every `/shuttle/shop/:shop_id/...` route must load shop context before rendering any child module.
6. Navigation and actions must be permission-gated by route region and write capability.
7. Secondary or advanced modules may be collapsed, but they must remain accessible when the shop model, permission, and feature state allow them.

## Mandatory First Pass

Before writing application code, build an internal feature registry from these files:

1. `06-feature-inventory.md`: module and submodule checklist.
2. `07-module-implementation-matrix.md`: route families, priority, permission regions, docs, API lookup areas, and core full endpoints.
3. `_generated/route-index.md`: exact current route names and permission regions.
4. `_generated/api-usage-by-area.md`: source areas and API builders used by each area.
5. `_generated/api-url-builders.md`: full endpoint URLs, HTTP methods, scopes, and auth requirements.
6. `_generated/source-module-index.md`: source folder coverage check.

The registry should store at least this shape:

```json
{
  "module": "Products Manager",
  "placement": "primary",
  "route_family": "/shuttle/shop/:shop_id/product",
  "permission_region": "PRODUCTS",
  "required_context": ["user", "shop", "shopData", "shopApps", "orderQue", "permissions"],
  "api_usage_areas": ["shop/products", "components/product", "components/category"],
  "core_endpoints": [
    "GET https://api.selldone.com/shops/{shop_id}/products/all-admin",
    "POST https://api.selldone.com/shops/{shop_id}/product/add",
    "DELETE https://api.selldone.com/shops/{shop_id}/products/{product_id}/delete"
  ]
}
```

## What Selldone Backoffice Contains

A full dashboard must account for these surface groups:

| Surface group | Main modules |
|---|---|
| User shuttle | Shops, vendors, roles, wallet, account detail, identity/KYC, company, company apps, security, affiliate, expert, deals, provider routes. |
| Shop shell | Shop dashboard, live dashboard, context loading, permission-filtered navigation, global shop state. |
| Commerce core | Products Manager, product detail, process center, order detail by type, customers, POS. |
| Business operations | Finance, logistics, inventory, returns, warehouse, tax, exchange, gateways, customer wallets. |
| Growth and content | Marketing, campaigns, affiliate, email marketing, stream, blogs, pages, popups, static files, SEO and page builder. |
| Relationship modules | CRM, community, comments, reviews, FAQ, customer club, customer journeys. |
| Catalog structure | Categories, hierarchy, clusters, import/export, listing marketplace taxonomy. |
| Integrations | Channels, Connect, Google, Instagram, Meta, OpenAI, bots, apps, PWA, iOS, Android, Metaverse, automation, webhooks. |
| Business-model modules | Marketplace, listing, dropshipping/wholesaler, transportation/provider, logistic profile, vendor flows. |
| Entity dashboards | Affiliate, campaign, cashback, coupon, discount code, gift card, gateway, email, connect, review source, role, account, product, order, transportation service. |

## Required Reading Order

1. `README.md`
2. `01-dashboard-architecture.md`
3. `06-feature-inventory.md`
4. `07-module-implementation-matrix.md`
5. `02-ai-build-guide.md`
6. `03-routing-proposal.md`
7. `04-api-and-data-contracts.md`
8. `05-ui-patterns.md`
9. The matching `dashboard/` section file for the module being implemented.
10. `_generated/route-index.md`
11. `_generated/api-usage-by-area.md`
12. `_generated/api-url-builders.md`

## Implementation Sequence

### 1. Foundation

Implement authentication, Bearer token storage, locale headers, an HTTP client, cancellation, retry policy, validation-error rendering, notification surfaces, upload progress, and global forbidden/error states.

Baseline authenticated request:

```http
GET https://api.selldone.com/shops/me
Authorization: Bearer {access_token}
Accept: application/json
X-Localization: {locale}
```

### 2. User Shuttle

Implement `/shuttle` before shop pages. Required starting endpoints include:

```http
GET https://api.selldone.com/shops/me
GET https://api.selldone.com/accounts
GET https://api.selldone.com/roles
GET https://api.selldone.com/user/security
GET https://api.selldone.com/company
GET https://api.selldone.com/affiliates
```

Resolve all additional wallet, identity, company, expert, affiliate, and provider actions from `_generated/api-url-builders.md`.

### 3. Shop Shell

Implement `/shuttle/shop/:shop_id` as a context boundary. Every child page depends on:

```http
GET https://api.selldone.com/shops/me/{shop_id}
Authorization: Bearer {access_token}
Accept: application/json
```

The response supplies `shop`, `data`, `shop_apps`, `orderQue`, and `avocadoQue`. Cache it by `shop_id`, refresh it after business-model or settings changes, and block child routes until it is ready.

### 4. Module Registry And Navigation

Use `07-module-implementation-matrix.md` to build a module registry with route family, placement, permission region, business-model requirements, and API areas.

Default placement rules:

- Primary: show directly in the main workspace for most businesses.
- Secondary: show in grouped navigation, command palette, or secondary drawer.
- Conditional: show when shop model, installed apps, channel state, or permission enables it.
- Entity: reachable from parent lists and search, not usually a main nav item.

### 5. Core Commerce Path

Implement products and orders early because many modules depend on them.

Core product endpoints:

```http
GET https://api.selldone.com/shops/{shop_id}/products/all-admin
POST https://api.selldone.com/shops/{shop_id}/product/add
GET https://api.selldone.com/shops/{shop_id}/products/{product_id}/admin
PUT https://api.selldone.com/shops/{shop_id}/products/{product_id}/edit
DELETE https://api.selldone.com/shops/{shop_id}/products/{product_id}/delete
```

Core order endpoints:

```http
GET https://api.selldone.com/shops/{shop_id}/process-center/baskets-{type}
GET https://api.selldone.com/shops/{shop_id}/process-center/baskets/{basket_id}
GET https://api.selldone.com/shops/{shop_id}/process-center/baskets/{basket_id}/bills
GET https://api.selldone.com/shops/{shop_id}/process-center/pos-baskets/{basket_id}
GET https://api.selldone.com/shops/{shop_id}/process-center/hypers/{hyper_id}
```

### 6. Operational Modules

Implement finance, logistic, CRM, marketing, pages, incentives, settings, access, channels, applications, automation, listing, marketplace, dropshipping, POS, transportation, and all entity dashboards using the matrix.

Examples of full endpoint families:

```http
GET https://api.selldone.com/shops/{shop_id}/customers
GET https://api.selldone.com/shops/{shop_id}/gateways
GET https://api.selldone.com/shops/{shop_id}/warehouse
GET https://api.selldone.com/shops/{shop_id}/return-request
GET https://api.selldone.com/shops/{shop_id}/campaigns
GET https://api.selldone.com/shops/{shop_id}/pages
GET https://api.selldone.com/shops/{shop_id}/webhooks
GET https://api.selldone.com/shops/{shop_id}/listing
GET https://api.selldone.com/shops/{shop_id}/vendors
GET https://api.selldone.com/shops/{shop_id}/dropshipping
GET https://api.selldone.com/shops/{shop_id}/pos
```

### 7. API Resolution Protocol

For each screen and action:

1. Locate the module in `07-module-implementation-matrix.md`.
2. Read the listed `dashboard/` section doc.
3. Open `_generated/api-usage-by-area.md` and find all listed API areas.
4. Copy the referenced builder names for the source files or components involved.
5. Resolve every builder in `_generated/api-url-builders.md`.
6. Implement only the resolved full URL, method, params, auth, and response/error contract.
7. Add loading, empty, success, validation, forbidden, and error states.

## Done Criteria

A dashboard implementation is complete only when all of these are true:

1. Every module and submodule in `06-feature-inventory.md` has an implemented route or reachable screen.
2. Every source directory listed in `07-module-implementation-matrix.md` is covered by a module, entity route, or explicit unsupported-gap note.
3. Every implemented API call uses a full endpoint from `_generated/api-url-builders.md`.
4. Every shop page is blocked by shop context and permission checks before data calls run.
5. Primary modules are visible by default; secondary and conditional modules are discoverable without cluttering the main dashboard.
6. CRUD, uploads, bulk actions, and destructive actions include loading, success, validation, confirmation, and explicit error states.
7. A parity pass has checked route coverage against `_generated/route-index.md` and source folder coverage against `_generated/source-module-index.md`.
