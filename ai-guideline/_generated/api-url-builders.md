# API URL Builders

This file was generated from `@selldone/sdk-backoffice/apis/API.ts`. It maps URL builders to backend endpoints and detected HTTP request metadata.

Generated methods: 673

## {any?}

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_SET_PROFILE() | POST https://api.selldone.com/{any?} | None found in matched route/controller method by static inspection. | Public or controller-conditional; no Laravel authentication middleware is attached to the matched route. | apis/API.ts:697 |

## {shop_id}

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_SEARCH_QUERY_ADMIN(shop_id: string \| number, query: string) | GET https://api.selldone.com/{shop_id}/search/admin/suggestion/{text} | SCOPE_BACKOFFICE_PRODUCT_READ (backoffice:product:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:9595 |

## accounts

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_ACCOUNTS() | GET https://api.selldone.com/accounts | SCOPE_BACKOFFICE_WALLET_WRITE (backoffice:wallet:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14340 |
| POST_ADD_NEW_ACCOUNT() | POST https://api.selldone.com/accounts/new | SCOPE_BACKOFFICE_WALLET_WRITE (backoffice:wallet:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14377 |
| GET_ACCOUNT_INFO(account_number: string) | GET https://api.selldone.com/accounts/{account_number} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14411 |
| DELETE_ACCOUNT(account_id: string \| number) | DELETE https://api.selldone.com/accounts/{account_id} | SCOPE_BACKOFFICE_WALLET_WRITE (backoffice:wallet:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14447 |
| POST_RESTORE_ACCOUNT(account_id: string \| number) | POST https://api.selldone.com/accounts/{account_id}/restore |  | TODO(api-docs): verify whether this SDK URL is stale before use. | apis/API.ts:14472 |
| GET_CHECK_ACCOUNT_NUMBER(account_number: string) | GET https://api.selldone.com/accounts/{account_number} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14506 |
| PUT_EDIT_ACCOUNT(account_number: string) | PUT https://api.selldone.com/accounts/{account_number} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14544 |
| GET_ACTIVE_ACCOUNT_LIST(currency: keyof typeof Currency) | GET https://api.selldone.com/accounts/list-active/{currency} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14578 |
| GET_ACCOUNT_CHARGES_HISTORY(account_number: string, gateway_code: string) | GET https://api.selldone.com/accounts/{account_number}/charges/{gateway_code} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14613 |
| GET_ACCOUNT_DOWNLOAD_MONTHLY_RECEIPT(account_number: string, date: string) | GET https://api.selldone.com/accounts/{account_number}/receipt/{date?} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14688 |
| POST_ACCOUNT_EXCHANGE_WITH_ANOTHER_WALLET_CHECK(account_number: string \| number) | POST https://api.selldone.com/accounts/{account_number}/exchange/check | SCOPE_BACKOFFICE_WALLET_WRITE (backoffice:wallet:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14766 |
| POST_ACCOUNT_EXCHANGE_WITH_ANOTHER_WALLET(account_number: string \| number) | POST https://api.selldone.com/accounts/{account_number}/exchange | SCOPE_BACKOFFICE_WALLET_WRITE (backoffice:wallet:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14803 |
| POST_CLAIM_FREE_CHARGE(account_number: string) | POST https://api.selldone.com/accounts/{account_number}/claim-free-charge | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14839 |
| GET_RECEIPT_INFO(receipt_number: string) | GET https://api.selldone.com/accounts/receipt/check/{receipt_number} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:15154 |
| GET_CHECK_RECEIPT_NUMBER(receipt_number: string) | GET https://api.selldone.com/accounts/receipt/check/{receipt_number} | None found in matched route/controller method by static inspection. | Public or controller-conditional; no route-level authentication middleware is attached to the matched route. | apis/API.ts:15185 |
| POST_REQUEST_CHARGE_ACCOUNT(account_number: string, gateway: string) | POST https://api.selldone.com/accounts/{account_number}/charge/{gateway} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:15298 |
| POST_SELLDONE_SUBSCRIBE_NOW(account_number: string, gateway: string) | POST https://api.selldone.com/accounts/{account_number}/subscribe/{gateway} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:15336 |
| DELETE_SELLDONE_SUBSCRIBE_CANCEL(account_number: string) | DELETE https://api.selldone.com/accounts/{account_number}/subscribe | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:15372 |
| GET_ACCOUNT_CONNECTED_SHOPS(account_number: string) | GET https://api.selldone.com/accounts/{account_number}/shops | SCOPE_BACKOFFICE_WALLET_READ (backoffice:wallet:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:15550 |

## address

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_MY_ADDRESSES() | GET https://api.selldone.com/address/all | SCOPE_USER_ADDRESS (address) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:22557 |
| DELETE_MY_ADDRESSES(address_id: string \| number) | DELETE https://api.selldone.com/address/{address_id} | SCOPE_USER_ADDRESS (address) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:22592 |
| PUT_ADDRESS(address_id: string \| number) | PUT https://api.selldone.com/address/{address_id} | SCOPE_USER_ADDRESS (address) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:22629 |
| POST_ADDRESS() | POST https://api.selldone.com/address | SCOPE_USER_ADDRESS (address) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:22665 |
| GET_GEO_TO_ADDRESS() | GET https://api.selldone.com/address/gto-to-address | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:22699 |
| GET_AUTOCOMPLETE() | GET https://api.selldone.com/address/autocomplete | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:22733 |

## affiliate-deals

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_MY_AFFILIATE_DEALS() | GET https://api.selldone.com/affiliate-deals | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:36246 |

## affiliates

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_MY_AFFILIATES() | GET https://api.selldone.com/affiliates | SCOPE_BACKOFFICE_AFFILIATE_WRITE (backoffice:affiliate:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1222 |
| GET_MY_AFFILIATE_INFO(affiliate_id: string \| number) | GET https://api.selldone.com/affiliates/{affiliate_id} | SCOPE_BACKOFFICE_AFFILIATE_WRITE (backoffice:affiliate:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1258 |
| GET_MY_AFFILIATE_PAYMENTS(affiliate_id: string \| number) | GET https://api.selldone.com/affiliates/{affiliate_id}/payments | SCOPE_BACKOFFICE_AFFILIATE_WRITE (backoffice:affiliate:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1294 |
| GET_MY_AFFILIATE_ORDERS(affiliate_id: string \| number) | GET https://api.selldone.com/affiliates/{affiliate_id}/orders | SCOPE_BACKOFFICE_AFFILIATE_WRITE (backoffice:affiliate:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1330 |
| GET_MY_AFFILIATE_POS(affiliate_id: string \| number) | GET https://api.selldone.com/affiliates/{affiliate_id}/pos | SCOPE_BACKOFFICE_AFFILIATE_WRITE (backoffice:affiliate:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1370 |
| AFFILIATE_POS_BASKET_ADD_ITEM(affiliate_id: string \| number) | POST https://api.selldone.com/affiliates/{affiliate_id}/pos/add | SCOPE_BACKOFFICE_AFFILIATE_WRITE (backoffice:affiliate:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1410 |
| GET_AFFILIATE_POS_COUPONS_LIST(affiliate_id: string \| number) | GET https://api.selldone.com/affiliates/{affiliate_id}/pos/coupons | SCOPE_BACKOFFICE_AFFILIATE_WRITE (backoffice:affiliate:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1576 |
| GET_AFFILIATE_POS_CAMPAIGNS_LIST(affiliate_id: string \| number) | GET https://api.selldone.com/affiliates/{affiliate_id}/pos/campaigns | SCOPE_BACKOFFICE_AFFILIATE_WRITE (backoffice:affiliate:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1614 |
| GET_AFFILIATE_POS_ORDERS(affiliate_id: string \| number) | GET https://api.selldone.com/affiliates/{affiliate_id}/pos/orders | SCOPE_BACKOFFICE_AFFILIATE_WRITE (backoffice:affiliate:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1698 |
| GET_AFFILIATE_POS_PRODUCTS(affiliate_id: string \| number) | GET https://api.selldone.com/affiliates/{affiliate_id}/products | SCOPE_BACKOFFICE_AFFILIATE_WRITE (backoffice:affiliate:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1736 |

## agencies

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_MY_AGENCIES() | GET https://api.selldone.com/agencies | SCOPE_AGENCY_READ (agency:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:37784 |
| GET_MY_AGENCY_INFO(agency_id: string \| number) | GET https://api.selldone.com/agencies/{agency_id} | SCOPE_AGENCY_READ (agency:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:37819 |
| GET_MY_AGENCY_CLIENTS(agency_id: string \| number) | GET https://api.selldone.com/agencies/{agency_id}/clients | SCOPE_AGENCY_READ (agency:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:37856 |
| POST_MY_AGENCY_ADD_CLIENT_GIVEAWAY(agency_id: string \| number) | POST https://api.selldone.com/agencies/{agency_id}/clients/add-client | SCOPE_AGENCY_WRITE (agency:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:37894 |
| POST_MY_AGENCY_TRANSFER_DEAL(agency_id: string \| number) | POST https://api.selldone.com/agencies/{agency_id}/clients/transfer-client | SCOPE_AGENCY_WRITE (agency:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:37970 |
| GET_MY_AGENCY_PURCHASES(agency_id: string \| number) | GET https://api.selldone.com/agencies/{agency_id}/purchases | SCOPE_AGENCY_READ (agency:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38007 |
| GET_MY_AGENCY_AFFILIATES(agency_id: string \| number) | GET https://api.selldone.com/agencies/{agency_id}/affiliates | SCOPE_AGENCY_READ (agency:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38044 |
| GET_MY_AGENCY_SHOPS(agency_id: string \| number) | GET https://api.selldone.com/agencies/{agency_id}/shops | SCOPE_AGENCY_READ (agency:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38081 |
| POST_MY_AGENCY_CREATE_SHOP(agency_id: string \| number) | POST https://api.selldone.com/agencies/{agency_id}/shops | SCOPE_AGENCY_WRITE (agency:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38118 |
| POST_MY_AGENCY_ADD_PLAN(agency_id: string \| number) | POST https://api.selldone.com/agencies/{agency_id}/plans | SCOPE_AGENCY_WRITE (agency:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38195 |
| DELETE_MY_AGENCY_PLAN(agency_id: string \| number, plan_id: string \| number) | DELETE https://api.selldone.com/agencies/{agency_id}/plans/{plan_id} | SCOPE_AGENCY_WRITE (agency:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38272 |
| POST_CALCULATE_MY_AGENCY_PLAN_PRICE(agency_id: string \| number) | POST https://api.selldone.com/agencies/{agency_id}/subscription/price | SCOPE_AGENCY_READ (agency:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38309 |
| POST_AGENCY_SET_CONNECTED_WALLET_ACCOUNT(agency_id: string \| number) | POST https://api.selldone.com/agencies/{agency_id}/account | SCOPE_AGENCY_WRITE (agency:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38347 |
| POST_AGENCY_SET_CONNECTED_CREATE_WALLET(agency_id: string \| number) | POST https://api.selldone.com/agencies/{agency_id}/create-wallet | SCOPE_AGENCY_WRITE (agency:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38384 |
| POST_AGENCY_SET_CONNECTED_CHARGE_WALLET(agency_id: string \| number) | POST https://api.selldone.com/agencies/{agency_id}/charge-wallet | SCOPE_AGENCY_WRITE (agency:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38422 |
| POST_AGENCY_CLAIM_GIFT_CREDIT(agency_id: string \| number) | POST https://api.selldone.com/agencies/{agency_id}/claim-gift | SCOPE_AGENCY_WRITE (agency:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38459 |
| GET_AGENCY_LOGS(agency_id: string \| number) | GET https://api.selldone.com/agencies/{agency_id}/calls | SCOPE_AGENCY_READ (agency:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38496 |
| GET_MY_AGENCY_UPLOADED_DOCUMENTS_LIST(agency_id: string \| number) | GET https://api.selldone.com/agencies/{agency_id}/documents | SCOPE_AGENCY_READ (agency:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38535 |
| POST_MY_AGENCY_DOCUMENT_ADD(agency_id: string \| number) | POST https://api.selldone.com/agencies/{agency_id}/documents | SCOPE_AGENCY_READ (agency:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38611 |
| POST_MY_AGENCY_ADD_DAQ(agency_id: string \| number) | POST https://api.selldone.com/agencies/{agency_id}/faqs | SCOPE_AGENCY_WRITE (agency:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38689 |
| PUT_MY_AGENCY_EDIT_DAQ(agency_id: string \| number, faq_id: number) | PUT https://api.selldone.com/agencies/{agency_id}/faqs/{faq_id} | SCOPE_AGENCY_WRITE (agency:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38727 |
| DELETE_MY_AGENCY_DAQ(agency_id: string \| number, faq_id: number) | DELETE https://api.selldone.com/agencies/{agency_id}/faqs/{faq_id} | SCOPE_AGENCY_WRITE (agency:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38763 |
| GET_MY_AGENCY_SUBSCRIPTIONS(agency_id: string \| number) | GET https://api.selldone.com/agencies/{agency_id}/subscriptions | SCOPE_AGENCY_READ (agency:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38802 |
| POST_MY_AGENCY_SUBSCRIPTIONS_SEND(agency_id: string \| number) | POST https://api.selldone.com/agencies/{agency_id}/subscriptions/send | SCOPE_AGENCY_WRITE (agency:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38839 |

