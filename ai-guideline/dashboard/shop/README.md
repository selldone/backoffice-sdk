# Shop Admin Shell

## Purpose

`/shuttle/shop/:shop_id` is the main shell for managing one shop. Before entering any child route, the app must load shop context and permissions.

## Source Trace

- `src/Applications/Backoffice/layouts/backoffice-shop/BLayoutBackofficeShop.vue`
- `src/Applications/Backoffice/pages/shop/BPageShop.vue`
- `src/Applications/Backoffice/mixins/shop/BShopDashboardMixin.ts`
- `src/Applications/Selldone/router/shuttle/shop/ShuttleShopRoutes.ts`

## Required Context

| Data | Source |
|---|---|
| `shop` | `GET https://api.selldone.com/shops/me/{shop_id}` |
| `shopData` | Same response, used for shop time-series. |
| `shopApps` | `shop.shop_apps` from the response. |
| `orderQue` | Response `orderQue`. |
| `avocadoQue` | Response `avocadoQue`. |
| `shopAccounts` | `shop.accounts`. |
| `permissions` | `shop.shop_permissions` and user permissions. |

## Core Behavior

- Child routes render only when `shop` is ready and `has_access` is true.
- If route meta has `region`, read access is checked with `readShopAccess(region.code)`.
- Write actions inside pages must be checked with `writeShopAccess(region.code)`.
- The shop shell should support refresh and call `GET https://api.selldone.com/shops/me/{shop_id}` again with `offset` and `days` when the time span changes.
- Storefront SDK is initialized with the shop name so xapi/storefront calls can be used in product and shop sections.

## Main Navigation

| Section | Default route | Permission region |
|---|---|---|
| Dashboard | `BPageShopDashboard` | none or shop read |
| Products | `BPageShopProductsList` | `PRODUCTS` |
| Blog | `BPageShopBlogsList` | `BLOG` |
| Process Center | `BPageShopOrdersPhysical` or type-based | `ORDERS` |
| Channels | `BPageShopChannelConnect` | `CHANNELS` |
| Finance | `BPageShopFinanceReport` | `ACCOUNTING` |
| Incentives | `BPageShopIncentivesDiscountCode` | `INCENTIVES` |
| Marketing | `BPageShopMarketingCampaign` | `MARKETING` |
| Logistic | `BPageShopLogisticInventoryList` | `LOGISTIC` |
| CRM | `BPageShopCrmCustomers` | `CUSTOMERS` |
| Community | `BPageShopCommunityCategories` | `COMMUNITY` |
| Classification | `BPageShopClassificationCategories` | `CATEGORIES` |
| Pages | `BPageShopPagesLandings` | `PAGES` |
| Access | `BPageShopPermissionStaff` | `ACCESS` or settings/access |
| Applications | `BPageShopApplicationsPwa` | `APPLICATIONS` |
| Automation | `BShopAutomationWebhook` | `AUTOMATION` |
| Settings | `BPageShopSettingInfo` | `SETTINGS` |
| Listing | `BPageShopListingItems` | `PRODUCTS` plus listing availability |
| Marketplace | `BPageMarketplaceVendors` | `MARKETPLACE` |
| POS | `BPagePosPanel` | `POS` |

## API Calls

- `GET https://api.selldone.com/shops/me/{shop_id}` for boot and refresh.
- For section-specific APIs, read the matching section file and then confirm details in `_generated/api-usage-by-area.md`.

## UI Behavior

- The header should show shop name, icon, active/inactive status, owner/staff badges, and storefront link.
- Navigation should hide items without permission rather than only disabling them.
- If the shop has penalty, purge, or sample state, show a clear banner or label.
- Manual refresh and auto-refresh for dashboard data should be supported.
