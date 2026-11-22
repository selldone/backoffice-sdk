# Route Index

This index lists merchant dashboard route names, local paths, and permission regions. Combine local paths with their parent route paths for full links.

Named routes: 370

## Providers

| Local path | Name | Title | Permission region |
|---|---|---|---|
| providers/:provider_id | ConnectProviderPage | Provider {provider_id} \| Dashboard |  |
|  | ConnectProvider_Dashboard | Provider {provider_id} \| Dashboard |  |
| api | ConnectProvider_Apis | Provider {provider_id} \| API Config |  |
|  | ConnectProvider_Apis_Config | Provider {provider_id} \| API Config |  |
| shop | ConnectProvider_Apis_Shops | Provider {provider_id} \| Shops APIs documents |  |
| product | ConnectProvider_Apis_Products | Provider {provider_id} \| Products APIs documents |  |
| order | ConnectProvider_Apis_Orders | Provider {provider_id} \| Orders APIs documents |  |
| auth | ConnectProvider_Auth | Provider {provider_id} \| Authentication |  |
| setting | ConnectProvider_Setting | Provider {provider_id} \| Setting |  |
| logs | ConnectProvider_Logs | Provider {provider_id} \| Logs |  |
| shops | ConnectProvider_Shops | Provider {provider_id} \| Stores |  |
| webhook | ConnectProvider_Webhooks | Provider {provider_id} \| Webhook config |  |
|  | ConnectProvider_Webhooks_Config | Provider {provider_id} \| Webhook config |  |
| order | ConnectProvider_Webhooks_Orders | Provider {provider_id} \| Webhook orders document |  |
| product | ConnectProvider_Webhooks_Products | Provider {provider_id} \| Webhook products document |  |
| shop | ConnectProvider_Webhooks_Shops | Provider {provider_id} \| Webhook shops document |  |
| category | ConnectProvider_Webhooks_Categories | Provider {provider_id} \| Webhook categories document |  |
| customer | ConnectProvider_Webhooks_Customers | Provider {provider_id} \| Webhook customers document |  |

## Affiliates

| Local path | Name | Title | Permission region |
|---|---|---|---|
| dashboard | BPageAffiliateDashboard | Affiliate AF-{affiliate_id} \| Dashboard |  |
| orders | BPageAffiliateOrders | Affiliate AF-{affiliate_id} \| Orders |  |
| payments | BPageAffiliatePayments | Affiliate AF-{affiliate_id} \| Payments |  |
| edit | BPageAffiliateEdit | Affiliate AF-{affiliate_id} \| Edit |  |

## Apps

| Local path | Name | Title | Permission region |
|---|---|---|---|
| app/:app_code/:tab? | BPageApplication | Application {app_code} \| {tab} | ShopPermissionRegions.APPLICATIONS |

## Campaigns

| Local path | Name | Title | Permission region |
|---|---|---|---|
| dashboard | BPageCampaignDashboard | Campaign CM-{campaign_id} \| Dashboard |  |
| finance | BPageCampaignFinance | Campaign CM-{campaign_id} \| Finance |  |
| ads | BPageCampaignAds | Campaign CM-{campaign_id} \| Ads |  |
| landing | BPageCampaignLanding | Campaign CM-{campaign_id} \| Landing page |  |
| setting | BPageCampaignSetting | Campaign CM-{campaign_id} \| Setting |  |
| links | BPageCampaignLinks | Campaign CM-{campaign_id} \| Links |  |

## Cash register

| Local path | Name | Title | Permission region |
|---|---|---|---|
|  | BPagePosPanel | Cash register |  |
| orders | BPagePosOrders | Orders |  |
| customers | BPagePosCustomers | Customers |  |
| inventory | BPagePosInventory | Inventory |  |
| devices | BPagePosDevices | Devices |  |

## Cashback

| Local path | Name | Title | Permission region |
|---|---|---|---|
|  | BPageCashbackDashboard | Cashback Program \| Dashboard |  |
| orders | BPageCashbackOrders | Cashback Program \| Orders |  |
| edit | BPageCashbackEdit | Cashback Program \| Edit |  |

## Connect

