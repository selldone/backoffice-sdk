# Module Implementation Matrix

This matrix turns the Backoffice source tree into an implementation plan for a custom Selldone dashboard. Use it with `06-feature-inventory.md`; the inventory says what exists, and this file says how an implementation agent should place, gate, document, and resolve APIs for each surface.

## How To Use This Matrix

For every row:

1. Create a route or reachable screen for the listed feature set.
2. Apply the permission region before rendering data or actions.
3. Read the section docs and generated route catalog.
4. Resolve every action through the listed API usage areas in `_generated/api-usage-by-area.md`.
5. Implement only full endpoints found in `_generated/api-url-builders.md`.
6. If a module is not relevant to the shop business model, keep it in secondary or conditional navigation instead of deleting it.

## Placement Definitions

| Placement | Meaning |
|---|---|
| Primary | Visible in the main dashboard workspace for most shops. |
| Secondary | Available in grouped navigation, command palette, or a lower-priority menu. |
| Conditional | Visible only when business model, installed apps, channel state, or permissions require it. |
| Entity | Reached from parent lists, search results, notifications, or deep links. |
| System | Global user/account/provider surface outside one shop. |

## Core Context Endpoints

These endpoints are required before most module work:

```http
GET https://api.selldone.com/shops/me
GET https://api.selldone.com/shops/me/{shop_id}
GET https://api.selldone.com/shops/{shop_id}/products/all-admin
GET https://api.selldone.com/shops/{shop_id}/process-center/baskets-{type}
GET https://api.selldone.com/shops/{shop_id}/customers
```

## User And System Surfaces

| Surface | Features to implement | Placement | Permission or context | Current route family | Docs | API usage areas | Core full endpoints |
|---|---|---|---|---|---|---|---|
| Shuttle root | Shop list, vendor list, roles, wallet entry, identity, company, security, affiliate, expert, deals. | System | Authenticated and verified user. | `/shuttle` | `dashboard/shuttle/README.md` | `shuttle`, `layout/shuttle`, `components/account` | `GET https://api.selldone.com/shops/me`; `GET https://api.selldone.com/roles`; `GET https://api.selldone.com/user/security` |
| Wallet and accounts | Account list, deposit, cards, transfer, transactions, charge history, connected shops, subscriptions. | System | Wallet/account scopes. | `/shuttle/wallet`, `/shuttle/wallet/account/:account_number` | `dashboard/shuttle/README.md` | `account`, `components/account` | `GET https://api.selldone.com/accounts`; `GET https://api.selldone.com/accounts/{account_number}`; `GET https://api.selldone.com/accounts/{account_number}/shops` |
| Identity and security | Profile, KYC, personal information, password, 2FA, login devices, delete account. | System | Authenticated user and identity scopes. | `/shuttle/kyc`, `/shuttle/security` | `dashboard/shuttle/README.md` | `shuttle`, `components/auth`, `components/user` | `GET https://api.selldone.com/personal-information`; `GET https://api.selldone.com/profiles/me`; `GET https://api.selldone.com/user/security` |
| Company and company apps | Company dashboard, edit, documents, developer suite, company app dashboard/edit/API/images/publish/enterprise. | System | Company read/write scopes. | `/shuttle/company`, `/shuttle/company/:company_id`, `/shuttle/company/:company_id/apps/:app_id` | `dashboard/shuttle/README.md` | `components/company`, `other` | `GET https://api.selldone.com/company`; `GET https://api.selldone.com/company/{company_id}`; `GET https://api.selldone.com/company/{company_id}/apps`; `GET https://api.selldone.com/company/{company_id}/apps/{app_id}` |
| Affiliate as user | My affiliates, affiliate dashboard, orders, payouts, affiliate POS. | System or Entity | Affiliate access. | `/shuttle/affiliate`, `/shuttle/affiliates/:affiliate_id`, `/shuttle/affiliates/:affiliate_id/pos` | `dashboard/shuttle/README.md` | `affiliate`, `affiliator`, `affiliator-pos`, `components/affiliate` | `GET https://api.selldone.com/affiliates`; `GET https://api.selldone.com/affiliates/{affiliate_id}`; `GET https://api.selldone.com/affiliates/{affiliate_id}/pos/orders` |
| Expert and deals | Expert profile, expert jobs, job dashboard, requests, chats, contracts, gallery, partner deals. | System | Expert/customer contract access. | `/shuttle/expert`, `/shuttle/expert/jobs/:job_id`, `/shuttle/deals` | `dashboard/shuttle/README.md` | `components/expert`, `shuttle` | `GET https://api.selldone.com/expert/jobs`; `GET https://api.selldone.com/expert/jobs/{job_id}`; `GET https://api.selldone.com/expert/jobs/{job_id}/requests` |
| Role detail | Role dashboard, performance, tasks. | Entity | User role access. | `/shuttle/role/:role_id` | `dashboard/shuttle/README.md` | `role`, `components/role` | `GET https://api.selldone.com/roles`; `GET https://api.selldone.com/roles/{role_id}`; `GET https://api.selldone.com/roles/{role_id}/tasks` |
| Provider routes | Provider dashboard, API docs, auth, settings, logs, shops, webhooks. | Conditional | Provider/connect owner access. | `/shuttle/providers/:provider_id` | `dashboard/integrations/README.md` | `other`, `components/connect`, `connect` | Resolve provider endpoints from `_generated/api-url-builders.md`; do not invent provider paths if missing. |

