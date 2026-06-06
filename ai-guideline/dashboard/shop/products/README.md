# Shop Products Manager

## Purpose

Products Manager is the central place for managing shop products and category/folder structure. It behaves like a file manager: categories are shown as folders, products are shown as files/items, and users manage them through click navigation, drag/drop, search, filters, and bulk actions.

## Routes

| Proposed path | Current route name | Purpose |
|---|---|---|
| `/shuttle/shop/:shop_id/product` | `BPageShopProductsList` | Folder/table product management. |
| `/shuttle/shop/:shop_id/product?dir=:category_id` | Same route | Show products inside a category/folder. |
| `/shuttle/shop/:shop_id/product/import` | `BPageShopProductsImporter` | Product file import. |
| `/shuttle/shop/:shop_id/product/export` | `BPageShopProductsExporter` | Product export. |
| `/shuttle/shop/:shop_id/product/products-que` | `BPageShopProductsProductsQue` | Product import queue. |
| `/shuttle/shop/:shop_id/product/images-que` | `BPageShopProductsImagesQue` | Image import queue. |

## Source Trace

- `src/Applications/Backoffice/pages/shop/products/BPageShopProducts.vue`
- `src/Applications/Backoffice/pages/shop/products/list/BPageShopProductsList.vue`
- `@selldone/components-vue/backoffice/product/panel/BProductsPanel.vue`
- `@selldone/components-vue/backoffice/product/window/BProductsWindow.vue`
- `@selldone/components-vue/backoffice/product/list/BProductsList.vue`
- `@selldone/sdk-backoffice/product/requests/api.products.list.get.ts`

## Required Context

| Data | Meaning |
|---|---|
| `shop` | Shop context from the shop shell. |
| `vendor` | Only for vendor-panel mode. Usually null in shop admin. |
| `shop.model` | Used to detect marketplace mode for vendor filtering and vendor assignment. |
| `shop.marketplace` | Product/category limits for vendor-panel mode. |
| `PRODUCTS` permission | Read access to enter, write access for add/edit/delete/move actions. |

## Main Data Endpoint

Use this HTTP endpoint directly in any framework. Do not depend on Backoffice JavaScript globals for a custom implementation.

```http
GET https://api.selldone.com/shops/{shop_id}/products/all-admin
Authorization: Bearer {access_token}
Accept: application/json
```

Example request for the root folder:

```text
https://api.selldone.com/shops/123/products/all-admin?offset=0&limit=20&with_parent=true&with_total=true
```

Example request for a category/folder:

```text
https://api.selldone.com/shops/123/products/all-admin?offset=0&limit=20&dir=456&with_parent=true&with_total=true
```

The old Backoffice source calls this through a typed wrapper, but the real contract for an AI-built dashboard is the HTTP method, URL, query params, auth header, and response shape above.

Response:

| Field | Meaning |
|---|---|
| `folders` | Categories for the current directory. |
| `products` | Products for the current directory/filter. |
| `parent` or `parent_folders` | Parent chain for breadcrumb and back button. |
| `total` | Total matched product count. |
| `tax_profile` | Special tax-search result. |
| `valuation` | Special valuation-search result. |
| `time_filter` | Special time-range search result. |

## Important Query Params

| Param | Meaning |
|---|---|
| `offset` | `(product_page - 1) * max_products_per_page`. |
| `limit` | Product count per page. |
| `statuses` | ProductStatus filters. |
| `types` | ProductType filters. |
| `sort` | Sort view. |
| `available` | Fetch only available products. |
| `set` | `default` or `spec` for special modes such as import spec. |
| `dir` | Current category ID. Null/omitted means root. Table mode uses `*` for all products. |
| `with_product_variants` | Include variants. |
| `with_parent` | True on the first page so parent/folders are returned; false for load-more pages. |
| `search` | Search text. |
| `vendor` | Vendor filter in marketplace mode. |
| `products_only` | If true, return only products and skip folders. |
| `with_total` | Return total count. |
| `show_deletes` | Include deleted products. |
| `show_vendors` | Include vendor assignments. |
| `with_product_translations` | Include product translations. |
| `with_category_translations` | Include category translations. |
| `with_category` | Attach category to each product in table mode. |
| `sortBy`, `sortDesc` | Server-side table sorting. |

## Core Operation Endpoints