| Local path | Name | Title | Permission region |
|---|---|---|---|
| dashboard | BPageConnectDashboard | Connect ID-{shop_connect_id} \| Dashboard |  |
| orders | ShopConnectPage_Orders | Connect ID-{shop_connect_id} \| Orders |  |
| physical | ShopConnectPage_Orders_Physical | Connect ID-{shop_connect_id} \| Physical Orders |  |
| virtual | ShopConnectPage_Orders_Virtual | Connect ID-{shop_connect_id} \| Virtual Orders |  |
| file | ShopConnectPage_Orders_File | Connect ID-{shop_connect_id} \| File Orders |  |
| service | ShopConnectPage_Orders_Service | Connect ID-{shop_connect_id} \| Service Orders |  |
| setting | BPageConnectSetting | Connect ID-{shop_connect_id} \| Setting |  |
| products | BPageConnectProducts | Connect ID-{shop_connect_id} \| Products |  |
| logs | ShopConnectPage_Logs | Connect ID-{shop_connect_id} \| Logs |  |

## Coupons

| Local path | Name | Title | Permission region |
|---|---|---|---|
|  | BPageCouponDashboard | Coupon \| Dashboard |  |
| orders | BPageCouponOrders | Coupon \| Orders |  |
| edit | BPageCouponEdit | Coupon \| Edit |  |

## Customers

| Local path | Name | Title | Permission region |
|---|---|---|---|
| customers/:customer_id | BPageCustomer |  | ShopPermissionRegions.CUSTOMERS |
| dashboard | BPageCustomerDashboard | Customer ID-{customer_id} \| Dashboard |  |
| journey | BPageCustomerActivity | Customer ID-{customer_id} \| Journey |  |
| edit | BPageCustomerEdit | Customer ID-{customer_id} \| Edit |  |
| wallet | BPageCustomerWallet | Customer ID-{customer_id} \| Wallet |  |
| orders | BPageCustomerOrders | Customer ID-{customer_id} \| Physical Orders |  |
| physical | BPageCustomerOrdersPhysical | Customer ID-{customer_id} \| Physical Orders |  |
| virtual | BPageCustomerOrdersVirtual | Customer ID-{customer_id} \| Virtual Orders |  |
| file | BPageCustomerOrdersFile | Customer ID-{customer_id} \| File Orders |  |
| service | BPageCustomerOrdersService | Customer ID-{customer_id} \| Service Orders |  |
| pos | BPageCustomerOrdersPos | Customer ID-{customer_id} \| POS Orders |  |
| hyper | BPageCustomerOrdersHyper | Customer ID-{customer_id} \| Hyper Orders |  |
| avocado | BPageCustomerOrdersAvocado | Customer ID-{customer_id} \| Avocado Orders |  |
| dropshipping | BPageCustomerOrdersDropshipping | Customer ID-{customer_id} \| Dropshipping Orders |  |

## Discount codes

| Local path | Name | Title | Permission region |
|---|---|---|---|
|  | BPageDiscountCodeDashboard | Discount Codes \| Dashboard |  |
| orders | BPageDiscountCodeOrders | Discount Codes \| Orders |  |
| edit | BPageDiscountCodeEdit | Discount Codes \| Edit |  |

## Dropshipping

| Local path | Name | Title | Permission region |
|---|---|---|---|
|  | BPageWholesalerDashboard | Dropshipping \| Dashboard |  |
| shops | BPageWholesalerShops | Dropshipping \| Shops |  |
| orders | BPageWholesalerOrders | Dropshipping \| Orders |  |
| requests | BPageWholesalerRequests | Dropshipping \| Requests |  |
| inventory | BPageWholesalerInventory | Dropshipping \| Inventory |  |
| dashboard | BPageWholesalerShopDashboard | Dropshipping {reseller_id} \| Dashboard |  |
| orders | BPageWholesalerShopOrders | Dropshipping {reseller_id} \| Orders |  |
| wallet | BPageWholesalerShopWallet | Dropshipping {reseller_id} \| Wallet |  |

## Email marketing

