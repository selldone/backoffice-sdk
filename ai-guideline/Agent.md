# Selldone Custom Dashboard AI Agent Guideline

This file is the entry point for AI agents that need to design or implement a fully functional custom Selldone business dashboard. It is framework-agnostic. It does not require Vue, React, Angular, Svelte, Laravel, Next.js, or any other specific frontend stack.

The custom dashboard must not be a copy of the existing Backoffice UI. The existing Backoffice source is used to understand real Selldone capabilities, API contracts, routes, permissions, flows, widgets, dialogs, tables, and business rules. The final dashboard should be business-focused, customizable, and implemented with the design system and technology chosen by the merchant or developer.

## 1. Mission

Build a custom Selldone dashboard that exposes real Selldone Backoffice capabilities through a clean, business-prioritized information architecture.

The dashboard must:

- Surface important business functions such as orders, revenue, sales, products, inventory, customers, payments, fulfillment, delivery, analytics, alerts, and business health.
- Keep less frequently used features accessible through secondary navigation, tabs, command palettes, drawers, search, or advanced settings.
- Respect Selldone API contracts, authentication, authorization, shop permissions, and data models.
- Use real endpoints only. Never invent API paths, request fields, response fields, permissions, or product capabilities.
- Produce implementation-ready guidance that can be used with any frontend framework or rendering model.

## 2. Target Audience

This guideline is for:

- AI coding agents building merchant dashboards on top of Selldone.
- Product engineers designing custom operational dashboards for Selldone shops.
- Integrators mapping Selldone Backoffice features to custom UI modules.
- Teams that need feature completeness without copying the current Backoffice visual interface.

The agent consuming this document may work inside the Selldone monorepo, inside the SDK repository, or through the Selldone MCP Server. If local source code is unavailable, the agent must use the published guideline files and clearly mark any source-only details as unavailable for manual confirmation.

## 3. Source of Truth

Use the sources in this order:

| Source | Purpose | Conflict rule |
|---|---|---|
| `src/Applications/Backoffice` | Actual implemented behavior, routes, pages, flows, forms, widgets, dialogs, tables, API usage, permissions, conditions. | Prefer this for implementation reality. |
| `@selldone/sdk-backoffice/ai-guideline/` | Architectural intent, naming, generated route catalog, generated API catalog, module docs, business rules, agent instructions. | Prefer this for documentation structure and explanation. |
| `@selldone/sdk-backoffice/ai-guideline/_generated/api-url-builders.md` | Full endpoint URL and HTTP method catalog. | Required before calling any endpoint. |
| `@selldone/sdk-backoffice/ai-guideline/_generated/api-usage-by-area.md` | API builders grouped by dashboard area. | Use this to connect features to endpoint builders. |
| `@selldone/sdk-backoffice/ai-guideline/_generated/api-usage-index.md` | Line-by-line source trace of API usage. | Use this for source references and conflict checks. |
| `@selldone/sdk-backoffice/ai-guideline/_generated/route-index.md` | Backoffice routes and route families. | Use this for navigation parity and deep links. |
| `@selldone/sdk-backoffice/ai-guideline/_generated/source-module-index.md` | Source module coverage. | Use this for no-skip audits. |
| Public documentation mirror | Remote path for agents outside the monorepo. | Use for reading guideline docs when local files are unavailable. |

Public documentation mirror:

```txt
https://github.com/selldone/backoffice-sdk/tree/main/ai-guideline
```

If documentation and source code conflict:

- Prefer `src/Applications/Backoffice` for actual implemented behavior.
- Prefer `@selldone/sdk-backoffice/ai-guideline/` for architecture, naming, and high-level explanations.
- Record the conflict in the final output with source references.
- Do not hide conflicts by choosing an invented compromise.

## 4. Mandatory Reading Paths

Before designing or implementing a dashboard, read every Markdown file under:

```txt
@selldone/sdk-backoffice/ai-guideline/
```

Do not skip generated files or nested documentation folders. Required high-value files include:

| Path | Why it matters |
|---|---|
| `README.md` | Documentation map and recommended reading order. |
| `00-ai-agent-entrypoint.md` | Agent workflow and completion criteria. |
| `00-documentation-plan.md` | Documentation structure and source strategy. |
| `01-dashboard-architecture.md` | Backoffice architecture, shell, data flow, route model. |
| `02-ai-build-guide.md` | Build workflow for AI agents. |
| `03-routing-proposal.md` | Route and navigation proposal. |
| `04-api-and-data-contracts.md` | API request, response, pagination, auth, error contracts. |
| `05-ui-patterns.md` | Common UI patterns and behavior contracts. |
| `06-feature-inventory.md` | Full feature inventory by dashboard area. |
| `07-module-implementation-matrix.md` | Module placement, permission region, source directory, API areas, core endpoints. |
| `dashboard/**/README.md` | Module-specific rules and feature details. |
| `_generated/api-url-builders.md` | Full method plus URL endpoint catalog. |
| `_generated/api-usage-by-area.md` | Source-derived API usage grouped by area. |
| `_generated/api-usage-index.md` | Source trace for API calls. |
| `_generated/route-index.md` | Route inventory. |
| `_generated/source-module-index.md` | Source directory inventory. |
| `_generated/sdk-request-wrappers.md` | Wrapper hints for params and responses. |

Also inspect the real implementation under:

```txt
src/Applications/Backoffice
```

When available, inspect shared Backoffice component sources referenced by generated docs, especially under:

```txt
@selldone/components-vue/backoffice
```

These component paths are source-trace references only. They must not force a Vue implementation.

## 5. Required Agent Workflow

Follow this sequence exactly:

1. Read all Markdown files under `@selldone/sdk-backoffice/ai-guideline/`.
2. Inspect `src/Applications/Backoffice` for routes, pages, menus, layouts, widgets, tables, forms, dialogs, drawers, modals, actions, and API usage.
3. Search source code for API and permission patterns.
4. Build a complete feature inventory before designing UI.
5. Categorize every discovered feature as Primary, Secondary, Advanced, Conditional, Entity, or System.
6. Map every feature to full API endpoints where they are discoverable.
7. For each endpoint, capture method, full URL, path params, query params, payload fields, response shape if inferable, errors if visible, permissions if visible, UI usage, and source files.
8. Design a custom information architecture based on the business goal, not the current Backoffice screen order.
9. Keep implementation framework-agnostic unless the user explicitly requests a target framework.
10. Define state, loading, empty, error, permission-restricted, and offline or retry behavior.
11. Validate module coverage against `06-feature-inventory.md`, `07-module-implementation-matrix.md`, `_generated/route-index.md`, and `_generated/source-module-index.md`.
12. Produce implementation-ready output with gaps clearly marked.

## 6. Feature Discovery Rules

Do not infer features from generic ecommerce knowledge. Discover features from repository files only.

Search for:

