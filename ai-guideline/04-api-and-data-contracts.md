# API And Data Contracts

## Primary API Contract

A custom Selldone dashboard should call HTTP endpoints directly. The primary contract is:

- Full URL beginning with `https://api.selldone.com`.
- HTTP method.
- OAuth/Bearer auth header.
- Query params for reads and pagination.
- JSON or multipart body for writes/uploads.
- Response shape and error handling.

Backoffice JavaScript globals such as URL builders and typed wrappers are implementation details of the current Vue dashboard. Use them only as source trace when validating an endpoint.

## Base Request Shape

```http
GET https://api.selldone.com/{path}
Authorization: Bearer {access_token}
Accept: application/json
X-Localization: {locale}
```

For write requests, send JSON unless the endpoint is an upload endpoint:

```http
POST https://api.selldone.com/{path}
Authorization: Bearer {access_token}
Accept: application/json
Content-Type: application/json
```

Upload endpoints use `multipart/form-data` and should show progress, cancellation, and server validation errors.

## Generated Endpoint Catalog

Use `_generated/api-url-builders.md` as the main API catalog. Its endpoint column contains full URLs such as:

```http
GET https://api.selldone.com/shops/{shop_id}/products/all-admin
DELETE https://api.selldone.com/shops/{shop_id}/products/{product_id}/delete
```

Use `_generated/api-usage-index.md` and `_generated/api-usage-by-area.md` to see where each endpoint is used in the current UI.

Mandatory resolution flow for implementation agents:

1. Find the module area in `_generated/api-usage-by-area.md`.
2. Copy the referenced API builder names.
3. Resolve each builder in `_generated/api-url-builders.md`.
4. Call the resolved full endpoint URL and method.

Use `_generated/sdk-request-wrappers.md` only when you need typed param/response hints from the old SDK wrapper implementation.

## Common Pagination

Most lists use this model:

| Field | Meaning |
|---|---|
| `offset` | Start index, usually `(page - 1) * limit`. |
| `limit` | Number of items to fetch. |
| `total` | Total matched item count. |
| `sort` | General sort string. |
| `sortBy` | Server-side table sort field. |
| `sortDesc` | Table sort direction. |
| `search` | Search text. |

## Error Contract

The current UI expects this response pattern:

| Field | Meaning |
|---|---|
| `error` | If true, the operation failed. |
| `error_msg` | Displayable error message. |
| `success` | Boolean success flag for some endpoints. |
| `data` | Generic payload, endpoint-specific. |

Laravel validation and auth errors may also use standard HTTP status codes and bodies. The client should handle 401, 403, 404, 422, and 5xx separately.

## Cache And Cancellation

The current Backoffice uses request wrappers for cache and cancellation, but a custom app only needs equivalent behavior:

- Debounce search and filter changes.
- Cancel stale list requests when a newer request supersedes them.
- Cache list responses by URL plus query params.
- Render cached data before the fresh response when it improves perceived speed.
- Avoid duplicate requests when query params did not change.

## Auth And Localization

- Many Backoffice endpoints require OAuth/Bearer token and verified email.
- Send `Authorization: Bearer {access_token}` for authenticated API calls.
- Send `X-Localization` based on the current language when available.
- Language, calendar, and UI preferences are loaded from user preferences.

## Shop Context API

The shop shell depends on this call before child routes render:

```http
GET https://api.selldone.com/shops/me/{shop_id}
Authorization: Bearer {access_token}
Accept: application/json
```

Response data used by the UI:

| Field | Meaning |
|---|---|
| `shop` | Main shop object. |
| `data` | Shop dashboard data. |
| `shop_apps` | Installed/enabled applications. |
| `orderQue` | Order queue badges. |
| `avocadoQue` | Avocado queue badges when available. |

If a new app lazy-loads routes, load shop context in the parent loader or route middleware.

## Product List API

```http
GET https://api.selldone.com/shops/{shop_id}/products/all-admin
Authorization: Bearer {access_token}
Accept: application/json
```

Important query params: `offset`, `limit`, `dir`, `with_parent`, `with_total`, `search`, `statuses`, `types`, `sort`, `available`, `vendor`, `products_only`, `show_deletes`, `show_vendors`, `with_category`, `sortBy`, and `sortDesc`.

Main response fields:

| Field | Meaning |
|---|---|
| `folders` | Category/folder items for the current directory. |
| `products` | Product items for the current directory/filter. |
| `parent` or `parent_folders` | Breadcrumb and parent folder data. Current UI reads `parent`, while SDK types mention `parent_folders`; support both. |
| `total` | Total matched product count. |
| `tax_profile` | Returned when a special tax-profile search matches. |
| `valuation` | Returned when a special valuation search matches. |
| `time_filter` | Returned when a special time-range search is used. |

## Product Detail API

```http
GET https://api.selldone.com/shops/{shop_id}/products/{product_id}/admin
Authorization: Bearer {access_token}
Accept: application/json
```

Important query params: `offset`, `limit`, and `with_trashed`.

Important response fields:

| Field | Meaning |
|---|---|
| `product` | Main product object. |
| `product.product_variants` | Variants. |
| `product.images` | Images. |
| `product.files` | Files for file products and required cases. |
| `product.articles` | Editable product content/articles. |
| `product.subscription_prices` | Subscription pricing. |
| `product.vendor`, `product.vendors` | Marketplace/vendor information. |
| `product.category` | Current category and parent. |
| `product_data` or `data` | Product time-series data. |
| `orderQue` | Product order queue by type/state. |

## Generated References

- Full endpoint catalog: `_generated/api-url-builders.md`
- API usage by UI file: `_generated/api-usage-index.md`
- API usage grouped by area: `_generated/api-usage-by-area.md`
- Old typed wrapper traces: `_generated/sdk-request-wrappers.md`
