# Documentation Plan

## Scope

These documents describe merchant-facing Backoffice behavior and APIs for use with any framework.

## Output Structure

- Root `_doc` files describe architecture, routing, APIs, and shared patterns.
- `dashboard/shuttle` covers the user dashboard: shop list, wallet, roles, affiliate, company, and security.
- `dashboard/shop` covers the shop admin shell and its operational modules.
- `dashboard/product` covers the product detail dashboard. It lives under the shop route but has its own nested structure.
- `07-module-implementation-matrix.md` maps every source-derived module to placement, route family, permission region, docs, API usage areas, and core full endpoints.
- `_generated` contains catalogs of merchant dashboard routes, API usage, and SDK endpoints.

## Standard Section File Shape

Each section file should include as much of the following as is relevant:

- Purpose: what the section does.
- Routes: recommended paths and current route names.
- References to related public components and SDK files.
- Required context: data that must be available before rendering.
- Core operations: user-facing actions.
- API calls: full `https://api.selldone.com/...` endpoints, HTTP methods, params, auth, and response shapes.
- Data notes: pagination, filters, and response-shape notes.
- UI behavior: framework-independent UI requirements.

## Catalog Updates

- Use merchant-facing route paths, names, and permission regions in the route catalog.
- Resolve consumer endpoints through the public API contract and `apis/API.ts`. Use SDK request files for parameter and response examples.
- Include examples from public Backoffice components. Keep private source paths, staff-only operations, and server implementation details out of published catalogs.

## Coverage Model

This pack has two layers:

- Generated coverage: routes and APIs that can be extracted mechanically are listed under `_generated`.
- Human-readable coverage: architecture, shared patterns, and major dashboard sections are documented under `dashboard/`.
- Implementation coverage: `06-feature-inventory.md` and `07-module-implementation-matrix.md` together are the no-skip checklist for an agent building a full dashboard.

When merchant routes or SDK APIs change, review the catalogs and update the corresponding section guide.