## api

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| SAVE_HELP_UID(help_id: string \| number) | PUT https://api.selldone.com/api/helps/{help_id}/uid | None found in matched route/controller method by static inspection. | Admin/staff web session required. | apis/API.ts:22766 |
| POST_SHOP_LISTING_FORM_BUILDER_UPLOAD_IMAGE(shop_id: string \| number) | POST https://api.selldone.com/api/shops/{shop_id}/listing/form-builder/upload-image | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via the backoffice API middleware. | apis/API.ts:43761 |

## article

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_ADD_EDIT_ARTICLE(type: Article.TypeValue) | POST https://api.selldone.com/article/product/edit<br>POST https://api.selldone.com/article/shop-blog/edit<br>POST https://api.selldone.com/api/article/blog/edit<br>POST https://api.selldone.com/api/article/help/edit | Type-specific; product/shop-blog routes enforce shop/article scopes in their controllers. | Required; authenticated API token or staff/admin web session depending on `type` route. | apis/API.ts:34680 |
| UPLOAD_ARTICLE_IMAGE(type: Article.TypeValue, extra = null) | POST https://api.selldone.com/article/product/upload/{shop_id}<br>POST https://api.selldone.com/api/article/blog/upload<br>POST https://api.selldone.com/api/article/help/upload | Type-specific; product route uses shop/article permissions, blog/help routes use staff/admin access. | Required; authenticated API token or staff/admin web session depending on `type` route. | apis/API.ts:34789 |
| DELETE_ARTICLE(type: Article.TypeValue, article_id: string \| number) | DELETE https://api.selldone.com/article/product/{article_id}<br>DELETE https://api.selldone.com/article/shop-blog/{article_id}<br>DELETE https://api.selldone.com/api/article/blog/{article_id}<br>DELETE https://api.selldone.com/api/article/help/{article_id} | Type-specific. | Required; authenticated API token or staff/admin web session depending on `type` route. | apis/API.ts:34863 |
| POST_ADD_COMMENT(article_id: string \| number) | POST https://api.selldone.com/article/{article_id}/comment | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35017 |

## articles

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_LIKE_ARTICLE(article_id: string \| number) | POST https://api.selldone.com/articles/{article_id}/like | SCOPE_USER_PROFILE_READ (profile) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:34499 |
| POST_STAR_ARTICLE(article_id: string \| number) | POST https://api.selldone.com/articles/{article_id}/star | SCOPE_USER_PROFILE_READ (profile) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:34536 |
| POST_CLAPS_OF_ARTICLE(article_id: string \| number) | POST https://api.selldone.com/articles/{article_id}/claps | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:34571 |
| POST_ARTICLE_BODY_AUTO_FIX() | POST https://api.selldone.com/articles/fix | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:34714 |

## bug

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_BUG_REPORT() | POST https://api.selldone.com/bug/report | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13766 |

## clients

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_CLIENTS() | GET https://api.selldone.com/clients | SCOPE_SELLDONE_TOKEN_READ (selldone:token:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13872 |

## comment

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| PUT_UPDATE_COMMENT(comment_id: string \| number) | PUT https://api.selldone.com/comment/{comment_id} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35053 |
| DELETE_COMMENT(comment_id: string \| number) | DELETE https://api.selldone.com/comment/{comment_id} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35087 |

## company

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_MY_COMPANIES() | GET https://api.selldone.com/company | SCOPE_BACKOFFICE_COMPANY_READ (backoffice:company:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:9874 |
| POST_UPLOAD_COMPANY_IMAGE(company_id: string \| number, type: "logo") | POST https://api.selldone.com/company/{company_id}/logo | SCOPE_BACKOFFICE_COMPANY_WRITE (backoffice:company:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:9908 |
| POST_ADD_COMPANY() | POST https://api.selldone.com/company | SCOPE_BACKOFFICE_COMPANY_WRITE (backoffice:company:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:9945 |
| PUT_EDIT_COMPANY(company_id: string \| number) | PUT https://api.selldone.com/company/{company_id} | SCOPE_BACKOFFICE_COMPANY_WRITE (backoffice:company:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:9983 |
| GET_MY_COMPANY_INFO(company_id: string \| number) | GET https://api.selldone.com/company/{company_id} | SCOPE_BACKOFFICE_COMPANY_READ (backoffice:company:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10019 |
| GET_MY_COMPANY_DOCUMENTS(company_id: string \| number) | GET https://api.selldone.com/company/{company_id}/documents | SCOPE_BACKOFFICE_COMPANY_READ (backoffice:company:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10057 |
| POST_MY_COMPANY_ADD_DOCUMENT(company_id: string \| number) | POST https://api.selldone.com/company/{company_id}/documents | SCOPE_BACKOFFICE_COMPANY_WRITE (backoffice:company:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10095 |
| GET_COMPANY_APPS(company_id: string \| number) | GET https://api.selldone.com/company/{company_id}/apps | SCOPE_BACKOFFICE_COMPANY_READ (backoffice:company:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10213 |
| PUT_APP_IMAGES_ORDER(company_id: string \| number, app_id: string \| number) | PUT https://api.selldone.com/company/{company_id}/apps/{app_id}/images/order | SCOPE_BACKOFFICE_COMPANY_WRITE (backoffice:company:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10292 |
| POST_ADD_APP(company_id: string \| number) | POST https://api.selldone.com/company/{company_id}/apps | SCOPE_BACKOFFICE_COMPANY_WRITE (backoffice:company:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10372 |
| POST_REVOKE_APP_API(company_id: string \| number, app_id: string \| number) | POST https://api.selldone.com/company/{company_id}/apps/{app_id}/revoke-api | SCOPE_BACKOFFICE_COMPANY_WRITE (backoffice:company:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10409 |
| PUT_EDIT_APP(company_id: string \| number, app_id: string \| number) | PUT https://api.selldone.com/company/{company_id}/apps/{app_id} | SCOPE_BACKOFFICE_COMPANY_WRITE (backoffice:company:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10448 |
| GET_APP_DATA(company_id: string \| number, app_id: string \| number) | GET https://api.selldone.com/company/{company_id}/apps/{app_id} | SCOPE_BACKOFFICE_COMPANY_READ (backoffice:company:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10643 |

## developer

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_MY_LAYOUTS() | GET https://api.selldone.com/developer/layouts | SCOPE_SELLDONE_DEVELOPER_READ (selldone:developer:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35709 |
| GET_MY_LAYOUT_INFO(layout_id: string \| number) | GET https://api.selldone.com/developer/layouts/{layout_id} | SCOPE_SELLDONE_DEVELOPER_READ (selldone:developer:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35744 |
| GET_MY_LAYOUT_DEPLOYS(layout_id: string \| number) | GET https://api.selldone.com/developer/layouts/{layout_id}/deploys | SCOPE_SELLDONE_DEVELOPER_READ (selldone:developer:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35781 |

## exchange

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_SELLDONE_EXCHANGE_RATES() | GET https://api.selldone.com/exchange/rates | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:18559 |

## expert

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_SET_MY_EXPERT_PROFILE() | POST https://api.selldone.com/expert | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:27416 |
| POST_MY_EXPERT_UPLOAD_IMAGE() | POST https://api.selldone.com/expert/image | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:27450 |
| GET_EXPERT_JOBS() | GET https://api.selldone.com/expert/jobs | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:27482 |
| POST_ADD_EXPERT_JOB() | POST https://api.selldone.com/expert/jobs | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:27516 |
| PUT_EDIT_EXPERT_JOB(job_id: string \| number) | PUT https://api.selldone.com/expert/jobs/{job_id} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:27551 |
| POST_EXPERT_JOB_UPLOAD_IMAGES(job_id: string \| number) | POST https://api.selldone.com/expert/jobs/{job_id}/images | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:27586 |
| DELETE_EXPERT_JOB_IMAGE(job_id: string \| number, image_id: string \| number) | DELETE https://api.selldone.com/expert/jobs/{job_id}/images/{image_id} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:27620 |
| PUT_EXPERT_JOB_IMAGES_ORDER(job_id: string \| number) | PUT https://api.selldone.com/expert/jobs/{job_id}/images | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:27655 |
| GET_EXPERT_JOB_INFO(job_id: string \| number) | GET https://api.selldone.com/expert/jobs/{job_id} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:27688 |
| GET_EXPERT_JOB_CONTRACTS(job_id: string \| number) | GET https://api.selldone.com/expert/jobs/{job_id}/contracts | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:27724 |
| GET_EXPERT_JOB_REQUESTS(job_id: string \| number) | GET https://api.selldone.com/expert/jobs/{job_id}/requests | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:27800 |
| GET_EXPERT_JOB_CHATS(job_id: string \| number) | GET https://api.selldone.com/expert/jobs/{job_id}/chats | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:27873 |
| GET_EXPERT_JOB_CONTRACT_INFO(contract_id: string \| number) | GET https://api.selldone.com/expert/contracts/{contract_id} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28183 |
| PUT_EXPERT_JOB_CONTRACT_SET_TASKS(contract_id: string \| number) | PUT https://api.selldone.com/expert/contracts/{contract_id}/tasks | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28218 |
| PUT_EXPERT_JOB_CONTRACT_EDIT(contract_id: string \| number) | PUT https://api.selldone.com/expert/contracts/{contract_id} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28253 |
| POST_EXPERT_JOB_CONTRACT_END(contract_id: string \| number) | POST https://api.selldone.com/expert/contracts/{contract_id}/end | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28286 |
| POST_EXPERT_JOB_CONTRACT_CANCEL(contract_id: string \| number) | POST https://api.selldone.com/expert/contracts/{contract_id}/cancel | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28320 |
| POST_EXPERT_JOB_CONTRACT_RESPONSE(contract_id: string \| number) | POST https://api.selldone.com/expert/contracts/{contract_id}/response | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28355 |
| GET_EXPERT_CHAT_FOLDERS() | GET https://api.selldone.com/expert/chat/folders | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28818 |
| POST_EXPERT_CHAT_FOLDER_NEW() | POST https://api.selldone.com/expert/chat/folders | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28852 |
| PUT_EXPERT_CHAT_FOLDER_EDIT(folder_id: string \| number) | PUT https://api.selldone.com/expert/chat/folders/{folder_id} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28887 |
| DELETE_EXPERT_CHAT_FOLDER(folder_id: string \| number) | DELETE https://api.selldone.com/expert/chat/folders/{folder_id} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28920 |
| PUT_EXPERT_CHAT_FOLDER_ADD_CHAT() | PUT https://api.selldone.com/expert/chat/folder | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28954 |

## expert-customer

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_EXPERT_CUSTOMER_CHATS() | GET https://api.selldone.com/expert-customer/chats | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28391 |
| GET_EXPERT_CUSTOMER_CHAT_MESSAGES(job_id: string \| number) | GET https://api.selldone.com/expert-customer/chats/{job_id}/messages | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28426 |
| PUT_EXPERT_CUSTOMER_CHAT_MESSAGE(job_id: string \| number) | PUT https://api.selldone.com/expert-customer/chats/{job_id}/messages | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28461 |
| GET_EXPERT_CUSTOMER_CONTRACTS_FOR_JOB(job_id: string \| number) | GET https://api.selldone.com/expert-customer/jobs/{job_id}/contracts | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28534 |
| GET_EXPERT_CUSTOMER_CONTRACT_INFO(contract_id: string \| number) | GET https://api.selldone.com/expert-customer/contracts/{contract_id} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28567 |
| POST_EXPERT_CUSTOMER_CONTRACT_PAY_NOW(contract_id: string \| number) | POST https://api.selldone.com/expert-customer/contracts/{contract_id}/pay | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28606 |
| POST_EXPERT_CUSTOMER_CONTRACT_COMPLETE(contract_id: string \| number) | POST https://api.selldone.com/expert-customer/contracts/{contract_id}/complete | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28641 |
| POST_EXPERT_CUSTOMER_CONTRACT_PERMISSION(contract_id: string \| number) | POST https://api.selldone.com/expert-customer/contracts/{contract_id}/permissions | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28680 |
| POST_EXPERT_CUSTOMER_CONTRACT_COMMENT(contract_id: string \| number) | POST https://api.selldone.com/expert-customer/contracts/{contract_id}/comment | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28715 |
| POST_EXPERT_CUSTOMER_JOBS_HISTORY(job_id: string \| number) | GET https://api.selldone.com/expert-customer/jobs/{job_id}/history | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28749 |
| POST_EXPERT_SEND_REQUEST_FOR_JOB(job_id: string \| number) | POST https://api.selldone.com/expert-customer/jobs/{job_id}/request | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28786 |

## faqs

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_SAMIN_NEW_FAQ() | POST https://api.selldone.com/faqs | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21100 |

## fcm

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_SET_FCM() | POST https://api.selldone.com/fcm/token | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1185 |

## feedback

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_SEND_FEEDBACK_NPS() | POST https://api.selldone.com/feedback/nps | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:28991 |
| POST_SEND_FEEDBACK_MESSAGE() | POST https://api.selldone.com/feedback/message | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:29026 |

## gateways

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_CHARGE_GATEWAYS(currency: keyof typeof Currency) | GET https://api.selldone.com/gateways/{currency} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:15221 |
| GET_SELLDONE_PAYPAL_CLIENT_TOKEN(currency: keyof typeof Currency) | POST https://api.selldone.com/gateways/paypal/client-token/{currency} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21343 |

