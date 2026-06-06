# Selldone Backoffice AI Guideline Pack

This folder is the source-derived guide for building a full-function Selldone Backoffice dashboard in any frontend framework. It is intended for human builders and AI agents that need to understand what Selldone contains, which screens must exist, how navigation is structured, and which full API endpoints must be called.

## Start Here

Start with `00-ai-agent-entrypoint.md`. It defines the mandatory reading order, implementation sequence, endpoint resolution rules, and completion criteria.

Do not use `Agent.md` as a separate specification. It is a compatibility bootstrap that points back to `00-ai-agent-entrypoint.md`.

## Source Of Truth

| Layer | File or folder | Purpose |
|---|---|---|
| Mandatory entrypoint | `00-ai-agent-entrypoint.md` | Exact first steps for an AI agent building a dashboard. |
| Documentation method | `00-documentation-plan.md` | How these docs were extracted and how to keep them updated. |
| Runtime architecture | `01-dashboard-architecture.md` | Shells, shop context, permissions, state, overlays, page builder, and error handling. |
| Build workflow | `02-ai-build-guide.md` | Practical implementation order for a custom dashboard. |
| Route model | `03-routing-proposal.md` | Framework-independent route hierarchy mapped to current route names. |
| API contract | `04-api-and-data-contracts.md` | Auth, pagination, response/error patterns, and endpoint resolution protocol. |
| UI behavior | `05-ui-patterns.md` | Reusable dashboard, list, folder, dialog, bulk action, and upload patterns. |
| Feature checklist | `06-feature-inventory.md` | No-skip inventory of Backoffice modules and submodules. |
| Implementation matrix | `07-module-implementation-matrix.md` | Module-by-module build map with priority, route family, permission region, docs, API lookup areas, and core full endpoints. |
| Section docs | `dashboard/` | Human-readable module behavior and UI notes. |
| Generated catalogs | `_generated/` | Route, source-module, API usage, and full endpoint catalogs generated from source. |

## Primary Sources

- `src/Applications/Backoffice`: Backoffice app entry, layouts, pages, mixins, and store.
- `src/Applications/Selldone/router/shuttle`: route packs used by the Backoffice app.
- `@selldone/components-vue/backoffice`: source behavior for reusable Backoffice components.
- `@selldone/sdk-backoffice/apis/API.ts`: source for URL builders normalized into full endpoint URLs.
- `@selldone/sdk-backoffice`: typed request wrappers and SDK hints.

## Generated Catalogs

| Catalog | What it provides |
|---|---|
| `_generated/route-index.md` | Current route names, local route paths, titles, permission regions, and source lines. |
| `_generated/source-module-index.md` | Backoffice page/source folder coverage. |
| `_generated/api-usage-by-area.md` | API usage grouped by dashboard area and source examples. |
| `_generated/api-usage-index.md` | Line-by-line API usage in source files. |
| `_generated/api-url-builders.md` | Full `https://api.selldone.com/...` endpoints, HTTP methods, scopes, auth, and source lines. |
| `_generated/sdk-request-wrappers.md` | Legacy typed wrapper traces. Use only for params and response-shape hints. |

## API Rules

- Runtime code must call full HTTP endpoints such as `GET https://api.selldone.com/shops/me/{shop_id}`.
- Never invent generic endpoints such as `/api/shops/{shop_id}/orders`.
- Never use a builder name as the implementation contract.
- For every feature, resolve exact calls through this chain: `06-feature-inventory.md` -> `07-module-implementation-matrix.md` -> `_generated/api-usage-by-area.md` -> `_generated/api-url-builders.md`.
- If an endpoint is not found in `_generated/api-url-builders.md`, record a documentation gap and do not fabricate the endpoint.

## Dashboard Composition Rule

A custom dashboard should keep business-critical functions visible without removing advanced modules.

| Placement | Default modules |
|---|---|
| Primary workspace | Shop dashboard, products, process center/orders, customers/CRM, finance, logistics/inventory, marketing, settings. |
| Secondary navigation | Blogs, pages, incentives, channels, access, applications, automation, classification, community. |
| Conditional or advanced navigation | Listing, marketplace, dropshipping/wholesaler, POS, transportation, provider/connect, affiliate POS, metaverse, entity detail dashboards. |

Permission, business model, installed apps, and shop state decide whether a module is visible, collapsed, or hidden in a secondary menu. Do not delete a module from the implementation just because it is not in the default primary layout.

## Coverage Baseline

The current generated baseline includes 371 named routes and 673 generated API methods. Full coverage means every module in `06-feature-inventory.md` and every source directory listed in `07-module-implementation-matrix.md` has an implemented route, navigation entry, permission gate, and API mapping.
