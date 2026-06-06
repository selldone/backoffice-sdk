# Route Index

This file was generated from Backoffice/Shuttle route packs. `Local path` is the path in that route object; parent route packs are required to build the full path.

Named routes: 371

## src/Applications/Selldone/router/shuttle/provider/ProvidersRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
| providers/:provider_id | ConnectProviderPage | Provider {provider_id} \| Dashboard |  | 60 |
|  | ConnectProvider_Dashboard | Provider {provider_id} \| Dashboard |  | 67 |
| api | ConnectProvider_Apis | Provider {provider_id} \| API Config |  | 77 |
|  | ConnectProvider_Apis_Config | Provider {provider_id} \| API Config |  | 83 |
| shop | ConnectProvider_Apis_Shops | Provider {provider_id} \| Shops APIs documents |  | 92 |
| product | ConnectProvider_Apis_Products | Provider {provider_id} \| Products APIs documents |  | 101 |
| order | ConnectProvider_Apis_Orders | Provider {provider_id} \| Orders APIs documents |  | 110 |
| auth | ConnectProvider_Auth | Provider {provider_id} \| Authentication |  | 122 |
| setting | ConnectProvider_Setting | Provider {provider_id} \| Setting |  | 132 |
| logs | ConnectProvider_Logs | Provider {provider_id} \| Logs |  | 141 |
| shops | ConnectProvider_Shops | Provider {provider_id} \| Stores |  | 151 |
| webhook | ConnectProvider_Webhooks | Provider {provider_id} \| Webhook config |  | 161 |
|  | ConnectProvider_Webhooks_Config | Provider {provider_id} \| Webhook config |  | 167 |
| order | ConnectProvider_Webhooks_Orders | Provider {provider_id} \| Webhook orders document |  | 176 |
| product | ConnectProvider_Webhooks_Products | Provider {provider_id} \| Webhook products document |  | 185 |
| shop | ConnectProvider_Webhooks_Shops | Provider {provider_id} \| Webhook shops document |  | 194 |
| category | ConnectProvider_Webhooks_Categories | Provider {provider_id} \| Webhook categories document |  | 203 |
| customer | ConnectProvider_Webhooks_Customers | Provider {provider_id} \| Webhook customers document |  | 212 |

## src/Applications/Selldone/router/shuttle/shop/affiliates/ShuttleShopAffiliateRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
| dashboard | BPageAffiliateDashboard | Affiliate AF-{affiliate_id} \| Dashboard |  | 44 |
| orders | BPageAffiliateOrders | Affiliate AF-{affiliate_id} \| Orders |  | 53 |
| payments | BPageAffiliatePayments | Affiliate AF-{affiliate_id} \| Payments |  | 62 |
| edit | BPageAffiliateEdit | Affiliate AF-{affiliate_id} \| Edit |  | 71 |

## src/Applications/Selldone/router/shuttle/shop/app/ShuttleShopAppRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
| app/:app_code/:tab? | BPageApplication | Application {app_code} \| {tab} | ShopPermissionRegions.APPLICATIONS | 28 |

## src/Applications/Selldone/router/shuttle/shop/campaigns/ShuttleShopCampaignsRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
| dashboard | BPageCampaignDashboard | Campaign CM-{campaign_id} \| Dashboard |  | 51 |
| finance | BPageCampaignFinance | Campaign CM-{campaign_id} \| Finance |  | 61 |
| ads | BPageCampaignAds | Campaign CM-{campaign_id} \| Ads |  | 71 |
| landing | BPageCampaignLanding | Campaign CM-{campaign_id} \| Landing page |  | 81 |
| setting | BPageCampaignSetting | Campaign CM-{campaign_id} \| Setting |  | 91 |
| links | BPageCampaignLinks | Campaign CM-{campaign_id} \| Links |  | 100 |

## src/Applications/Selldone/router/shuttle/shop/cash-register/ShuttleShopCashRegisterRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
|  | BPagePosPanel | Cash register |  | 52 |
| orders | BPagePosOrders | Orders |  | 62 |
| customers | BPagePosCustomers | Customers |  | 72 |
| inventory | BPagePosInventory | Inventory |  | 83 |
| devices | BPagePosDevices | Devices |  | 95 |

## src/Applications/Selldone/router/shuttle/shop/cashback/ShuttleShopCashbackRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
|  | BPageCashbackDashboard | Cashback Program \| Dashboard |  | 41 |
| orders | BPageCashbackOrders | Cashback Program \| Orders |  | 49 |
| edit | BPageCashbackEdit | Cashback Program \| Edit |  | 58 |