```txt
axios
fetch
window.API
window.VAPI
$backoffice
$vendor
API
Api
Repository
Service
request
GET
POST
PUT
PATCH
DELETE
permission
permissions
role
roles
access
routes
router
path
shop_id
product_id
order_id
basket
customer
payment
inventory
coupon
campaign
```

For every feature, capture:

- Module and submodule.
- Current route family and source file path.
- UI surface type: dashboard, list, table, card, detail, editor, settings page, dialog, modal, drawer, wizard, upload flow, export flow, import flow, chart, widget, queue, badge, or deep link.
- User actions: view, search, filter, create, edit, delete, restore, approve, reject, archive, publish, unpublish, export, import, upload, sync, send, refund, confirm, fulfill, assign, reorder, translate, generate, or configure.
- API builders and resolved endpoints.
- Permission regions and action-specific restrictions.
- Business model or integration conditions.
- Source trace.

A feature is not complete until it has either verified endpoint mappings or an explicit unknown/gap note.

## 7. Backoffice Source Code Analysis Rules

Inspect these source areas first:

| Source area | What to extract |
|---|---|
| `src/Applications/Backoffice/pages` | Pages, module boundaries, entity dashboards, tabs, forms, tables, dialogs, import/export flows. |
| `src/Applications/Backoffice/router` | Route definitions owned by Backoffice. |
| `src/Applications/Selldone/router/shuttle` | Shop, shuttle, provider, and Backoffice route packs. |
| `src/Applications/Backoffice/mixins` | Shop context, permission checks, shared behaviors. |
| Shared component paths referenced in `_generated/api-usage-by-area.md` | Component-level API usage and reusable UI contracts. |

Route and permission source signals discovered in the current repository include:

- Shop route permission regions: `ACCOUNTING`, `APPLICATIONS`, `AUTOMATION`, `BLOG`, `CATEGORIES`, `CHANNELS`, `COMMUNITY`, `CUSTOMERS`, `INCENTIVES`, `LOGISTIC`, `MARKETING`, `MARKETPLACE`, `ORDERS`, `PAGES`, `POS`, `PRODUCTS`, `SETTINGS`, `WHOLESALER`.
- Permission helpers are implemented in `src/Applications/Backoffice/mixins/BackofficeMixin.ts`, including `readShopAccess(...)` and `writeShopAccess(...)`.
- Route catalogs are generated in `_generated/route-index.md`.
- API usage catalogs are generated in `_generated/api-usage-by-area.md` and `_generated/api-usage-index.md`.

When the source uses Vue-specific implementation details, translate them into framework-neutral contracts. For example, a Vue component with a table, filters, and edit dialog becomes a generic list view with server-side pagination, filters, row actions, and an edit form contract.

## 8. Feature Inventory Schema

Build the inventory before UI design. Use this schema conceptually:

```json
{
  "module": "Orders",
  "priority": "primary",
  "placement": "Primary",
  "permission_region": "ORDERS",
  "description": "Order management, fulfillment, payment, delivery tracking, and type-specific order handling.",
  "routes": [
    {
      "route_family": "/shuttle/shop/:shop_id/process-center",
      "source": "@selldone/sdk-backoffice/ai-guideline/_generated/route-index.md"
    }
  ],
  "features": [
    {
      "name": "Process Center Order Lists",
      "type": "table",
      "ui_priority": "primary",
      "actions": ["view", "filter", "search", "open_detail", "confirm_payment", "fulfill", "export_when_supported"],
      "api": [
        {
          "method": "GET",
          "endpoint": "https://api.selldone.com/shops/{shop_id}/process-center/baskets-{type}",
          "endpoint_confidence": "verified_from_generated_catalog",
          "path_params": {
            "shop_id": "Current shop identifier",
            "type": "Order or basket type used by the existing process center route"
          },
          "query_params": {
            "offset": "Pagination offset when used by source",
            "limit": "Page size when used by source",
            "search": "Optional search keyword when used by source",
            "sortBy": "Table sort field when used by source",
            "sortDesc": "Table sort direction when used by source"
          },
          "request_payload": null,
          "response_shape": "Endpoint-specific. Infer from source and generated wrapper docs before implementation.",
          "error_handling": "Handle error/error_msg plus 401, 403, 404, 422, and 5xx.",
          "permission": "ORDERS read access; action-specific writes require write access.",
          "ui_usage": "Render order queues, status filters, order cards or tables, and deep links to type-specific order detail pages.",
          "source_files": [
            "@selldone/sdk-backoffice/ai-guideline/07-module-implementation-matrix.md",
            "@selldone/sdk-backoffice/ai-guideline/_generated/api-usage-by-area.md"
          ]
        }
      ],
      "source_files": [
        "src/Applications/Backoffice/pages/order-physical",
        "src/Applications/Backoffice/pages/order-virtual",
        "src/Applications/Backoffice/pages/order-file",
        "src/Applications/Backoffice/pages/order-service",
        "src/Applications/Backoffice/pages/order-subscription",
        "src/Applications/Backoffice/pages/order-pos",
        "src/Applications/Backoffice/pages/order-hyper",
        "src/Applications/Backoffice/pages/order-avocado",
        "src/Applications/Backoffice/pages/order-fulfillment"
      ]
    }
  ],
  "unknowns": []
}
```

Use these placement values:

| Placement | Meaning |
|---|---|
| Primary | Business-critical feature visible in the main dashboard workspace. |
| Secondary | Useful feature available through grouped navigation, tabs, drawers, or command search. |
| Advanced | Technical, configuration-heavy, admin-only, rare, or destructive feature. |
| Conditional | Feature shown only when enabled by business model, installed app, channel, integration, or permission. |
| Entity | Deep-linked detail dashboard reached from a parent list or global search. |
| System | Authenticated user or account surface outside a single shop. |

## 9. Dashboard Information Architecture

Design the dashboard around merchant decisions and operational frequency.

Recommended top-level structure:

| Area | Purpose | Default placement |
|---|---|---|
| Command center | Revenue, order queue, fulfillment alerts, inventory alerts, live sessions, recent issues, business health. | Primary home. |
| Commerce operations | Orders, process center, fulfillment, delivery, payments, returns. | Primary. |
| Catalog operations | Products, categories, inventory, imports, exports, media, product detail. | Primary. |
| Customer operations | Customers, CRM, reviews, comments, support, segments, loyalty or clubs. | Primary. |
| Finance | Gateways, taxes, bills, exchange rates, valuations, wallets, reseller finance when relevant. | Primary. |
| Growth | Incentives, campaigns, email marketing, affiliates, funnels, stream users. | Secondary unless the business prioritizes marketing. |
| Content and storefront | Pages, blogs, popups, static files, menus, domains, theme, SEO. | Secondary or Advanced depending on business. |
| Integrations and automation | Channels, apps, webhooks, notifications, logs, providers, bots. | Secondary or Advanced. |
| Administration | Staff, roles, permissions, shop settings, business model, critical zone, quota, ownership. | Advanced with permission gates. |
| Business-model modules | Marketplace, listing, dropshipping, POS, transportation, provider/connect. | Conditional. |
| Entity dashboards | Product, order, customer, campaign, coupon, gift card, gateway, affiliate, review, role, account. | Entity routes and search results. |