| Local path | Name | Title | Permission region |
|---|---|---|---|
| dashboard | BPageEmailMarketingDashboard | Email Marketing E-{email_id} \| Dashboard |  |
| edit | BPageEmailMarketingEdit | Email Marketing E-{email_id} \| Edit |  |

## Gateways

| Local path | Name | Title | Permission region |
|---|---|---|---|
|  | BPageGatewayDashboard | Gateway \| Dashboard |  |
| transactions | BPageGatewayTransactions | Gateway \| Transactions |  |
| edit | BPageGatewayEdit | Gateway \| Edit  |  |

## Gift cards

| Local path | Name | Title | Permission region |
|---|---|---|---|
|  | AdminGiftCardDashboardPage | Gift Cards \| Dashboard |  |
| edit | AdminGiftCardEditPage | Gift Cards \| Edit  |  |
| orders | AdminGiftcardPage_Orders | Gift Cards \| Orders |  |
| list | AdminGiftCardManagementPage | Gift Cards \| List |  |

## Logistics

| Local path | Name | Title | Permission region |
|---|---|---|---|
| dashboard | LogisticProfilePage_Dashboard | Profile {profile_id} \| Dashboard |  |
| products | LogisticProfilePage_Products | Profile {profile_id} \| Products |  |
| setting | LogisticProfilePage_Setting | Profile {profile_id} \| Setting |  |

## Marketplace

| Local path | Name | Title | Permission region |
|---|---|---|---|
|  | BPageMarketplaceDashboard | Marketplace \| Dashboard |  |
| vendors | BPageMarketplaceVendors | Marketplace \| Vendors |  |
| products | BPageMarketplaceProducts | Marketplace \| Products |  |
| orders | BPageMarketplaceOrders | Marketplace \| Orders |  |
| physical | BPageMarketplaceOrdersPhysical | Marketplace \| Physical orders |  |
| virtual | BPageMarketplaceOrdersVirtual | Marketplace \| Virtual orders |  |
| file | BPageMarketplaceOrdersFile | Marketplace \| File orders |  |
| service | BPageMarketplaceOrdersService | Marketplace \| Service orders |  |
| accounts | BPageMarketplaceWallets | Marketplace \| Wallets |  |
| payments | BPageMarketplacePayouts | Marketplace \| Payments History |  |
| pricing | BPageMarketplacePricings | Marketplace \| Pricing Models |  |
| requests | BPageMarketplaceRequests | Marketplace \| Requests |  |
| setting | BPageMarketplaceSetting | Marketplace \| Setting |  |

## Offers

| Local path | Name | Title | Permission region |
|---|---|---|---|
|  | BPageOfferDashboard | Offer \| Dashboard |  |
| orders | BPageOfferOrders | Offer \| Orders |  |
| edit | BPageOfferEdit | Offer \| Edit |  |

## Process center

