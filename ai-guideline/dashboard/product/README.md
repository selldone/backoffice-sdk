# Product Detail Dashboard

## Purpose

This section manages one specific product. Its parent route is `/shuttle/shop/:shop_id/product/:product_id`, and it has nested child routes for dashboard, inventory, content, media, subscription, vendors, and edit flows.

## Routes

| Proposed path | Current route name | Purpose |
|---|---|---|
| `/shuttle/shop/:shop_id/product/:product_id` | `BPageProductDashboard` | Product overview and performance. |
| `/inventory` | `BPageProductInventory` | Inventory and variants. |
| `/orders` | `BPageProductOrders` | Orders related to the product. |
| `/content` | `ProductAdmin_EditArticle` | Product content/article. |
| `/3d` | `BPageProduct3D` | 3D/AR model. |
| `/hyper` | `BPageProductHyper` | Hyper sell settings. |
| `/subscription` | `BPageProductSubscription` | Subscription ribbon/pricing. |
| `/membership` | `BPageProductMembership` | Membership behavior. |
| `/vendors` | `BPageProductVendors` | Vendor assignments in marketplace mode. |
| `/embed` | `BPageProductEmbed` | Embed/shop button. |
| `/cross` | `BPageProductCrossSelling` | Cross-selling products. |
| `/template` | `BPageProductTemplate` | Template/spec behavior. |
| `/dropshipping` | `BPageProductDropshipping` | Dropshipping relation. |
| `/edit` | `BPageProductEdit` | Main edit form. |

## Source Trace

- `src/Applications/Selldone/router/shuttle/shop/product/ShuttleShopProductRoutes.ts`
- `src/Applications/Backoffice/pages/product/BPageProduct.vue`
- `@selldone/sdk-backoffice/product/requests/api.product.info.get.ts`

## Required Context

| Data | Meaning |
|---|---|
| `shop` | Shop context from the parent shell. |
| `product_id` | Route parameter. |
| `offset`, `limit` | Pagination/time-series range inputs used by the product dashboard data request. |
| `with_trashed` | Allows loading/restoring deleted products. |
| `PRODUCTS` permission | Read/write product operations. |

## Main Data Endpoint

Use this endpoint directly in any framework:

```http
GET https://api.selldone.com/shops/{shop_id}/products/{product_id}/admin
Authorization: Bearer {access_token}
Accept: application/json
```

Common query params:

| Param | Meaning |
|---|---|
| `offset` | Start index for product dashboard data. |
| `limit` | Number of analytics/data rows to return. |
| `with_trashed` | Set true when loading a deleted product for restore flow. |

Example:

```text
https://api.selldone.com/shops/123/products/456/admin?offset=0&limit=30&with_trashed=false
```

## Important Response Shape

| Field | Meaning |
|---|---|
| `product` | Main product. |
| `product.product_variants` | Variants and inventory-facing options. |
| `product.shop` | Shop summary. |
| `product.parent` | Parent product for dropshipping/main-product flows. |
| `product.vendor` | Main vendor in marketplace mode. |
| `product.connect` | Connect integration info. |
| `product.subscription_prices` | Subscription pricing rows. |
| `product.valuation` | Valuation/custom pricing. |
| `product.map` | Map tag. |
| `product.extra_pricings` | Quantity-based extra pricing. |
| `product.includes` | Included items. |
| `product.page` | Product landing/page relation. |
| `product.category` | Category and parent category. |
| `product.images` | Product images. |
| `product.ratings` | Ratings summary. |
| `product.files` | Product files for file products. |
| `product.articles` | Product articles/content. |
| `product.linked_products` | Linked products for subscriptions. |
| `product.subscribers_count` | Subscription subscriber count. |
| `product_data` or `data` | Product time-series data. |
| `orderQue` | Order queue for this product. |

## Core Operation Endpoints

| Operation | HTTP endpoint | Notes |
|---|---|---|
| Fetch product detail | `GET https://api.selldone.com/shops/{shop_id}/products/{product_id}/admin` | Query: `offset`, `limit`, `with_trashed`. |
| Restore deleted product | `POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/restore` | Use only when product is deleted/trashed. |
| Edit basic data | `PUT https://api.selldone.com/shops/{shop_id}/products/{product_id}/edit` | Body contains editable product fields. |
| Edit price | `PUT https://api.selldone.com/shops/{shop_id}/products/{product_id}/edit/price` | Variant price: append `/{variant_id}`. |
| Upload cover image | `POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/edit/upload/cover` | Multipart upload. Variant cover: append `/{variant_id}`. |
| Upload main image | `POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/edit/upload/icon` | Multipart upload. |
| Reorder images | `PUT https://api.selldone.com/shops/{shop_id}/products/{product_id}/images/order` | Body contains ordered image IDs. |
| Edit image alt | `PUT https://api.selldone.com/shops/{shop_id}/products/{product_id}/images/{image_id}/alt` | Body contains alt/title data. |
| Delete image | `DELETE https://api.selldone.com/shops/{shop_id}/products/{product_id}/images/{image_id}/delete` | Remove one product image. |
| Add variant | `POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/variant/add` | Body contains variant data. |
| Add variants in bulk | `POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/variant/add-bulk` | Body contains multiple variants. |
| Set product quantity | `POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/quantity` | Variant quantity: `POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/variants/{variant_id}/quantity`. |
| List files | `GET https://api.selldone.com/shops/{shop_id}/products/{product_id}/files` | Used for file products and selected subscription/content flows. |
| Product tags | `POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/tags` | Body contains tags. |
| Product page | `POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/page` | Link or configure product page relation. |
| Vendor list | `GET https://api.selldone.com/shops/{shop_id}/products/{product_id}/vendors` | Marketplace mode. |
| Product videos | `POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/videos` | Multipart upload. Delete with `DELETE https://api.selldone.com/shops/{shop_id}/products/{product_id}/videos/{video_id}`. |

For less common product submodules such as AR, subscription pricing, cross-selling, file upload URLs, and dropshipping, use `_generated/api-url-builders.md` and filter by `product`, `subscription`, `cross`, or `drop`.

## UI Behavior

- The parent product page should show product header, image, title, type/status, and route tabs.
- Child pages should not fetch the product separately unless a forced refresh is required. The parent should pass product data down.
- Changing `with_trashed` or `product_id` should refetch product data.
- After any important edit, refresh parent product data or sync local state with the response.
- For deleted products, show a clear and restricted restore action.