The custom dashboard should allow each business owner to decide which functions are visible on the main dashboard. Important business functions should be surfaced. Less important features should be accessible without cluttering the interface.

## 10. Primary / Secondary / Advanced Feature Prioritization

Primary defaults for most shops:

| Module | Why primary |
|---|---|
| Shop overview | Required for shop context, health, order queues, live activity, and alerts. |
| Orders and Process Center | Direct revenue and fulfillment operations. |
| Products | Catalog health, product availability, pricing, media, and publish state. |
| Inventory and Logistics | Stock, warehouse, shipping, returns, profiles, print templates. |
| Customers and CRM | Retention, support, comments, reviews, clubs, customer journeys. |
| Payments and Finance | Gateways, bills, taxes, exchange, valuations, wallets, reseller finance when enabled. |
| Analytics and reports | Sessions, timeline, country stats, finance reports, sales health. |
| Alerts and business health | Low stock, pending orders, failed payments, unfulfilled deliveries, integration errors. |

Secondary defaults:

| Module | Why secondary |
|---|---|
| Incentives | Important for growth but not always daily operational work. |
| Marketing | Campaigns, email, funnels, stream users, affiliates. |
| Blogs and pages | Content operations that should not crowd order/product workflows. |
| Channels | Integrations are important but often setup-oriented. |
| Classification | Categories, clusters, hierarchy, import/export. |
| Community | Community moderation if used. |
| Access | Staff and roles should be accessible but protected. |
| Applications | PWA, iOS, Android, app store, metaverse. |
| Automation | Webhooks, logs, notifications, Niomatic, Autopilot. |

Advanced or conditional defaults:

| Module | Why advanced or conditional |
|---|---|
| Critical shop settings | Destructive or high-risk settings require extra confirmation. |
| OAuth/API clients | Technical integration surface. |
| Marketplace | Only for marketplace business model. |
| Listing | Only for listing directory business model. |
| Dropshipping/wholesaler | Only for reseller or wholesaler model. |
| POS | Only for shops using cash register or offline sales. |
| Transportation | Only for logistics providers or delivery operations. |
| Provider/connect routes | Provider integration owners only. |
| Entity administration pages | Access through parent records, deep links, or search. |

## 11. Module-by-Module Dashboard Feature Map

Use this map as the starting inventory. Verify every item against `06-feature-inventory.md`, `07-module-implementation-matrix.md`, generated route docs, and source code before implementation.