| Local path | Name | Title | Permission region |
|---|---|---|---|
| process-center/SM-:basket_id | BPageOrderPhysical |  | ShopPermissionRegions.ORDERS |
| dashboard | BPageOrderPhysicalDashboard | Order SM-{basket_id} \| Dashboard |  |
| form | BPageOrderPhysicalInput | Order SM-{basket_id} \| Form |  |
| track | BPageOrderPhysicalTrack | Order SM-{basket_id} \| Track |  |
| timeline | BPageOrderPhysicalTimeline | Order SM-{basket_id} \| Timeline |  |
| chat | BPageOrderPhysicalChat | Order SM-{basket_id} \| Chat |  |
| return | BPageOrderPhysicalReturn | Order SM-{basket_id} \| Return request |  |
| process-center/SV-:basket_id | BPageOrderVirtual | Order SV-{basket_id} \| Dashboard |  |
| dashboard | BPageOrderVirtualDashboard | Order SV-{basket_id} \| Dashboard |  |
| form | BPageOrderVirtualInput | Order SV-{basket_id} \| Form |  |
| track | BPageOrderVirtualTrack | Order SV-{basket_id} \| Track |  |
| timeline | BPageOrderVirtualTimeline | Order SV-{basket_id} \| Timeline |  |
| return | BPageOrderVirtualReturn | Order SV-{basket_id} \| Return request |  |
| chat | BPageOrderVirtualChat | Order SV-{basket_id} \| Chat |  |
| process-center/SF-:basket_id | BPageOrderFile | Order SF-{basket_id} \| Dashboard |  |
| dashboard | BPageOrderFileDashboard | Order SF-{basket_id} \| Dashboard |  |
| track | ShopProcessCenterFileOrderPage_Track | Order SF-{basket_id} \| Track |  |
| timeline | ShopProcessCenterFileOrderPage_Timeline | Order SF-{basket_id} \| Timeline |  |
| return | ShopProcessCenterFileOrderPage_ReturnRequest | Order SF-{basket_id} \| Return request |  |
| chat | BPageOrderFileChat | Order SF-{basket_id} \| Chat |  |
| process-center/SS-:basket_id | BPageOrderService |  |  |
| dashboard | BPageOrderServiceDashboard | Order SS-{basket_id} \| Dashboard |  |
| form | BPageOrderServiceInputs | Order SS-{basket_id} \| Form |  |
| track | BPageOrderServiceTrack | Order SS-{basket_id} \| Track |  |
| timeline | BPageOrderServiceTimeline | Order SS-{basket_id} \| Timeline |  |
| chat | BPageOrderServiceChat | Order SS-{basket_id} \| Chat |  |
| bills | BPageOrderServiceBills | Order SS-{basket_id} \| Bills |  |
| process-center/POS-:basket_id | BPageOrderPos | Order POS-{basket_id} \| Dashboard |  |
| dashboard | BPageOrderPosDashboard | Order POS-{basket_id} \| Dashboard |  |
| timeline | BPageOrderPosTimeline | Order POS-{basket_id} \| Timeline |  |
| process-center/DS-:basket_id | BPageOrderFulfillment | Order DS-{basket_id} \| Dashboard |  |
| dashboard | BPageOrderFulfillmentDashboard | Order DS-{basket_id} \| Dashboard |  |
| inputs | BPageOrderFulfillmentInputs | Order DS-{basket_id} \| Inputs |  |
| track | BPageOrderFulfillmentTrack | Order DS-{basket_id} \| Track |  |
| timeline | BPageOrderFulfillmentTimeline | Order DS-{basket_id} \| Timeline |  |
| return | BPageOrderFulfillmentReturn | Order DS-{basket_id} \| Return |  |
| process-center/AVO-:basket_id | BPageOrderAvocado | Order AVO-{basket_id} \| Dashboard |  |
| dashboard | BPageOrderAvocadoDashboard | Order AVO-{basket_id} \| Dashboard |  |
| track | BPageOrderAvocadoTrack | Order AVO-{basket_id} \| Track |  |
| timeline | BPageOrderAvocadoTimeline | Order AVO-{basket_id} \| Timeline |  |
| process-center/HYP-:basket_id | BPageOrderHyper | Order HYP-{basket_id} \| Dashboard |  |
| dashboard | BPageOrderHyperDashboard | Order HYP-{basket_id} \| Dashboard |  |
| track | BPageOrderHyperTrack | Order HYP-{basket_id} \| Track |  |
| timeline | BPageOrderHyperTimeline | Order HYP-{basket_id} \| Timeline |  |
| process-center/SN-:basket_id | BPageOrderSubscription |  |  |
| dashboard | BPageOrderSubscriptionDashboard | Order SN-{basket_id} \| Dashboard |  |
| form | BPageOrderSubscriptionInputs | Order SN-{basket_id} \| Form |  |
| track | BPageOrderSubscriptionTrack | Order SN-{basket_id} \| Track |  |
| timeline | BPageOrderSubscriptionTimeline | Order SN-{basket_id} \| Timeline |  |
| chat | BPageOrderSubscriptionChat | Order SN-{basket_id} \| Chat |  |
| bills | BPageOrderSubscriptionBills | Order SN-{basket_id} \| Bills |  |

## Products