## Shop Core And Primary Operations

| Surface | Features to implement | Placement | Permission region | Current route family | Docs | API usage areas | Core full endpoints |
|---|---|---|---|---|---|---|---|
| Shop shell and dashboard | Shop context, dashboard data, live activity, queues, apps, permission-filtered nav, refresh. | Primary | Shop read plus child region checks. | `/shuttle/shop/:shop_id` | `dashboard/shop/README.md`; `01-dashboard-architecture.md` | `shop/dashboard`, `components/dashboard`, `components/live-view`, `mixin/shop` | `GET https://api.selldone.com/shops/me/{shop_id}`; `GET https://api.selldone.com/shops/{shop_id}/real-time`; `GET https://api.selldone.com/shops/{shop_id}/statistic/sessions`; `GET https://api.selldone.com/shops/{shop_id}/statistic/timeline` |
| Products Manager | Product/category file-manager, folders, table mode, import/export, queues, search, filters, drag/drop, bulk actions. | Primary | `PRODUCTS` | `/shuttle/shop/:shop_id/product` | `dashboard/shop/products/README.md`; `dashboard/shop/products/list-and-folder-behavior.md` | `shop/products`, `components/product`, `components/category`, `components/inventory`, `components/valuation` | `GET https://api.selldone.com/shops/{shop_id}/products/all-admin`; `POST https://api.selldone.com/shops/{shop_id}/product/add`; `POST https://api.selldone.com/shops/{shop_id}/categories/add`; `DELETE https://api.selldone.com/shops/{shop_id}/products/{product_id}/delete` |
| Product detail | Product dashboard, edit, inventory, orders, article/content, 3D, hyper, subscription, membership, vendors, embed, cross-selling, template, dropshipping. | Entity | `PRODUCTS` | `/shuttle/shop/:shop_id/product/:product_id` | `dashboard/product/README.md` | `product`, `components/product`, `components/page`, `components/subscription`, `components/vendor` | `GET https://api.selldone.com/shops/{shop_id}/products/{product_id}/admin`; `PUT https://api.selldone.com/shops/{shop_id}/products/{product_id}/edit`; `POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/quantity`; `GET https://api.selldone.com/shops/{shop_id}/products/{product_id}/files` |
| Process Center order lists | Physical, virtual, file, service, subscription, POS, hyper, avocado, dropshipping order lists and filters. | Primary | `ORDERS` | `/shuttle/shop/:shop_id/process-center` and shop order tabs | `dashboard/shop/orders/README.md`; `dashboard/commerce/README.md` | `shop/orders`, `components/order`, `components/process-center`, `order-*` | `GET https://api.selldone.com/shops/{shop_id}/process-center/baskets-{type}`; `GET https://api.selldone.com/shops/{shop_id}/process-center/vendor-orders-{type}` |
| Order detail | Type-specific dashboard, form/inputs, track, timeline, chat, return, bills, payment confirmation, fulfillment actions. | Entity | `ORDERS` | `/shuttle/shop/:shop_id/process-center/...` | `dashboard/shop/orders/README.md` | `order-physical`, `order-virtual`, `order-file`, `order-service`, `order-subscription`, `order-pos`, `order-hyper`, `order-avocado`, `order-fulfillment`, `components/order` | `GET https://api.selldone.com/shops/{shop_id}/process-center/baskets/{basket_id}`; `GET https://api.selldone.com/shops/{shop_id}/process-center/baskets/{basket_id}/bills`; `GET https://api.selldone.com/shops/{shop_id}/process-center/pos-baskets/{basket_id}`; `GET https://api.selldone.com/shops/{shop_id}/process-center/hypers/{hyper_id}` |
| Customers and CRM | Customer list, customer detail, customer edit, wallet, journey, customer orders by type, chat, club, comments, community, FAQ, report, reviews. | Primary | `CUSTOMERS` | `/shuttle/shop/:shop_id/crm`, `/shuttle/shop/:shop_id/customers/:customer_id` | `dashboard/shop/crm/README.md` | `shop/crm`, `customer`, `components/customer`, `components/contact`, `components/support` | `GET https://api.selldone.com/shops/{shop_id}/customers`; `GET https://api.selldone.com/shops/{shop_id}/customer/segments`; `GET https://api.selldone.com/shops/{shop_id}/contacts`; `GET https://api.selldone.com/shops/{shop_id}/faqs`; `GET https://api.selldone.com/shops/{shop_id}/reviews` |
| Finance | Report, gateways, tax, bill, exchange, valuations, customer wallets, reseller wallets, reseller fulfillment, ribbon. | Primary | `ACCOUNTING` | `/shuttle/shop/:shop_id/finance` | `dashboard/shop/finance/README.md` | `shop/finance`, `gateway`, `components/gateway`, `components/tax`, `components/valuation`, `components/ribbon` | `GET https://api.selldone.com/shops/{shop_id}/gateways`; `GET https://api.selldone.com/shops/{shop_id}/tax`; `GET https://api.selldone.com/shops/{shop_id}/exchange/rates`; `GET https://api.selldone.com/shops/{shop_id}/valuations`; `GET https://api.selldone.com/shops/{shop_id}/wallets` |
| Logistics and inventory | Inventory, warehouse, shipping, returns, profiles, includes, property sets, boxes, print templates, import/export. | Primary | `LOGISTIC` | `/shuttle/shop/:shop_id/logistic` | `dashboard/shop/logistic/README.md` | `shop/logistic`, `components/logistic`, `components/inventory`, `components/property-set`, `components/include-item`, `components/transportation` | `GET https://api.selldone.com/shops/{shop_id}/warehouse`; `GET https://api.selldone.com/shops/{shop_id}/return-request`; `GET https://api.selldone.com/shops/{shop_id}/transportation`; `GET https://api.selldone.com/shops/{shop_id}/logistic-profiles`; `GET https://api.selldone.com/shops/{shop_id}/includes`; `GET https://api.selldone.com/shops/{shop_id}/print-templates` |
| Settings | Info, flow, business model, license, menus, critical zone, SEO, GDPR/access, quota, advanced, notifications, locations, languages, theme, SMS, email, domains. | Primary | `SETTINGS` | `/shuttle/shop/:shop_id/edit` | `dashboard/shop/settings/README.md` | `shop/setting`, `components/domain`, `components/language`, `components/google`, `components/translation` | `PUT https://api.selldone.com/shops/{shop_id}/edit`; `PUT https://api.selldone.com/shops/{shop_id}/edit/info`; `GET https://api.selldone.com/shops/{shop_id}/domains`; `GET https://api.selldone.com/shops/{shop_id}/menus/{type}`; `GET https://api.selldone.com/shops/{shop_id}/notification-channels`; `GET https://api.selldone.com/shops/{shop_id}/email/list`; `GET https://api.selldone.com/shops/{shop_id}/sms/list` |