| Module | Placement | Capability groups | Permission/context | Source and docs | Core verified endpoints or resolution rule |
|---|---|---|---|---|---|
| Shuttle root | System | Shop list, vendor list, roles, wallet, identity, security, company, affiliate, expert, deals. | Authenticated user. | `src/Applications/Backoffice/pages/shuttle`, `dashboard/shuttle/README.md`. | `GET https://api.selldone.com/shops/me`, `GET https://api.selldone.com/roles`, `GET https://api.selldone.com/user/security`. |
| Wallet and accounts | System | Accounts, deposit, cards, transfer, transactions, charge history, connected shops, subscriptions. | Wallet/account access. | `src/Applications/Backoffice/pages/account`, `dashboard/shuttle/README.md`. | `GET https://api.selldone.com/accounts`, `GET https://api.selldone.com/accounts/{account_number}`, `GET https://api.selldone.com/accounts/{account_number}/shops`. |
| Identity and security | System | Profile, KYC, personal information, password, 2FA, devices, delete account. | Authenticated user. | `src/Applications/Backoffice/pages/shuttle/identity`, `src/Applications/Backoffice/pages/shuttle/security`. | `GET https://api.selldone.com/personal-information`, `GET https://api.selldone.com/profiles/me`, `GET https://api.selldone.com/user/security`. |
| Shop shell and overview | Primary | Shop context, dashboard data, live view, sessions, timeline, queues, apps, permission-filtered nav. | Shop read plus child permissions. | `src/Applications/Backoffice/pages/shop`, `dashboard/shop/README.md`. | `GET https://api.selldone.com/shops/me/{shop_id}`, `GET https://api.selldone.com/shops/{shop_id}/real-time`, `GET https://api.selldone.com/shops/{shop_id}/statistic/sessions`, `GET https://api.selldone.com/shops/{shop_id}/statistic/timeline`. |
| Products Manager | Primary | Product/category file manager, folder navigation, table mode, search, filters, import/export, queues, bulk actions. | `PRODUCTS`. | `src/Applications/Backoffice/pages/shop/products`, `dashboard/shop/products/README.md`. | `GET https://api.selldone.com/shops/{shop_id}/products/all-admin`, `POST https://api.selldone.com/shops/{shop_id}/product/add`, `POST https://api.selldone.com/shops/{shop_id}/categories/add`, `DELETE https://api.selldone.com/shops/{shop_id}/products/{product_id}/delete`. |
| Product detail | Entity | Dashboard, edit, inventory, orders, article, 3D, hyper, subscription, membership, vendors, embed, cross-selling, template, dropshipping. | `PRODUCTS`. | `src/Applications/Backoffice/pages/product`, `dashboard/product/README.md`. | `GET https://api.selldone.com/shops/{shop_id}/products/{product_id}/admin`, `PUT https://api.selldone.com/shops/{shop_id}/products/{product_id}/edit`, `POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/quantity`, `GET https://api.selldone.com/shops/{shop_id}/products/{product_id}/files`. |
| Orders and Process Center | Primary | Physical, virtual, file, service, subscription, POS, hyper, avocado, dropshipping order lists, filters, type-specific details, timeline, chat, bills, returns, payment confirmation, fulfillment. | `ORDERS`. | `src/Applications/Backoffice/pages/order-*`, `dashboard/shop/orders/README.md`, `dashboard/commerce/README.md`. | `GET https://api.selldone.com/shops/{shop_id}/process-center/baskets-{type}`, `GET https://api.selldone.com/shops/{shop_id}/process-center/baskets/{basket_id}`, `GET https://api.selldone.com/shops/{shop_id}/process-center/baskets/{basket_id}/bills`, `GET https://api.selldone.com/shops/{shop_id}/process-center/pos-baskets/{basket_id}`, `GET https://api.selldone.com/shops/{shop_id}/process-center/hypers/{hyper_id}`. |
| Customers and CRM | Primary | Customer list/detail/edit, segments, wallets, journey, customer orders, chat, club, comments, community, FAQ, reports, reviews. | `CUSTOMERS`. | `src/Applications/Backoffice/pages/shop/crm`, `src/Applications/Backoffice/pages/customer`, `dashboard/shop/crm/README.md`. | `GET https://api.selldone.com/shops/{shop_id}/customers`, `GET https://api.selldone.com/shops/{shop_id}/customer/segments`, `GET https://api.selldone.com/shops/{shop_id}/contacts`, `GET https://api.selldone.com/shops/{shop_id}/faqs`, `GET https://api.selldone.com/shops/{shop_id}/reviews`. |
| Finance | Primary | Report, gateways, tax, bill, exchange, valuations, customer wallets, reseller wallets, reseller fulfillment, ribbon. | `ACCOUNTING`. | `src/Applications/Backoffice/pages/shop/finance`, `src/Applications/Backoffice/pages/gateway`, `dashboard/shop/finance/README.md`. | `GET https://api.selldone.com/shops/{shop_id}/gateways`, `GET https://api.selldone.com/shops/{shop_id}/tax`, `GET https://api.selldone.com/shops/{shop_id}/exchange/rates`, `GET https://api.selldone.com/shops/{shop_id}/valuations`, `GET https://api.selldone.com/shops/{shop_id}/wallets`. |
| Logistics and inventory | Primary | Inventory, warehouse, shipping, returns, profiles, includes, property sets, boxes, print templates, import/export. | `LOGISTIC`. | `src/Applications/Backoffice/pages/shop/logistic`, `dashboard/shop/logistic/README.md`. | `GET https://api.selldone.com/shops/{shop_id}/warehouse`, `GET https://api.selldone.com/shops/{shop_id}/return-request`, `GET https://api.selldone.com/shops/{shop_id}/transportation`, `GET https://api.selldone.com/shops/{shop_id}/logistic-profiles`, `GET https://api.selldone.com/shops/{shop_id}/includes`, `GET https://api.selldone.com/shops/{shop_id}/print-templates`. |
| Settings | Primary/Advanced | Info, flow, business model, license, menus, critical zone, SEO, GDPR/access, quota, advanced, notifications, locations, languages, theme, SMS, email, domains. | `SETTINGS`. | `src/Applications/Backoffice/pages/shop/setting`, `dashboard/shop/settings/README.md`. | `PUT https://api.selldone.com/shops/{shop_id}/edit`, `PUT https://api.selldone.com/shops/{shop_id}/edit/info`, `GET https://api.selldone.com/shops/{shop_id}/domains`, `GET https://api.selldone.com/shops/{shop_id}/menus/{type}`, `GET https://api.selldone.com/shops/{shop_id}/notification-channels`, `GET https://api.selldone.com/shops/{shop_id}/email/list`, `GET https://api.selldone.com/shops/{shop_id}/sms/list`. |
| Incentives | Secondary | Discount codes, coupons, gift cards, offers, cashback, lottery, notes, restore flows, orders per incentive. | `INCENTIVES`. | `src/Applications/Backoffice/pages/shop/incentives`, entity pages, `dashboard/shop/incentives/README.md`. | `GET https://api.selldone.com/shops/{shop_id}/discount-codes`, `GET https://api.selldone.com/shops/{shop_id}/coupons`, `GET https://api.selldone.com/shops/{shop_id}/gift-card-types`, `GET https://api.selldone.com/shops/{shop_id}/offers`, `GET https://api.selldone.com/shops/{shop_id}/cashbacks`, `GET https://api.selldone.com/shops/{shop_id}/lotteries`. |
| Marketing | Secondary | Campaigns, affiliate marketing, email marketing, funnels, stream users. | `MARKETING`. | `src/Applications/Backoffice/pages/shop/marketing`, campaign/email entity pages. | `GET https://api.selldone.com/shops/{shop_id}/campaigns`, `GET https://api.selldone.com/shops/{shop_id}/affiliates`, `GET https://api.selldone.com/shops/{shop_id}/emails`, `POST https://api.selldone.com/shops/{shop_id}/funnel/users/count`, `GET https://api.selldone.com/shops/{shop_id}/stream-users`. |
| Blogs | Secondary | Blog list, timeline, categories, add/edit, upload, tags, SEO audit. | `BLOG`. | `dashboard/shop/blogs/README.md`, shared blog components. | `GET https://api.selldone.com/shops/{shop_id}/blogs`, `GET https://api.selldone.com/shops/{shop_id}/blog/categories`, `POST https://api.selldone.com/shops/{shop_id}/blogs/upload`, `GET https://api.selldone.com/shops/{shop_id}/timeline/articles`. |
| Pages and page builder | Secondary | Landings, popups, static files, about, contact, privacy, terms, live/editor routes, uploads. | `PAGES`. | `src/Applications/Backoffice/pages/shop/pages`, `src/Applications/Backoffice/pages/landing`, `src/Applications/Backoffice/pages/popup`. | `GET https://api.selldone.com/shops/{shop_id}/pages`, `POST https://api.selldone.com/shops/{shop_id}/pages`, `POST https://api.selldone.com/shops/{shop_id}/pages/{page_id}/upload/content-image`, `GET https://api.selldone.com/shops/{shop_id}/popups`, `GET https://api.selldone.com/shops/{shop_id}/static/{folder?}`. |
| Channels | Secondary | Connect, Google, Instagram, Meta, OpenAI, bots, ribbon, listing, Clover, Avocado, Hyper, Map. | `CHANNELS`. | `src/Applications/Backoffice/pages/shop/channels`, `dashboard/shop/channels/README.md`, `dashboard/integrations/README.md`. | `GET https://api.selldone.com/shops/{shop_id}/connects`, `GET https://api.selldone.com/shops/{shop_id}/channels/instagram`, `GET https://api.selldone.com/shops/{shop_id}/services/google/search`, `POST https://api.selldone.com/shops/{shop_id}/bots`, `PUT https://api.selldone.com/shops/{shop_id}/avocado`, `PUT https://api.selldone.com/shops/{shop_id}/hyper`. |
| Classification | Secondary | Categories, clusters, hierarchy, import, exporter. | `CATEGORIES`. | `src/Applications/Backoffice/pages/shop/classification`, shared category/cluster components. | `GET https://api.selldone.com/shops/{shop_id}/categories`, `GET https://api.selldone.com/shops/{shop_id}/categories-hierarchy`, `POST https://api.selldone.com/shops/{shop_id}/import/categories`, `GET https://api.selldone.com/shops/{shop_id}/clusters`. |
| Community | Secondary | Categories, topics, posts, comments, moderation. | `COMMUNITY`. | `src/Applications/Backoffice/pages/shop/community`, `dashboard/shop/community/README.md`. | Resolve exact community endpoints from `_generated/api-url-builders.md` and source usage. Use shared comment endpoints such as `GET https://api.selldone.com/shops/{shop_id}/comments` only when source confirms them. |
| Access and permissions | Secondary/Advanced | Staff/personnel, roles, API clients, permission matrix, invites, leave access. | Current route metadata uses `SETTINGS`. | `src/Applications/Backoffice/pages/shop/permission`, `dashboard/shop/access/README.md`. | `GET https://api.selldone.com/shops/{shop_id}/permissions`, `POST https://api.selldone.com/shops/{shop_id}/permissions`, `GET https://api.selldone.com/shops/{shop_id}/roles`, `POST https://api.selldone.com/shops/{shop_id}/roles`, `POST https://api.selldone.com/shops/{shop_id}/clients`. |
| Applications | Secondary | PWA, iOS, Android, Metaverse, app assets, build state, app store list, installed apps. | `APPLICATIONS`. | `src/Applications/Backoffice/pages/shop/applications`, `src/Applications/Backoffice/pages/application`. | `GET https://api.selldone.com/shops/{shop_id}/apps`, `GET https://api.selldone.com/shops/{shop_id}/apps/{app_code}/full`, `GET https://api.selldone.com/shops/{shop_id}/app-store/list`, `GET https://api.selldone.com/shops/{shop_id}/native/android`, `GET https://api.selldone.com/shops/{shop_id}/metaverse/lands`. |
| Automation | Secondary/Advanced | Webhooks, webhook calls, logging, notifications repository, events, Niomatic, Autopilot. | `AUTOMATION`. | `src/Applications/Backoffice/pages/shop/automation`, `dashboard/shop/automation/README.md`. | `GET https://api.selldone.com/shops/{shop_id}/webhooks`, `POST https://api.selldone.com/shops/{shop_id}/webhooks`, `GET https://api.selldone.com/shops/{shop_id}/events`, `GET https://api.selldone.com/shops/{shop_id}/logging`, `GET https://api.selldone.com/shops/{shop_id}/notifications`. |
| Listing | Conditional | Setup, items, categories, supervision, templates/designs, options, badges, companies, reviews, messages, search. | `PRODUCTS` in current route metadata. | `src/Applications/Backoffice/pages/shop/listing`, shared listing components. | `GET https://api.selldone.com/shops/{shop_id}/listing`, `GET https://api.selldone.com/shops/{shop_id}/listing/items`, `GET https://api.selldone.com/shops/{shop_id}/listing/categories`, `GET https://api.selldone.com/shops/{shop_id}/listing/messages`, `GET https://api.selldone.com/shops/{shop_id}/listing/search`. |
| Marketplace | Conditional | Vendors, vendor products, orders, accounts, payouts, pricing, requests, settings. | `MARKETPLACE`. | `src/Applications/Backoffice/pages/marketplace`, `dashboard/shop/marketplace/README.md`. | `GET https://api.selldone.com/shops/{shop_id}/vendors`, `GET https://api.selldone.com/shops/{shop_id}/vendor-products`, `GET https://api.selldone.com/shops/{shop_id}/vendor-accounts`, `GET https://api.selldone.com/shops/{shop_id}/vendor-payments`, `GET https://api.selldone.com/shops/{shop_id}/vendor-requests`, `GET https://api.selldone.com/shops/{shop_id}/pricings`. |
| Dropshipping and wholesaler | Conditional | Wholesaler dashboard, shops, orders, requests, inventory, wholesaler-shop dashboard/orders/wallet, reseller finance. | `WHOLESALER`. | `src/Applications/Backoffice/pages/wholesaler`, `src/Applications/Backoffice/pages/wholesaler-shop`, `dashboard/shop/dropshipping/README.md`. | `GET https://api.selldone.com/shops/{shop_id}/dropshipping`, `GET https://api.selldone.com/shops/{shop_id}/dropshipping/requests`, `GET https://api.selldone.com/shops/{shop_id}/dropshipping/resellers`, `GET https://api.selldone.com/shops/{shop_id}/reseller/shops`, `GET https://api.selldone.com/shops/{shop_id}/finance/reseller/account`. |
| POS and cash register | Conditional | POS panel, orders, customers, inventory, devices, customer view, product card/list, offline basket, payment confirmation. | `POS`. | `src/Applications/Backoffice/pages/pos`, `src/Applications/Backoffice/pages/order-pos`, `dashboard/shop/pos/README.md`. | `GET https://api.selldone.com/shops/{shop_id}/pos`, `POST https://api.selldone.com/shops/{shop_id}/pos/add`, `GET https://api.selldone.com/shops/{shop_id}/pos/coupons`, `GET https://api.selldone.com/shops/{shop_id}/hub/devices`, `GET https://api.selldone.com/shops/{shop_id}/process-center/pos-baskets/{basket_id}`. |
| Transportation | Conditional | Couriers, orders, pickups, services, settings, transportation-service detail/edit/orders. | `LOGISTIC` or route metadata. | `src/Applications/Backoffice/pages/transportation`, `src/Applications/Backoffice/pages/transportation-service`. | `GET https://api.selldone.com/shops/{shop_id}/transportation`, `POST https://api.selldone.com/shops/{shop_id}/transportation`, `GET https://api.selldone.com/shops/{shop_id}/transportation-orders`. |
| Logistic profile | Entity | Profile dashboard, products, settings. | `LOGISTIC`. | `src/Applications/Backoffice/pages/logistic-profile`. | `GET https://api.selldone.com/shops/{shop_id}/logistic-profiles`, `POST https://api.selldone.com/shops/{shop_id}/logistic-profiles`. |
| Connect entity | Entity | Connect dashboard, orders by type, products, logs, settings. | `CHANNELS` or route metadata. | `src/Applications/Backoffice/pages/connect`. | `GET https://api.selldone.com/shops/{shop_id}/connects`, `GET https://api.selldone.com/shops/{shop_id}/connect-services`; resolve detail/order/log endpoints from the generated API catalog. |
| Campaign entity | Entity | Dashboard, finance, ads, landing, settings, links. | `MARKETING`. | `src/Applications/Backoffice/pages/campaign`. | `GET https://api.selldone.com/shops/{shop_id}/campaigns/{campaign_id}`, `DELETE https://api.selldone.com/shops/{shop_id}/campaigns/{campaign_id}`. |
| Email marketing entity | Entity | Dashboard, editor, render, statistic, send/cancel. | `MARKETING`. | `src/Applications/Backoffice/pages/email-marketing`. | `GET https://api.selldone.com/shops/{shop_id}/emails/{email_id}`, `GET https://api.selldone.com/shops/{shop_id}/emails/{email_id}/render`, `POST https://api.selldone.com/shops/{shop_id}/emails/{email_id}/send`. |
| Affiliate entity | Entity | Dashboard, edit, orders, payments. | `MARKETING`. | `src/Applications/Backoffice/pages/affiliate`. | `GET https://api.selldone.com/shops/{shop_id}/affiliates/{affiliate_id}`. |
| Coupon entity | Entity | Dashboard, edit, orders, notes, restore/delete. | `INCENTIVES`. | `src/Applications/Backoffice/pages/coupon`. | `GET https://api.selldone.com/shops/{shop_id}/coupons/{coupon_id}`, `GET https://api.selldone.com/shops/{shop_id}/coupons/{coupon_id}/orders`. |
| Discount-code entity | Entity | Dashboard, edit, orders, notes, restore/delete. | `INCENTIVES`. | `src/Applications/Backoffice/pages/discount-code`. | `GET https://api.selldone.com/shops/{shop_id}/discount-codes`; resolve detail/edit/order endpoints from the generated catalog before implementation. |
| Gift-card entity | Entity | Dashboard, edit, cards/list, orders. | `INCENTIVES`. | `src/Applications/Backoffice/pages/giftcard`. | `GET https://api.selldone.com/shops/{shop_id}/gift-card-types`; resolve card/order/detail endpoints from the generated catalog before implementation. |
| Offer entity | Entity | Dashboard, edit, orders, notes, restore/delete. | `INCENTIVES`. | `src/Applications/Backoffice/pages/offer`. | `GET https://api.selldone.com/shops/{shop_id}/offers/{offer_id}`, `GET https://api.selldone.com/shops/{shop_id}/offers/{offer_id}/orders`. |
| Cashback entity | Entity | Dashboard, edit, orders, notes, restore/delete. | `INCENTIVES`. | `src/Applications/Backoffice/pages/cashback`. | `GET https://api.selldone.com/shops/{shop_id}/cashbacks/{cashback_id}`, `GET https://api.selldone.com/shops/{shop_id}/cashbacks/{cashback_id}/orders`. |
| Gateway entity | Entity | Dashboard, transactions, edit, Stripe or blockchain settings. | `ACCOUNTING`. | `src/Applications/Backoffice/pages/gateway`. | `GET https://api.selldone.com/shops/{shop_id}/gateways/{gateway_code}`, `POST https://api.selldone.com/shops/{shop_id}/gateways/{gateway_code}`. |
| Review source entity | Entity | Dashboard, review list, edit, debug, sync. | `CUSTOMERS`. | `src/Applications/Backoffice/pages/review`. | `GET https://api.selldone.com/shops/{shop_id}/reviews/sources/{source_id}`, `GET https://api.selldone.com/shops/{shop_id}/reviews/sources/{source_id}/debug`, `POST https://api.selldone.com/shops/{shop_id}/reviews/sources/{source_id}/sync`. |
| Application loader | Entity | App detail by code and tab. | `APPLICATIONS`. | `src/Applications/Backoffice/pages/application`. | `GET https://api.selldone.com/shops/{shop_id}/apps/{app_code}/full`, `GET https://api.selldone.com/shops/{shop_id}/apps/{app_code}`. |
| Courier | Entity | Courier page shell and delivery operations. | Logistic or transportation context. | `src/Applications/Backoffice/pages/courier`. | Resolve exact courier endpoints from generated catalog before implementation. |
| Provider routes | Conditional/System | Provider dashboard, API docs, auth, settings, logs, shops, webhooks. | Provider/connect owner access. | `src/Applications/Selldone/router/shuttle/provider`, `dashboard/integrations/README.md`. | Resolve provider endpoints from generated catalog; do not invent provider paths. |