## src/Applications/Selldone/router/shuttle/shop/connect/ShuttleShopConnectRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
| dashboard | BPageConnectDashboard | Connect ID-{shop_connect_id} \| Dashboard |  | 58 |
| orders | ShopConnectPage_Orders | Connect ID-{shop_connect_id} \| Orders |  | 67 |
| physical | ShopConnectPage_Orders_Physical | Connect ID-{shop_connect_id} \| Physical Orders |  | 78 |
| virtual | ShopConnectPage_Orders_Virtual | Connect ID-{shop_connect_id} \| Virtual Orders |  | 89 |
| file | ShopConnectPage_Orders_File | Connect ID-{shop_connect_id} \| File Orders |  | 100 |
| service | ShopConnectPage_Orders_Service | Connect ID-{shop_connect_id} \| Service Orders |  | 110 |
| setting | BPageConnectSetting | Connect ID-{shop_connect_id} \| Setting |  | 121 |
| products | BPageConnectProducts | Connect ID-{shop_connect_id} \| Products |  | 131 |
| logs | ShopConnectPage_Logs | Connect ID-{shop_connect_id} \| Logs |  | 141 |

## src/Applications/Selldone/router/shuttle/shop/coupon/ShuttleShopCouponRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
|  | BPageCouponDashboard | Coupon \| Dashboard |  | 42 |
| orders | BPageCouponOrders | Coupon \| Orders |  | 50 |
| edit | BPageCouponEdit | Coupon \| Edit |  | 59 |

## src/Applications/Selldone/router/shuttle/shop/customers/ShuttleShopCustomersRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
| customers/:customer_id | BPageCustomer |  | ShopPermissionRegions.CUSTOMERS | 54 |
| dashboard | BPageCustomerDashboard | Customer ID-{customer_id} \| Dashboard |  | 64 |
| journey | BPageCustomerActivity | Customer ID-{customer_id} \| Journey |  | 74 |
| edit | BPageCustomerEdit | Customer ID-{customer_id} \| Edit |  | 84 |
| wallet | BPageCustomerWallet | Customer ID-{customer_id} \| Wallet |  | 94 |
| orders | BPageCustomerOrders | Customer ID-{customer_id} \| Physical Orders |  | 105 |
| physical | BPageCustomerOrdersPhysical | Customer ID-{customer_id} \| Physical Orders |  | 112 |
| virtual | BPageCustomerOrdersVirtual | Customer ID-{customer_id} \| Virtual Orders |  | 123 |
| file | BPageCustomerOrdersFile | Customer ID-{customer_id} \| File Orders |  | 134 |
| service | BPageCustomerOrdersService | Customer ID-{customer_id} \| Service Orders |  | 144 |
| pos | BPageCustomerOrdersPos | Customer ID-{customer_id} \| POS Orders |  | 154 |
| hyper | BPageCustomerOrdersHyper | Customer ID-{customer_id} \| Hyper Orders |  | 165 |
| avocado | BPageCustomerOrdersAvocado | Customer ID-{customer_id} \| Avocado Orders |  | 176 |
| dropshipping | BPageCustomerOrdersDropshipping | Customer ID-{customer_id} \| Dropshipping Orders |  | 186 |

## src/Applications/Selldone/router/shuttle/shop/discount-code/ShuttleShopDiscountCodeRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
|  | BPageDiscountCodeDashboard | Discount Codes \| Dashboard |  | 42 |
| orders | BPageDiscountCodeOrders | Discount Codes \| Orders |  | 51 |
| edit | BPageDiscountCodeEdit | Discount Codes \| Edit |  | 60 |

## src/Applications/Selldone/router/shuttle/shop/drop-shipping/ShuttleShopDropShippingRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
|  | BPageWholesalerDashboard | Dropshipping \| Dashboard |  | 56 |
| shops | BPageWholesalerShops | Dropshipping \| Shops |  | 67 |
| orders | BPageWholesalerOrders | Dropshipping \| Orders |  | 78 |
| requests | BPageWholesalerRequests | Dropshipping \| Requests |  | 88 |
| inventory | BPageWholesalerInventory | Dropshipping \| Inventory |  | 97 |
| dashboard | BPageWholesalerShopDashboard | Dropshipping {reseller_id} \| Dashboard |  | 120 |
| orders | BPageWholesalerShopOrders | Dropshipping {reseller_id} \| Orders |  | 129 |
| wallet | BPageWholesalerShopWallet | Dropshipping {reseller_id} \| Wallet |  | 138 |

## src/Applications/Selldone/router/shuttle/shop/emails/ShuttleShopEmailsRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
| dashboard | BPageEmailMarketingDashboard | Email Marketing E-{email_id} \| Dashboard |  | 40 |
| edit | BPageEmailMarketingEdit | Email Marketing E-{email_id} \| Edit |  | 49 |