| Local path | Name | Title | Permission region |
|---|---|---|---|
|  | BPageProductDashboard | Product {product_id} \| Dashboard |  |
| inventory | BPageProductInventory | Product {product_id} \| Inventory |  |
| orders | BPageProductOrders | Product {product_id} \| Orders |  |
| content | ProductAdmin_EditArticle | Product {product_id} \| Content |  |
| 3d | BPageProduct3D | Product {product_id} \| 3D / AR |  |
| hyper | BPageProductHyper | Product {product_id} \| Hyper |  |
| subscription | BPageProductSubscription | Product {product_id} \| Subscription Ribbon |  |
| membership | BPageProductMembership | Product {product_id} \| Membership |  |
| vendors | BPageProductVendors | Product {product_id} \| Vendors |  |
| embed | BPageProductEmbed | Product {product_id} \| Shop Button & Embed |  |
| cross | BPageProductCrossSelling | Product {product_id} \| Cross Selling |  |
| template | BPageProductTemplate | Product {product_id} \| Template |  |
| dropshipping | BPageProductDropshipping | Product {product_id} \| Drop Shipping |  |
| edit | BPageProductEdit | Product {product_id} \| Edit  |  |

## Review sources

| Local path | Name | Title | Permission region |
|---|---|---|---|
|  | BPageReviewDashboard | Review Source \| Dashboard |  |
| edit | BPageReviewEdit | Review Source \| Edit |  |

## Shop

