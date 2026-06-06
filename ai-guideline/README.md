# Selldone Backoffice Dashboard Documentation Pack

This folder is designed so a human or an AI agent can understand how the Selldone Backoffice dashboard works and build a custom dashboard with any UI and any framework.

## Goals

- Document the dashboard hierarchy based on the real routes and pages.
- Explain each section's behavior, required context, shared state, permissions, and API calls.
- Provide a recommended routing structure for a custom web app that stays close to Selldone Backoffice organization.
- Keep generated catalogs from the source code so coverage is not limited to manually written notes.

## Primary Sources

- `src/Applications/Backoffice`: entry point, layouts, pages, mixins, and store.
- `src/Applications/Selldone/router`: the route packs used by Backoffice.
- `@selldone/components-vue/backoffice`: the real behavior of many pages, especially product lists, forms, dialogs, and reusable components.
- `@selldone/sdk-backoffice`: source for endpoint URLs, legacy typed wrappers, and request/response hints.

## Main Files

- `00-ai-agent-entrypoint.md`: mandatory starting point for AI agents (reading order, no-skip execution flow, done criteria).
- `00-documentation-plan.md`: documentation writing conventions and extraction method.
- `01-dashboard-architecture.md`: runtime architecture, layout, state, SDK, and permissions.
- `02-ai-build-guide.md`: practical guide for an AI agent building a custom dashboard.
- `03-routing-proposal.md`: recommended route hierarchy for a custom web app.
- `04-api-and-data-contracts.md`: API contracts, pagination, error handling, and common response shapes.
- `05-ui-patterns.md`: framework-independent UI/UX patterns.
- `06-feature-inventory.md`: complete feature/module checklist from Backoffice source and route packs.
- `dashboard/`: section-by-section dashboard documentation.
- `_generated/`: source-generated catalogs for routes and APIs.

## Generated Catalogs

- `_generated/route-index.md`: named routes extracted from Shuttle/Backoffice route packs.
- `_generated/sdk-request-wrappers.md`: old typed wrapper traces; use only for params/response hints, not as the integration contract.
- `_generated/api-url-builders.md`: full endpoint catalog with `https://api.selldone.com/...` URLs, methods, scopes, and auth requirements.
- `_generated/api-usage-index.md`: API calls used by each page/component.
- `_generated/api-usage-by-area.md`: API usage grouped by dashboard area.
- `_generated/source-module-index.md`: folder overview for Backoffice pages.

## How An AI Agent Should Use This Pack

Start with `00-ai-agent-entrypoint.md`, then follow its mandatory reading and implementation order.  
Treat `06-feature-inventory.md` as the no-skip coverage checklist.  
For API implementation, map module usage from `_generated/api-usage-by-area.md` to **full URL endpoints** in `_generated/api-url-builders.md`.
