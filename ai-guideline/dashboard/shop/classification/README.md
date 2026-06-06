# Shop Classification

## Purpose

Classification manages categories, category hierarchy, category import/export, clusters, category filters, and category engine settings. It is tightly connected to Products Manager because product categories also behave as folders.

## Routes

| Path segment | Current route name | Purpose |
|---|---|---|
| `classification/categories` | `BPageShopClassificationCategories` | Category list and category management. |
| `classification/exporter` | `BPageShopClassificationExporter` | Category export. |
| `classification/import` | `BPageShopClassificationImporter` | Category import. |
| `classification/hierarchy` | `BPageShopClassificationHierarchy` | Tree hierarchy management. |
| `classification/clusters` | `BPageShopClassificationClusters` | Category and product discovery clusters. |

## Required context

- `shop` from the shop shell.
- `CATEGORIES` permission for classification pages.
- Some UI actions also require `PRODUCTS` because category changes affect products.

## Core operations

- List categories with pagination, search, and sorting.
- Create, edit, and delete categories.
- Change category parent and ordering.
- Upload category image or icon.
- Edit root-level or category-level filters.
- Edit category engine rules, including categories and tags.
- Import and export category structure.
- Show hierarchy tree and support drag/drop structure editing.

## API calls

Use these endpoints directly:

| Operation | HTTP endpoint |
|---|---|
| List categories | `GET https://api.selldone.com/shops/{shop_id}/categories` |
| Load category hierarchy | `GET https://api.selldone.com/shops/{shop_id}/categories-hierarchy` |
| Add category | `POST https://api.selldone.com/shops/{shop_id}/categories/add` |
| Edit category | `PUT https://api.selldone.com/shops/{shop_id}/categories/{category_id}/edit` |
| Delete category | `DELETE https://api.selldone.com/shops/{shop_id}/categories/{category_id}` |
| Set category parent | `PUT https://api.selldone.com/shops/{shop_id}/categories/{category_id}/edit/parent` |
| Move category order | `POST https://api.selldone.com/shops/{shop_id}/categories/{category_id_or_root}/categories-order` |
| Get category filters | `GET https://api.selldone.com/shops/{shop_id}/categories/{category_id_or_root}/edit/filter` |
| Save category filters | `PUT https://api.selldone.com/shops/{shop_id}/categories/{category_id_or_root}/edit/filter` |
| Delete category filters | `DELETE https://api.selldone.com/shops/{shop_id}/categories/{category_id_or_root}/filter` |
| Set category engine | `PUT https://api.selldone.com/shops/{shop_id}/categories/{category_id}/engine` |
| Upload category image | `POST https://api.selldone.com/shops/{shop_id}/categories/{category_id}/edit/upload` |

See `_generated/api-url-builders.md` for scopes, auth, and additional category endpoints.

## UI behavior

- Categories must clearly show parent and child relationships.
- Deletion UI must explain the impact on child categories and products.
- Filter and engine editors must work for both root shop and a specific category.
- Hierarchy view should support drag/drop and reorder with explicit save/revert feedback.