## gift

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_GIFT_ACCOUNTS() | GET https://api.selldone.com/gift/accounts | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2110 |
| POST_ADD_GIFT_ACCOUNT() | POST https://api.selldone.com/gift/accounts | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2145 |
| POST_DELETE_GIFT_ACCOUNT() | POST https://api.selldone.com/gift/accounts | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2180 |
| GET_GIFTS_RECEIVED_LIST() | GET https://api.selldone.com/gift/received-list | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21135 |
| GET_GIFTS_SENT_LIST() | GET https://api.selldone.com/gift/sent-list | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21170 |
| POST_APPLY_GIFT() | POST https://api.selldone.com/gift/apply | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21205 |
| GET_GIFTS_PENDING_LIST() | GET https://api.selldone.com/gift/pending-list | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21238 |
| POST_SEND_GIFT() | POST https://api.selldone.com/gift/send | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21273 |

## guild

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_MY_GUILD() | GET https://api.selldone.com/guild | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:29631 |
| POST_SETUP_GUILD() | POST https://api.selldone.com/guild | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:29665 |
| POST_GUILD_ADD_MEMBER() | POST https://api.selldone.com/guild/members | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:29699 |
| POST_GUILD_EDIT_MEMBER(member_id: string \| number) | POST https://api.selldone.com/guild/members/{member_id} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:29734 |
| DELETE_GUILD_MEMBER(member_id: string \| number) | DELETE https://api.selldone.com/guild/members/{member_id} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:29767 |

## iframe

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_LINK_PREVIEW() | GET https://api.selldone.com/iframe/preview | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:33600 |

## investors

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_INVESTORS_FILES(category: string) | GET https://api.selldone.com/investors/files/{category} | SCOPE_SELLDONE_INVESTOR (selldone:investor) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:37747 |

## invite

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_REFERRAL_INVITES() | POST https://api.selldone.com/invite/send | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1996 |

## layouts

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_PUBLIC_LAYOUTS() | GET https://api.selldone.com/layouts | SCOPE_SELLDONE_DEVELOPER_READ (selldone:developer:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35634 |

## login

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| LOGIN() | GET https://api.selldone.com/login | None found in matched route/controller method by static inspection. | Public or controller-conditional; no Laravel authentication middleware is attached to the matched route. | apis/API.ts:308 |

## logout-selldone

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| LOGOUT() | POST https://api.selldone.com/logout-selldone | None found in matched route/controller method by static inspection. | Required by Laravel authentication middleware. | apis/API.ts:278 |

## notifications

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_MY_NOTIFICATIONS_REPOSITORY() | GET https://api.selldone.com/notifications | SCOPE_BACKOFFICE_NOTIFICATION (backoffice:notifications) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:40199 |
| POST_READ_MY_NOTIFICATIONS_REPOSITORY() | POST https://api.selldone.com/notifications/read | SCOPE_BACKOFFICE_NOTIFICATION (backoffice:notifications) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:40235 |

## page-templates

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_PAGE_BUILDER_TEMPLATE_CONTENT(template_id: string \| number) | GET https://api.selldone.com/page-templates/{template_id} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13124 |

## participants

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_MY_PARTICIPANTS() | GET https://api.selldone.com/participants | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:36139 |
| POST_MY_PARTICIPANTS_ADD() | POST https://api.selldone.com/participants | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:36174 |
| POST_MY_PARTICIPANTS_PLAY_GAME(participant_id: string \| number) | POST https://api.selldone.com/participants/{participant_id} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:36210 |

## partners

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_PARTNER_LOGIN_APPLY_DEALT(shop_id: string \| number) | POST https://api.selldone.com/partners/apply-deal/{shop_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30742 |
| POST_PARTNER_FIX_SHOP_LICENSE(shop_id: string \| number) | POST https://api.selldone.com/partners/fix-license/{shop_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30779 |
| GET_PARTNER_UPGRADE_URL(shop_id: string \| number) | GET https://api.selldone.com/partners/upgrade-url/{shop_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30816 |
| GET_MY_PARTNER_PURCHASE_DEALS() | GET https://api.selldone.com/partners/deals | SCOPE_BACKOFFICE_SHOP_ADD (backoffice:shop:add) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30892 |
| GET_MY_PARTNER_PENDING_PURCHASE_DEALS() | GET https://api.selldone.com/partners/deals/pending | SCOPE_BACKOFFICE_SHOP_ADD (backoffice:shop:add) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30965 |

## partnership

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_SEND_REQUEST_PARTNERSHIP() | POST https://api.selldone.com/partnership | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:33887 |

## personal-access-tokens

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_MY_PERSONAL_ACCESS_TOKENS() | GET https://api.selldone.com/personal-access-tokens | SCOPE_SELLDONE_TOKEN_READ (selldone:token:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14060 |
| DELETE_MY_PERSONAL_ACCESS_TOKEN(token_id: string \| number) | DELETE https://api.selldone.com/personal-access-tokens/{token_id} | SCOPE_SELLDONE_TOKEN_WRITE (selldone:token:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14096 |

## personal-address

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_EDIT_PERSONAL_ADDRESS() | POST https://api.selldone.com/personal-address/update | SCOPE_SELLDONE_IDENTIFICATION (selldone:identification) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:668 |

## personal-information

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_UPLOAD_KYC_IMAGE(type: "identify-card" \| "address-doc" \| "passport") | POST https://api.selldone.com/personal-information/upload/{type} | SCOPE_SELLDONE_IDENTIFICATION (selldone:identification) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:523 |
| GET_PERSONAL_INFORMATION() | GET https://api.selldone.com/personal-information | SCOPE_SELLDONE_IDENTIFICATION (selldone:identification) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:598 |
| POST_EDIT_PERSONAL_INFORMATION() | POST https://api.selldone.com/personal-information/update | SCOPE_SELLDONE_IDENTIFICATION (selldone:identification) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:632 |

## preferences

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| PUT_SAVE_PREFERENCES() | PUT https://api.selldone.com/preferences | SCOPE_SELLDONE_SECURITY_WRITE (selldone:security:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:486 |

## product-repository

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_SEARCH_PRODUCT_REPOSITORY_SKU() | GET https://api.selldone.com/product-repository/search | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:5888 |

## profile

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_PROFILE_UPLOAD_IMAGE(type: "avatar", profile_id: string \| number) | POST https://api.selldone.com/profile/edit/upload/{type}<br>POST https://api.selldone.com/profile/edit/upload/{type}/{profile_id?} | SCOPE_USER_PROFILE_WRITE (user:profile:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:347 |
| GET_AVATAR_96(version = null) | GET https://api.selldone.com/profile/image/{profile_id}/{type}.jpg | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:381 |
| GET_AVATAR(version = null) | GET https://api.selldone.com/profile/image/{profile_id}/{type}.jpg | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:415 |

## profiles

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_MY_PROFILES() | GET https://api.selldone.com/profiles/me | SCOPE_USER_PROFILE_READ (profile) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:731 |
| GET_PUBLIC_PROFILE(user_id: string \| number, user_slug: string) | GET https://api.selldone.com/profiles/{user_id}/@{user_slug} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:765 |

## providers

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_MY_PROVIDERS() | GET https://api.selldone.com/providers | SCOPE_CONNECT_PROVIDER_WRITE (connect:provider:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35163 |
| POST_ADD_PROVIDER() | POST https://api.selldone.com/providers | SCOPE_CONNECT_PROVIDER_WRITE (connect:provider:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35199 |
| PUT_MY_PROVIDER_UPDATE(provider_id: string \| number) | PUT https://api.selldone.com/providers/{provider_id} | SCOPE_CONNECT_PROVIDER_WRITE (connect:provider:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35236 |
| POST_MY_PROVIDER_UPLOAD_ICON(provider_id: string \| number) | POST https://api.selldone.com/providers/{provider_id}/icon | SCOPE_CONNECT_PROVIDER_WRITE (connect:provider:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35273 |
| GET_MY_PROVIDER_INFO(provider_id: string \| number) | GET https://api.selldone.com/providers/{provider_id} | SCOPE_CONNECT_PROVIDER_WRITE (connect:provider:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35308 |
| PUT_MY_PROVIDER_AUTH(provider_id: string \| number) | PUT https://api.selldone.com/providers/{provider_id}/auth | SCOPE_CONNECT_PROVIDER_WRITE (connect:provider:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35345 |
| PUT_MY_PROVIDER_WEBHOOKS(provider_id: string \| number) | PUT https://api.selldone.com/providers/{provider_id}/webhooks | SCOPE_CONNECT_PROVIDER_WRITE (connect:provider:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35382 |
| POST_MY_PROVIDER_WEBHOOKS_REGENERATE_SIGN_KEY(provider_id: string \| number) | POST https://api.selldone.com/providers/{provider_id}/webhooks/invalidate-sign-key | SCOPE_CONNECT_PROVIDER_WRITE (connect:provider:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35417 |
| POST_MY_PROVIDER_SECRET_REGENERATE_SIGN_KEY(provider_id: string \| number) | POST https://api.selldone.com/providers/{provider_id}/invalidate-secret-key | SCOPE_CONNECT_PROVIDER_WRITE (connect:provider:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35452 |
| GET_MY_PROVIDER_SHOPS(provider_id: string \| number) | GET https://api.selldone.com/providers/{provider_id}/shops | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35485 |
| POST_MY_PROVIDER_PAY25USD_AND_CREATE_BRIDGE(provider_id: string \| number) | POST https://api.selldone.com/providers/{provider_id}/pay | SCOPE_CONNECT_PROVIDER_WRITE (connect:provider:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35522 |
| POST_MY_PROVIDER_REQUEST_VERIFY(provider_id: string \| number) | POST https://api.selldone.com/providers/{provider_id}/request-verify | SCOPE_CONNECT_PROVIDER_WRITE (connect:provider:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35559 |
| GET_MY_PROVIDER_LOGS(provider_id: string \| number) | GET https://api.selldone.com/providers/{provider_id}/logs | SCOPE_CONNECT_PROVIDER_WRITE (connect:provider:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35596 |

## red-alert

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_RED_ALERT_REPORT() | POST https://api.selldone.com/red-alert | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:41454 |
| POST_RED_ALERT_REPORT_CHECK_STORE() | POST https://api.selldone.com/red-alert/check-store | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:41488 |

## referral

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_MY_REFERRAL() | GET https://api.selldone.com/referral | SCOPE_SELLDONE_MONETIZATION_READ (selldone:monetization:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1819 |
| PUT_MY_REFERRAL_SET_BANK() | PUT https://api.selldone.com/referral/bank | SCOPE_SELLDONE_MONETIZATION_WRITE (selldone:monetization:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1855 |
| GET_MY_REFERRAL_TRANSACTIONS() | GET https://api.selldone.com/referral/transactions | SCOPE_SELLDONE_MONETIZATION_READ (selldone:monetization:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1889 |
| POST_MY_REFERRAL_WALLET_TRANSFER_TO_ACCOUNT(wallet_id: number) | POST https://api.selldone.com/referral/transfer/{wallet_id} | SCOPE_SELLDONE_MONETIZATION_WRITE (selldone:monetization:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1925 |
| POST_MY_REFERRAL_REQUEST_TRANSFER_TO_BANK(wallet_id: number) | POST https://api.selldone.com/referral/withdraw/{wallet_id} | SCOPE_SELLDONE_MONETIZATION_WRITE (selldone:monetization:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1961 |
| GET_MY_REFERRAL_FEES() | GET https://api.selldone.com/referral/fees | SCOPE_SELLDONE_MONETIZATION_READ (selldone:monetization:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2030 |

## roles

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_MY_ROLES() | GET https://api.selldone.com/roles | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:8347 |
| DELETE_MY_ROLE(role_id: string \| number) | DELETE https://api.selldone.com/roles/{role_id} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:8417 |
| GET_MY_ROLE_INFO(role_id: string \| number) | GET https://api.selldone.com/roles/{role_id} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:8450 |
| GET_MY_ROLE_TASKS(role_id: string \| number) | GET https://api.selldone.com/roles/{role_id}/tasks | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:8483 |
| GET_MY_ROLE_TASK(role_id: string \| number, task_id: string \| number) | GET https://api.selldone.com/roles/{role_id}/tasks/{task_id} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:8517 |

## security

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_2FA_CHECK() | GET https://api.selldone.com/security/2fa/check | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:449 |

## selldone-vat

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_CALCULATE_SELLDONE_VAT() | POST https://api.selldone.com/selldone-vat | SCOPE_BACKOFFICE_COMPANY_READ (backoffice:company:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:40624 |

## shop

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_CHECK_SHOP_NAME() | GET https://api.selldone.com/shop/check-name | SCOPE_BACKOFFICE_SHOP_ADD (backoffice:shop:add) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2410 |
| POST_ADD_SHOP() | POST https://api.selldone.com/shop/add | SCOPE_BACKOFFICE_SHOP_ADD (backoffice:shop:add) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2446 |