Every top-level directory under `src/Applications/Backoffice/pages` must be mapped to one module, entity route, conditional route, system route, or an explicit unsupported-gap note. The coverage checklist is maintained in `07-module-implementation-matrix.md`.

## 12. API Endpoint Mapping Rules

For every feature where API usage is discoverable, document the API call with this format:

```json
{
  "feature": "Product List",
  "method": "GET",
  "endpoint": "https://api.selldone.com/shops/{shop_id}/products/all-admin",
  "endpoint_confidence": "verified_from_generated_catalog",
  "path_params": {
    "shop_id": "Current shop identifier"
  },
  "query_params": {
    "offset": "Pagination offset",
    "limit": "Number of records",
    "search": "Optional search keyword",
    "sortBy": "Server-side sort field when used by source",
    "sortDesc": "Sort direction when used by source"
  },
  "request_payload": null,
  "response_shape": {
    "folders": "Category or folder items when returned",
    "products": "Product rows",
    "parent": "Current parent folder when returned",
    "total": "Total matched item count"
  },
  "error_handling": "Handle error/error_msg plus HTTP 401, 403, 404, 422, and 5xx.",
  "required_permission": "PRODUCTS read access",
  "related_ui_usage": "Render product table, product cards, folder navigation, search, filters, and inventory alerts.",
  "source_files": [
    "@selldone/sdk-backoffice/ai-guideline/04-api-and-data-contracts.md",
    "@selldone/sdk-backoffice/ai-guideline/07-module-implementation-matrix.md",
    "@selldone/sdk-backoffice/ai-guideline/_generated/api-url-builders.md"
  ]
}
```