## src/Applications/Selldone/router/shuttle/shop/gateway/ShuttleShopGatewayRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
|  | BPageGatewayDashboard | Gateway \| Dashboard |  | 42 |
| transactions | BPageGatewayTransactions | Gateway \| Transactions |  | 51 |
| edit | BPageGatewayEdit | Gateway \| Edit  |  | 60 |

## src/Applications/Selldone/router/shuttle/shop/gift-card/ShuttleShopGiftCardRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
|  | AdminGiftCardDashboardPage | Gift Cards \| Dashboard |  | 43 |
| edit | AdminGiftCardEditPage | Gift Cards \| Edit  |  | 52 |
| orders | AdminGiftcardPage_Orders | Gift Cards \| Orders |  | 61 |
| list | AdminGiftCardManagementPage | Gift Cards \| List |  | 70 |

## src/Applications/Selldone/router/shuttle/shop/logistic/ShuttleShopLogisticRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
| dashboard | LogisticProfilePage_Dashboard | Profile {profile_id} \| Dashboard |  | 43 |
| products | LogisticProfilePage_Products | Profile {profile_id} \| Products |  | 53 |
| setting | LogisticProfilePage_Setting | Profile {profile_id} \| Setting |  | 63 |

## src/Applications/Selldone/router/shuttle/shop/marketplace/ShuttleShopMarketplaceRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
|  | BPageMarketplaceDashboard | Marketplace \| Dashboard |  | 70 |
| vendors | BPageMarketplaceVendors | Marketplace \| Vendors |  | 81 |
| products | BPageMarketplaceProducts | Marketplace \| Products |  | 91 |
| orders | BPageMarketplaceOrders | Marketplace \| Orders |  | 102 |
| physical | BPageMarketplaceOrdersPhysical | Marketplace \| Physical orders |  | 111 |
| virtual | BPageMarketplaceOrdersVirtual | Marketplace \| Virtual orders |  | 121 |
| file | BPageMarketplaceOrdersFile | Marketplace \| File orders |  | 131 |
| service | BPageMarketplaceOrdersService | Marketplace \| Service orders |  | 141 |
| accounts | BPageMarketplaceWallets | Marketplace \| Wallets |  | 153 |
| payments | BPageMarketplacePayouts | Marketplace \| Payments History |  | 163 |
| pricing | BPageMarketplacePricings | Marketplace \| Pricing Models |  | 173 |
| requests | BPageMarketplaceRequests | Marketplace \| Requests |  | 182 |
| setting | BPageMarketplaceSetting | Marketplace \| Setting |  | 192 |

## src/Applications/Selldone/router/shuttle/shop/offer/ShuttleShopOfferRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
|  | BPageOfferDashboard | Offer \| Dashboard |  | 41 |
| orders | BPageOfferOrders | Offer \| Orders |  | 49 |
| edit | BPageOfferEdit | Offer \| Edit |  | 58 |