## Secondary Shop Modules

| Surface | Features to implement | Placement | Permission region | Current route family | Docs | API usage areas | Core full endpoints |
|---|---|---|---|---|---|---|---|
| Incentives | Discount codes, coupons, gift cards, offers, cashback, lottery, notes, restore flows, orders per incentive. | Secondary | `INCENTIVES` | `/shuttle/shop/:shop_id/incentives` plus entity routes | `dashboard/shop/incentives/README.md`; `dashboard/commerce/README.md` | `shop/incentives`, `discount-code`, `coupon`, `giftcard`, `offer`, `cashback`, `components/discount-code`, `components/coupon`, `components/giftcard`, `components/offer`, `components/cashback`, `components/lottery` | `GET https://api.selldone.com/shops/{shop_id}/discount-codes`; `GET https://api.selldone.com/shops/{shop_id}/coupons`; `GET https://api.selldone.com/shops/{shop_id}/gift-card-types`; `GET https://api.selldone.com/shops/{shop_id}/offers`; `GET https://api.selldone.com/shops/{shop_id}/cashbacks`; `GET https://api.selldone.com/shops/{shop_id}/lotteries` |
| Marketing | Campaigns, affiliate marketing, email marketing, funnels, stream users. | Secondary | `MARKETING` | `/shuttle/shop/:shop_id/marketing` and campaign/email entities | `dashboard/shop/marketing/README.md` | `shop/marketing`, `campaign`, `email-marketing`, `components/email-marketing`, `components/stream` | `GET https://api.selldone.com/shops/{shop_id}/campaigns`; `GET https://api.selldone.com/shops/{shop_id}/affiliates`; `GET https://api.selldone.com/shops/{shop_id}/emails`; `POST https://api.selldone.com/shops/{shop_id}/funnel/users/count`; `GET https://api.selldone.com/shops/{shop_id}/stream-users` |
| Blogs | Blog list, timeline, categories, add, edit, article upload, article tags, SEO audit. | Secondary | `BLOG` | `/shuttle/shop/:shop_id/blog` | `dashboard/shop/blogs/README.md` | `components/blog`, `shop/blogs` | `GET https://api.selldone.com/shops/{shop_id}/blogs`; `GET https://api.selldone.com/shops/{shop_id}/blog/categories`; `POST https://api.selldone.com/shops/{shop_id}/blogs/upload`; `GET https://api.selldone.com/shops/{shop_id}/timeline/articles` |
| Pages and page builder | Landings, popups, static files, about, contact, privacy, terms, live/editor routes, uploads. | Secondary | `PAGES` | `/shuttle/shop/:shop_id/page`, landing and popup editors | `dashboard/shop/pages/README.md` | `shop/pages`, `landing`, `popup`, `components/page`, `components/sitemap` | `GET https://api.selldone.com/shops/{shop_id}/pages`; `POST https://api.selldone.com/shops/{shop_id}/pages`; `POST https://api.selldone.com/shops/{shop_id}/pages/{page_id}/upload/content-image`; `GET https://api.selldone.com/shops/{shop_id}/popups`; `GET https://api.selldone.com/shops/{shop_id}/static/{folder?}` |
| Channels | Connect, Google, Instagram, Meta, OpenAI, bots, ribbon, listing, Clover, Avocado, Hyper, Map. | Secondary | `CHANNELS` | `/shuttle/shop/:shop_id/channel` | `dashboard/shop/channels/README.md`; `dashboard/integrations/README.md` | `shop/channels`, `components/connect`, `components/google`, `components/meta`, `components/openai`, `components/map` | `GET https://api.selldone.com/shops/{shop_id}/connects`; `GET https://api.selldone.com/shops/{shop_id}/channels/instagram`; `GET https://api.selldone.com/shops/{shop_id}/services/google/search`; `POST https://api.selldone.com/shops/{shop_id}/bots`; `PUT https://api.selldone.com/shops/{shop_id}/avocado`; `PUT https://api.selldone.com/shops/{shop_id}/hyper` |
| Classification | Categories, clusters, hierarchy, import, exporter. | Secondary | `CATEGORIES` | `/shuttle/shop/:shop_id/classification` | `dashboard/shop/classification/README.md` | `shop/classification`, `components/category`, `components/cluster` | `GET https://api.selldone.com/shops/{shop_id}/categories`; `GET https://api.selldone.com/shops/{shop_id}/categories-hierarchy`; `POST https://api.selldone.com/shops/{shop_id}/import/categories`; `GET https://api.selldone.com/shops/{shop_id}/clusters` |
| Community | Categories, topics, posts, comments and moderation. | Secondary | `COMMUNITY` | `/shuttle/shop/:shop_id/community` | `dashboard/shop/community/README.md` | `shop/community`, `components/support`, `components/contact`, `other` | Resolve exact community endpoints from `_generated/api-url-builders.md` and source usage. Also use shared comment endpoints such as `GET https://api.selldone.com/shops/{shop_id}/comments` when the source area uses them. |
| Access and permissions | Staff/personnel, roles, API clients, permission matrix, invites, token/client management. | Secondary | `SETTINGS` in current route metadata | `/shuttle/shop/:shop_id/access` | `dashboard/shop/access/README.md` | `shop/permission`, `role`, `components/role`, `components/api` | `GET https://api.selldone.com/shops/{shop_id}/permissions`; `POST https://api.selldone.com/shops/{shop_id}/permissions`; `GET https://api.selldone.com/shops/{shop_id}/roles`; `POST https://api.selldone.com/shops/{shop_id}/roles`; `POST https://api.selldone.com/shops/{shop_id}/clients` |
| Applications | PWA, iOS, Android, Metaverse, app assets, build state, app store list, installed apps. | Secondary | `APPLICATIONS` | `/shuttle/shop/:shop_id/application` and `/app/:app_code/:tab?` | `dashboard/shop/applications/README.md`; `dashboard/integrations/README.md` | `shop/applications`, `application`, `components/app` | `GET https://api.selldone.com/shops/{shop_id}/apps`; `GET https://api.selldone.com/shops/{shop_id}/apps/{app_code}/full`; `GET https://api.selldone.com/shops/{shop_id}/app-store/list`; `GET https://api.selldone.com/shops/{shop_id}/native/android`; `GET https://api.selldone.com/shops/{shop_id}/metaverse/lands` |
| Automation | Webhooks, webhook calls, logging, notifications repository, events, Niomatic, Autopilot source pages. | Secondary | `AUTOMATION` | `/shuttle/shop/:shop_id/automation` | `dashboard/shop/automation/README.md`; `dashboard/integrations/README.md` | `shop/automation`, `components/webhook`, `components/notification` | `GET https://api.selldone.com/shops/{shop_id}/webhooks`; `POST https://api.selldone.com/shops/{shop_id}/webhooks`; `GET https://api.selldone.com/shops/{shop_id}/events`; `GET https://api.selldone.com/shops/{shop_id}/logging`; `GET https://api.selldone.com/shops/{shop_id}/notifications` |

