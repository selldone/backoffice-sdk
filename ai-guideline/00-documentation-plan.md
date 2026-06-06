# Documentation Plan

## Scope

These documents describe the behavior of the Backoffice dashboard. They do not prescribe Vue, Vuetify, React, Angular, or any other framework. Source component names are included only for traceability so a reader can understand where the behavior was extracted from.

## Output Structure

- Root `_doc` files describe architecture, routing, APIs, and shared patterns.
- `dashboard/shuttle` covers the user dashboard: shop list, wallet, roles, affiliate, company, and security.
- `dashboard/shop` covers the shop admin shell and its operational modules.
- `dashboard/product` covers the product detail dashboard. It lives under the shop route but has its own nested structure.
- `_generated` contains catalogs generated from source and should be regenerated whenever source routes or SDK APIs change.

## Standard Section File Shape

Each section file should include as much of the following as is relevant:

- Purpose: what the section does.
- Routes: recommended paths and current route names.
- Source trace: source files used to extract behavior.
- Required context: data that must be available before rendering.
- Core operations: user-facing actions.
- API calls: full `https://api.selldone.com/...` endpoints, HTTP methods, params, auth, and response shapes.
- Data notes: pagination, filters, and response-shape notes.
- UI behavior: framework-independent UI requirements.

## Extraction Method

- Routes were extracted from `src/Applications/Selldone/router/shuttle` and `src/Applications/Backoffice/router`.
- Endpoint URLs were extracted from `@selldone/sdk-backoffice/apis/API.ts` and normalized to full `https://api.selldone.com/...` URLs.
- Typed SDK request files were used only as source traces for params and response keys.
- Real UI API usage was extracted from `src/Applications/Backoffice` and `@selldone/components-vue/backoffice`.

## Coverage Model

This pack has two layers:

- Generated coverage: routes and APIs that can be extracted mechanically are listed under `_generated`.
- Human-readable coverage: architecture, shared patterns, and major dashboard sections are documented under `dashboard/`.

When the dashboard changes, regenerate the `_generated` catalogs first, then update the corresponding human-readable section file.