Rules:

- Use full URLs beginning with `https://api.selldone.com`.
- Preserve method, path, request keys, query keys, and response keys exactly as documented or observed.
- Do not add an internal `/api` prefix.
- Do not call API resources on `https://selldone.com` when the endpoint catalog uses `https://api.selldone.com`.
- Use `Authorization: Bearer {access_token}` for authenticated resource calls.
- Resolve runtime API builders through `_generated/api-url-builders.md` before implementation.
- Use `_generated/api-usage-by-area.md` and `_generated/api-usage-index.md` to connect endpoints to UI source files.
- Use `_generated/sdk-request-wrappers.md` only as a helper for parameter and response hints.
- If an endpoint cannot be confidently identified, write exactly: `Endpoint not confidently discovered. Requires manual confirmation.`
- Include the related source files and documentation files that mention the feature.

## 13. Authentication and Authorization Rules

A custom dashboard must authenticate users with a valid Selldone-compatible flow and must not reuse MCP session secrets in the generated application.

Rules for AI agents using Selldone MCP:

- Never ask the user for API keys, access tokens, refresh tokens, client secrets, manual tokens, or `shop_id`.
- Use the verified MCP connection to determine current shop and permission context when operating inside MCP.
- Use `selldone_current_connection` when the MCP client needs shop context, granted scopes, scope details, or reconnect URLs.
- If building an external dashboard app, use the Selldone dashboard OAuth guidance and request only the scopes required by selected endpoints.
- Do not expose access tokens to client-side code unless the selected architecture is explicitly a public SPA with the required OAuth protections.
- For server-side apps, keep refresh tokens and client secrets on the server only.
- Send authenticated API calls to `https://api.selldone.com` with `Authorization: Bearer <access_token>`.
- Do not use the MCP Bearer token inside a generated dashboard app.

## 14. Permission Handling

Permissions must affect navigation, data loading, and actions.

Implement these permission behaviors:

- Hide or disable modules when the user lacks the required permission region.
- Show a clear restricted-access state for deep links the user cannot open.
- Re-check permissions before write, delete, restore, approve, reject, refund, transfer ownership, or destructive actions.
- Treat read and write access separately where source code exposes this distinction.
- Use route permission regions from generated docs and `BackofficeMixin.ts` helpers as source trace.
- Do not rely only on client-side permission checks; expect the API to enforce authorization too.
- Handle HTTP 403 with a permission-specific error state and a reconnect or contact-owner action when appropriate.

Known shop permission regions from the current source route metadata are:

```txt
ACCOUNTING
APPLICATIONS
AUTOMATION
BLOG
CATEGORIES
CHANNELS
COMMUNITY
CUSTOMERS
INCENTIVES
LOGISTIC
MARKETING
MARKETPLACE
ORDERS
PAGES
POS
PRODUCTS
SETTINGS
WHOLESALER
```

## 15. Data Fetching Guidelines

Use endpoint contracts, not framework conventions, to design data fetching.

Required behaviors:

- Load current shop context before rendering shop-scoped modules.
- Use server pagination for large lists.
- Debounce search and filter changes.
- Cancel stale requests when a newer request supersedes them.
- Cache list responses by endpoint plus query parameters when it improves performance.
- Revalidate important operational data such as order queues, payment status, live sessions, and inventory alerts.
- Separate read models from write payloads to avoid accidentally sending server-only fields back to the API.
- Use multipart upload behavior only for endpoints documented as upload endpoints.
- Preserve localization headers such as `X-Localization` when the app supports locale-specific behavior.

Common list query keys found in docs and source include:

```txt
offset
limit
total
sort
sortBy
sortDesc
search
dir
with_parent
with_total
statuses
types
available
vendor
products_only
show_deletes
show_vendors
with_category
```

Only send a query key when it is documented or visible in source usage for the selected endpoint.

## 16. State Management Guidelines

The guideline is framework-agnostic. Any state library can be used if it preserves these contracts:

| State domain | Required content |
|---|---|
| Session state | Current user, token status, auth errors, locale. |
| Shop context | Current shop, apps, queues, permission map, business model, loaded modules. |
| Navigation state | Active module, active entity, filters, search, breadcrumbs, deep links. |
| Entity state | Cached product/order/customer/campaign/etc. detail records. |
| List state | Query params, result rows, total count, loading, stale, error, selected rows. |
| Mutation state | Pending writes, optimistic updates where safe, validation errors, confirmation requirements. |
| Dashboard customization | Visible modules, hidden modules, widgets, layout, saved merchant preferences. |
| Notification state | Business alerts, API errors, background job status, upload progress. |

Do not hard-code Vue store names or component names into the custom app. Translate them into the target stack's state model.

## 17. Error Handling Guidelines

Handle both Selldone response fields and standard HTTP failures.

Expected response and error signals include:

| Signal | Behavior |
|---|---|
| `error: true` | Show endpoint-specific failure message. |
| `error_msg` | Use as displayable server message when safe. |
| `success: false` | Treat write as failed unless docs specify otherwise. |
| HTTP 401 | Prompt re-authentication or token refresh. |
| HTTP 403 | Show permission-restricted state. |
| HTTP 404 | Show not-found or stale-link state. |
| HTTP 409 | Show conflict and refresh related data when applicable. |
| HTTP 422 | Attach validation errors to fields when possible. |
| HTTP 429 | Back off and show rate-limit state. |
| HTTP 5xx | Retry safe reads and show service failure state. |
| Network timeout | Offer retry and preserve unsaved form data. |

For destructive or financial actions, do not silently retry non-idempotent writes unless the endpoint explicitly supports idempotency.

## 18. Loading and Empty State Guidelines

Every data surface must define loading, empty, partial, and stale states.

Required patterns:

- Lists: skeleton or progress state, empty result state, no-permission state, error state, stale cached state.
- Tables: preserve filters and pagination while reloading.
- Detail pages: show identity header first when cached data exists, then progressively load tabs.
- Dashboards: prioritize business-critical widgets and degrade secondary widgets independently.
- Uploads: show progress, cancel behavior, validation errors, and final state.
- Import/export: show queued, processing, completed, failed, and downloadable states when visible in source.
- Deep links: handle missing parent data by loading the entity directly or showing a recoverable not-found state.

Do not block the full dashboard because a secondary widget failed.

## 19. Framework-Agnostic UI Contracts

Translate Backoffice source into UI contracts, not framework components.

| Backoffice pattern | Framework-agnostic contract |
|---|---|
| Page component | Route or screen with data loader and permission gate. |
| Tabbed page | Entity or module detail with lazy-loaded sections. |
| Dialog or modal | Focus-managed transient form with validation and confirm/cancel. |
| Drawer | Secondary detail or edit surface that preserves parent list context. |
| Table | Server-backed list with search, filters, sort, pagination, row actions. |
| Widget | Dashboard card with independent loading/error state. |
| Queue badge | Aggregated operational count linked to filtered list. |
| Importer | Upload or paste flow with validation, progress, and result report. |
| Exporter | Async or immediate export action with filters and downloadable output. |
| Route guard | Auth, shop context, permission, and business-model gate. |

Do not assume Material Design, Vuetify, Tailwind, Bootstrap, or any default style system unless the user requests it.

## 20. Widget and Component Contracts

A full custom dashboard should define reusable contracts for these component classes:

| Contract | Required behavior |
|---|---|
| Metric card | Title, value, comparison, currency/locale formatting, loading, error, source link. |
| Alert card | Severity, message, affected module, action, dismiss or snooze when supported. |
| Queue widget | Count, status grouping, link to filtered list, permission handling. |
| Server table | Columns, query state, sorting, filtering, pagination, selected rows, row actions. |
| Entity header | Name, status, badges, primary actions, breadcrumbs, permission-aware controls. |
| Form | Initial values, dirty state, validation, submit, cancel, API error mapping. |
| Confirmation dialog | Clear action name, affected record, risk level, required confirmation, result. |
| Upload control | Accepted types, max size when known, progress, cancel, validation, retry. |
| Timeline | Events, actor, timestamp, status, empty/error states. |
| Chat or comment thread | Messages, attachments if supported, author, permissions, moderation actions. |
| Settings panel | Grouped fields, save/reset, advanced toggles, audit or warning state. |

Each contract must be implementable in any frontend stack.

## 21. Dashboard Layout Guidelines

Recommended layout principles:

- Start with a command-center home that combines revenue, orders, fulfillment, inventory, customers, analytics, and alerts.
- Use module workspaces for daily operations instead of forcing every feature onto the home page.
- Use entity dashboards for complex records such as products, orders, customers, campaigns, gateways, and incentives.
- Use secondary navigation for growth, content, integrations, automation, and administration.
- Use advanced sections for destructive or technical settings.
- Provide global search for products, orders, customers, coupons, campaigns, gateways, and other entity routes when endpoint support exists.
- Keep the main dashboard configurable per business owner.
- Let merchants pin, hide, reorder, and group modules based on their business model.