| Local path | Name | Title | Permission region |
|---|---|---|---|
| pages/:page_id | BPageLandingEditor | Page Builder \| ID: {page_id}  | ShopPermissionRegions.PAGES |
| popups/:popup_id | BPagePopup | Popup Builder \| ID: {popup_id}  | ShopPermissionRegions.PAGES |
|  | BPageShopDashboard | Shop Dashboard |  |
|  | BPageShopProductsList | Products List |  |
| import | BPageShopProductsImporter | Products Import |  |
| export | BPageShopProductsExporter | Products Export |  |
| products-que | BPageShopProductsProductsQue | Products Que |  |
| images-que | BPageShopProductsImagesQue | Images Que |  |
| blog | BPageShopBlogs |  | ShopPermissionRegions.BLOG |
| list | BPageShopBlogsList | Blog List |  |
| timeline | BPageShopBlogsTimeline | Blog Timeline |  |
| categories | BPageShopBlogsCategories | Blog Categories |  |
| blog/new | BPageShopBlogsAdd | New Blog | ShopPermissionRegions.BLOG |
| blog/edit/:blog_id | BPageShopBlogsEdit | Blog {blog_id} \| Edit  | ShopPermissionRegions.BLOG |
| process | BPageShopOrders |  | ShopPermissionRegions.ORDERS |
| physical | BPageShopOrdersPhysical | Process Center \| Physical |  |
| virtual | BPageShopOrdersVirtual | Process Center \| Virtual |  |
| file | BPageShopOrdersFile | Process Center \| File |  |
| service | BPageShopOrdersService | Process Center \| Service |  |
| pos | BPageShopOrdersPos | Process Center \| POS |  |
| dropshipping | BPageShopOrdersDropShipping | Process Center \| Drop Shipping |  |
| avocado | BPageShopOrdersAvocado | Process Center \| Avocado |  |
| hyper | BPageShopOrdersHyper | Process Center \| Hyper Sell |  |
| subscription | BPageShopOrdersSubscription | Process Center \| Subscriptions |  |
| finance | BPageShopFinance |  | ShopPermissionRegions.ACCOUNTING |
| report | BPageShopFinanceReport | Financial Report  |  |
| bill | BPageShopFinanceBill | Account & Invoice |  |
| gateway | BPageShopFinanceGateways | Payment Methods  |  |
| exchange | BPageShopFinanceExchange | Exchange Rates |  |
| tax | BPageShopFinanceTax | Tax |  |
| valuations | BPageShopFinanceValuations | Valuations |  |
| dropshipping-checkouts | BPageShopFinanceResellerFulfillment | Drop shipping checkout |  |
| dropshipping-accounts | BPageShopFinanceResellerWallets | Drop shipping accounts |  |
| ribbon | BPageShopFinanceRibbon | Ribbon subscriptions |  |
| wallets | BPageShopFinanceCustomerWallets | Customer Wallets |  |
| incentives | BPageShopIncentives |  | ShopPermissionRegions.INCENTIVES |
| gift-card | BPageShopIncentivesGiftcard | Gift Cards  |  |
| discount | BPageShopIncentivesDiscountCode | Discount Codes |  |
| coupon | BPageShopIncentivesCoupon | Coupons |  |
| offer | BPageShopIncentivesOffer | Offers |  |
| lottery | BPageShopIncentivesLottery | Wheel of fortune |  |
| cashback | BPageShopIncentivesCashback | Cashback |  |
| logistic | BPageShopLogistic |  | ShopPermissionRegions.LOGISTIC |
| inventory | BPageShopLogisticInventory | Logistic \| Inventory |  |
|  | BPageShopLogisticInventoryList | Inventory list |  |
| export | InventoryExporter | Export inventory |  |
| import | InventoryImporter | Import inventory |  |
| warehouse | BPageShopLogisticWarehouse | Logistic \| Warehouse |  |
| delivery | BPageShopLogisticShipping | Delivery Management |  |
| return | BPageShopLogisticReturns | Return Requests |  |
| includes | BPageShopLogisticIncludes | Included items in the product |  |
| profiles | BPageShopLogisticProfiles | Logistic Profiles |  |
| print | BPageShopLogisticPrint | Print Management |  |
| property-sets | BPageShopLogisticPropertySets | Property Sets |  |
| boxes | BPageShopLogisticBoxes | Boxes |  |
| crm | BPageShopCrm |  | ShopPermissionRegions.CUSTOMERS |
| report | BPageShopCrmReport | Customers Reports |  |
| customers | BPageShopCrmCustomers | Customers |  |
| club | BPageShopCrmClub | Customers Club  |  |
| community | BPageShopCrmCommunity | Community  |  |
| faq | BPageShopCrmFaq | FAQ |  |
| contact | BPageShopCrmChat | Contact List |  |
| comments | BPageShopCrmComments | Comments |  |
| reviews | BPageShopCrmReviews | Reviews |  |
| community | BPageShopCommunity |  | ShopPermissionRegions.COMMUNITY |
| categories | BPageShopCommunityCategories | Community Categories |  |
| topics | BPageShopCommunityTopics | Community Topics |  |
| posts | BPageShopCommunityPosts | Community Posts |  |
| comments | BPageShopCommunityComments | Community Comments |  |
| overview | ShopCommunity_Overview | Community Overview |  |
| marketing | BPageShopMarketing |  | ShopPermissionRegions.MARKETING |
| campaigns | BPageShopMarketingCampaign | Campaigns  |  |
| affiliate | BPageShopMarketingAffiliate | Affiliate  |  |
| email-marketing | BPageShopMarketingEmail | Email Marketing  |  |
| funnels | BPageShopMarketingFunnel | Funnels |  |
| stream | BPageShopMarketingStream | Stream users |  |
| category | BPageShopClassification | Categories Management | ShopPermissionRegions.CATEGORIES |
|  | BPageShopClassificationCategories | Categories Management |  |
| import | BPageShopClassificationImporter | Categories Import |  |
| export | BPageShopClassificationExporter | Categories Export |  |
| hierarchy | BPageShopClassificationHierarchy | Categories Hierarchy |  |
| clusters | BPageShopClassificationClusters | Clusters |  |
| channel | BPageShopChannel |  | ShopPermissionRegions.CHANNELS |
| bots/:driver | BPageShopChannelBots | Bots \| {driver} |  |
| google | BPageShopChannelGoogle | Google Apps |  |
| facebook | BPageShopChannelMeta | Facebook Apps |  |
| avocado | BPageShopChannelAvocado | Avocado \| Social Sale |  |
| hyper | BPageShopChannelHyper | Hyper \| Instant Sale |  |
| ribbon | BPageShopChannelRibbon | Ribbon \| Subscription Box |  |
| onboard | BPageShopChannelClover | Clover \| Smart Selection Guide |  |
| connect | BPageShopChannelConnect | Connect \| Smart Integration With the World |  |
| map | BPageShopChannelMap | Map \| Location Based Search |  |
| openai | BPageShopChannelOpenAI | OPen AI \| My Sales Agent |  |
| listing | BPageShopChannelListing | Listing |  |
| page | BPageShopPages |  | ShopPermissionRegions.PAGES |
| landings | BPageShopPagesLandings | Pages \| Landings  |  |
| popups | BPageShopPagesPopups | Pages \| Popups  |  |
| static | BPageShopPagesStatic | Pages \| Static Pages |  |
| about-us | BPageShopPagesAboutUs | Pages \| About us |  |
| terms | BPageShopPagesTerms | Pages \| Terms of use |  |
| privacy | BPageShopPagesPrivacy | Pages \| Privacy policy |  |
| contact-us | BPageShopPagesContactUs | Pages \| Contact us |  |
| access | BPageShopPermission |  | ShopPermissionRegions.SETTINGS |
| staff | BPageShopPermissionStaff | Access \| Personal Tokens |  |
| role | BPageShopPermissionRoles | Access \| Roles |  |
| api | BPageShopPermissionApi | Access \| API Clients |  |
| application | BPageShopApplications |  | ShopPermissionRegions.APPLICATIONS |
| pwa | BPageShopApplicationsPwa | Application \| PWA yes |  |
| ios | BPageShopApplicationsIos | Application \| iOS |  |
| android | BPageShopApplicationsAndroid | Application \| Android yes |  |
| metaverse | BPageShopApplicationsMetaverse | Application \| Metaverse yes |  |
| automation | ShopAutomation |  | ShopPermissionRegions.AUTOMATION |
| webhook | BShopAutomationWebhook | Automation \| Webhooks  |  |
| logging | BShopAutomationLogging | Automation \| Logging  |  |
| notifications | BShopAutomationNotifications | Automation \| Notifications |  |
| autopilot | ShopAutomation_Autopilot | Automation \| Auto Pilot  |  |
| niomatic | ShopAutomation_Niomatic | Automation \| Niomatic  |  |
| edit | BPageShopSetting |  | ShopPermissionRegions.SETTINGS |
| info | BPageShopSettingInfo | Edit Shop  |  |
| flow | BPageShopSettingFlow | Shop Configuration |  |
| business-model | BPageShopSettingBusinessModel | Business Model |  |
| license | BPageShopSettingLicense | License Management |  |
| menu | BPageShopSettingMenus | Menu |  |
| critical-zone | BPageShopSettingCriticalZone | Critical Zone |  |
| seo | BPageShopSettingSeo | SEO |  |
| gdpr | BPageShopSettingAccess | GDPR |  |
| quota | BPageShopSettingQuota | Quota |  |
| advanced | BPageShopSettingAdvance | Advanced Options |  |
| notifications | BPageShopSettingNotifications | Store Notifications  |  |
| locations | BPageShopSettingLocations | Locations |  |
| languages | BPageShopSettingLanguages | Languages |  |
| theme | BPageShopSettingTheme | Theme |  |
| sms | BPageShopSettingSms | Sms |  |
| emails | BPageShopSettingEmail | Emails |  |
| domains | BPageShopSettingDomain | Domains |  |
| listing | BPageShopListing |  | ShopPermissionRegions.PRODUCTS |
| items | BPageShopListingItems | Listing Items  |  |
| categories | BPageShopListingCategories | Listing Categories |  |
| supervision | BPageShopListingSupervision | Listing Supervision |  |
| templates | BPageShopListingDesigns | Listing Templates |  |
| options | BPageShopListingOptions | Listing Options |  |
| badges | BPageShopListingBadges |  |  |
| companies | BPageShopListingCompanies |  |  |
| reviews | BPageShopListingReviews | Messages |  |
| messages | BPageShopListingMessages | Messages |  |
| search | BPageShopListingSearch |  |  |