## Conditional Business-Model Modules

| Surface | Features to implement | Placement | Permission region | Current route family | Docs | API usage areas | Core full endpoints |
|---|---|---|---|---|---|---|---|
| Listing | Listing setup, items, categories, supervision, templates/designs, options, badges, companies, reviews, messages, search. | Conditional | `PRODUCTS` in current route metadata | `/shuttle/shop/:shop_id/listing` | `dashboard/shop/listing/README.md` | `shop/listing`, `components/listing` | `GET https://api.selldone.com/shops/{shop_id}/listing`; `GET https://api.selldone.com/shops/{shop_id}/listing/items`; `GET https://api.selldone.com/shops/{shop_id}/listing/categories`; `GET https://api.selldone.com/shops/{shop_id}/listing/messages`; `GET https://api.selldone.com/shops/{shop_id}/listing/search` |
| Marketplace | Dashboard, vendors, products, orders by type, accounts, payouts, pricing, requests, settings. | Conditional | `MARKETPLACE` | `/shuttle/shop/:shop_id/marketplace` | `dashboard/shop/marketplace/README.md`; `dashboard/commerce/README.md` | `marketplace`, `components/vendor`, `components/product`, `components/order` | `GET https://api.selldone.com/shops/{shop_id}/vendors`; `GET https://api.selldone.com/shops/{shop_id}/vendor-products`; `GET https://api.selldone.com/shops/{shop_id}/vendor-accounts`; `GET https://api.selldone.com/shops/{shop_id}/vendor-payments`; `GET https://api.selldone.com/shops/{shop_id}/vendor-requests`; `GET https://api.selldone.com/shops/{shop_id}/pricings` |
| Dropshipping and wholesaler | Wholesaler dashboard, shops, orders, requests, inventory, wholesaler-shop dashboard/orders/wallet, reseller finance. | Conditional | `WHOLESALER` | `/shuttle/shop/:shop_id/dropshipping`, wholesaler routes | `dashboard/shop/dropshipping/README.md`; `dashboard/commerce/README.md` | `wholesaler`, `wholesaler-shop`, `components/drop-shipping`, `shop/finance` | `GET https://api.selldone.com/shops/{shop_id}/dropshipping`; `GET https://api.selldone.com/shops/{shop_id}/dropshipping/requests`; `GET https://api.selldone.com/shops/{shop_id}/dropshipping/resellers`; `GET https://api.selldone.com/shops/{shop_id}/reseller/shops`; `GET https://api.selldone.com/shops/{shop_id}/finance/reseller/account` |
| POS and cash register | POS panel, orders, customers, inventory, devices, customer view, product card/list, offline basket, payment confirmation. | Conditional | `POS` | `/shuttle/shop/:shop_id/pos` and cash register route pack | `dashboard/shop/pos/README.md`; `dashboard/commerce/README.md` | `pos`, `components/pos`, `order-pos` | `GET https://api.selldone.com/shops/{shop_id}/pos`; `POST https://api.selldone.com/shops/{shop_id}/pos/add`; `GET https://api.selldone.com/shops/{shop_id}/pos/coupons`; `GET https://api.selldone.com/shops/{shop_id}/hub/devices`; `GET https://api.selldone.com/shops/{shop_id}/process-center/pos-baskets/{basket_id}` |
| Transportation | Transportation dashboard, couriers, orders, pickups, services, settings, transportation-service detail/edit/orders. | Conditional | `LOGISTIC` or transportation route metadata | `/shuttle/shop/:shop_id/transportation`, transportation-service routes | `dashboard/shop/logistic/README.md` | `transportation`, `transportation-service`, `components/transportation` | `GET https://api.selldone.com/shops/{shop_id}/transportation`; `POST https://api.selldone.com/shops/{shop_id}/transportation`; `GET https://api.selldone.com/shops/{shop_id}/transportation-orders` |
| Logistic profile entity | Logistic profile dashboard, products, settings. | Entity | `LOGISTIC` | logistic-profile routes | `dashboard/shop/logistic/README.md` | `logistic-profile`, `components/logistic` | `GET https://api.selldone.com/shops/{shop_id}/logistic-profiles`; `POST https://api.selldone.com/shops/{shop_id}/logistic-profiles` |
| Connect entity | Connect dashboard, orders by type, products, logs, settings. | Entity | `CHANNELS` or connect route metadata | connect route pack | `dashboard/integrations/README.md`; `dashboard/shop/channels/README.md` | `connect`, `components/connect`, `shop/channels` | `GET https://api.selldone.com/shops/{shop_id}/connects`; `GET https://api.selldone.com/shops/{shop_id}/connect-services`; resolve connect detail/order/log endpoints from API usage catalog. |