| Operation | HTTP endpoint | Params/body notes |
|---|---|---|
| Fetch folder view | `GET https://api.selldone.com/shops/{shop_id}/products/all-admin` | Query: `offset`, `limit`, `dir`, `with_parent=true`, `with_total=true`, plus filters. |
| Navigate folder | `GET https://api.selldone.com/shops/{shop_id}/products/all-admin` | Set query `dir={category_id}` and reset `offset=0`. |
| Back to parent | `GET https://api.selldone.com/shops/{shop_id}/products/all-admin` | Set `dir` to the parent category ID, or omit `dir` for root. |
| Search | `GET https://api.selldone.com/shops/{shop_id}/products/all-admin` | Query: `search`, reset `offset=0`. |
| Filter status/type | `GET https://api.selldone.com/shops/{shop_id}/products/all-admin` | Query: `statuses`, `types`. |
| Vendor filter | `GET https://api.selldone.com/shops/{shop_id}/products/all-admin` | Query: `vendor`; only for marketplace shop admin. |
| Show deleted | `GET https://api.selldone.com/shops/{shop_id}/products/all-admin` | Query: `show_deletes=true`. |
| Show vendors | `GET https://api.selldone.com/shops/{shop_id}/products/all-admin` | Query: `show_vendors=true`. |
| Add product | `POST https://api.selldone.com/shops/{shop_id}/product/add` | Body is product-type specific. Include current `category_id` when adding inside a folder. |
| Add category | `POST https://api.selldone.com/shops/{shop_id}/categories/add` | Body includes category fields and parent/current folder when applicable. |
| Edit category | `PUT https://api.selldone.com/shops/{shop_id}/categories/{category_id}/edit` | Body contains editable category fields. |
| Delete category | `DELETE https://api.selldone.com/shops/{shop_id}/categories/{category_id}` | Confirm impact on child categories and products before calling. |
| Move product to category | `PUT https://api.selldone.com/shops/{shop_id}/products/{product_id}/edit/category` | Body: `category_id` target category ID or null for root; optional `bundle`. |
| Move category to parent | `PUT https://api.selldone.com/shops/{shop_id}/categories/{category_id}/edit/parent` | Body contains target parent category ID or null/root depending on backend validator. |
| Sort products in folder | `POST https://api.selldone.com/shops/{shop_id}/categories/{category_id_or_root}/products-order` | Body: `origin` product ID, `target` product ID. Use `root` when no current category exists. |
| Sort categories in folder | `POST https://api.selldone.com/shops/{shop_id}/categories/{category_id_or_root}/categories-order` | Body: `origin` category ID, `target` category ID. Use `root` when no current category exists. |
| Clone product | `POST https://api.selldone.com/shops/products/{shop_id}/clone` | Body: `product_id`, `category_id`. |
| Delete product | `DELETE https://api.selldone.com/shops/{shop_id}/products/{product_id}/delete` | Soft delete after confirmation. |
| Bulk delete | `DELETE https://api.selldone.com/shops/{shop_id}/products/bulk-actions/delete-products` | Query params: `ids` selected product IDs. |
| Restore product | `POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/restore` | Available when deleted products are visible. |
| Product note | `POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/note` | Body contains note payload accepted by backend. |
| Delete product note | `DELETE https://api.selldone.com/shops/{shop_id}/products/{product_id}/note/{note_index}` | Remove one note by index. |
| Category note | `POST https://api.selldone.com/shops/{shop_id}/categories/{category_id}/note` | Body contains note payload accepted by backend. |
| Delete category note | `DELETE https://api.selldone.com/shops/{shop_id}/categories/{category_id}/note/{note_index}` | Remove one note by index. |
| Drop product cover | `POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/edit/upload/cover` | Multipart upload. Variant cover: append `/{variant_id}`. |
| Drop category image | `POST https://api.selldone.com/shops/{shop_id}/categories/{category_id}/edit/upload` | Multipart upload. |
| Bulk assign vendor | `POST https://api.selldone.com/shops/{shop_id}/marketplace/bulk-actions/assign-products-vendors` | Body: `product_ids`, `vendor_ids`, `pricing_id`, `quantity`. |
| Bulk assign status | `POST https://api.selldone.com/shops/{shop_id}/marketplace/bulk-actions/assign-products-status` | Body: `product_ids`, `status`. |
| Get root/category filters | `GET https://api.selldone.com/shops/{shop_id}/categories/{category_id_or_root}/edit/filter` | Use `root` for root-level filters. |
| Save root/category filters | `PUT https://api.selldone.com/shops/{shop_id}/categories/{category_id_or_root}/edit/filter` | Body contains filter configuration. |
| Delete root/category filters | `DELETE https://api.selldone.com/shops/{shop_id}/categories/{category_id_or_root}/filter` | Use `root` for root-level filters. |
| Category engine | `PUT https://api.selldone.com/shops/{shop_id}/categories/{category_id}/engine` | Body contains engine categories/tags. |

## Two Visual Modes

### Window Mode

- Folders and product cards are shown like a file manager.
- Drag/drop and context menus are active.
- Add product, import, filter, and engine cards appear at the end of the list.
- Breadcrumb and back folder behavior are required.

### Table Mode

- Server data table for all products.
- `dir` is `*`.
- Folders are not shown.
- `products_only` is true.
- `with_category` is true so the category column can be rendered.
- Pagination and sorting are server-side.

## UI Rules For AI

- Show products and categories together at one level: folders first, then products.
- Implement folders as directories: click means enter, back means parent, breadcrumb means chain.
- If page > 1, load only products and do not request folders again unless a forced refresh is required.
- Keep `LAST_QUERY_PARAMS` or an equivalent guard to skip duplicate requests.
- If drag/drop is too heavy for the MVP, expose move/copy through context-menu actions while preserving API behavior.
- Show special search chips (`tax_profile`, `valuation`, `time_filter`) above the list.
- In marketplace mode, show vendor filtering and assign-vendor actions only when the shop model is marketplace.

## References

- Detailed folder behavior: `list-and-folder-behavior.md`
- Product detail: `../../product/README.md`
- Full endpoint catalog: `_generated/api-url-builders.md`
- API usage areas: `_generated/api-usage-by-area.md`, areas `shop/products` and `components/product`.