## Transportation

| Local path | Name | Title | Permission region |
|---|---|---|---|
|  | BPageTransportationDashboard | Transportation \| Dashboard |  |
| orders | BPageTransportationOrders | Transportation \| Orders |  |
| services | BPageTransportationServices | Transportation \| Services |  |
| persons | BPageTransportationCouriers | Transportation \| Persons |  |
| pickups | BPageTransportationPickups | Transportation \| Pickups |  |
| setting | BPageTransportationSetting | Transportation \| Setting |  |
|  | BPageTransportationServiceDashboard | Delivery Service \| Dashboard |  |
| orders | BPageTransportationServiceOrders | Delivery Service \| Orders |  |
| setting | BPageTransportationServiceEdit | Delivery Service \| Setting |  |

## User dashboard

| Local path | Name | Title | Permission region |
|---|---|---|---|
|  | BPageShuttleShops | page_titles.my_stores |  |
| vendors | BPageShuttleVendors | Vendors |  |
| roles | BPageShuttleRoles | page_titles.roles |  |
| wallet | BPageShuttleWallet | page_titles.wallet |  |
|  | BPageShuttleWalletAccounts | page_titles.wallet |  |
| received | BPageShuttleWalletGiftsReceived | page_titles.gifts.received |  |
| send | BPageShuttleWalletGiftsSend | page_titles.gifts.send |  |
| subscriptions | BPageShuttleWalletSubscriptions | My Subscriptions |  |
| kyc | BPageShuttleIdentity | page_titles.personal_info |  |
| company | BPageShuttleCompanies | page_titles.companies |  |
| security | BPageShuttleSecurity | page_titles.security_center |  |
| affiliate | BPageShuttleAffiliate | page_titles.affiliate |  |
| expert | BPageShuttleExpert | Expert panel |  |
| deals | BPageShuttleDeals | Partner Deals |  |
|  | BPageRoleDashboard | Role {role_id} \| Transactions |  |
| performance | BPageRolePerformance | Role {role_id} \| Performance |  |
| transactions | BPageAccountTransactions | Account {account_number} \| Transactions |  |
| transfer | BPageAccountTransfer | Account {account_number} \| Transfer |  |
| deposit | BPageAccountDeposit | Account {account_number} \| Charge |  |
| cards | BPageAccountCards | Account {account_number} \| Cards |  |
| history | BPageAccountHistory | Account {account_number} \| History |  |
| shops | BPageAccountShops | Account {account_number} \| Shops |  |
| edit | BPageAccountEdit | Account {account_number} \| Edit  |  |
|  | BPageAffiliatorDashboard | Affiliate ID-{affiliate_id} \| Dashboard  |  |
| orders | BPageAffiliatorOrders | Affiliate ID-{affiliate_id} \| Orders |  |
| payment | BPageAffiliatorPayouts | Affiliate ID-{affiliate_id} \| Payments |  |
|  | BPageAffiliatorPosDashboard | Affiliate POS |  |
| orders | BPageAffiliatorPosOrders | Orders |  |
| customers | AffiliatePOS_Customers | Customers |  |
| inventory | AffiliatePOS_Inventory | Inventory |  |
| devices | AffiliatePOS_Devices | Devices |  |
|  | AdminCompanyPage_Dashboard | My Company ID-{company_id} \| Dashboard  |  |
| edit | AdminCompanyPage_Edit | My Company ID-{company_id} \| Edit  |  |
| documents | CompanyPage_Documents | My Company ID-{company_id} \| Documents |  |
| dev | AdminCompanyPage_Develop | My Company ID-{company_id} \| Developer suite |  |
|  | AppPage_Dashboard | App {app_id} \| Dashboard |  |
| edit | AppPage_Edit | App {app_id} \| Edit  |  |
| api | AppPage_API | App {app_id} \| API |  |
| images | AppPage_Images | App {app_id} \| Images |  |
| publish | AppPage_Publish | App {app_id} \| Publish |  |
| enterprise | AppPage_Enterprise | App {app_id} \| Enterprise |  |
|  | JobPage_Dashboard | Job ID-{job_id} \| Dashboard  |  |
| requests | JobPage_Requests | Job ID-{job_id} \| Requests |  |
| chats | JobPage_Chats | Job ID-{job_id} \| Negotiations |  |
| edit | JobPage_Edit | Job ID-{job_id} \| Edit |  |
| gallery | JobPage_Gallery | Job ID-{job_id} \| Gallery |  |