## Entity Dashboards And Deep Links

| Entity | Features to implement | Placement | Parent source | API usage areas | Core full endpoints |
|---|---|---|---|---|---|
| Campaign | Dashboard, finance, ads, landing, settings, links. | Entity | Marketing campaign list. | `campaign`, `shop/marketing`, `components/page` | `GET https://api.selldone.com/shops/{shop_id}/campaigns/{campaign_id}`; `DELETE https://api.selldone.com/shops/{shop_id}/campaigns/{campaign_id}` |
| Email marketing | Dashboard, editor, render, statistic, send/cancel. | Entity | Marketing email list. | `email-marketing`, `components/email-marketing` | `GET https://api.selldone.com/shops/{shop_id}/emails/{email_id}`; `GET https://api.selldone.com/shops/{shop_id}/emails/{email_id}/render`; `POST https://api.selldone.com/shops/{shop_id}/emails/{email_id}/send` |
| Affiliate for shop | Dashboard, edit, orders, payments. | Entity | Marketing affiliate list. | `affiliate`, `components/affiliate` | `GET https://api.selldone.com/shops/{shop_id}/affiliates/{affiliate_id}` |
| Coupon | Dashboard, edit, orders, notes, restore/delete. | Entity | Incentives coupon list. | `coupon`, `components/coupon` | `GET https://api.selldone.com/shops/{shop_id}/coupons/{coupon_id}`; `GET https://api.selldone.com/shops/{shop_id}/coupons/{coupon_id}/orders` |
| Discount code | Dashboard, edit, orders, notes, restore/delete. | Entity | Incentives discount-code list. | `discount-code`, `components/discount-code` | `GET https://api.selldone.com/shops/{shop_id}/discount-codes`; resolve detail/edit/order endpoints from usage catalog before implementation. |
| Gift card | Dashboard, edit, cards/list, orders. | Entity | Incentives gift-card list. | `giftcard`, `components/giftcard` | `GET https://api.selldone.com/shops/{shop_id}/gift-card-types`; resolve card/order/detail endpoints from usage catalog before implementation. |
| Offer | Dashboard, edit, orders, notes, restore/delete. | Entity | Incentives offer list. | `offer`, `components/offer` | `GET https://api.selldone.com/shops/{shop_id}/offers/{offer_id}`; `GET https://api.selldone.com/shops/{shop_id}/offers/{offer_id}/orders` |
| Cashback | Dashboard, edit, orders, notes, restore/delete. | Entity | Incentives cashback list. | `cashback`, `components/cashback` | `GET https://api.selldone.com/shops/{shop_id}/cashbacks/{cashback_id}`; `GET https://api.selldone.com/shops/{shop_id}/cashbacks/{cashback_id}/orders` |
| Gateway | Dashboard, transactions, edit, Stripe/blockchain settings. | Entity | Finance gateways. | `gateway`, `components/gateway` | `GET https://api.selldone.com/shops/{shop_id}/gateways/{gateway_code}`; `POST https://api.selldone.com/shops/{shop_id}/gateways/{gateway_code}` |
| Review source | Dashboard, reviews list, edit, debug, sync. | Entity | CRM reviews. | `review`, `components/review` | `GET https://api.selldone.com/shops/{shop_id}/reviews/sources/{source_id}`; `GET https://api.selldone.com/shops/{shop_id}/reviews/sources/{source_id}/debug`; `POST https://api.selldone.com/shops/{shop_id}/reviews/sources/{source_id}/sync` |
| Application loader | App detail by code and tab. | Entity | Applications/app store. | `application`, `components/app` | `GET https://api.selldone.com/shops/{shop_id}/apps/{app_code}/full`; `GET https://api.selldone.com/shops/{shop_id}/apps/{app_code}` |
| Courier | Courier page shell. | Entity | Transportation/logistic flows. | `courier`, `transportation`, `components/transportation` | Resolve exact courier endpoints from usage catalog before implementation. |
| Landing and popup editors | Fullscreen editor/live route for pages and popups. | Entity | Pages module. | `landing`, `popup`, `components/page` | `POST https://api.selldone.com/shops/{shop_id}/pages/{page_id}/upload/content-image`; `POST https://api.selldone.com/shops/{shop_id}/pages/{page_id}/upload/content-video`; `POST https://api.selldone.com/shops/{shop_id}/popups/{page_id}/upload/content-image` |

