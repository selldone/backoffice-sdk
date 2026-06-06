# AI Build Guide

## Mission

Build a custom Selldone dashboard with any UI and any framework, while preserving Backoffice-compatible routing, state, API calls, permissions, and operational behavior.

## Recommended Build Order

1. Prepare auth plus the base API/HTTP client.
2. Build the generic `/shuttle` user shell.
3. Build the shop shell at `/shuttle/shop/:shop_id` and load shop context through `GET https://api.selldone.com/shops/me/{shop_id}`.
4. Build the main shop navigation filtered by permission regions.
5. Implement Products Manager first because its folder/list/filter/bulk-action model is the pattern for many other sections.
6. Add Process Center, Finance, Logistic, CRM, Marketing, Pages, Access, and Settings.
7. For every operation, confirm the full HTTP endpoint, method, params, auth, and response shape in `_generated/api-url-builders.md`; use `_generated/sdk-request-wrappers.md` only for legacy param/response hints.

## Framework-Independent Rules

- Sync route state with the URL, especially `shop_id`, `product_id`, `dir`, pagination, and search.
- Every shop page must have `shop`, `shopData`, `orderQue`, `shopApps`, and permissions available before rendering.
- Every write action should use limited optimistic updates and either rollback or refresh on failure.
- Use a consistent notification, loading, empty-state, forbidden-state, and validation-error surface across pages.
- Use cancellation or debounce for lists so search and filter changes do not create excessive requests.
- Cache data by query-parameter keys and skip duplicate requests.

## Recommended Route Contract

- `GET /shuttle`: user shop list and dashboard.
- `GET /shuttle/wallet`: wallet and accounts.
- `GET /shuttle/shop/:shop_id`: shop dashboard.
- `GET /shuttle/shop/:shop_id/product`: Products Manager.
- `GET /shuttle/shop/:shop_id/product?dir=:category_id`: Products Manager inside a folder.
- `GET /shuttle/shop/:shop_id/product/:product_id`: product dashboard.
- `GET /shuttle/shop/:shop_id/process/:type`: Process Center for an order type.
- `GET /shuttle/shop/:shop_id/finance/:section`: finance sections.
- `GET /shuttle/shop/:shop_id/logistic/:section`: logistic sections.
- `GET /shuttle/shop/:shop_id/page/:section`: page/static/landing/popup management.
- `GET /shuttle/shop/:shop_id/edit/:section`: shop settings.

## Shared API Call Pattern

Use HTTP endpoints as the primary contract. Backoffice JavaScript wrappers are source references only and should not be required by a custom implementation.

Product list example:

```http
GET https://api.selldone.com/shops/{shop_id}/products/all-admin?offset=0&limit=20&with_parent=true&with_total=true
Authorization: Bearer {access_token}
Accept: application/json
```

Delete product example:

```http
DELETE https://api.selldone.com/shops/{shop_id}/products/{product_id}/delete
Authorization: Bearer {access_token}
Accept: application/json
```

A custom implementation can use any HTTP client. The important parts are full endpoint URL, HTTP method, auth header, query/body params, and response shape.

## Source-To-Docs Mapping

- Routes: `_generated/route-index.md`
- Full endpoint catalog: `_generated/api-url-builders.md`
- Typed wrappers: `_generated/sdk-request-wrappers.md`
- Real UI API usage by file: `_generated/api-usage-index.md`
- Section explanations: `dashboard/`

## MVP Pages

- User shop list.
- Shop dashboard shell.
- Products Manager folder/list view.
- Product detail dashboard, edit, and inventory.
- Process Center for physical, virtual, file, and service orders.
- Finance report and gateways.
- Settings info, domains, and notifications.

After this MVP, add the remaining modules using the same conventions.