## src/Applications/Selldone/router/shuttle/shop/process-center/ShuttleShopProcessCenterRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
| process-center/SM-:basket_id | BPageOrderPhysical |  | ShopPermissionRegions.ORDERS | 139 |
| dashboard | BPageOrderPhysicalDashboard | Order SM-{basket_id} \| Dashboard |  | 151 |
| form | BPageOrderPhysicalInput | Order SM-{basket_id} \| Form |  | 161 |
| track | BPageOrderPhysicalTrack | Order SM-{basket_id} \| Track |  | 171 |
| timeline | BPageOrderPhysicalTimeline | Order SM-{basket_id} \| Timeline |  | 181 |
| chat | BPageOrderPhysicalChat | Order SM-{basket_id} \| Chat |  | 191 |
| return | BPageOrderPhysicalReturn | Order SM-{basket_id} \| Return request |  | 201 |
| process-center/SV-:basket_id | BPageOrderVirtual | Order SV-{basket_id} \| Dashboard |  | 213 |
| dashboard | BPageOrderVirtualDashboard | Order SV-{basket_id} \| Dashboard |  | 221 |
| form | BPageOrderVirtualInput | Order SV-{basket_id} \| Form |  | 231 |
| track | BPageOrderVirtualTrack | Order SV-{basket_id} \| Track |  | 241 |
| timeline | BPageOrderVirtualTimeline | Order SV-{basket_id} \| Timeline |  | 251 |
| return | BPageOrderVirtualReturn | Order SV-{basket_id} \| Return request |  | 261 |
| chat | BPageOrderVirtualChat | Order SV-{basket_id} \| Chat |  | 271 |
| process-center/SF-:basket_id | BPageOrderFile | Order SF-{basket_id} \| Dashboard |  | 282 |
| dashboard | BPageOrderFileDashboard | Order SF-{basket_id} \| Dashboard |  | 290 |
| track | ShopProcessCenterFileOrderPage_Track | Order SF-{basket_id} \| Track |  | 300 |
| timeline | ShopProcessCenterFileOrderPage_Timeline | Order SF-{basket_id} \| Timeline |  | 310 |
| return | ShopProcessCenterFileOrderPage_ReturnRequest | Order SF-{basket_id} \| Return request |  | 320 |
| chat | BPageOrderFileChat | Order SF-{basket_id} \| Chat |  | 330 |
| process-center/SS-:basket_id | BPageOrderService |  |  | 342 |
| dashboard | BPageOrderServiceDashboard | Order SS-{basket_id} \| Dashboard |  | 351 |
| form | BPageOrderServiceInputs | Order SS-{basket_id} \| Form |  | 361 |
| track | BPageOrderServiceTrack | Order SS-{basket_id} \| Track |  | 371 |
| timeline | BPageOrderServiceTimeline | Order SS-{basket_id} \| Timeline |  | 381 |
| chat | BPageOrderServiceChat | Order SS-{basket_id} \| Chat |  | 390 |
| bills | BPageOrderServiceBills | Order SS-{basket_id} \| Bills |  | 399 |
| process-center/POS-:basket_id | BPageOrderPos | Order POS-{basket_id} \| Dashboard |  | 411 |
| dashboard | BPageOrderPosDashboard | Order POS-{basket_id} \| Dashboard |  | 419 |
| timeline | BPageOrderPosTimeline | Order POS-{basket_id} \| Timeline |  | 429 |
| process-center/DS-:basket_id | BPageOrderFulfillment | Order DS-{basket_id} \| Dashboard |  | 441 |
| dashboard | BPageOrderFulfillmentDashboard | Order DS-{basket_id} \| Dashboard |  | 449 |
| inputs | BPageOrderFulfillmentInputs | Order DS-{basket_id} \| Inputs |  | 459 |
| track | BPageOrderFulfillmentTrack | Order DS-{basket_id} \| Track |  | 469 |
| timeline | BPageOrderFulfillmentTimeline | Order DS-{basket_id} \| Timeline |  | 479 |
| return | BPageOrderFulfillmentReturn | Order DS-{basket_id} \| Return |  | 489 |
| process-center/AVO-:basket_id | BPageOrderAvocado | Order AVO-{basket_id} \| Dashboard |  | 501 |
| dashboard | BPageOrderAvocadoDashboard | Order AVO-{basket_id} \| Dashboard |  | 509 |
| track | BPageOrderAvocadoTrack | Order AVO-{basket_id} \| Track |  | 520 |
| timeline | BPageOrderAvocadoTimeline | Order AVO-{basket_id} \| Timeline |  | 530 |
| process-center/HYP-:basket_id | BPageOrderHyper | Order HYP-{basket_id} \| Dashboard |  | 542 |
| dashboard | BPageOrderHyperDashboard | Order HYP-{basket_id} \| Dashboard |  | 550 |
| track | BPageOrderHyperTrack | Order HYP-{basket_id} \| Track |  | 561 |
| timeline | BPageOrderHyperTimeline | Order HYP-{basket_id} \| Timeline |  | 571 |
| process-center/SN-:basket_id | BPageOrderSubscription |  |  | 583 |
| dashboard | BPageOrderSubscriptionDashboard | Order SN-{basket_id} \| Dashboard |  | 592 |
| form | BPageOrderSubscriptionInputs | Order SN-{basket_id} \| Form |  | 602 |
| track | BPageOrderSubscriptionTrack | Order SN-{basket_id} \| Track |  | 612 |
| timeline | BPageOrderSubscriptionTimeline | Order SN-{basket_id} \| Timeline |  | 622 |
| chat | BPageOrderSubscriptionChat | Order SN-{basket_id} \| Chat |  | 632 |
| bills | BPageOrderSubscriptionBills | Order SN-{basket_id} \| Bills |  | 642 |

