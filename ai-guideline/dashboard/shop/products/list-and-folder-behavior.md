# Products List And Folder Behavior

## State Model

| State | Meaning |
|---|---|
| `current_dir_id` | Current category ID. Null means root. |
| `folders` | Direct child categories for the current directory. |
| `products` | Products for the current directory or search/filter result. |
| `parent_folders` | Current category plus parent chain. |
| `folder_page` | Internal folder pagination. |
| `product_page` | Product pagination. |
| `search` | Search text. |
| `filters` | Selected status/type values. |
| `sort` | Sort view. |
| `only_available` | Available-only filter. |
| `vendor_filter` | Vendor ID/code for marketplace mode. |
| `show_deletes` | Show deleted products. |
| `show_vendors` | Include vendor information. |
| `show_notes` | Show note buttons. |
| `table_mode` | Use data table instead of window view. |

## Fetch Algorithm

1. `offset = (product_page - 1) * max_products_per_page`.
2. `limit = max_products_per_page`.
3. `with_folders = product_page === 1`.
4. Build params.
5. If params equal `LAST_QUERY_PARAMS` and `force` is false, skip the request.
6. In vendor panel mode, call the vendor product-list endpoint documented in `_generated/api-url-builders.md`.
7. In shop admin mode, call `GET https://api.selldone.com/shops/{shop_id}/products/all-admin` with the query params built in step 4.
8. Cached response can be applied before the fresh response.
9. Always update `products`.
10. If `with_folders` is true, also update `folders` and `parent_folders`.

## Folder Navigation

- Click category: change route query to `{ dir: category.id, "no-scroll": true }`.
- Click back: change route query to the parent ID, or root if no parent exists.
- Route watcher should sync `current_dir_id` and run `fetchData` when `dir` changes.
- Breadcrumb should be built from `parent_folders`.

## Drag/Drop Operations

| Drag source | Drop target | Result |
|---|---|---|
| product | folder | Product category changes. |
| category | folder | Category parent changes. |
| product | clone area | Product is cloned. |
| product/category | holder | Item is temporarily held for later move. |
| product | product in arrange mode | Product order changes inside category. |
| category | category in arrange mode | Category order changes inside parent. |

## Context Menu Operations

Context menu should vary by target:

- Product: open, edit, copy, cut, clone, delete, restore, note, assign vendor, assign status, bulk actions.
- Category: open, edit, set parent, note, edit filters, edit engine, delete.
- Empty/root: paste product, add category, add product, edit root filters/engine.

## Filter And Engine Cards

Window mode ends with two important cards:

- Filter card: shows whether root or current category has filters and opens the editor.
- Engine card: shows engine categories/tags and opens the editor.

Filters affect storefront/category product discovery, not only Backoffice UI.

## Table Mode Differences

Table mode is optimized for fast product management:

- `dir` is `*`.
- Folders are hidden.
- `products_only` is true.
- `with_category` is true to render the category column.
- Pagination and sort are server-side in the data table.
