# Dashboard Architecture

## Entry Point

Backoffice boots from `src/Applications/Backoffice/backoffice.ts`. This file mounts the app, attaches the shared router and store, initializes language and UI plugins, and initializes the SDK layer used by the current Vue implementation.

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
| `_generated/api-usage-index.md` | Which source file calls which API. |
| `_generated/api-usage-by-area.md` | API usage grouped by dashboard area. |
| `_generated/sdk-request-wrappers.md` | Old SDK wrapper traces and typed response hints. Use only as implementation reference. |

## Route Shells

The dashboard has two main shells:

- `/shuttle`: the user dashboard, rendered by `BLayoutShuttle` in the current app.
- `/shuttle/shop/:shop_id`: the shop admin dashboard, rendered by `BLayoutBackofficeShop` in the current app.

Backoffice uses the shared router from `@app-selldone/router/SelldoneRouter`. Shop route packs live under `src/Applications/Selldone/router/shuttle/shop`.

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

`src/Applications/Backoffice/store/SaminStore.ts` contains these key dashboard states:

- `user`: authenticated user.
- `permissions`: user permissions.
- `current_admin_shop`: current shop context.
- `current_admin_shop_data`: shop summary and time-series data.
- `current_admin_shop_apps`: installed shop apps.
- `current_admin_shop_order_que`: order queue summary.
- `current_admin_shop_avocado_que`: Avocado queue summary.
- `copy_product` and `cut_product`: product copy/cut state used by Products Manager.
- `uploading_keeper`: active upload state.
- `vendor`: vendor context for vendor-panel flows.

## Permission Model

Routes usually define `meta.region`. `BLayoutBackofficeShop` finds the nearest matched route with a region and checks read access. Internal write actions are checked with write access on the same region or vendor permission helpers.

Main rules:

- The shop owner always has read and write access.
- Sample shops and temporary access allow read access.
- Read access is controlled by `REGION-READ` overrides.
- Write access is controlled by permission levels and `REGION-WRITE` overrides.

## Global UI Overlays

`BackofficeApp.vue` renders global overlays in addition to the router view: server and side notifications, map dialog, upload keeper, login dialog, preferences dialog, PWA update, fullscreen image viewer, premium dialog, and feedback popup. A custom UI does not need the same components, but it should provide equivalent capabilities for notifications, auth-required flows, upload progress, and feedback.

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
