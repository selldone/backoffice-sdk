# Dashboard Architecture

## API Contract Boundary

For a custom dashboard, the API contract is not the current JavaScript globals. Use HTTP endpoints under:

```text
https://api.selldone.com
```

The current Backoffice source contains URL builders and typed request wrappers, but those are source-trace helpers. The documentation should expose endpoint URLs, methods, params, scopes, auth, and response shapes so any framework can implement the same behavior.

Use these generated catalogs:

| File | Purpose |
|---|---|
| `_generated/api-url-builders.md` | Full endpoint URLs, HTTP methods, scopes, auth requirements, and source locations. |
| `_generated/api-usage-index.md` | API usage by public component. |
| `_generated/api-usage-by-area.md` | API usage grouped by dashboard area. |
| `_generated/sdk-request-wrappers.md` | Old SDK wrapper traces and typed response hints. Use only as implementation reference. |

## Route Shells

The dashboard has two main shells:

- `/shuttle` is the user dashboard.
- `/shuttle/shop/:shop_id` is the dashboard for a specific shop.

## Shop Context Lifecycle

Every page under `/shuttle/shop/:shop_id` requires a loaded shop context:

1. The shop layout reads the `shop_id` route parameter.
2. The app calls the shop context endpoint:

```http
GET https://api.selldone.com/shops/me/{shop_id}
Authorization: Bearer {access_token}
Accept: application/json
```

3. The response contains `shop`, `data`, `shop_apps`, `orderQue`, and `avocadoQue`.
4. The layout stores this data and passes it to child routes.
5. If a route has a permission region, the layout checks read access before rendering.

A custom web app should load or retrieve this shop context from cache before rendering any shop child route.

## Important Store State

Track the authenticated user and permissions, current shop context and apps,
shop summary and time series, order queues, and vendor context. The products
manager also needs transient copy/cut state and upload progress.

## Permission Model

Use the merchant route's permission region to check shop read access. For mutations, check the corresponding write access or vendor permission.

Main rules:

- The shop owner always has read and write access.
- Sample shops and temporary access allow read access.
- Read access is controlled by `REGION-READ` overrides.
- Write access is controlled by permission levels and `REGION-WRITE` overrides.

## Global UI Overlays

Provide shared surfaces for notifications, sign-in, upload progress, and feedback across routes.

## Page Builder Integration

Backoffice enables the page builder in edit mode through `PageHyper(app, { mode: "edit" })`. The main page/popup upload endpoints are:

```http
POST https://api.selldone.com/shops/{shop_id}/pages/{page_id}/upload/content-image
POST https://api.selldone.com/shops/{shop_id}/pages/{page_id}/upload/content-video
POST https://api.selldone.com/shops/{shop_id}/popups/{page_id}/upload/content-image
```

These are multipart upload endpoints and require Bearer authentication.

## Error Handling

Current UI behavior follows this pattern:

- Check `data.error` in responses.
- Display `data.error_msg` through a notification surface.
- Display Laravel validation or auth errors through a shared error handler.
- Use cache, cancellation, debounce, and final cleanup around list requests.

A custom implementation should preserve the same error contract even if it uses a different client implementation.