## src/Applications/Selldone/router/shuttle/shop/product/ShuttleShopProductRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
|  | BPageProductDashboard | Product {product_id} \| Dashboard |  | 65 |
| inventory | BPageProductInventory | Product {product_id} \| Inventory |  | 74 |
| orders | BPageProductOrders | Product {product_id} \| Orders |  | 82 |
| content | ProductAdmin_EditArticle | Product {product_id} \| Content |  | 91 |
| 3d | BPageProduct3D | Product {product_id} \| 3D / AR |  | 100 |
| hyper | BPageProductHyper | Product {product_id} \| Hyper |  | 109 |
| subscription | BPageProductSubscription | Product {product_id} \| Subscription Ribbon |  | 118 |
| membership | BPageProductMembership | Product {product_id} \| Membership |  | 127 |
| vendors | BPageProductVendors | Product {product_id} \| Vendors |  | 136 |
| embed | BPageProductEmbed | Product {product_id} \| Shop Button & Embed |  | 145 |
| cross | BPageProductCrossSelling | Product {product_id} \| Cross Selling |  | 153 |
| template | BPageProductTemplate | Product {product_id} \| Template |  | 161 |
| dropshipping | BPageProductDropshipping | Product {product_id} \| Drop Shipping |  | 170 |
| edit | BPageProductEdit | Product {product_id} \| Edit  |  | 179 |

## src/Applications/Selldone/router/shuttle/shop/review/ShuttleShopReviewSourceRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
|  | BPageReviewDashboard | Review Source \| Dashboard |  | 42 |
| edit | BPageReviewEdit | Review Source \| Edit |  | 51 |