## shops

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_SUGGESTION_CUSTOMERS(shop_id: string \| number, search: string) | GET https://api.selldone.com/shops/{shop_id}/customers/suggestion/{search} | SCOPE_BACKOFFICE_CUSTOMER_WRITE (backoffice:customer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:106 |
| GET_MY_SHOPS() | GET https://api.selldone.com/shops/me | SCOPE_BACKOFFICE_SHOP_READ (backoffice:shop:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2218 |
| GET_MY_SHOP_INFO(shop_id: string \| number) | GET https://api.selldone.com/shops/me/{shop_id} | SCOPE_BACKOFFICE_SHOP_READ (backoffice:shop:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2256 |
| UPLOAD_SHOP_IMAGE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/upload/icon | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2295 |
| UPLOAD_SHOP_FAV_ICON(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/upload/fav | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2334 |
| UPLOAD_SHOP_IMAGE_LOGO(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/upload/logo | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2373 |
| PUT_EDIT_SHOP(shop_id: number \| string) | PUT https://api.selldone.com/shops/{shop_id}/edit | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2485 |
| PUT_EDIT_SHOP_INFO(shop_id: number \| string) | PUT https://api.selldone.com/shops/{shop_id}/edit/info | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2524 |
| PUT_EDIT_SHOP_SUPPORT_MODE(shop_id: number \| string) | PUT https://api.selldone.com/shops/{shop_id}/edit/support-mode | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2563 |
| DELETE_SHOP(shop_id: number \| string) | DELETE https://api.selldone.com/shops/{shop_id}/delete | SCOPE_BACKOFFICE_SHOP_DELETE (backoffice:shop:delete) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2602 |
| POST_SET_SHOP_CURRENCIES(shop_id: number \| string) | POST https://api.selldone.com/shops/{shop_id}/currencies | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2641 |
| POST_TRANSFER_OWNERSHIP(shop_id: number \| string) | POST https://api.selldone.com/shops/{shop_id}/ownership | SCOPE_BACKOFFICE_SHOP_ADD (backoffice:shop:add) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2680 |
| POST_CHECK_TIME_CAN_TRANSFER_OWNERSHIP(shop_id: number \| string) | POST https://api.selldone.com/shops/{shop_id}/ownership/check-time | SCOPE_BACKOFFICE_SHOP_ADD (backoffice:shop:add) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2717 |
| POST_CHECK_USER_CAN_TRANSFER_OWNERSHIP(shop_id: number \| string) | POST https://api.selldone.com/shops/{shop_id}/ownership/check-user | SCOPE_BACKOFFICE_SHOP_ADD (backoffice:shop:add) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2756 |
| POST_SHOP_CREATE_TEMPORARY_ACCESS(shop_id: number \| string) | POST https://api.selldone.com/shops/{shop_id}/temporary-access | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2795 |
| PUT_SHOP_SET_RESTRICTION(shop_id: number \| string) | PUT https://api.selldone.com/shops/{shop_id}/restriction | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2834 |
| GET_SHOP_REALTIME_DATA(shop_id: number \| string) | GET https://api.selldone.com/shops/{shop_id}/real-time | SCOPE_BACKOFFICE_REPORT_READ (backoffice:report:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2873 |
| GET_MY_SHOP_CATEGORIES(shop_id: number \| string) | GET https://api.selldone.com/shops/{shop_id}/categories | SCOPE_BACKOFFICE_CATEGORY_READ (backoffice:category:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:2912 |
| POST_ADD_CATEGORY(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/categories/add | SCOPE_BACKOFFICE_CATEGORY_WRITE (backoffice:category:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:3158 |
| PUT_EDIT_CATEGORY(shop_id: string \| number, category_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/categories/{category_id}/edit | SCOPE_BACKOFFICE_CATEGORY_WRITE (backoffice:category:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:3196 |
| DELETE_CATEGORY(shop_id: string \| number, category_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/categories/{category_id} | SCOPE_BACKOFFICE_CATEGORY_WRITE (backoffice:category:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:3234 |
| GET_MY_SHOP_CATEGORIES_HIERARCHY(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/categories-hierarchy | SCOPE_BACKOFFICE_CATEGORY_READ (backoffice:category:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:3271 |
| POST_CLONE_PRODUCT(shop_id: string \| number) | POST https://api.selldone.com/shops/products/{shop_id}/clone | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:3478 |
| GET_ALL_MY_PRODUCTS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/products/all-admin | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:3556 |
| GET_ALL_MY_PRODUCTS_LIST_BY_PARAMS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/products/list-custom-params | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:3595 |
| GET_ALL_MY_CATEGORIES_LIST_BY_PARAMS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/categories/list-custom-params | SCOPE_BACKOFFICE_CATEGORY_READ (backoffice:category:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:3634 |
| POST_ADD_VARIANT(shop_id: string \| number, product_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/variant/add | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:3715 |
| POST_ADD_VARIANT_BULK(shop_id: string \| number, product_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/variant/add-bulk | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:3753 |
| POST_ADD_VIRTUAL_ITEM(shop_id: string \| number, product_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/add-virtual | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:3924 |
| GET_ALL_VIRTUAL_ITEMS(shop_id: string \| number, product_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/products/{product_id}/virtual/items | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:4091 |
| POST_ADD_PRODUCT(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/product/add | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:4169 |
| PUT_EDIT_PRODUCT(shop_id: string \| number, product_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/products/{product_id}/edit | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:4207 |
| DELETE_PRODUCT(shop_id: string \| number, product_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/products/{product_id}/delete | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:4289 |
| DELETE_PRODUCTS_BULK(shop_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/products/bulk-actions/delete-products | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:4326 |
| POST_SHOP_AUTO_REMOVE_DUPLICATED_PRODUCTS(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/products/bulk-actions/remove-duplicates | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:4365 |
| GET_SHOP_AUTO_REMOVE_DUPLICATED_PRODUCTS_PREVIEW(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/products/bulk-actions/remove-duplicates | SCOPE_BACKOFFICE_PRODUCT_READ (backoffice:product:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:4403 |
| PUT_PRODUCT_EXTRA(shop_id: string \| number, product_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/products/{product_id}/extra | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:4483 |
| DELETE_PRODUCT_RATING(shop_id: string \| number, product_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/products/{product_id}/rating | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:4562 |
| POST_ADD_PROS(shop_id: string \| number, product_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/pros | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:4600 |
| DELETE_PROS(shop_id: string \| number, product_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/products/{product_id}/pros | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:4638 |
| POST_ADD_CONS(shop_id: string \| number, product_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/cons | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:4676 |
| DELETE_CONS(shop_id: string \| number, product_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/products/{product_id}/cons | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:4714 |
| PUT_UPDATE_PROS(shop_id: string \| number, product_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/products/{product_id}/pros | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:4752 |
| PUT_UPDATE_CONS(shop_id: string \| number, product_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/products/{product_id}/cons | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:4790 |
| GET_SPEC_OF_PRODUCT(shop_id: string \| number, product_code: string) | GET https://api.selldone.com/shops/{shop_id}/wizard/spec/{product_id} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:4828 |
| GET_GOOGLE_CATEGORY(gpc: string \| null) | GET https://api.selldone.com/shops/wizard/google-category/{search?} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:4859 |
| POST_SAVE_SPEC(shop_id: string \| number, product_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/spec | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:4899 |
| GET_PRODUCT_FILES(shop_id: string \| number, product_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/products/{product_id}/files | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:5153 |
| POST_PRODUCT_ADD_NOTE(shop_id: string \| number, product_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/note | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:5499 |
| POST_PRODUCT_SET_TAGS(shop_id: string \| number, product_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/tags | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:5580 |
| POST_PRODUCT_SET_PAGE(shop_id: string \| number, product_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/page | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:5618 |
| POST_PRODUCT_VIDEO_UPLOAD(shop_id: string \| number, product_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/videos | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:5739 |
| DELETE_PRODUCT_VIDEO(shop_id: string \| number, product_id: string \| number, video_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/products/{product_id}/videos/{video_id} | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:5777 |
| POST_ADD_PRODUCT_LOCATIONS_SAVES(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/product-locations | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:5817 |
| GET_PRODUCT_LOCATIONS_SAVES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/product-locations | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:5854 |
| POST_ADD_PRODUCT_BY_REPOSITORY(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/product-repository/add | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:5925 |
| POST_ADD_CUSTOM_BADGE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/badges | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:5964 |
| POST_EDIT_CUSTOM_BADGE(shop_id: string \| number, badge_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/badges/{badge_id} | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:6004 |
| GET_CUSTOM_BADGE(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/badges | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:6041 |
| POST_ASSIGN_VENDORS_TO_PRODUCTS(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/marketplace/bulk-actions/assign-products-vendors | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:6207 |
| POST_ASSIGN_STATUS_TO_PRODUCTS(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/marketplace/bulk-actions/assign-products-status | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:6288 |
| GET_ORDERS(shop_id: string \| number, type: OrderType) | GET https://api.selldone.com/shops/{shop_id}/process-center/baskets-{type} | SCOPE_BACKOFFICE_ORDER_READ (backoffice:order:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:6604 |
| GET_VENDORS_ORDERS(shop_id: string \| number, type: OrderType) | GET https://api.selldone.com/shops/{shop_id}/process-center/vendor-orders-{type} | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:6644 |
| GET_ORDER_INFO(shop_id: string \| number, basket_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/process-center/baskets/{basket_id} | SCOPE_BACKOFFICE_ORDER_READ (backoffice:order:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:6682 |
| PUT_REJECT_ORDER(shop_id: string \| number, basket_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/process-center/baskets/{basket_id}/reject | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:6763 |
| DELETE_REJECT_ORDER(shop_id: string \| number, basket_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/process-center/baskets/{basket_id}/reject | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:6801 |
| PUT_SET_TRACKING_ORDER(shop_id: string \| number, basket_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/process-center/baskets/{basket_id}/tracking | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:6882 |
| PUT_CHECK_FULFILLMENT(shop_id: string \| number, basket_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/process-center/baskets/{basket_id}/fulfillment | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:6922 |
| GET_SHOP_TEMPLATE_MESSAGES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/template-messages | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:7392 |
| POST_SHOP_TEMPLATE_MESSAGE_ADD(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/template-messages | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:7431 |
| GET_SHOP_PERMISSIONS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/permissions | SCOPE_BACKOFFICE_STAFF_WRITE (backoffice:staff:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:7952 |
| POST_ADD_SHOP_PERMISSION(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/permissions | SCOPE_BACKOFFICE_STAFF_WRITE (backoffice:staff:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:7992 |
| DELETE_SHOP_INVITE(shop_id: string \| number, invite_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/invites/{invite_id} | SCOPE_BACKOFFICE_STAFF_WRITE (backoffice:staff:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:8115 |
| GET_SHOP_ROLES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/roles | SCOPE_BACKOFFICE_STAFF_WRITE (backoffice:staff:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:8238 |
| POST_ADD_SHOP_ROLE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/roles | SCOPE_BACKOFFICE_STAFF_WRITE (backoffice:staff:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:8277 |
| DELETE_SHOP_ROLES(shop_id: string \| number, role_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/roles/{permission_id} | SCOPE_BACKOFFICE_STAFF_WRITE (backoffice:staff:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:8315 |
| POST_SET_GATEWAY(shop_id: string \| number, gateway_code: string) | POST https://api.selldone.com/shops/{shop_id}/gateways/{gateway_code} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:8641 |
| PUT_GATEWAY_SHOP_CONFIG(shop_id: string \| number, gateway_code: string) | PUT https://api.selldone.com/shops/{shop_id}/gateways/{gateway_code}/config | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:8765 |
| PUT_GATEWAY_SHOP_THEME(shop_id: string \| number, gateway_code: string) | PUT https://api.selldone.com/shops/{shop_id}/gateways/{gateway_code}/theme | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:8805 |
| DELETE_GATEWAY(shop_id: string \| number, gateway_code: string) | DELETE https://api.selldone.com/shops/{shop_id}/gateways/{gateway_code} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:8843 |
| GET_SHOP_GATEWAYS_BY_OWNER(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/gateways | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:8879 |
| GET_SHOP_GATEWAY_INFO_DATA(shop_id: string \| number, gateway_code: string) | GET https://api.selldone.com/shops/{shop_id}/gateways/{gateway_code} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:8916 |
| POST_AUTO_CONFIG_GATEWAY(shop_id: string \| number, gateway_code: string) | POST https://api.selldone.com/shops/{shop_id}/gateways/{gateway_code}/auto-config | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:9123 |
| POST_ADD_BILL(shop_id: string \| number, basket_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/process-center/baskets/{basket_id}/bill | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:9163 |
| GET_BASKET_BILLS(shop_id: string \| number, basket_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/process-center/baskets/{basket_id}/bills | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:9381 |
| GET_SHOP_BLOGS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/blogs | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:9634 |
| GET_SHOP_BLOG_CATEGORIES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/blog/categories | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:9670 |
| POST_ADD_SHOP_BLOG_CATEGORY(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/blog/categories | SCOPE_ARTICLES (articles) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:9709 |
| GET_APPSTORE_LIST(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/app-store/list | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10568 |
| POST_ADD_ENTERPRISE_APP(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/app-store/enterprise | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10606 |
| GET_SHOP_APPS_ADMIN(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/apps | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10680 |
| POST_SET_APP_INFO(shop_id: string \| number, app_code: string) | POST https://api.selldone.com/shops/{shop_id}/apps/{app_code} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10719 |
| PUT_SET_REVIEW(shop_id: string \| number, app_code: string) | PUT https://api.selldone.com/shops/{shop_id}/apps/{app_code}/review | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10756 |
| DELETE_APP(shop_id: string \| number, app_code: string) | DELETE https://api.selldone.com/shops/{shop_id}/apps/{app_code} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10793 |
| GET_SHOP_APP_INFO_FULL(shop_id: string \| number, app_code: string) | GET https://api.selldone.com/shops/{shop_id}/apps/{app_code}/full | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10828 |
| GET_SHOP_APP_INFO(shop_id: string \| number, app_code: string) | GET https://api.selldone.com/shops/{shop_id}/apps/{app_code} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10863 |
| GET_SHOP_TRANSPORTATIONS_ADMIN(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/transportation | SCOPE_BACKOFFICE_LOGISTIC_READ (backoffice:logistic:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10902 |
| POST_SET_TRANSPORTATION(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/transportation | SCOPE_BACKOFFICE_LOGISTIC_WRITE (backoffice:logistic:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:10941 |
| GET_SHOP_TRANSPORTATION_ORDERS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/transportation-orders | SCOPE_BACKOFFICE_LOGISTIC_READ (backoffice:logistic:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:11103 |
| GET_SHOP_WAREHOUSE_ADMIN(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/warehouse | SCOPE_BACKOFFICE_LOGISTIC_WRITE (backoffice:logistic:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:12172 |
| POST_SHOP_WAREHOUSE_ADMIN(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/warehouse | SCOPE_BACKOFFICE_LOGISTIC_WRITE (backoffice:logistic:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:12209 |
| POST_SHOP_WAREHOUSE_BULK_CHANGE_PRICE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/warehouse/bulk-actions/price | SCOPE_BACKOFFICE_LOGISTIC_WRITE (backoffice:logistic:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:12248 |
| POST_SHOP_WAREHOUSE_BULK_CHANGE_PRICE_REPORT(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/warehouse/bulk-actions/price/report | SCOPE_BACKOFFICE_LOGISTIC_WRITE (backoffice:logistic:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:12287 |
| POST_SHOP_WAREHOUSE_BULK_CHANGE_PRICE_LIST(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/warehouse/bulk-actions/price/list | SCOPE_BACKOFFICE_LOGISTIC_WRITE (backoffice:logistic:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:12326 |
| POST_SHOP_WAREHOUSE_BULK_CHANGE_DISCOUNT(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/warehouse/bulk-actions/discount | SCOPE_BACKOFFICE_LOGISTIC_WRITE (backoffice:logistic:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:12365 |
| GET_SHOP_WAREHOUSE_BULK_CHANGE_DISCOUNT_REPORT(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/warehouse/bulk-actions/discount/report | SCOPE_BACKOFFICE_LOGISTIC_WRITE (backoffice:logistic:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:12404 |
| GET_SHOP_WAREHOUSE_BULK_CHANGE_DISCOUNT_LIST(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/warehouse/bulk-actions/discount/list | SCOPE_BACKOFFICE_LOGISTIC_WRITE (backoffice:logistic:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:12443 |
| PUT_EDIT_PAGE(shop_id: string \| number, page_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/pages/{page_id} | SCOPE_BACKOFFICE_PAGE_WRITE (backoffice:page:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:12615 |
| DELETE_PAGE(shop_id: string \| number, page_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/pages/{page_id} | SCOPE_BACKOFFICE_PAGE_WRITE (backoffice:page:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:12653 |
| POST_ADD_SHOP_PAGE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/pages | SCOPE_BACKOFFICE_PAGE_WRITE (backoffice:page:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:12692 |
| GET_SHOP_PAGES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/pages | SCOPE_BACKOFFICE_PAGE_WRITE (backoffice:page:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:12731 |
| GET_PAGE_DATA(shop_id: string \| number, page_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/pages/{page_id} | SCOPE_BACKOFFICE_PAGE_WRITE (backoffice:page:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:12769 |
| GET_PAGE_EMBED_CODE(shop_id: string \| number, page_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/pages/{page_id}/embed | SCOPE_BACKOFFICE_PAGE_WRITE (backoffice:page:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:12936 |
| POST_UPLOAD_PAGE_IMAGE(shop_id: string \| number, page_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/pages/{page_id}/upload/content-image | SCOPE_BACKOFFICE_PAGE_WRITE (backoffice:page:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:12976 |
| POST_UPLOAD_PAGE_VIDEO(shop_id: string \| number, page_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/pages/{page_id}/upload/content-video | SCOPE_BACKOFFICE_PAGE_WRITE (backoffice:page:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13016 |
| PUT_SHOP_HOME_PAGE(shop_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/home/default | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13053 |
| PUT_SHOP_DOMAIN_HOME_PAGE(shop_id: string \| number, domain: string) | PUT https://api.selldone.com/shops/{shop_id}/home/domains/{domain_address} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13091 |
| GET_PAGE_FILES(shop_id: string \| number, page_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/pages/{page_id}/files | SCOPE_BACKOFFICE_PAGE_WRITE (backoffice:page:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13162 |
| POST_PAGE_ELEMENTS_ADD(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/elements | SCOPE_BACKOFFICE_PAGE_WRITE (backoffice:page:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13244 |
| PUT_PAGE_ELEMENT_EDIT(shop_id: string \| number, element_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/elements/{element_id} | SCOPE_BACKOFFICE_PAGE_WRITE (backoffice:page:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13284 |
| DELETE_PAGE_ELEMENT(shop_id: string \| number, element_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/elements/{element_id} | SCOPE_BACKOFFICE_PAGE_WRITE (backoffice:page:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13322 |
| POST_ADD_SHOP_POPUP(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/popups | SCOPE_BACKOFFICE_PAGE_WRITE (backoffice:page:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13362 |
| PUT_EDIT_POPUP(shop_id: string \| number, popup_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/popups/{page_id} | SCOPE_BACKOFFICE_PAGE_WRITE (backoffice:page:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13402 |
| POST_UPLOAD_POPUP_IMAGE(shop_id: string \| number, popup_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/popups/{page_id}/upload/content-image | SCOPE_BACKOFFICE_PAGE_WRITE (backoffice:page:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13485 |
| DELETE_POPUP(shop_id: string \| number, popup_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/popups/{page_id} | SCOPE_BACKOFFICE_PAGE_WRITE (backoffice:page:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13523 |
| GET_SHOP_POPUPS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/popups | SCOPE_BACKOFFICE_PAGE_WRITE (backoffice:page:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13562 |
| GET_POPUP_DATA(shop_id: string \| number, popup_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/popups/{popup_id} | SCOPE_BACKOFFICE_PAGE_WRITE (backoffice:page:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13600 |
| GET_RETURN_REQUESTS_LIST(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/return-request | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13685 |
| GET_SHOP_CLIENTS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/clients | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13909 |
| POST_CREATE_NEW_SHOP_CLIENT(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/clients | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13948 |
| PUT_UPDATE_SHOP_CLIENT(shop_id: string \| number, client_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/clients/{client_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13988 |
| DELETE_SHOP_CLIENT(shop_id: string \| number, client_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/clients/{client_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14026 |
| GET_SEO_PREVIEW_SHOP(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/seo/preview | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14176 |
| POST_ADD_SHOP_ACCOUNTS(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/accounts | SCOPE_BACKOFFICE_FINANCE_WRITE (backoffice:finance:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14880 |
| DELETE_SHOP_ACCOUNTS(shop_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/accounts | SCOPE_BACKOFFICE_FINANCE_WRITE (backoffice:finance:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14919 |
| GET_SHOP_SUBSCRIPTIONS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/subscriptions | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14957 |
| POST_ADD_SHOP_SUBSCRIPTION(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/subscriptions | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:14996 |
| GET_SHOP_SUBSCRIPTION_PRICE(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/subscription/price | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:15076 |
| GET_APPLICATION_ANDROID(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/native/android | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:15590 |
| POST_BUILD_APPLICATION_ANDROID(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/native/android | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:15629 |
| GET_APPLICATION_ANDROID_STATE(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/native/android/state | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:15666 |
| GET_EXPORT_PRODUCTS(shop_id: string \| number, file: "excel" \| "csv") | GET https://api.selldone.com/shops/{shop_id}/products/excel<br>GET https://api.selldone.com/shops/{shop_id}/products/csv | SCOPE_BACKOFFICE_PRODUCT_READ (backoffice:product:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:15799 |
| GET_EXPORT_CATEGORIES(shop_id: string \| number, file: "excel" \| "csv") | DELETE https://api.selldone.com/shops/{shop_id}/categories/{category_id} | SCOPE_BACKOFFICE_CATEGORY_WRITE (backoffice:category:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:15837 |
| GET_EXPORT_INVENTORY(shop_id: string \| number, file: "excel" \| "csv") | GET https://api.selldone.com/shops/{shop_id}/inventory/excel<br>GET https://api.selldone.com/shops/{shop_id}/inventory/csv | SCOPE_BACKOFFICE_PRODUCT_READ (backoffice:product:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:15949 |
| POST_CONVERTER_EXCEL_CSV(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/converter/excel/csv | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:16160 |
| POST_ADD_DOMAIN(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/domain | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:16244 |
| GET_DOMAIN_INFO(shop_id: string \| number, domain: string) | GET https://api.selldone.com/shops/{shop_id}/domains/{domain}/check | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:16282 |
| DELETE_EDIT_DOMAIN(shop_id: string \| number, domain: string) | DELETE https://api.selldone.com/shops/{shop_id}/domains/{domain} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:16365 |
| POST_DOMAIN_CHECK_SSL(shop_id: string \| number, domain_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/domain/{domain_id}/check-ssl | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:16446 |
| GET_SHOP_DOMAINS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/domains | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:16485 |
| GET_SHOP_DOMAIN_VERIFICATIONS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/verifications | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:16526 |
| POST_SHOP_DOMAIN_VERIFICATION(shop_id: string \| number, code: string) | POST https://api.selldone.com/shops/{shop_id}/verifications/{code} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:16566 |
| POST_EDIT_SHOP_THEME(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/theme | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:16691 |
| GET_SHOP_MENU(shop_id: string \| number, type: ShopMenuType) | GET https://api.selldone.com/shops/{shop_id}/menus/{type} | SCOPE_BACKOFFICE_SHOP_READ (backoffice:shop:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:16731 |
| POST_EDIT_SHOP_MENU(shop_id: string \| number, type: ShopMenuType) | POST https://api.selldone.com/shops/{shop_id}/menus/{type} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:16771 |
| GET_SHOP_MENU_GENERATE_CATEGORIES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/menus/generate/categories | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:16810 |
| POST_TRANSLATE_SHOP_MENU(shop_id: string \| number, type: ShopMenuType) | POST https://api.selldone.com/shops/{shop_id}/menus/{type}/translate | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:16850 |
| GET_DISCOUNT_CODES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/discount-codes | SCOPE_BACKOFFICE_DISCOUNT_CODE_WRITE (backoffice:discount-code:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:16980 |
| POST_CREATE_DISCOUNT_CODE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/discount-codes | SCOPE_BACKOFFICE_DISCOUNT_CODE_WRITE (backoffice:discount-code:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:17019 |
| POST_CREATE_DISCOUNT_CODE_AI(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/discount-codes/ai | SCOPE_BACKOFFICE_DISCOUNT_CODE_WRITE (backoffice:discount-code:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:17058 |
| GET_COUPONS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/coupons | SCOPE_BACKOFFICE_COUPON_WRITE (backoffice:coupon:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:17392 |
| POST_CREATE_COUPON(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/coupons | SCOPE_BACKOFFICE_COUPON_WRITE (backoffice:coupon:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:17431 |
| POST_CREATE_COUPON_AI(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/coupons/ai | SCOPE_BACKOFFICE_COUPON_WRITE (backoffice:coupon:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:17470 |
| PUT_EDIT_COUPON(shop_id: string \| number, coupon_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/coupons/{coupon_id} | SCOPE_BACKOFFICE_COUPON_WRITE (backoffice:coupon:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:17510 |
| DELETE_COUPON(shop_id: string \| number, coupon_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/coupons/{coupon_id} | SCOPE_BACKOFFICE_COUPON_WRITE (backoffice:coupon:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:17548 |
| POST_RESTORE_COUPON(shop_id: string \| number, coupon_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/coupons/{coupon_id}/restore | SCOPE_BACKOFFICE_COUPON_WRITE (backoffice:coupon:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:17586 |
| GET_COUPON_DATA(shop_id: string \| number, coupon_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/coupons/{coupon_id} | SCOPE_BACKOFFICE_COUPON_WRITE (backoffice:coupon:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:17624 |
| GET_COUPON_ORDERS(shop_id: string \| number, coupon_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/coupons/{coupon_id}/orders | SCOPE_BACKOFFICE_COUPON_WRITE (backoffice:coupon:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:17662 |
| POST_COUPON_ADD_NOTE(shop_id: string \| number, coupon_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/coupons/{coupon_id}/note | SCOPE_BACKOFFICE_COUPON_WRITE (backoffice:coupon:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:17702 |
| GET_OFFERS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/offers | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:17786 |
| POST_CREATE_OFFER(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/offers | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:17825 |
| PUT_EDIT_OFFER(shop_id: string \| number, offer_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/offers/{offer_id} | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:17865 |
| DELETE_OFFER(shop_id: string \| number, offer_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/offers/{offer_id} | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:17903 |
| POST_RESTORE_OFFER(shop_id: string \| number, offer_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/offers/{offer_id}/restore | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:17941 |
| GET_OFFER_DATA(shop_id: string \| number, offer_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/offers/{offer_id} | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:17979 |
| GET_OFFER_ORDERS(shop_id: string \| number, offer_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/offers/{offer_id}/orders | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:18017 |
| POST_OFFER_ADD_NOTE(shop_id: string \| number, offer_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/offers/{offer_id}/note | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:18057 |
| PUT_SHOP_LOTTERY_CONFIG(shop_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/lottery | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:18140 |
| DELETE_SHOP_LOTTERY_CONFIG(shop_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/lottery | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:18177 |
| GET_LOTTERY_LOTTERIES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/lotteries | SCOPE_BACKOFFICE_LOTTERY_WRITE (backoffice:lottery:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:18216 |
| POST_CREATE_LOTTERY(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/lotteries | SCOPE_BACKOFFICE_LOTTERY_WRITE (backoffice:lottery:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:18255 |
| PUT_EDIT_LOTTERY(shop_id: string \| number, lottery_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/lotteries/{lottery_id} | SCOPE_BACKOFFICE_LOTTERY_WRITE (backoffice:lottery:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:18295 |
| DELETE_LOTTERY(shop_id: string \| number, lottery_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/lotteries/{lottery_id} | SCOPE_BACKOFFICE_LOTTERY_WRITE (backoffice:lottery:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:18376 |
| GET_EXCHANGE_RATES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/exchange/rates | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:18410 |
| POST_SET_EXCHANGE_RATES(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/exchange/rates | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:18449 |
| DELETE_EXCHANGE_RATES(shop_id: string \| number, rate_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/exchange/rates/{rate_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:18487 |
| PUT_EXCHANGE_RATE_AUTO(shop_id: string \| number, rate_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/exchange/rates/{rate_id}/auto | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:18527 |
| GET_GIFT_CARD_TYPES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/gift-card-types | SCOPE_BACKOFFICE_GIFTCARD_WRITE (backoffice:giftcard:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:18600 |
| POST_CREATE_GIFT_CARD_TYPE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/gift-card-types | SCOPE_BACKOFFICE_GIFTCARD_WRITE (backoffice:giftcard:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:18639 |
| GET_CAMPAIGNS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/campaigns | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:19274 |
| POST_ADD_CAMPAIGN(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/campaigns | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:19313 |
| DELETE_CAMPAIGN(shop_id: string \| number, campaign_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/campaigns/{campaign_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:19351 |
| GET_CAMPAIGN_INFO(shop_id: string \| number, campaign_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/campaigns/{campaign_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:19389 |
| GET_AFFILIATES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/affiliates | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:19599 |
| POST_CREATE_AFFILIATE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/affiliates | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:19638 |
| GET_AFFILIATE_INFO(shop_id: string \| number, affiliate_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/affiliates/{affiliate_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:19719 |
| DELETE_AFFILIATE(shop_id: string \| number, affiliate_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/affiliates/{affiliate_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:19798 |
| GET_EMAILS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/emails | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20010 |
| POST_CREATE_EMAIL(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/emails | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20049 |
| PUT_UPDATE_EMAIL(shop_id: string \| number, email_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/emails/{email_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20089 |
| POST_UPLOAD_IMAGE_EMAIL(shop_id: string \| number, email_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/emails/{email_id}/image | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20127 |
| GET_EMAIL_RENDER(shop_id: string \| number, email_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/emails/{email_id}/render | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20165 |
| GET_EMAIL_INFO(shop_id: string \| number, email_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/emails/{email_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20203 |
| DELETE_EMAIL(shop_id: string \| number, email_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/emails/{email_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20241 |
| POST_SEND_EMAIL(shop_id: string \| number, email_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/emails/{email_id}/send | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20279 |
| POST_CANCEL_EMAIL(shop_id: string \| number, email_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/emails/{email_id}/cancel | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20317 |
| GET_EMAIL_STATISTIC(shop_id: string \| number, email_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/emails/{email_id}/statistic |  | TODO(api-docs): verify whether this SDK URL is stale before use. | apis/API.ts:20387 |
| POST_SET_SHOP_CLUB(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/clubs | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20473 |
| DELETE_SHOP_CLUB(shop_id: string \| number, level: keyof typeof Club.Levels) | DELETE https://api.selldone.com/shops/{shop_id}/clubs/{level} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20511 |
| GET_SHOP_STATISTIC_SESSIONS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/statistic/sessions | SCOPE_BACKOFFICE_REPORT_READ (backoffice:report:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20549 |
| GET_SHOP_STATISTIC_TIMELINE(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/statistic/timeline | SCOPE_BACKOFFICE_REPORT_READ (backoffice:report:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20586 |
| GET_SHOP_STATISTIC_COUNTRY(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/statistic/country | SCOPE_BACKOFFICE_REPORT_READ (backoffice:report:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20623 |
| POST_SHOP_SUPPORT_SETTING(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/support-setting | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20663 |
| GET_SHOP_CONTACT_US_LIST(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/contacts | SCOPE_BACKOFFICE_SUPPORT_TICKETS (backoffice:support-tickets) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20702 |
| GET_SHOP_FAQS_LIST(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/faqs | SCOPE_BACKOFFICE_FAQ_READ (backoffice:faq:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20910 |
| GET_SHOP_FAQS_TAGS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/faqs/tags | SCOPE_BACKOFFICE_FAQ_READ (backoffice:faq:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20947 |
| PUT_UPDATE_SHOP_FAQ(shop_id: string \| number, faq_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/faqs/{faq_id} | SCOPE_BACKOFFICE_FAQ_WRITE (backoffice:faq:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:20987 |
| POST_ADD_SHOP_FAQ(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/faqs | SCOPE_BACKOFFICE_FAQ_WRITE (backoffice:faq:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21026 |
| DELETE_SHOP_FAQ(shop_id: string \| number, faq_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/faqs/{faq_id} | SCOPE_BACKOFFICE_FAQ_WRITE (backoffice:faq:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21064 |
| GET_SHOP_EVENTS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/events | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21385 |
| SET_SHOP_BOT(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/bots | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21425 |
| GET_SHOP_NOTIFICATION_CHANNELS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/notification-channels | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21550 |
| GET_SHOP_SMS_LIST(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/sms/list | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21629 |
| GET_SHOP_SMS_SERVICE(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/sms/service | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21666 |
| POST_SET_SHOP_SMS_SERVICE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/sms/service | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21705 |
| POST_RESET_SHOP_SMS_SERVICE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/sms/service/reset | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21742 |
| POST_SHOP_SMS_SERVICE_ACTION_SYNC(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/sms/service/actions/sync | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21779 |
| GET_SHOP_SMS_TEMPLATES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/sms/templates | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21818 |
| POST_SHOP_SMS_ADD_TEMPLATE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/sms/templates | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:21857 |
| GET_SHOP_EMAILS_LIST(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/email/list | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:22113 |
| GET_SHOP_MAIL_SERVICE(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/email/service | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:22272 |
| POST_SET_SHOP_MAIL_SERVICE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/email/service | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:22311 |
| POST_RESET_SHOP_MAIL_SERVICE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/email/service/reset | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:22348 |
| POST_SHOP_MAIL_SERVICE_TEST(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/email/service/test | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:22385 |
| POST_SET_SHOP_MAIL_TEMPLATE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/email/templates | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:22481 |
| SET_SHOP_PREFERENCES(shop_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/preferences | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:22521 |
| SET_SHOP_COUNTRIES(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/countries | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:22806 |
| POST_INSTALL_SHOP_LANGUAGE_PACK(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/languages | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:22846 |
| GET_PUBLIC_FILES_IMAGES_LIST(shop_id: string \| number, folder = null) | GET https://api.selldone.com/shops/{shop_id}/public/images/{folder?} |  | TODO(api-docs): not callable because the SDK method throws before returning. | apis/API.ts:23046 |
| GET_SHOP_STATIC_FILES_LIST(shop_id: string \| number, folder = null) | GET https://api.selldone.com/shops/{shop_id}/static/{folder?} | SCOPE_BACKOFFICE_SHOP_READ (backoffice:shop:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:23083 |
| POST_SHOP_STATIC_CREATE_FOLDER(shop_id: string \| number, folder = null) | POST https://api.selldone.com/shops/{shop_id}/static/{folder?} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:23119 |
| GET_SHOP_STATIC_FILES_DISK_INFO(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/static-disk | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:23200 |
| POST_FUNNEL_USERS_COUNT(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/funnel/users/count | SCOPE_BACKOFFICE_CUSTOMER_WRITE (backoffice:customer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:23240 |
| POST_FUNNEL_USERS_DATA(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/funnel/users/data | SCOPE_BACKOFFICE_CUSTOMER_WRITE (backoffice:customer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:23279 |
| GET_DOWNLOAD_ALL_SHOP_CUSTOMERS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/funnel/users/excel | SCOPE_BACKOFFICE_CUSTOMER_WRITE (backoffice:customer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:23316 |
| POST_SUPPORT(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/support | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:23356 |
| PUT_SUPPORT_RESPONSE(shop_id: string \| number, support_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/support/{support_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:23396 |
| PUT_SUPPORT_CLOSE(shop_id: string \| number, support_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/support/{support_id}/close | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:23434 |
| PUT_SUPPORT_RATE(shop_id: string \| number, support_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/support/{support_id}/rate | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:23474 |
| POST_AI_ADD_PRODUCT(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/product/add-ai | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:23637 |
| POST_AI_EDIT_PRODUCT(shop_id: string \| number, product_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/update-ai | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:23675 |
| PUT_SET_SHOP_TAX_SETTING(shop_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/tax | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:23758 |
| GET_SHOP_TAX(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/tax | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:23795 |
| DELETE_SHOP_TAX(shop_id: string \| number, vat_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/tax/{vat_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:23833 |
| POST_ADD_SHOP_TAX_PROFILE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/tax-profiles | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:23917 |
| GET_CASH_REGISTER_SECURE_URL(shop_id: string \| number, code: string) | GET https://api.selldone.com/shops/{shop_id}/pos/secure/{type} | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:24039 |
| GET_CASH_REGISTER_STATUS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/pos | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:24078 |
| POST_OFFLINE_BASKET_ADD_ITEM(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/pos/add | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:24117 |
| DELETE_POS_DEVICE(shop_id: string \| number, device_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/pos/devices/{device_id} | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:24196 |
| GET_POS_GIFT_CARDS_LIST(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/pos/gift-cards | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:24329 |
| GET_POS_COUPONS_LIST(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/pos/coupons | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:24366 |
| GET_POS_CAMPAIGNS_LIST(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/pos/campaigns | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:24403 |
| GET_POS_CONFIRM_PAYMENT(shop_id: string \| number, gateway_code: string) | POST https://api.selldone.com/shops/{shop_id}/pos/payment/{gateway_code} | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:24443 |
| GET_POS_ORDER_INFO(shop_id: string \| number, basket_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/process-center/pos-baskets/{basket_id} | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:24481 |
| POST_POS_ORDER_REJECT(shop_id: string \| number, basket_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/process-center/pos-baskets/{basket_id}/reject | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:24519 |
| POST_MY_HUB_GENERATE_PIN(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/hub/pin | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:24634 |
| GET_MY_HUB_DEVICES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/hub/devices | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:24712 |
| GET_SHOP_CUSTOMERS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/customers | SCOPE_BACKOFFICE_CUSTOMER_WRITE (backoffice:customer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:24753 |
| POST_ADD_NEW_SHOP_CUSTOMER(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/customers | SCOPE_BACKOFFICE_CUSTOMER_WRITE (backoffice:customer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:24962 |
| DELETE_SHOP_CUSTOMER(shop_id: string \| number, customer_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/customers/{customer_id} | SCOPE_BACKOFFICE_CUSTOMER_WRITE (backoffice:customer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:25086 |
| GET_SHOP_CUSTOMERS_SEGMENTS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/customer/segments | SCOPE_BACKOFFICE_COUPON_WRITE (backoffice:coupon:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:25123 |
| GET_SHOP_REVIEWS_SOURCES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/reviews/sources | SCOPE_BACKOFFICE_REVIEWS_READ (backoffice:reviews:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:25293 |
| GET_SHOP_REVIEW_SOURCE_INFO(shop_id: string \| number,source_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/reviews/sources/{source_id} | SCOPE_BACKOFFICE_REVIEWS_READ (backoffice:reviews:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:25331 |
| GET_SHOP_REVIEWS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/reviews | SCOPE_BACKOFFICE_REVIEWS_READ (backoffice:reviews:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:25370 |
| POST_SHOP_REVIEW_UPDATE(shop_id: string \| number,review_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/reviews/{review_id} | SCOPE_BACKOFFICE_REVIEWS_READ (backoffice:reviews:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:25409 |
| GET_SHOP_REVIEW_SOURCE_DEBUG(shop_id: string \| number,source_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/reviews/sources/{source_id}/debug | SCOPE_BACKOFFICE_REVIEWS_READ (backoffice:reviews:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:25447 |
| POST_SHOP_REVIEW_SOURCE_SYNC(shop_id: string \| number,source_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/reviews/sources/{source_id}/sync | SCOPE_BACKOFFICE_REVIEWS_READ (backoffice:reviews:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:25484 |
| POST_IMPORT_PRODUCTS(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/import/products | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:25746 |
| GET_IMPORT_PRODUCTS_LIST(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/import/products | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:25783 |
| GET_IMPORT_IMAGES_LIST(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/import/images | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:25861 |
| GET_SHOP_IMPORTING_INFO(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/importing | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:25980 |
| POST_IMPORT_CATEGORIES(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/import/categories | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:26020 |
| POST_IMPORT_INVENTORY(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/import/inventory | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:26060 |
| POST_IMPORT_CUSTOMERS(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/import/customers | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:26099 |
| POST_DOWNLOAD_FINANCE_DATA(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/finance/data | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:26140 |
| GET_SHOP_DROPSHIPPING_INFO(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/dropshipping | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:26179 |
| GET_DROP_SHIPPING_REQUESTS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/dropshipping/requests | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:26261 |
| GET_DROP_SHIPPING_RESELLERS_SHOPS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/dropshipping/resellers | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:26343 |
| POST_REQUEST_DROPSHIP_ACCESS(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/reseller/access | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:26557 |
| GET_DROP_SHIPPING_SHOPS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/reseller/shops | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:26596 |
| GET_DROP_SHIPPING_RESELLER_RECEIPTS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/finance/reseller/receipts | SCOPE_BACKOFFICE_ORDER_READ (backoffice:order:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:26719 |
| GET_DROP_SHIPPING_RESELLER_ACCOUNT(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/finance/reseller/account | SCOPE_BACKOFFICE_ORDER_READ (backoffice:order:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:26758 |
| GET_DROP_SHIPPING_RESELLER_ACCOUNTS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/finance/reseller/accounts | SCOPE_BACKOFFICE_ORDER_READ (backoffice:order:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:26795 |
| GET_DROP_SHIPPING_RESELLER_PAY_FOR_FULFILLMENTS(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/finance/reseller/receipts/pay | SCOPE_BACKOFFICE_ORDER_READ (backoffice:order:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:26918 |
| POST_ADD_PRODUCT_BY_DROP_SHIPPING(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/reseller/products/add | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:26959 |
| GET_INSTAGRAM_DATA(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/channels/instagram | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:27170 |
| POST_INSTAGRAM_SET_SETTING(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/channels/instagram | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:27209 |
| PUT_SET_SHOP_AVOCADO(shop_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/avocado | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:29066 |
| GET_SHOP_INFO_FOR_AVOCADO(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/avocado-info | SCOPE_BACKOFFICE_SHOP_READ (backoffice:shop:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:29103 |
| POST_AVOCADO_CREATE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/avocados | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:29143 |
| PUT_AVOCADO_EDIT(shop_id: string \| number, avocado_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/avocados/{avocado_id} | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:29183 |
| PUT_AVOCADO_PROGRESS(shop_id: string \| number, avocado_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/avocados/{avocado_id}/progress | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:29223 |
| PUT_SET_SHOP_HYPER(shop_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/hyper | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:29560 |
| GET_HYPER_ORDER_INFO(shop_id: string \| number, hyper_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/process-center/hypers/{hyper_id} | SCOPE_BACKOFFICE_ORDER_WRITE (backoffice:order:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:29598 |
| POST_SEND_DIRECT_FEEDBACK(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/feedback/direct | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:29882 |
| POST_SET_SHOP_OPTIONS_GDPR(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/options/{code} | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:29922 |
| POST_SET_SHOP_OPTIONS_AMP(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/options/{code} | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:29961 |
| POST_SET_SHOP_OPTIONS_SIZE_UNIT(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/options/{code} | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30000 |
| POST_SET_SHOP_OPTIONS_MASS_UNIT(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/options/{code} | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30039 |
| POST_SET_SHOP_OPTIONS_DISTANCE_UNIT(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/options/{code} | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30078 |
| POST_SET_SHOP_OPTIONS_BOOST(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/options/{code} | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30117 |
| POST_SET_SHOP_OPTIONS_LOGIN_METHODS(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/options/{code} | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30156 |
| POST_SET_SHOP_OPTIONS_CHECKOUT(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/options/{code} | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30279 |
| POST_SET_SHOP_OPTIONS_TYPES(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/options/{code} | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30318 |
| POST_SET_SHOP_OPTIONS_SHOP_MAP(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/options/{code} | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30357 |
| POST_SET_SHOP_OPTIONS_VARIANTS(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/options/{code} | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30396 |
| POST_SET_SHOP_OPTIONS_SHIPPING_RESTRICTION(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/options/{code} | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30435 |
| POST_SET_SHOP_OPTIONS_LABELING(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/options/{code} | SCOPE_BACKOFFICE_OFFER_WRITE (backoffice:offer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30474 |
| GET_SHOP_ORDER_LAST_ID(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/order-last-id | SCOPE_BACKOFFICE_SHOP_READ (backoffice:shop:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30513 |
| POST_SET_SHOP_ORDER_LAST_ID(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/order-last-id | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30552 |
| DELETE_SEARCH_CONSOLE_CONNECTION(shop_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/services/google/search | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30590 |
| GET_SHOP_SERVICES_GOOGLE_SEARCH_CONSOLE_DATA(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/services/google/search | SCOPE_BACKOFFICE_REPORT_READ (backoffice:report:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30627 |
| DELETE_GOOGLE_SHEET_CONNECTION(shop_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/services/google/sheet | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30665 |
| POST_GOOGLE_SHEET_FORCE_SYNC(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/services/google/sheet/sync | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30702 |
| PUT_MY_SHOP_AGENCY_META_SET(shop_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/agency-meta | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:30855 |
| POST_SHOP_CANCEL_ACTIVE_DEAL(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/cancel-deal | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:31207 |
| GET_SHOP_WEBHOOKS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/webhooks | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:31245 |
| POST_ADD_SHOP_WEBHOOK(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/webhooks | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:31284 |
| DELETE_SHOP_WEBHOOK(shop_id: string \| number, webhook_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/webhooks/{webhook_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:31406 |
| POST_SET_BUSINESS_MODEL(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/business-model | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:31528 |
| POST_SHOP_VENDOR_SET_SETTING(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/business-model/marketplace | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:31569 |
| GET_SHOP_VENDORS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/vendors | SCOPE_BACKOFFICE_SHOP_READ (backoffice:shop:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:31609 |
| POST_SHOP_ADD_VENDOR(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/vendors | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:31648 |
| PUT_SHOP_EDIT_VENDOR(shop_id: string \| number, vendor_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/vendors/{vendor_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:31688 |
| GET_SHOP_VENDOR_PRICINGS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/pricings | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:31850 |
| POST_SHOP_ADD_VENDOR_PRICINGS(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/pricings | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:31889 |
| GET_ALL_VENDOR_PRODUCTS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/vendor-products | SCOPE_BACKOFFICE_PRODUCT_READ (backoffice:product:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:32010 |
| GET_PRODUCT_VENDORS(shop_id: string \| number, product_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/products/{product_id}/vendors | SCOPE_BACKOFFICE_PRODUCT_READ (backoffice:product:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:32048 |
| GET_SHOP_VENDOR_ACCOUNTS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/vendor-accounts | SCOPE_BACKOFFICE_VENDOR_PAYMENT_WRITE (backoffice:vendor-payment:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:32216 |
| GET_SHOP_VENDOR_PAYMENTS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/vendor-payments | SCOPE_BACKOFFICE_VENDOR_PAYMENT_WRITE (backoffice:vendor-payment:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:32298 |
| POST_SHOP_VENDOR_PAYMENT_ADD(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/vendor-payments | SCOPE_BACKOFFICE_VENDOR_PAYMENT_WRITE (backoffice:vendor-payment:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:32337 |
| GET_SHOP_VENDOR_REQUESTS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/vendor-requests | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:32417 |
| GET_SHOP_VENDOR_FINANCE_DOWNLOAD(shop_id: string \| number,vendor_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/vendors/{vendor_id}/finance/excel | SCOPE_BACKOFFICE_SHOP_READ (backoffice:shop:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:32629 |
| POST_IMPORT_VENDORS(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/import/vendors | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:32671 |
| GET_DOWNLOAD_ALL_SHOP_VENDORS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/vendors/export/excel | SCOPE_BACKOFFICE_SHOP_READ (backoffice:shop:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:32708 |
| GET_SHOP_CONNECTS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/connects | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:32749 |
| GET_CONNECT_SERVICES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/connect-services | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:32788 |
| GET_SHOP_VALUATIONS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/valuations | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:33399 |
| POST_ADD_SHOP_VALUATION(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/valuations | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:33438 |
| GET_SHOP_COMMENTS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/comments | SCOPE_ARTICLES (articles) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:33640 |
| DELETE_SHOP_COMMENT(shop_id: string \| number, comment_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/comments/{comment_id} | SCOPE_ARTICLES (articles) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:33766 |
| GET_SHOP_LOGGINGS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/logging | SCOPE_BACKOFFICE_REPORT_READ (backoffice:report:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:33962 |
| GET_SHOP_LOGISTIC_PROFILES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/logistic-profiles | SCOPE_BACKOFFICE_REPORT_READ (backoffice:report:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:34002 |
| POST_SHOP_CREATE_LOGISTIC_PROFILE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/logistic-profiles | SCOPE_BACKOFFICE_REPORT_READ (backoffice:report:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:34041 |
| GET_ARTICLE_SEO_AUDIT(shop_id: string \| number, article_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/seo-audit/articles/{article_id} | SCOPE_ARTICLES (articles) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:34381 |
| POST_SHOP_CONVERTER_WORD_HTML(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/converter/word/html | SCOPE_ARTICLES (articles) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:34419 |
| GET_SHOP_ARTICLES_TIMELINE(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/timeline/articles | SCOPE_ARTICLES (articles) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:34644 |
| POST_SHOP_ALL_PRODUCTS_ARTICLE_BODY_AUTO_FIX(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/products/bulk-actions/fix-articles | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:34753 |
| UPLOAD_ARTICLE_BLOG_IMAGE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/blogs/upload | SCOPE_ARTICLES (articles) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:34827 |
| GET_SHOP_ARTICLE_TAGS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/articles/tags | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:34900 |
| PUT_CHANGE_TAG(shop_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/articles/tags | SCOPE_ARTICLES (articles) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:34939 |
| POST_SET_SHOP_LAYOUT(shop_id: number \| string) | POST https://api.selldone.com/shops/{shop_id}/layout | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35673 |
| GET_SHOP_CONTAINERS(shop_id: number \| string) | GET https://api.selldone.com/shops/{shop_id}/containers | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35862 |
| GET_SHOP_MAP_TAGS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/map/tags | SCOPE_BACKOFFICE_GIFTCARD_WRITE (backoffice:giftcard:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35943 |
| POST_CREATE_SHOP_MAP_TAG(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/map/tags | SCOPE_BACKOFFICE_GIFTCARD_WRITE (backoffice:giftcard:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35982 |
| PUT_EDIT_SHOP_MAP_TAG(shop_id: string \| number, map_tag_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/map/tags/{map_tag_id} | SCOPE_BACKOFFICE_GIFTCARD_WRITE (backoffice:giftcard:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:36022 |
| DELETE_SHOP_MAP_TAG(shop_id: string \| number, map_tag_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/map/tags/{map_tag_id} | SCOPE_BACKOFFICE_GIFTCARD_WRITE (backoffice:giftcard:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:36060 |
| POST_METAVERSE_LANDS_ADD(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/metaverse/lands | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:36286 |
| PUT_METAVERSE_LANDS_EDIT(shop_id: string \| number, land_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/metaverse/lands/{land_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:36326 |
| GET_METAVERSE_LANDS(shop_id: string \| number, land_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/metaverse/lands | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:36366 |
| GET_SHOP_SUBSCRIPTION_PRICES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/subscription-prices | SCOPE_BACKOFFICE_RIBBON_WRITE (backoffice:ribbon:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:36581 |
| GET_PRODUCT_SUBSCRIPTION_PRICE_AVAILABLE_BILLINGS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/ribbon/billings | SCOPE_BACKOFFICE_RIBBON_WRITE (backoffice:ribbon:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:36666 |
| PUT_SET_SHOP_RIBBON(shop_id: string \| number) | PUT https://api.selldone.com/shops/{shop_id}/ribbon | SCOPE_BACKOFFICE_RIBBON_WRITE (backoffice:ribbon:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:36705 |
| GET_SHOP_RIBBONS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/ribbons | SCOPE_BACKOFFICE_RIBBON_WRITE (backoffice:ribbon:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:36785 |
| POST_PRODUCT_RIBBON(shop_id: string \| number, product_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/ribbon | SCOPE_BACKOFFICE_RIBBON_WRITE (backoffice:ribbon:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:36825 |
| GET_PRODUCT_EMBED_PATTERNS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/embed-patterns/product | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:37124 |
| PUT_SHOP_SET_TRANSLATIONS(shop_id: string \| number, key: string) | PUT https://api.selldone.com/shops/{shop_id}/translations/{translation_key} | SCOPE_BACKOFFICE_SHOP_ADD (backoffice:shop:add) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:37293 |
| POS_SHOP_TRANSLATE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/translate | SCOPE_BACKOFFICE_SHOP_ADD (backoffice:shop:add) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:37622 |
| GET_SHOP_STREAM_USERS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/stream-users | SCOPE_BACKOFFICE_CUSTOMER_WRITE (backoffice:customer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38879 |
| GET_SHOP_STREAMS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/streams | SCOPE_BACKOFFICE_CUSTOMER_WRITE (backoffice:customer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38918 |
| GET_DOWNLOAD_ALL_SHOP_STREAM_USERS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/stream-users/export/excel | SCOPE_BACKOFFICE_CUSTOMER_WRITE (backoffice:customer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:38996 |
| SET_SHOP_QUOTA(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/quota | SCOPE_BACKOFFICE_SHOP_READ (backoffice:shop:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:39247 |
| GET_SHOP_VARIANT_ASSETS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/variant-assets | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:39287 |
| POST_SHOP_VARIANT_ASSET_UPLOAD(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/variant-assets | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:39326 |
| GET_SHOP_INCLUDES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/includes | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:39407 |
| POST_SHOP_INCLUDE_ADD(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/includes | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:39446 |
| POST_SHOP_AUGMENT_UPLOAD_IMAGE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/augment/image | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:39569 |
| POST_SHOP_NOTE_ADD(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/notes | SCOPE_BACKOFFICE_NOTE_WRITE (backoffice:note:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:40123 |
| DELETE_SHOP_NOTE(shop_id: string \| number, note_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/notes/{note_id} | SCOPE_BACKOFFICE_NOTE_WRITE (backoffice:note:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:40161 |
| GET_SHOP_NOTIFICATIONS_REPOSITORY(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/notifications | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:40274 |
| GET_SHOP_CLUSTERS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/clusters | SCOPE_BACKOFFICE_SHOP_READ (backoffice:shop:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:40315 |
| POST_SHOP_CLUSTERS_ADD(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/clusters | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:40354 |
| DELETE_SHOP_CLUSTER(shop_id: string \| number, cluster_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/clusters/{cluster_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:40435 |
| GET_SHOP_ALL_CUSTOMERS_WALLETS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/wallets | SCOPE_BACKOFFICE_CUSTOMER_WRITE (backoffice:customer:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:40665 |
| POST_SHOP_CASHBACK_PROGRAM(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/cashback-program |  | TODO(api-docs): verify whether this SDK URL is stale before use. | apis/API.ts:40691 |
| GET_SHOP_CASHBACKS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/cashbacks | SCOPE_BACKOFFICE_CASHBACK_WRITE (backoffice:cashback:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:40732 |
| GET_CASHBACK_DATA(shop_id: string \| number, cashback_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/cashbacks/{cashback_id} | SCOPE_BACKOFFICE_CASHBACK_WRITE (backoffice:cashback:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:40770 |
| GET_CASHBACK_ORDERS(shop_id: string \| number, cashback_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/cashbacks/{cashback_id}/orders | SCOPE_BACKOFFICE_CASHBACK_WRITE (backoffice:cashback:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:40808 |
| DELETE_SHOP_CASHBACK(shop_id: string \| number, cashback_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/cashbacks/{cashback_id} | SCOPE_BACKOFFICE_CASHBACK_WRITE (backoffice:cashback:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:40846 |
| POST_SHOP_CASHBACK_ADD(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/cashbacks | SCOPE_BACKOFFICE_CASHBACK_WRITE (backoffice:cashback:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:40926 |
| GET_SHOP_PRINT_TEMPLATES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/print-templates | SCOPE_BACKOFFICE_PRINT_READ (backoffice:print:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:41138 |
| POST_SHOP_PRINT_TEMPLATE_ADD(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/print-templates | SCOPE_BACKOFFICE_PRINT_READ (backoffice:print:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:41177 |
| GET_SHOP_LISTING(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/listing | SCOPE_BACKOFFICE_SHOP_READ (backoffice:shop:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:41532 |
| POST_SHOP_LISTING_SAVE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/listing | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:41571 |
| GET_SHOP_LISTING_CATEGORIES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/listing/categories | SCOPE_BACKOFFICE_PRODUCT_READ (backoffice:product:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:41611 |
| POST_SHOP_LISTING_CATEGORY_ADD(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/listing/categories | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:41650 |
| GET_SHOP_LISTING_ITEMS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/listing/items | SCOPE_BACKOFFICE_PRODUCT_READ (backoffice:product:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:41774 |
| POST_SHOP_LISTING_ITEM_ADD(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/listing/items | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:41813 |
| GET_SHOP_LISTING_DESIGNS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/listing/designs | SCOPE_BACKOFFICE_SHOP_READ (backoffice:shop:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:42546 |
| POST_SHOP_LISTING_DESIGN_ADD(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/listing/designs | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:42585 |
| POST_SHOP_LISTING_DESIGN_EDIT(shop_id: string \| number, design_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/listing/designs/{design_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:42625 |
| DELETE_SHOP_LISTING_DESIGN(shop_id: string \| number, design_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/listing/designs/{design_id} | SCOPE_BACKOFFICE_SHOP_WRITE (backoffice:shop:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:42663 |
| GET_SHOP_LISTING_BADGES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/listing/badges | SCOPE_BACKOFFICE_PRODUCT_READ (backoffice:product:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:42715 |
| POST_SHOP_LISTING_BADGE_ADD(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/listing/badges | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:42754 |
| POST_SHOP_LISTING_BADGE_EDIT(shop_id: string \| number, badge_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/listing/badges/{badge_id} | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:42794 |
| DELETE_SHOP_LISTING_BADGE(shop_id: string \| number, badge_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/listing/badges/{badge_id} | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:42832 |
| GET_SHOP_LISTING_COMPANIES(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/listing/companies | SCOPE_BACKOFFICE_PRODUCT_READ (backoffice:product:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:42872 |
| POST_SHOP_LISTING_COMPANY_ADD(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/listing/companies | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:42911 |
| POST_SHOP_LISTING_COMPANY_EDIT(shop_id: string \| number, company_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/listing/companies/{company_id} | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:42951 |
| DELETE_SHOP_LISTING_COMPANY(shop_id: string \| number, company_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/listing/companies/{company_id} | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:42989 |
| GET_SHOP_LISTING_REVIEWS(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/listing/reviews | SCOPE_BACKOFFICE_PRODUCT_READ (backoffice:product:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:43038 |
| POST_SHOP_LISTING_REVIEW_REPLY(shop_id: string \| number, review_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/listing/reviews/{review}/reply | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:43078 |
| POST_SHOP_LISTING_REVIEW_APPROVE(shop_id: string \| number, review_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/listing/reviews/{review}/approve | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:43116 |
| POST_SHOP_LISTING_REVIEW_REJECT(shop_id: string \| number, review_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/listing/reviews/{review}/reject | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:43154 |
| DELETE_SHOP_LISTING_REVIEW(shop_id: string \| number, review_id: string \| number) | DELETE https://api.selldone.com/shops/{shop_id}/listing/reviews/{review} | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:43192 |
| POST_SHOP_LISTING_REVIEW_RESTORE(shop_id: string \| number, review_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/listing/reviews/{review}/restore | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:43230 |
| GET_SHOP_LISTING_MESSAGES(shop_id: number) | GET https://api.selldone.com/shops/{shop_id}/listing/messages | SCOPE_BACKOFFICE_PRODUCT_READ (backoffice:product:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:43282 |
| GET_SHOP_LISTING_MESSAGE(shop_id: number, message_id: number) | GET https://api.selldone.com/shops/{shop_id}/listing/messages/{message_id} | SCOPE_BACKOFFICE_PRODUCT_READ (backoffice:product:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:43320 |
| POST_SHOP_LISTING_MESSAGE_READ(shop_id: number, message_id: number) | POST https://api.selldone.com/shops/{shop_id}/listing/messages/{message_id}/read | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:43358 |
| POST_SHOP_LISTING_MESSAGE_ARCHIVE(shop_id: number, message_id: number) | POST https://api.selldone.com/shops/{shop_id}/listing/messages/{message_id}/archive | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:43396 |
| POST_SHOP_LISTING_MESSAGE_SPAM(shop_id: number, message_id: number) | POST https://api.selldone.com/shops/{shop_id}/listing/messages/{message_id}/spam | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:43434 |
| POST_SHOP_LISTING_MESSAGE_REPLY(shop_id: number, message_id: number) | POST https://api.selldone.com/shops/{shop_id}/listing/messages/{message_id}/reply | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:43474 |
| DELETE_SHOP_LISTING_MESSAGE(shop_id: number, message_id: number) | DELETE https://api.selldone.com/shops/{shop_id}/listing/messages/{message_id} | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:43512 |
| POST_SHOP_LISTING_MESSAGE_RESTORE(shop_id: number, message_id: number) | POST https://api.selldone.com/shops/{shop_id}/listing/messages/{message_id}/restore | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:43550 |
| POST_SHOP_LISTING_SET_ACTIVE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/listing/active | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:43595 |
| GET_SHOP_LISTING_SEARCH(shop_id: string \| number) | GET https://api.selldone.com/shops/{shop_id}/listing/search | SCOPE_BACKOFFICE_PRODUCT_READ (backoffice:product:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:43637 |
| POST_SHOP_LISTING_SEARCH_SAVE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/listing/search | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:43676 |
| POST_SHOP_LISTING_SEARCH_GENERATE(shop_id: string \| number) | POST https://api.selldone.com/shops/{shop_id}/listing/search/generate | SCOPE_BACKOFFICE_PRODUCT_WRITE (backoffice:product:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:43715 |

## sldn

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_TOKEN_PLAY_GAME() | POST https://api.selldone.com/sldn/play-game | SCOPE_BACKOFFICE_WALLET_WRITE (backoffice:wallet:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:41298 |
| POST_TOKEN_PURCHASE() | POST https://api.selldone.com/sldn/purchase | SCOPE_BACKOFFICE_WALLET_WRITE (backoffice:wallet:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:41335 |
| POST_TOKEN_PURCHASE_CHECK() | POST https://api.selldone.com/sldn/purchase/check | SCOPE_BACKOFFICE_WALLET_WRITE (backoffice:wallet:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:41370 |

## subscriptions

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_MY_SUBSCRIPTIONS() | GET https://api.selldone.com/subscriptions | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:40550 |
| POST_SUBSCRIBE_TO_PREMIUM(gateway_code: string) | POST https://api.selldone.com/subscriptions/premium/{gateway_code} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:40586 |

## supplier

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_SEND_REQUEST_SUPPLIER() | POST https://api.selldone.com/supplier | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:33922 |

## tokens

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_TOKENS() | GET https://api.selldone.com/tokens | SCOPE_SELLDONE_TOKEN_READ (selldone:token:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13802 |
| DELETE_TOKEN(token_id: string \| number) | DELETE https://api.selldone.com/tokens/{token_id} | SCOPE_SELLDONE_TOKEN_WRITE (selldone:token:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:13838 |

## transactions

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_TRANSACTION_INFO(account_number: string) | GET https://api.selldone.com/transactions/{account_number} | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:15444 |
| POST_CREATE_NEW_TRANSACTION() | POST https://api.selldone.com/transactions/send/new | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:15477 |
| POST_CONFIRM_TRANSACTION() | POST https://api.selldone.com/transactions/send/confirm | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:15512 |

## user

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| POST_DELETE_ME() | POST https://api.selldone.com/user/delete-me | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:177 |
| POST_SET_SUBSCRIBE() | POST https://api.selldone.com/user/subscribed | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:211 |
| POST_SET_PRIMARY_EMAIL() | POST https://api.selldone.com/user/email | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:245 |
| POST_MOBILE_VERIFY() | POST https://api.selldone.com/user/mobile/verify | SCOPE_SELLDONE_IDENTIFICATION (selldone:identification) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:802 |
| POST_MOBILE_VERIFY_CODE() | POST https://api.selldone.com/user/mobile/verify-code | SCOPE_SELLDONE_IDENTIFICATION (selldone:identification) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:838 |
| POST_CHANGE_PASSWORD() | POST https://api.selldone.com/user/security/password/change | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:873 |
| POST_CHANGE_SOCIALS() | POST https://api.selldone.com/user/security/socials-login | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:907 |
| GET_SECURITY_DATA() | GET https://api.selldone.com/user/security | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:943 |
| POST_GENERATE_2FA_SECURITY_KEY() | POST https://api.selldone.com/user/security/2fa/generate | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:976 |
| POST_ENABLE_2FA() | POST https://api.selldone.com/user/security/2fa/enable | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1009 |
| POST_DISABLE_2FA() | POST https://api.selldone.com/user/security/2fa/disable | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1044 |
| GET_LOGIN_DEVICES() | GET https://api.selldone.com/user/security/devices | SCOPE_SELLDONE_SECURITY_WRITE (selldone:security:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1078 |
| POST_LOGOUT_DEVICE() | POST https://api.selldone.com/user/security/devices/logout | SCOPE_SELLDONE_SECURITY_WRITE (selldone:security:write) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1115 |
| PUT_USER_INTEREST() | PUT https://api.selldone.com/user/interest | None found in matched route/controller method by static inspection. | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:1150 |
| POST_FOLLOW_USER(user_id: string \| number) | POST https://api.selldone.com/user/follow/{following_user_id} | SCOPE_USER_PROFILE_READ (profile) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:35126 |

## users

| Builder | Endpoint(s) | Scope | Auth | Source |
|---|---|---|---|---|
| GET_SUGGESTION_USERS(search: string) | GET https://api.selldone.com/users/suggestion/{search} | SCOPE_BACKOFFICE_SHOP_READ (backoffice:shop:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:69 |
| GET_SUGGESTION_MENTION_USERS(search: string) | GET https://api.selldone.com/users/mention/{search} | SCOPE_BACKOFFICE_SHOP_READ (backoffice:shop:read) | Required; OAuth2/Bearer API token via `Authenticate:api`. | apis/API.ts:142 |