## Source Directory Coverage Checklist

Every top-level directory under `src/Applications/Backoffice/pages` is covered below. A full implementation must include each item as a module, entity route, conditional route, or documented unsupported-gap note.

| Source directory | Coverage target |
|---|---|
| `account` | Wallet/account detail system surface. |
| `affiliate` | Shop affiliate entity dashboard. |
| `affiliator` | User affiliate entity dashboard. |
| `affiliator-pos` | User affiliate POS conditional surface. |
| `application` | Shop app loader/entity page. |
| `campaign` | Campaign entity dashboard. |
| `cashback` | Cashback entity dashboard. |
| `connect` | Connect entity dashboard and channel integration. |
| `coupon` | Coupon entity dashboard. |
| `courier` | Courier/logistic entity surface. |
| `customer` | Customer entity dashboard and CRM. |
| `discount-code` | Discount-code entity dashboard. |
| `email-marketing` | Email marketing entity dashboard/editor. |
| `gateway` | Gateway entity dashboard. |
| `giftcard` | Gift-card entity dashboard. |
| `landing` | Landing editor/live page. |
| `logistic-profile` | Logistic profile entity dashboard. |
| `marketplace` | Marketplace conditional module. |
| `offer` | Offer entity dashboard. |
| `order-avocado` | Avocado order entity dashboard. |
| `order-file` | File order entity dashboard. |
| `order-fulfillment` | Fulfillment order entity dashboard. |
| `order-hyper` | Hyper order entity dashboard. |
| `order-physical` | Physical order entity dashboard. |
| `order-pos` | POS order entity dashboard. |
| `order-service` | Service order entity dashboard. |
| `order-subscription` | Subscription order entity dashboard. |
| `order-virtual` | Virtual order entity dashboard. |
| `popup` | Popup editor/entity page. |
| `pos` | POS/cash register conditional module. |
| `product` | Product entity dashboard. |
| `review` | Review source entity dashboard. |
| `role` | Role entity dashboard. |
| `shop` | Shop shell and all shop modules. |
| `shuttle` | User system dashboard. |
| `transportation` | Transportation conditional module. |
| `transportation-service` | Transportation service entity dashboard. |
| `wholesaler` | Dropshipping/wholesaler conditional module. |
| `wholesaler-shop` | Wholesaler shop entity/dashboard. |

## Final Parity Audit

Before declaring completion, audit these generated sources:

- `_generated/route-index.md`: every named route family has an implemented route or an explicit unsupported-gap note.
- `_generated/source-module-index.md`: every source directory above is covered.
- `_generated/api-usage-by-area.md`: every implemented area has its API builders resolved.
- `_generated/api-url-builders.md`: every runtime request uses a full URL and method from the catalog.