## src/Applications/Selldone/router/shuttle/shop/ShuttleShopRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
| pages/:page_id | BPageLandingEditor | Page Builder \| ID: {page_id}  | ShopPermissionRegions.PAGES | 363 |
| popups/:popup_id | BPagePopup | Popup Builder \| ID: {popup_id}  | ShopPermissionRegions.PAGES | 381 |
|  | BPageShopDashboard | Shop Dashboard |  | 417 |
|  | BPageShopProductsList | Products List |  | 436 |
| import | BPageShopProductsImporter | Products Import |  | 445 |
| export | BPageShopProductsExporter | Products Export |  | 454 |
| products-que | BPageShopProductsProductsQue | Products Que |  | 463 |
| images-que | BPageShopProductsImagesQue | Images Que |  | 472 |
| blog | BPageShopBlogs |  | ShopPermissionRegions.BLOG | 484 |
| list | BPageShopBlogsList | Blog List |  | 493 |
| timeline | BPageShopBlogsTimeline | Blog Timeline |  | 503 |
| categories | BPageShopBlogsCategories | Blog Categories |  | 512 |
| blog/new | BPageShopBlogsAdd | New Blog | ShopPermissionRegions.BLOG | 523 |
| blog/edit/:blog_id | BPageShopBlogsEdit | Blog {blog_id} \| Edit  | ShopPermissionRegions.BLOG | 534 |
| process | BPageShopOrders |  | ShopPermissionRegions.ORDERS | 546 |
| physical | BPageShopOrdersPhysical | Process Center \| Physical |  | 556 |
| virtual | BPageShopOrdersVirtual | Process Center \| Virtual |  | 566 |
| file | BPageShopOrdersFile | Process Center \| File |  | 575 |
| service | BPageShopOrdersService | Process Center \| Service |  | 584 |
| pos | BPageShopOrdersPos | Process Center \| POS |  | 594 |
| dropshipping | BPageShopOrdersDropShipping | Process Center \| Drop Shipping |  | 604 |
| avocado | BPageShopOrdersAvocado | Process Center \| Avocado |  | 614 |
| hyper | BPageShopOrdersHyper | Process Center \| Hyper Sell |  | 624 |
| subscription | BPageShopOrdersSubscription | Process Center \| Subscriptions |  | 634 |
| finance | BPageShopFinance |  | ShopPermissionRegions.ACCOUNTING | 646 |
| report | BPageShopFinanceReport | Financial Report  |  | 655 |
| bill | BPageShopFinanceBill | Account & Invoice |  | 664 |
| gateway | BPageShopFinanceGateways | Payment Methods  |  | 673 |
| exchange | BPageShopFinanceExchange | Exchange Rates |  | 682 |
| tax | BPageShopFinanceTax | Tax |  | 691 |
| valuations | BPageShopFinanceValuations | Valuations |  | 701 |
| dropshipping-checkouts | BPageShopFinanceResellerFulfillment | Drop shipping checkout |  | 711 |
| dropshipping-accounts | BPageShopFinanceResellerWallets | Drop shipping accounts |  | 721 |
| ribbon | BPageShopFinanceRibbon | Ribbon subscriptions |  | 731 |
| wallets | BPageShopFinanceCustomerWallets | Customer Wallets |  | 741 |
| incentives | BPageShopIncentives |  | ShopPermissionRegions.INCENTIVES | 753 |
| gift-card | BPageShopIncentivesGiftcard | Gift Cards  |  | 762 |
| discount | BPageShopIncentivesDiscountCode | Discount Codes |  | 771 |
| coupon | BPageShopIncentivesCoupon | Coupons |  | 780 |
| offer | BPageShopIncentivesOffer | Offers |  | 789 |
| lottery | BPageShopIncentivesLottery | Wheel of fortune |  | 798 |
| cashback | BPageShopIncentivesCashback | Cashback |  | 808 |
| logistic | BPageShopLogistic |  | ShopPermissionRegions.LOGISTIC | 820 |
| inventory | BPageShopLogisticInventory | Logistic \| Inventory |  | 830 |
|  | BPageShopLogisticInventoryList | Inventory list |  | 840 |
| export | InventoryExporter | Export inventory |  | 851 |
| import | InventoryImporter | Import inventory |  | 861 |
| warehouse | BPageShopLogisticWarehouse | Logistic \| Warehouse |  | 874 |
| delivery | BPageShopLogisticShipping | Delivery Management |  | 883 |
| return | BPageShopLogisticReturns | Return Requests |  | 894 |
| includes | BPageShopLogisticIncludes | Included items in the product |  | 905 |
| profiles | BPageShopLogisticProfiles | Logistic Profiles |  | 916 |
| print | BPageShopLogisticPrint | Print Management |  | 926 |
| property-sets | BPageShopLogisticPropertySets | Property Sets |  | 936 |
| boxes | BPageShopLogisticBoxes | Boxes |  | 947 |
| crm | BPageShopCrm |  | ShopPermissionRegions.CUSTOMERS | 962 |
| report | BPageShopCrmReport | Customers Reports |  | 971 |
| customers | BPageShopCrmCustomers | Customers |  | 981 |
| club | BPageShopCrmClub | Customers Club  |  | 991 |
| community | BPageShopCrmCommunity | Community  |  | 1001 |
| faq | BPageShopCrmFaq | FAQ |  | 1011 |
| contact | BPageShopCrmChat | Contact List |  | 1020 |
| comments | BPageShopCrmComments | Comments |  | 1029 |
| reviews | BPageShopCrmReviews | Reviews |  | 1038 |
| community | BPageShopCommunity |  | ShopPermissionRegions.COMMUNITY | 1052 |
| categories | BPageShopCommunityCategories | Community Categories |  | 1061 |
| topics | BPageShopCommunityTopics | Community Topics |  | 1070 |
| posts | BPageShopCommunityPosts | Community Posts |  | 1080 |
| comments | BPageShopCommunityComments | Community Comments |  | 1090 |
| overview | ShopCommunity_Overview | Community Overview |  | 1100 |
| marketing | BPageShopMarketing |  | ShopPermissionRegions.MARKETING | 1113 |
| campaigns | BPageShopMarketingCampaign | Campaigns  |  | 1122 |
| affiliate | BPageShopMarketingAffiliate | Affiliate  |  | 1134 |
| email-marketing | BPageShopMarketingEmail | Email Marketing  |  | 1143 |
| funnels | BPageShopMarketingFunnel | Funnels |  | 1152 |
| stream | BPageShopMarketingStream | Stream users |  | 1162 |
| category | BPageShopClassification | Categories Management | ShopPermissionRegions.CATEGORIES | 1175 |
|  | BPageShopClassificationCategories | Categories Management |  | 1186 |
| import | BPageShopClassificationImporter | Categories Import |  | 1196 |
| export | BPageShopClassificationExporter | Categories Export |  | 1205 |
| hierarchy | BPageShopClassificationHierarchy | Categories Hierarchy |  | 1214 |
| clusters | BPageShopClassificationClusters | Clusters |  | 1224 |
| channel | BPageShopChannel |  | ShopPermissionRegions.CHANNELS | 1237 |
| bots/:driver | BPageShopChannelBots | Bots \| {driver} |  | 1246 |
| instagram | BPageShopChannelInstagram | Instagram Apps |  | 1255 |
| google | BPageShopChannelGoogle | Google Apps |  | 1266 |
| facebook | BPageShopChannelMeta | Facebook Apps |  | 1275 |
| avocado | BPageShopChannelAvocado | Avocado \| Social Sale |  | 1284 |
| hyper | BPageShopChannelHyper | Hyper \| Instant Sale |  | 1294 |
| ribbon | BPageShopChannelRibbon | Ribbon \| Subscription Box |  | 1304 |
| onboard | BPageShopChannelClover | Clover \| Smart Selection Guide |  | 1314 |
| connect | BPageShopChannelConnect | Connect \| Smart Integration With the World |  | 1324 |
| map | BPageShopChannelMap | Map \| Location Based Search |  | 1334 |
| openai | BPageShopChannelOpenAI | OPen AI \| My Sales Agent |  | 1344 |
| listing | BPageShopChannelListing | Listing |  | 1355 |
| page | BPageShopPages |  | ShopPermissionRegions.PAGES | 1371 |
| landings | BPageShopPagesLandings | Pages \| Landings  |  | 1380 |
| popups | BPageShopPagesPopups | Pages \| Popups  |  | 1390 |
| static | BPageShopPagesStatic | Pages \| Static Pages |  | 1400 |
| about-us | BPageShopPagesAboutUs | Pages \| About us |  | 1410 |
| terms | BPageShopPagesTerms | Pages \| Terms of use |  | 1419 |
| privacy | BPageShopPagesPrivacy | Pages \| Privacy policy |  | 1428 |
| contact-us | BPageShopPagesContactUs | Pages \| Contact us |  | 1438 |
| access | BPageShopPermission |  | ShopPermissionRegions.SETTINGS | 1451 |
| staff | BPageShopPermissionStaff | Access \| Personal Tokens |  | 1460 |
| role | BPageShopPermissionRoles | Access \| Roles |  | 1469 |
| api | BPageShopPermissionApi | Access \| API Clients |  | 1479 |
| application | BPageShopApplications |  | ShopPermissionRegions.APPLICATIONS | 1492 |
| pwa | BPageShopApplicationsPwa | Application \| PWA yes |  | 1501 |
| ios | BPageShopApplicationsIos | Application \| iOS |  | 1511 |
| android | BPageShopApplicationsAndroid | Application \| Android yes |  | 1521 |
| metaverse | BPageShopApplicationsMetaverse | Application \| Metaverse yes |  | 1531 |
| automation | ShopAutomation |  | ShopPermissionRegions.AUTOMATION | 1544 |
| webhook | BShopAutomationWebhook | Automation \| Webhooks  |  | 1553 |
| logging | BShopAutomationLogging | Automation \| Logging  |  | 1562 |
| notifications | BShopAutomationNotifications | Automation \| Notifications |  | 1571 |
| autopilot | ShopAutomation_Autopilot | Automation \| Auto Pilot  |  | 1581 |
| niomatic | ShopAutomation_Niomatic | Automation \| Niomatic  |  | 1590 |
| edit | BPageShopSetting |  | ShopPermissionRegions.SETTINGS | 1602 |
| info | BPageShopSettingInfo | Edit Shop  |  | 1611 |
| flow | BPageShopSettingFlow | Shop Configuration |  | 1621 |
| business-model | BPageShopSettingBusinessModel | Business Model |  | 1630 |
| license | BPageShopSettingLicense | License Management |  | 1640 |
| menu | BPageShopSettingMenus | Menu |  | 1650 |
| critical-zone | BPageShopSettingCriticalZone | Critical Zone |  | 1660 |
| seo | BPageShopSettingSeo | SEO |  | 1670 |
| gdpr | BPageShopSettingAccess | GDPR |  | 1680 |
| quota | BPageShopSettingQuota | Quota |  | 1689 |
| advanced | BPageShopSettingAdvance | Advanced Options |  | 1698 |
| notifications | BPageShopSettingNotifications | Store Notifications  |  | 1708 |
| locations | BPageShopSettingLocations | Locations |  | 1718 |
| languages | BPageShopSettingLanguages | Languages |  | 1728 |
| theme | BPageShopSettingTheme | Theme |  | 1738 |
| sms | BPageShopSettingSms | Sms |  | 1748 |
| emails | BPageShopSettingEmail | Emails |  | 1758 |
| domains | BPageShopSettingDomain | Domains |  | 1768 |
| listing | BPageShopListing |  | ShopPermissionRegions.PRODUCTS | 1790 |
| items | BPageShopListingItems | Listing Items  |  | 1799 |
| categories | BPageShopListingCategories | Listing Categories |  | 1808 |
| supervision | BPageShopListingSupervision | Listing Supervision |  | 1818 |
| templates | BPageShopListingDesigns | Listing Templates |  | 1829 |
| options | BPageShopListingOptions | Listing Options |  | 1842 |
| badges | BPageShopListingBadges |  |  | 1851 |
| companies | BPageShopListingCompanies |  |  | 1852 |
| reviews | BPageShopListingReviews | Messages |  | 1856 |
| messages | BPageShopListingMessages | Messages |  | 1862 |
| search | BPageShopListingSearch |  |  | 1873 |