The dashboard should be full-function, but not visually overloaded.

## 22. Customization Guidelines

A custom dashboard should support merchant-specific priorities:

- `visible_modules`: modules pinned to the main dashboard.
- `hidden_modules`: modules moved to secondary or advanced navigation.
- `business_type`: optional industry or business model context.
- `dashboard_goal`: merchant goal such as operations, growth, finance, inventory, marketplace, POS, or logistics.
- `frontend_framework`: optional target stack for implementation output. The core guideline remains framework-agnostic.
- `shop_id`: optional placeholder for endpoint examples only. MCP agents must not ask users for `shop_id`.

Customization rules:

- Default to Primary placement for operational modules.
- Promote Secondary modules when the merchant explicitly prioritizes them.
- Keep Conditional modules hidden until business model, installed app, channel state, or permission indicates relevance.
- Never remove a discovered feature from the feature inventory just because it is not visible on the main dashboard.
- Persist layout preferences through a documented storage mechanism if the selected app architecture supports it.

## 23. Responsive Design Guidelines

Design must work on desktop, tablet, and mobile.

Required behavior:

- Main metrics stack cleanly on small screens.
- Tables provide card or compact row alternatives for mobile.
- Critical actions remain reachable without horizontal scrolling.
- Filters collapse into drawers or panels on narrow screens.
- Entity headers keep status and primary action visible.
- Long forms group fields into sections and preserve unsaved data across viewport changes.
- Touch targets must be usable for POS, fulfillment, and inventory workflows.
- Dashboards should avoid hiding critical alerts behind hover-only UI.

## 24. Accessibility Guidelines

A custom dashboard must be accessible regardless of frontend framework.

Required behavior:

- Use semantic headings, landmarks, labels, and form descriptions.
- Provide keyboard access to navigation, dialogs, drawers, tabs, tables, menus, and confirmations.
- Trap focus inside modal dialogs and restore focus on close.
- Announce loading, success, error, and validation states to assistive technologies.
- Use sufficient color contrast for statuses, charts, warnings, and destructive actions.
- Do not rely on color alone for order status, payment status, inventory alerts, or risk states.
- Provide accessible names for icons, image actions, upload controls, and table actions.

## 25. Security Guidelines

Security requirements:

- Never request or store raw MCP tokens in generated dashboard code.
- Never ask users for API tokens, refresh tokens, client secrets, or manual credentials.
- Keep server-only secrets on the server.
- Use HTTPS redirect URIs in production OAuth flows.
- Use state and PKCE where required by the chosen OAuth flow.
- Sanitize rich text, page content, uploaded filenames, and user-generated content before rendering.
- Confirm destructive actions such as delete shop, transfer ownership, delete product, delete page, delete role, refunds, rejection, archive, and irreversible settings.
- Enforce permission checks in the UI and rely on API-side authorization as the authority.
- Avoid logging tokens, customer personal data, payment details, or sensitive order notes.
- Respect localization and privacy settings, including GDPR-related shop settings when present.

## 26. Validation Checklist

Before claiming the dashboard plan or implementation is complete, validate:

- All Markdown files under `@selldone/sdk-backoffice/ai-guideline/` were read or indexed.
- `src/Applications/Backoffice` was inspected when available.
- Every top-level source directory under `src/Applications/Backoffice/pages` is mapped to a module, entity, conditional route, system route, or explicit gap.
- Every route family in `_generated/route-index.md` is represented or has an unsupported-gap note.
- Every source area in `_generated/source-module-index.md` is represented or has an unsupported-gap note.
- Every implemented module has API usage resolved through `_generated/api-usage-by-area.md` and `_generated/api-url-builders.md`.
- Every endpoint in the output uses a full method plus URL beginning with `https://api.selldone.com`.
- No invented endpoints such as `/api/shops/{shop_id}/orders` appear.
- Permissions are mapped to modules and write actions.
- Loading, empty, error, partial, stale, and restricted states are defined.
- Primary, Secondary, Advanced, Conditional, Entity, and System placement is assigned.
- Business-owner customization rules are defined.
- Framework-specific code is only produced when the user explicitly requests a target stack.
- Conflicts and unknowns are listed with source references.

## 27. Final Output Requirements

When an AI agent uses this guideline to produce a dashboard plan or implementation, the final output must include:

- Business goal and assumed business model.
- Selected frontend or app architecture, or a framework-agnostic architecture if no framework was requested.
- Feature inventory grouped by module.
- Primary, Secondary, Advanced, Conditional, Entity, and System placement.
- Module navigation and dashboard layout plan.
- Widget contracts for the main dashboard.
- Route or screen list.
- API endpoint map with method, full URL, params, payloads, responses if inferable, errors, permissions, UI usage, and source files.
- Authentication and authorization plan.
- Permission handling plan.
- Data fetching, caching, pagination, cancellation, and refresh plan.
- Loading, empty, error, restricted, and stale state plan.
- Responsive and accessibility requirements.
- Security requirements.
- Validation checklist results.
- Known unknowns and manual confirmation items.

Do not claim endpoint completeness unless every endpoint was verified from docs or source. Do not claim feature completeness unless module coverage was checked against the generated catalogs.

## 28. Known Unknowns / Manual Confirmation Items

Known items that require special care:

- Some modules have capability coverage in source but require exact endpoint confirmation from `_generated/api-url-builders.md` before implementation. Examples include provider routes, courier endpoints, some connect detail/order/log endpoints, some community endpoints, discount-code detail/order endpoints, gift-card card/order/detail endpoints, and any source area marked with a resolution rule in `07-module-implementation-matrix.md`.
- Some response shapes are inferable only from source code and old SDK wrappers. If response fields are not confidently visible, mark them as inferred or unknown.
- Some write payload fields are visible only in form components or wrapper usage. Do not invent payload fields from UI labels.
- Some modules are conditional on business model, shop settings, installed apps, channel activation, or permission region. Do not show them as primary for every shop.
- Generated docs may lag behind source code. When there is a conflict, prefer source behavior and record the documentation mismatch.
- Public GitHub docs may not include local uncommitted changes. If using the public mirror, report the commit or date of the docs when available.

## MCP Exposure

The Selldone MCP Server should expose a stable pointer to this guideline through:

```txt
Resource URI: selldone://guidelines/custom-dashboard-agent
Prompt name: selldone_custom_dashboard_builder
```

Production MCP servers should not depend on a local SDK checkout. The resource should tell AI agents to fetch and keep updated the public GitHub guideline:

```txt
https://github.com/selldone/backoffice-sdk/tree/main/ai-guideline
https://github.com/selldone/backoffice-sdk/blob/main/ai-guideline/Agent.md
```

Use the resource when an AI agent needs the dashboard guideline entry point. Use the prompt when an AI agent needs to design or implement a custom Selldone dashboard using this workflow.