## src/Applications/Selldone/router/shuttle/shop/transportation/ShuttleShopTransportationRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
|  | BPageTransportationDashboard | Transportation \| Dashboard |  | 56 |
| orders | BPageTransportationOrders | Transportation \| Orders |  | 64 |
| services | BPageTransportationServices | Transportation \| Services |  | 73 |
| persons | BPageTransportationCouriers | Transportation \| Persons |  | 82 |
| pickups | BPageTransportationPickups | Transportation \| Pickups |  | 91 |
| setting | BPageTransportationSetting | Transportation \| Setting |  | 104 |
|  | BPageTransportationServiceDashboard | Delivery Service \| Dashboard |  | 130 |
| orders | BPageTransportationServiceOrders | Delivery Service \| Orders |  | 139 |
| setting | BPageTransportationServiceEdit | Delivery Service \| Setting |  | 148 |

## src/Applications/Selldone/router/shuttle/ShuttleRoutes.ts

| Local path | Name | Title | Permission region | Source line |
|---|---|---|---|---:|
|  | BPageShuttleShops | page_titles.my_stores |  | 139 |
| vendors | BPageShuttleVendors | Vendors |  | 149 |
| roles | BPageShuttleRoles | page_titles.roles |  | 159 |
| wallet | BPageShuttleWallet | page_titles.wallet |  | 170 |
|  | BPageShuttleWalletAccounts | page_titles.wallet |  | 176 |
| received | BPageShuttleWalletGiftsReceived | page_titles.gifts.received |  | 186 |
| send | BPageShuttleWalletGiftsSend | page_titles.gifts.send |  | 196 |
| subscriptions | BPageShuttleWalletSubscriptions | My Subscriptions |  | 206 |
| kyc | BPageShuttleIdentity | page_titles.personal_info |  | 217 |
| company | BPageShuttleCompanies | page_titles.companies |  | 226 |
| security | BPageShuttleSecurity | page_titles.security_center |  | 236 |
| affiliate | BPageShuttleAffiliate | page_titles.affiliate |  | 246 |
| expert | BPageShuttleExpert | Expert panel |  | 256 |
| deals | BPageShuttleDeals | Partner Deals |  | 266 |
|  | BPageRoleDashboard | Role {role_id} \| Transactions |  | 286 |
| performance | BPageRolePerformance | Role {role_id} \| Performance |  | 296 |
| transactions | BPageAccountTransactions | Account {account_number} \| Transactions |  | 315 |
| transfer | BPageAccountTransfer | Account {account_number} \| Transfer |  | 325 |
| deposit | BPageAccountDeposit | Account {account_number} \| Charge |  | 335 |
| cards | BPageAccountCards | Account {account_number} \| Cards |  | 345 |
| history | BPageAccountHistory | Account {account_number} \| History |  | 355 |
| shops | BPageAccountShops | Account {account_number} \| Shops |  | 364 |
| edit | BPageAccountEdit | Account {account_number} \| Edit  |  | 377 |
|  | BPageAffiliatorDashboard | Affiliate ID-{affiliate_id} \| Dashboard  |  | 392 |
| orders | BPageAffiliatorOrders | Affiliate ID-{affiliate_id} \| Orders |  | 400 |
| payment | BPageAffiliatorPayouts | Affiliate ID-{affiliate_id} \| Payments |  | 409 |
|  | BPageAffiliatorPosDashboard | Affiliate POS |  | 435 |
| orders | BPageAffiliatorPosOrders | Orders |  | 445 |
| customers | AffiliatePOS_Customers | Customers |  | 455 |
| inventory | AffiliatePOS_Inventory | Inventory |  | 466 |
| devices | AffiliatePOS_Devices | Devices |  | 478 |
|  | AdminCompanyPage_Dashboard | My Company ID-{company_id} \| Dashboard  |  | 496 |
| edit | AdminCompanyPage_Edit | My Company ID-{company_id} \| Edit  |  | 504 |
| documents | CompanyPage_Documents | My Company ID-{company_id} \| Documents |  | 512 |
| dev | AdminCompanyPage_Develop | My Company ID-{company_id} \| Developer suite |  | 521 |
|  | AppPage_Dashboard | App {app_id} \| Dashboard |  | 537 |
| edit | AppPage_Edit | App {app_id} \| Edit  |  | 545 |
| api | AppPage_API | App {app_id} \| API |  | 554 |
| images | AppPage_Images | App {app_id} \| Images |  | 562 |
| publish | AppPage_Publish | App {app_id} \| Publish |  | 571 |
| enterprise | AppPage_Enterprise | App {app_id} \| Enterprise |  | 580 |
|  | JobPage_Dashboard | Job ID-{job_id} \| Dashboard  |  | 596 |
| requests | JobPage_Requests | Job ID-{job_id} \| Requests |  | 605 |
| chats | JobPage_Chats | Job ID-{job_id} \| Negotiations |  | 614 |
| edit | JobPage_Edit | Job ID-{job_id} \| Edit |  | 623 |
| gallery | JobPage_Gallery | Job ID-{job_id} \| Gallery |  | 632 |
