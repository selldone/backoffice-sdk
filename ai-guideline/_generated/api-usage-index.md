# UI API Usage Index

This index shows which APIs the public Backoffice components call. See [API usage by area](api-usage-by-area.md) for feature-level coverage.

Components with API usage: 248

| Source | `window.API` builders | `window.VAPI` builders | `$backoffice` SDK calls | `$vendor` SDK calls |
|---|---|---|---|---|
| @selldone/components-vue/backoffice/account/charge/list/BAccountChargesList.vue | GET_ACCOUNT_CHARGES_HISTORY<br>GET_ACCOUNT_DOWNLOAD_SINGLE_CHARGE_RECEIPT<br>GET_CHECK_CHARGE_PAYMENT_GATEWAY |  |  |  |
| @selldone/components-vue/backoffice/account/charge/payment/from-bank/BAccountChargePaymentFromBank.vue | POST_REQUEST_CHARGE_ACCOUNT |  |  |  |
| @selldone/components-vue/backoffice/account/charge/payment/from-wallet/BAccountChargePaymentFromWallet.vue | POST_ACCOUNT_EXCHANGE_WITH_ANOTHER_WALLET<br>POST_ACCOUNT_EXCHANGE_WITH_ANOTHER_WALLET_CHECK |  |  |  |
| @selldone/components-vue/backoffice/account/gift/button/BAccountGiftButton.vue | GET_GIFTS_PENDING_LIST |  |  |  |
| @selldone/components-vue/backoffice/account/gift/redeem/BAccountGiftRedeem.vue | POST_APPLY_GIFT |  |  |  |
| @selldone/components-vue/backoffice/account/gift/send/BAccountGiftSend.vue | POST_SEND_GIFT |  |  |  |
| @selldone/components-vue/backoffice/account/input/BAccountInput.vue | GET_ACTIVE_ACCOUNT_LIST |  |  |  |
| @selldone/components-vue/backoffice/account/receipt/payment/dialog/BAccountReceiptPaymentDialog.vue | GET_RECEIPT_INFO |  |  |  |
| @selldone/components-vue/backoffice/account/tax/BAccountTax.vue | POST_CALCULATE_SELLDONE_VAT |  |  |  |
| @selldone/components-vue/backoffice/account/transaction/form/BAccountTransactionForm.vue | GET_CHECK_ACCOUNT_NUMBER<br>GET_CHECK_RECEIPT_NUMBER<br>POST_CONFIRM_TRANSACTION<br>POST_CREATE_NEW_TRANSACTION |  |  |  |
| @selldone/components-vue/backoffice/affiliate/edit/BAffiliateEdit.vue | POST_CREATE_AFFILIATE<br>PUT_UPDATE_AFFILIATE |  |  |  |
| @selldone/components-vue/backoffice/affiliate/orders/export/BAffiliateOrdersExport.vue | GET_EXPORT_AFFILIATE_ORDERS |  |  |  |
| @selldone/components-vue/backoffice/app/add/BAppAdd.vue | POST_ADD_APP<br>PUT_EDIT_APP |  |  |  |
| @selldone/components-vue/backoffice/app/comments/BAppComments.vue | GET_APP_COMMENTS |  |  |  |
| @selldone/components-vue/backoffice/app/detail/BAppDetail.vue | DELETE_APP<br>POST_SET_APP_INFO<br>PUT_SET_REVIEW |  |  |  |
| @selldone/components-vue/backoffice/app/shop/icon/BAppShopIcon.vue | DELETE_APP |  |  |  |
| @selldone/components-vue/backoffice/app/shop/list/BAppShopList.vue | GET_SHOP_APPS_ADMIN |  |  |  |
| @selldone/components-vue/backoffice/app/shop/store/BAppShopStore.vue | GET_APPSTORE_LIST<br>GET_SHOP_APP_INFO<br>POST_ADD_ENTERPRISE_APP |  |  |  |
| @selldone/components-vue/backoffice/auth/form/BLoginForm.vue | GET_2FA_CHECK<br>GET_PRIVACY<br>GET_TERMS |  |  |  |
| @selldone/components-vue/backoffice/blog/category/list/BBlogCategoriesList.vue | POST_UPLOAD_SHOP_BLOG_CATEGORY_ICON |  | blog.categories<br>blog.categories.add<br>blog.categories.edit |  |
| @selldone/components-vue/backoffice/blog/list/BBlogsList.vue |  |  | blog |  |
| @selldone/components-vue/backoffice/box/input/BBoxInput.vue | GET_MY_VENDOR_BOXES<br>GET_SHOP_BOXES |  |  |  |
| @selldone/components-vue/backoffice/box/list/BBoxesList.vue | DELETE_MY_VENDOR_BOX<br>DELETE_SHOP_BOX<br>GET_MY_VENDOR_BOXES<br>GET_SHOP_BOXES<br>POST_MY_VENDOR_BOXES_ADD<br>POST_SHOP_BOXES_ADD<br>PUT_MY_VENDOR_BOXES_EDIT<br>PUT_SHOP_BOXES_EDIT |  |  |  |
| @selldone/components-vue/backoffice/cashback/add/BCashbackAdd.vue | POST_SHOP_CASHBACK_ADD<br>PUT_SHOP_CASHBACK_EDIT |  |  |  |
| @selldone/components-vue/backoffice/category/add/BCategoryAdd.vue | DELETE_CATEGORY<br>DELETE_MY_VENDOR_CATEGORY<br>POST_ADD_CATEGORY<br>POST_MY_VENDOR_ADD_CATEGORY<br>POST_MY_VENDOR_UPLOAD_CATEGORY_IMAGE<br>POST_UPLOAD_CATEGORY_IMAGE<br>PUT_EDIT_CATEGORY<br>PUT_MY_VENDOR_EDIT_CATEGORY | DELETE_MY_VENDOR_CATEGORY<br>POST_MY_VENDOR_ADD_CATEGORY<br>POST_MY_VENDOR_UPLOAD_CATEGORY_IMAGE<br>PUT_MY_VENDOR_EDIT_CATEGORY | page.getPageAugment | page.getPageAugment |
| @selldone/components-vue/backoffice/category/bulk-action/set-logistic-profile/BCategoryBulkActionSetLogisticProfile.vue | POST_ASSIGN_PROFILE_TO_PRODUCTS_IN_CATEGORY<br>POST_MY_VENDOR_ASSIGN_PROFILE_TO_PRODUCTS_IN_CATEGORY | POST_MY_VENDOR_ASSIGN_PROFILE_TO_PRODUCTS_IN_CATEGORY |  |  |
| @selldone/components-vue/backoffice/category/engine/BCategoryEngineEditor.vue | GET_CATEGORY_ALL_SUB_CATEGORIES<br>PUT_CATEGORY_SET_ENGINE |  |  |  |
| @selldone/components-vue/backoffice/category/filter/BCategoryFilterEditor.vue | GET_CATEGORY_FILTER<br>PUT_EDIT_CATEGORY_FILTER |  |  |  |
| @selldone/components-vue/backoffice/category/input/BCategoryInput.vue | POST_ADD_CATEGORY<br>POST_MY_VENDOR_ADD_CATEGORY | POST_MY_VENDOR_ADD_CATEGORY | category | category |
| @selldone/components-vue/backoffice/cluster/add/BClusterAdd.vue | DELETE_SHOP_CLUSTER<br>POST_SHOP_CLUSTERS_ADD<br>POST_SHOP_CLUSTER_UPLOAD_ICON<br>PUT_SHOP_CLUSTERS_EDIT |  |  |  |
| @selldone/components-vue/backoffice/cluster/input/BClusterInput.vue | GET_SHOP_CLUSTERS |  |  |  |
| @selldone/components-vue/backoffice/cluster/panel/BClustersPanel.vue | GET_SHOP_CLUSTERS_RESOURCES |  |  |  |
| @selldone/components-vue/backoffice/company/add/BCompanyAdd.vue | POST_ADD_COMPANY<br>POST_UPLOAD_COMPANY_IMAGE<br>PUT_EDIT_COMPANY |  |  |  |
| @selldone/components-vue/backoffice/company/input/BCompanyInput.vue | GET_MY_COMPANIES |  |  |  |
| @selldone/components-vue/backoffice/connect/input/ConnectInputField.vue | GET_CONNECT_SERVICES |  |  |  |
| @selldone/components-vue/backoffice/connect/shop/add/AddShopConnect.vue | DELETE_SHOP_CONNECT<br>POST_SHOP_CONNECT_SETUP_DIRECT<br>PUT_UPDATE_SHOP_CONNECT |  |  |  |
| @selldone/components-vue/backoffice/contact/conversation/BContactConversation.vue | DELETE_SHOP_CONTACT_US_MESSAGE_RESPONSE<br>POST_SHOP_CONTACT_US_CLOSE_TICKET<br>PUT_SHOP_CONTACT_US_UPDATE_MESSAGE<br>PUT_SHOP_TICKET_RATE |  |  |  |
| @selldone/components-vue/backoffice/contact/list/BContactsList.vue | GET_SHOP_CONTACT_US_LIST<br>POST_CONTACT_US_FORM |  |  |  |
| @selldone/components-vue/backoffice/coupon/add/BCouponAdd.vue | POST_CREATE_COUPON<br>PUT_EDIT_COUPON |  |  |  |
| @selldone/components-vue/backoffice/coupon/ai-assistance/BCouponAiAssistance.vue | POST_CREATE_COUPON_AI |  |  |  |
| @selldone/components-vue/backoffice/customer/add/BCustomerAdd.vue | POST_ADD_NEW_SHOP_CUSTOMER<br>PUT_SHOP_CUSTOMER_UPDATE |  |  |  |
| @selldone/components-vue/backoffice/customer/funnel/BCustomersFunnel.vue | GET_SHOP_CUSTOMERS_SEGMENTS<br>POST_FUNNEL_USERS_COUNT<br>POST_FUNNEL_USERS_DATA |  |  |  |
| @selldone/components-vue/backoffice/customer/importer/BShopCustomerImporter.vue | POST_IMPORT_CUSTOMERS |  |  |  |
| @selldone/components-vue/backoffice/customer/input/BCustomerInput.vue | GET_SUGGESTION_CUSTOMERS |  |  |  |
| @selldone/components-vue/backoffice/customer/overview/BCustomerOverview.vue | GET_SHOP_CUSTOMER_INFO<br>POST_SHOP_CUSTOMER_CREATE_SUBSCRIPTION_PORTAL_URL<br>PUT_SHOP_CUSTOMER_CHIPS<br>PUT_SHOP_CUSTOMER_CLUB |  |  |  |
| @selldone/components-vue/backoffice/customer/segment/dialog/BCustomerSegmentDialog.vue | PUT_SHOP_CUSTOMER_SEGMENTS |  |  |  |
| @selldone/components-vue/backoffice/customer/segment/input/BCustomerSegmentInput.vue | GET_SHOP_CUSTOMERS_SEGMENTS |  |  |  |
| @selldone/components-vue/backoffice/dashboard/shop/customers-activity/heatmap/BDashboardShopCustomersActivityHeatmap.vue | GET_SHOP_STATISTIC_TIMELINE |  |  |  |
| @selldone/components-vue/backoffice/dashboard/shop/customers-activity/map/BDashboardShopCustomersActivityMap.vue | GET_SHOP_STATISTIC_COUNTRY |  |  |  |
| @selldone/components-vue/backoffice/dashboard/shop/sessions/BDashboardShopSessions.vue | GET_SHOP_STATISTIC_SESSIONS |  |  |  |
| @selldone/components-vue/backoffice/discount-code/add/BDiscountCodeAdd.vue | POST_CREATE_DISCOUNT_CODE<br>PUT_EDIT_DISCOUNT_CODE |  |  |  |
| @selldone/components-vue/backoffice/discount-code/ai-assistance/BDiscountCodeAiAssistance.vue | POST_CREATE_DISCOUNT_CODE_AI |  |  |  |
| @selldone/components-vue/backoffice/discount-code/input/BDiscountCodeInput.vue | GET_DISCOUNT_CODES |  |  |  |
| @selldone/components-vue/backoffice/domain/add/BDomainAdd.vue | GET_DOMAIN_INFO<br>POST_ADD_DOMAIN<br>POST_CREATE_CLIENT_FOR_DOMAIN<br>PUT_EDIT_DOMAIN |  |  |  |
| @selldone/components-vue/backoffice/domain/list/BDomainsList.vue | DELETE_EDIT_DOMAIN<br>GET_SHOP_DOMAINS<br>POST_CREATE_CLIENT_FOR_DOMAIN<br>PUT_EDIT_DOMAIN |  |  |  |
| @selldone/components-vue/backoffice/domain/setting/BDomainSetting.vue | POST_DOMAIN_CHECK_SSL<br>POST_SET_DOMAIN_SETTING |  |  |  |
| @selldone/components-vue/backoffice/domain/verification/BDomainVerification.vue | POST_SHOP_DOMAIN_VERIFICATION |  |  |  |
| @selldone/components-vue/backoffice/drop-shipping/DropshipChargePaymentDialog.vue | POST_DROP_SHIPPING_RESELLER_ACCOUNT_CHARGE |  |  |  |
| @selldone/components-vue/backoffice/drop-shipping/DropShippingAccountCharges.vue | GET_DROP_SHIPPING_RESELLER_ACCOUNT_CHARGES<br>POST_DROP_SHIPPING_RESELLER_ACCOUNT_CHARGE_REFRESH_STATE |  |  |  |
| @selldone/components-vue/backoffice/email-marketing/editor/BEmailMarketingEditor.vue | GET_EMAIL_RENDER<br>POST_CANCEL_EMAIL<br>POST_CREATE_EMAIL<br>POST_SEND_EMAIL<br>PUT_UPDATE_EMAIL |  |  |  |
| @selldone/components-vue/backoffice/email-marketing/editor/section/BEmailMarketingEditorSection.vue | POST_UPLOAD_IMAGE_EMAIL |  |  |  |
| @selldone/components-vue/backoffice/expert/contract/ExpertContractView.vue | GET_EXPERT_CUSTOMER_CONTRACT_INFO<br>GET_EXPERT_JOB_CONTRACT_INFO<br>POST_EXPERT_CUSTOMER_CONTRACT_COMMENT<br>POST_EXPERT_CUSTOMER_CONTRACT_COMPLETE<br>POST_EXPERT_CUSTOMER_CONTRACT_PAY_NOW<br>POST_EXPERT_CUSTOMER_CONTRACT_PERMISSION<br>POST_EXPERT_JOB_CONTRACT_CANCEL<br>POST_EXPERT_JOB_CONTRACT_END<br>POST_EXPERT_JOB_CONTRACT_RESPONSE<br>PUT_EXPERT_JOB_CONTRACT_EDIT<br>PUT_EXPERT_JOB_CONTRACT_SET_TASKS |  |  |  |
| @selldone/components-vue/backoffice/expert/form/BExpertForm.vue | POST_EXPERT_UPLOAD_IMAGE<br>POST_MY_EXPERT_UPLOAD_IMAGE |  |  |  |
| @selldone/components-vue/backoffice/gateway/add/BGatewayAdd.vue | POST_SET_GATEWAY |  |  |  |
| @selldone/components-vue/backoffice/gateway/blockchain/BGatewayBlockchain.vue | POST_GATEWAY_SELLDONE_ADD_BLOCKCHAIN_WALLET<br>POST_GATEWAY_SELLDONE_GENERATE_BLOCKCHAIN_RECOVERY_PHRASES<br>POST_GATEWAY_SHOP_ADD_BLOCKCHAIN_WALLET<br>POST_GATEWAY_SHOP_GENERATE_BLOCKCHAIN_RECOVERY_PHRASES |  |  |  |
| @selldone/components-vue/backoffice/giftcard/add/BGiftcardAdd.vue | POST_GIFT_CARD_TYPE_CARDS_ADD |  |  |  |
| @selldone/components-vue/backoffice/giftcard/export/BGiftcardExport.vue | GET_EXPORT_GIFT_CARDS<br>GET_EXPORT_GIFT_CARDS_DATA |  |  |  |
| @selldone/components-vue/backoffice/giftcard/type/add/BGiftcardTypeAdd.vue | POST_CREATE_GIFT_CARD_TYPE<br>POST_UPDATE_GIFT_CARD_TYPE_BG<br>PUT_EDIT_GIFT_CARD_TYPE |  |  |  |
| @selldone/components-vue/backoffice/giftcard/type/input/BGiftcardTypeInput.vue | GET_GIFT_CARD_TYPES |  |  |  |
| @selldone/components-vue/backoffice/google/search-console/BGoogleSearchConsole.vue | POST_SHOP_PLUGIN_SET_CONFIG |  |  |  |
| @selldone/components-vue/backoffice/google/serp-connect/BGoogleSerpConnect.vue | DELETE_SEARCH_CONSOLE_CONNECTION |  |  |  |
| @selldone/components-vue/backoffice/google/tag-manager/BGoogleTagManager.vue | POST_SHOP_PLUGIN_SET_CONFIG |  |  |  |
| @selldone/components-vue/backoffice/help/InlineHelp.vue | GET_INLINE_HELPS |  |  |  |
| @selldone/components-vue/backoffice/include-item/add/BIncludeItemAdd.vue | POST_SHOP_INCLUDE_ADD<br>POST_SHOP_INCLUDE_EDIT |  | page |  |
| @selldone/components-vue/backoffice/include-item/input/BIncludeItemInput.vue | GET_MY_VENDOR_SHOP_INCLUDES<br>GET_SHOP_INCLUDES | GET_MY_VENDOR_SHOP_INCLUDES |  |  |
| @selldone/components-vue/backoffice/inventory/bulk/discount/BInventoryBulkDiscount.vue | GET_SHOP_WAREHOUSE_BULK_CHANGE_DISCOUNT_LIST<br>GET_SHOP_WAREHOUSE_BULK_CHANGE_DISCOUNT_REPORT<br>POST_SHOP_WAREHOUSE_BULK_CHANGE_DISCOUNT |  |  |  |
| @selldone/components-vue/backoffice/inventory/bulk/price/BInventoryBulkPrice.vue | POST_SHOP_WAREHOUSE_BULK_CHANGE_PRICE<br>POST_SHOP_WAREHOUSE_BULK_CHANGE_PRICE_LIST<br>POST_SHOP_WAREHOUSE_BULK_CHANGE_PRICE_REPORT |  |  |  |
| @selldone/components-vue/backoffice/inventory/list/BInventoryList.vue | GET_ALL_MY_PRODUCTS<br>POST_PRODUCT_QUANTITY |  |  |  |
| @selldone/components-vue/backoffice/inventory/warehouse/BInventoryWarehouse.vue | POST_MY_VENDOR_SHOP_WAREHOUSE_ADMIN<br>POST_SHOP_WAREHOUSE_ADMIN | POST_MY_VENDOR_SHOP_WAREHOUSE_ADMIN |  |  |
| @selldone/components-vue/backoffice/invite/friends/SInviteFriends.vue | GET_REFERRAL_INVITE_CHECK_EMAIL<br>POST_REFERRAL_INVITES |  |  |  |
| @selldone/components-vue/backoffice/language/override/dialog/BLanguageOverrideDialog.vue | GET_SHOP_DOWNLOAD_OVERRIDE_LANGUAGE_PACK<br>GET_SHOP_OVERRIDE_LANGUAGE_PACK<br>POST_SHOP_SAVE_OVERRIDE_LANGUAGE_PACK |  |  |  |
| @selldone/components-vue/backoffice/listing/badge/input/BListingBadgeInput.vue | GET_MY_VENDOR_LISTING_BADGES<br>GET_SHOP_LISTING_BADGES | GET_MY_VENDOR_LISTING_BADGES |  |  |
| @selldone/components-vue/backoffice/listing/category/input/BListingCategoryInput.vue | GET_SHOP_LISTING_CATEGORIES |  |  |  |
| @selldone/components-vue/backoffice/listing/category/upsert/BShopListingCategoryUpsert.vue | POST_SHOP_LISTING_CATEGORY_ADD<br>POST_SHOP_LISTING_CATEGORY_EDIT |  |  |  |
| @selldone/components-vue/backoffice/listing/company/input/BListingCompanyInput.vue | GET_MY_VENDOR_LISTING_COMPANIES<br>GET_SHOP_LISTING_COMPANIES | GET_MY_VENDOR_LISTING_COMPANIES |  |  |
| @selldone/components-vue/backoffice/listing/company/upsert/BShopListingCompanyUpsert.vue | POST_MY_VENDOR_LISTING_COMPANY_ADD<br>POST_MY_VENDOR_LISTING_COMPANY_EDIT<br>POST_SHOP_LISTING_COMPANY_ADD<br>POST_SHOP_LISTING_COMPANY_EDIT | POST_MY_VENDOR_LISTING_COMPANY_ADD<br>POST_MY_VENDOR_LISTING_COMPANY_EDIT |  |  |
| @selldone/components-vue/backoffice/listing/form-builder/parts/BListingFormBuilderImageUploader.vue | POST_SHOP_LISTING_FORM_BUILDER_UPLOAD_IMAGE |  |  |  |
| @selldone/components-vue/backoffice/listing/item/SStorefrontListingItemReviews.vue | DELETE_SHOP_LISTING_ITEM_REVIEW<br>GET_SHOP_LISTING_ITEM_REVIEWS<br>POST_SHOP_LISTING_ITEM_REVIEW |  |  |  |
| @selldone/components-vue/backoffice/listing/item/upsert/BShopListingItemUpsert.vue | POST_MY_VENDOR_LISTING_ITEM_ADD<br>POST_MY_VENDOR_LISTING_ITEM_EDIT<br>POST_SHOP_LISTING_ITEM_ADD<br>POST_SHOP_LISTING_ITEM_EDIT | POST_MY_VENDOR_LISTING_ITEM_ADD<br>POST_MY_VENDOR_LISTING_ITEM_EDIT |  |  |
| @selldone/components-vue/backoffice/listing/item/upsert/tabs/BShopListingItemTabMedia.vue | DELETE_MY_VENDOR_LISTING_ITEM_MEDIA<br>DELETE_SHOP_LISTING_ITEM_MEDIA<br>GET_MY_VENDOR_LISTING_ITEM_MEDIA_LIST<br>GET_SHOP_LISTING_ITEM_MEDIA_LIST<br>POST_MY_VENDOR_LISTING_ITEM_MEDIA_EDIT<br>POST_MY_VENDOR_LISTING_ITEM_MEDIA_IMAGES<br>POST_MY_VENDOR_LISTING_ITEM_MEDIA_URL<br>POST_SHOP_LISTING_ITEM_MEDIA_EDIT<br>POST_SHOP_LISTING_ITEM_MEDIA_IMAGES<br>POST_SHOP_LISTING_ITEM_MEDIA_URL<br>PUT_MY_VENDOR_LISTING_ITEM_MEDIA_MAIN<br>PUT_SHOP_LISTING_ITEM_MEDIA_MAIN | DELETE_MY_VENDOR_LISTING_ITEM_MEDIA<br>GET_MY_VENDOR_LISTING_ITEM_MEDIA_LIST<br>POST_MY_VENDOR_LISTING_ITEM_MEDIA_EDIT<br>POST_MY_VENDOR_LISTING_ITEM_MEDIA_IMAGES<br>POST_MY_VENDOR_LISTING_ITEM_MEDIA_URL<br>PUT_MY_VENDOR_LISTING_ITEM_MEDIA_MAIN |  |  |
| @selldone/components-vue/backoffice/listing/review/BShopListingReviewsList.vue | DELETE_MY_VENDOR_LISTING_REVIEW<br>DELETE_SHOP_LISTING_REVIEW<br>GET_MY_VENDOR_LISTING_REVIEWS<br>GET_SHOP_LISTING_REVIEWS<br>POST_MY_VENDOR_LISTING_REVIEW_RESTORE<br>POST_SHOP_LISTING_REVIEW_APPROVE<br>POST_SHOP_LISTING_REVIEW_REJECT<br>POST_SHOP_LISTING_REVIEW_RESTORE | DELETE_MY_VENDOR_LISTING_REVIEW<br>GET_MY_VENDOR_LISTING_REVIEWS<br>POST_MY_VENDOR_LISTING_REVIEW_RESTORE |  |  |
| @selldone/components-vue/backoffice/listing/review/dialog/BShopListingReviewDialog.vue | DELETE_MY_VENDOR_LISTING_REVIEW<br>DELETE_SHOP_LISTING_REVIEW<br>POST_MY_VENDOR_LISTING_REVIEW_REPLY<br>POST_MY_VENDOR_LISTING_REVIEW_RESTORE<br>POST_SHOP_LISTING_REVIEW_APPROVE<br>POST_SHOP_LISTING_REVIEW_REJECT<br>POST_SHOP_LISTING_REVIEW_REPLY<br>POST_SHOP_LISTING_REVIEW_RESTORE | DELETE_MY_VENDOR_LISTING_REVIEW<br>POST_MY_VENDOR_LISTING_REVIEW_REPLY<br>POST_MY_VENDOR_LISTING_REVIEW_RESTORE |  |  |
| @selldone/components-vue/backoffice/listing/search/BShopListingSearchSettings.vue | GET_SHOP_LISTING_SEARCH<br>POST_SHOP_LISTING_SEARCH_GENERATE<br>POST_SHOP_LISTING_SEARCH_SAVE |  |  |  |
| @selldone/components-vue/backoffice/live-view/geoMap.vue | GET_SHOP_REALTIME_DATA |  |  |  |
| @selldone/components-vue/backoffice/logistic/profile/input/BLogisticProfileInput.vue |  |  | logistic.profile | logistic.profile |
| @selldone/components-vue/backoffice/logistic/profile/list/BLogisticProfilesList.vue | GET_SHOP_LOGISTIC_PROFILES |  |  |  |
| @selldone/components-vue/backoffice/lottery/add/BLotteryAdd.vue | POST_CREATE_LOTTERY<br>POST_UPLOAD_LOTTERY_IMAGE<br>PUT_EDIT_LOTTERY |  |  |  |
| @selldone/components-vue/backoffice/map/config/BMapConfig.vue | POST_SET_SHOP_OPTIONS_SHOP_MAP |  |  |  |
| @selldone/components-vue/backoffice/map/tag/add/BMapTagAdd.vue | DELETE_SHOP_MAP_TAG<br>POST_CREATE_SHOP_MAP_TAG<br>PUT_EDIT_SHOP_MAP_TAG |  |  |  |
| @selldone/components-vue/backoffice/map/tag/input/BMapTagInput.vue |  |  | map.tag |  |
| @selldone/components-vue/backoffice/map/tag/list/BMapTagsList.vue | GET_SHOP_MAP_TAGS |  |  |  |
| @selldone/components-vue/backoffice/map/tag/products/BMapTagProducts.vue | GET_SHOP_MAP_TAG_PRODUCTS |  |  |  |
| @selldone/components-vue/backoffice/meta/pixel/BMetaPixel.vue | POST_SHOP_PLUGIN_SET_CONFIG |  |  |  |
| @selldone/components-vue/backoffice/notification/repository/menu/BNotificationRepositoryMenu.vue | GET_MY_NOTIFICATIONS_REPOSITORY<br>POST_READ_MY_NOTIFICATIONS_REPOSITORY |  |  |  |
| @selldone/components-vue/backoffice/offer/add/BOfferAdd.vue | POST_CREATE_OFFER<br>PUT_EDIT_OFFER |  |  |  |
| @selldone/components-vue/backoffice/onboarding/customization/SShopOnboardingCustomization.vue | GET_PAGE_BUILDER_TEMPLATES |  |  |  |
| @selldone/components-vue/backoffice/openai/chat-gpt/BOpenaiChatgpt.vue | GET_CHANNELS_OPENAI_DOWNLOAD_KNOWLEDGE_BASE |  |  |  |
| @selldone/components-vue/backoffice/order/bill/list/BOrderBillsList.vue | GET_BASKET_BILLS<br>POST_BASKET_SUBSCRIPTION_BILLS_SYNC_MANUALLY |  |  |  |
| @selldone/components-vue/backoffice/order/cart/BOrderCart.vue | PUT_MY_VENDOR_ORDER_ITEM_SET_COUNT_ADJUSTMENT<br>PUT_SHOP_ORDER_ITEM_SET_COUNT_ADJUSTMENT | PUT_MY_VENDOR_ORDER_ITEM_SET_COUNT_ADJUSTMENT |  |  |
| @selldone/components-vue/backoffice/order/chat/box/BOrderChatBox.vue | GET_SHOP_EMAIL_RENDER_URL<br>GET_SHOP_TEMPLATE_MESSAGES<br>POST_BASKET_CHAT_ADD_MESSAGE<br>POST_BASKET_SEND_ORDER_UPDATE_STATUS_EMAIL<br>POST_SHOP_TEMPLATE_MESSAGE_ADD<br>PUT_SHOP_TEMPLATE_MESSAGE_EDIT |  |  |  |
| @selldone/components-vue/backoffice/order/connect/item/BOrderConnectItem.vue | POST_SHOP_CONNECT_BASKET_CANCEL<br>POST_SHOP_CONNECT_BASKET_CONFIRM<br>POST_SHOP_CONNECT_BASKET_REFRESH<br>POST_SHOP_CONNECT_BASKET_SYNC |  |  |  |
| @selldone/components-vue/backoffice/order/dashboard/BOrderDashboard.vue | DELETE_REJECT_AVOCADO_ORDER<br>DELETE_REJECT_FULFILLMENT_ORDER<br>DELETE_REJECT_MY_VENDOR_ORDER<br>DELETE_REJECT_ORDER<br>GET_DELIVERY_SERVICE_ORDER_INFO<br>GET_MY_VENDOR_DELIVERY_SERVICE_ORDER_INFO<br>POST_UPDATE_AVOCADO_ORDER_DELIVERY_RETURN<br>POST_UPDATE_AVOCADO_ORDER_STATE<br>POST_UPDATE_FULFILLMENT_ORDER_DELIVERY_RETURN<br>POST_UPDATE_FULFILLMENT_ORDER_STATE<br>POST_UPDATE_MY_VENDOR_ORDER_DELIVERY_RETURN<br>POST_UPDATE_MY_VENDOR_ORDER_STATE<br>POST_UPDATE_ORDER_DELIVERY_RETURN<br>POST_UPDATE_ORDER_STATE<br>PUT_CHECK_FULFILLMENT<br>PUT_MY_VENDOR_UPDATE_ORDER_RECEIVER_INFO<br>PUT_REJECT_AVOCADO_ORDER<br>PUT_REJECT_FULFILLMENT_ORDER<br>PUT_REJECT_MY_VENDOR_ORDER<br>PUT_REJECT_ORDER<br>PUT_SET_TRACKING_FULFILLMENT_ORDER<br>PUT_SET_TRACKING_MY_VENDOR_ORDER<br>PUT_SET_TRACKING_ORDER<br>PUT_UPDATE_ORDER_RECEIVER_INFO<br>PUT_UPDATE_VENDOR_ORDER_BY_MARKETPLACE_OWNER | DELETE_REJECT_MY_VENDOR_ORDER<br>GET_MY_VENDOR_DELIVERY_SERVICE_ORDER_INFO<br>POST_UPDATE_MY_VENDOR_ORDER_DELIVERY_RETURN<br>POST_UPDATE_MY_VENDOR_ORDER_STATE<br>PUT_MY_VENDOR_UPDATE_ORDER_RECEIVER_INFO<br>PUT_REJECT_MY_VENDOR_ORDER<br>PUT_SET_TRACKING_MY_VENDOR_ORDER |  |  |
| @selldone/components-vue/backoffice/order/dashboard/payment/BOrderDashboardPayment.vue | GET_CHECK_PAYMENT_GATEWAY<br>POST_CONFIRM_COD_PAYMENT_MANUALLY_FOR_ONLINE_BASKET<br>POST_CONFIRM_COD_PAYMENT_MANUALLY_FOR_POS_BASKET |  |  |  |
| @selldone/components-vue/backoffice/order/payment/actions/delivery/dialog/BOrderPaymentActionsDeliveryDialog.vue | POST_PAYMENT_GATEWAY_ACTIONS_DELIVERY |  |  |  |
| @selldone/components-vue/backoffice/order/payment/actions/refund/dialog/BOrderPaymentActionsRefundDialog.vue | POST_PAYMENT_GATEWAY_ACTIONS_REFUND |  |  |  |
| @selldone/components-vue/backoffice/order/payment/row/payment/BOrderPaymentRowPayment.vue | POST_PAYMENT_GATEWAY_CAPTURE |  |  |  |
| @selldone/components-vue/backoffice/order/payment/table/BOrderPaymentTable.vue | DELETE_BILL<br>GET_CHECK_PAYMENT_GATEWAY<br>POST_ADD_BILL<br>POST_CONFIRM_CASH_PAYMENT_FOR_BILL_MANUALLY<br>POST_CONFIRM_DIR_PAYMENT_MANUALLY<br>POST_UPDATE_AFFILIATE_STATUS<br>PUT_EDIT_BILL_PRICE<br>PUT_UPDATE_BILL_STATUS |  |  |  |
| @selldone/components-vue/backoffice/order/share/BOrderShare.vue | POST_BASKET_CREATE_SECURE_LINK<br>POST_POS_BASKET_CREATE_SECURE_LINK |  |  |  |
| @selldone/components-vue/backoffice/order/timeline/BOrderTimeline.vue | GET_MY_VENDOR_ORDER_EMAIL_PREVIEW<br>GET_ORDER_EMAIL_PREVIEW<br>GET_ORDER_TIMELINE<br>GET_VENDOR_ORDER_TIMELINE<br>POST_ORDER_RESEND_EMAIL | GET_MY_VENDOR_ORDER_EMAIL_PREVIEW<br>GET_VENDOR_ORDER_TIMELINE |  |  |
| @selldone/components-vue/backoffice/order/virtual-item/BOrderVirtualItem.vue | EDIT_VIRTUAL_ITEM |  |  |  |
| @selldone/components-vue/backoffice/page/input/BPageInput.vue |  |  | page |  |
| @selldone/components-vue/backoffice/pos/device/barcode-scanner/BPosDeviceBarcodeScanner.vue | GET_CASH_REGISTER_SECURE_URL |  |  |  |
| @selldone/components-vue/backoffice/pos/device/customer-screen/BPosDeviceCustomerScreen.vue | GET_CASH_REGISTER_SECURE_URL |  |  |  |
| @selldone/components-vue/backoffice/pos/device/printer/BPosDevicePrinter.vue | GET_CASH_REGISTER_SECURE_URL |  |  |  |
| @selldone/components-vue/backoffice/process-center/automation/BProcessCenterAutomation.vue | DOWNLOAD_DAILY_ORDERS<br>POST_SHOP_EMAIL_SEND_ME<br>SET_SHOP_PREFERENCES |  |  |  |
| @selldone/components-vue/backoffice/process-center/bulk/export/BProcessCenterBulkExport.vue | GET_EXPORT_BASKET_LABELS<br>GET_EXPORT_BASKET_TASKS |  |  |  |
| @selldone/components-vue/backoffice/process-center/list/BProcessCenterList.vue | GET_AFFILIATE_POS_ORDERS<br>GET_MY_VENDORS_ORDERS<br>GET_ORDERS<br>GET_VENDORS_ORDERS | GET_MY_VENDORS_ORDERS |  |  |
| @selldone/components-vue/backoffice/process-center/print/label/BProcessCenterPrintLabelButton.vue | GET_ORDERS_PDF |  |  |  |
| @selldone/components-vue/backoffice/process-center/print/receipt/BProcessCenterPrintReceiptButton.vue | GET_ORDERS_PDF |  |  |  |
| @selldone/components-vue/backoffice/product/add/ai/BProductAddAi.vue | POST_AI_ADD_PRODUCT<br>POST_AI_EDIT_PRODUCT<br>POST_DEMO_AI_ADD_PRODUCT |  |  |  |
| @selldone/components-vue/backoffice/product/add/drop-shipping/products/BProductAddDropshippingProducts.vue | GET_DROP_SHIPPING_SHOP_CATEGORIES<br>GET_DROP_SHIPPING_SHOP_PRODUCTS<br>POST_ADD_PRODUCT_BY_DROP_SHIPPING |  |  |  |
| @selldone/components-vue/backoffice/product/add/drop-shipping/shops/BProductAddDropshippingShops.vue | GET_DROP_SHIPPING_SHOPS<br>POST_REQUEST_DROPSHIP_ACCESS |  |  |  |
| @selldone/components-vue/backoffice/product/add/full/BProductAddFull.vue | DELETE_MY_VENDOR_PRODUCT<br>DELETE_PRODUCT<br>GET_MY_VENDOR_SEO_PREVIEW_PRODUCT<br>GET_SEO_PREVIEW_PRODUCT<br>POST_ADD_PRODUCT<br>POST_MY_VENDOR_ADD_PRODUCT<br>PUT_EDIT_PRODUCT<br>PUT_MY_VENDOR_EDIT_PRODUCT | DELETE_MY_VENDOR_PRODUCT<br>GET_MY_VENDOR_SEO_PREVIEW_PRODUCT<br>POST_MY_VENDOR_ADD_PRODUCT<br>PUT_MY_VENDOR_EDIT_PRODUCT |  |  |
| @selldone/components-vue/backoffice/product/add/studio/BProductAddStudio.vue | POST_ADD_PRODUCT<br>POST_MY_VENDOR_ADD_PRODUCT | POST_MY_VENDOR_ADD_PRODUCT |  |  |
| @selldone/components-vue/backoffice/product/advanced-options/fix-articles/BProductsAdvancedOptionsFixArticles.vue | POST_SHOP_ALL_PRODUCTS_ARTICLE_BODY_AUTO_FIX |  |  |  |
| @selldone/components-vue/backoffice/product/advanced-options/google-sheet/BProductsAdvancedOptionsGoogleSheet.vue | DELETE_GOOGLE_SHEET_CONNECTION<br>POST_GOOGLE_SHEET_FORCE_SYNC |  |  |  |
| @selldone/components-vue/backoffice/product/advanced-options/remove-duplicated-products/BProductsAdvancedOptionsRemoveDuplicatedProducts.vue | GET_SHOP_AUTO_REMOVE_DUPLICATED_PRODUCTS_PREVIEW<br>POST_SHOP_AUTO_REMOVE_DUPLICATED_PRODUCTS |  |  |  |
| @selldone/components-vue/backoffice/product/ar/table/row/BProductArTableRow.vue | POST_UPLOAD_PRODUCT_3D_MODEL |  | product.ar |  |
| @selldone/components-vue/backoffice/product/badges/manage/BProductBadgesManage.vue | GET_CUSTOM_BADGE<br>GET_MY_VENDOR_CUSTOM_BADGE<br>POST_ADD_CUSTOM_BADGE<br>POST_EDIT_CUSTOM_BADGE<br>POST_MY_VENDOR_SET_PRODUCT_BADGE<br>POST_SET_PRODUCT_BADGE | GET_MY_VENDOR_CUSTOM_BADGE<br>POST_MY_VENDOR_SET_PRODUCT_BADGE |  |  |
| @selldone/components-vue/backoffice/product/connect/abstract-view/BProductConnectAbstractView.vue | POST_SHOP_CONNECT_SYNC_PRODUCT |  |  |  |
| @selldone/components-vue/backoffice/product/cons/input/BProductConsInput.vue | DELETE_CONS<br>DELETE_MY_VENDOR_CONS<br>POST_ADD_CONS<br>POST_MY_VENDOR_ADD_CONS<br>PUT_MY_VENDOR_UPDATE_CONS<br>PUT_UPDATE_CONS | DELETE_MY_VENDOR_CONS<br>POST_MY_VENDOR_ADD_CONS<br>PUT_MY_VENDOR_UPDATE_CONS |  |  |
| @selldone/components-vue/backoffice/product/dropshipping/abstract-view/BProductDropshippingAbstractView.vue | POST_DROP_SHIPPING_PRODUCT_APPLY_CHANGES<br>POST_DROP_SHIPPING_PRODUCT_RE_ENABLE |  |  |  |
| @selldone/components-vue/backoffice/product/edit/extra/BProductEditExtra.vue | PUT_MY_VENDOR_PRODUCT_EXTRA<br>PUT_PRODUCT_EXTRA | PUT_MY_VENDOR_PRODUCT_EXTRA |  |  |
| @selldone/components-vue/backoffice/product/edit/images/BProductEditImages.vue | DELETE_MY_VENDOR_PRODUCT_VIDEO<br>DELETE_PRODUCT_VIDEO<br>POST_AI_CREATE_NEW_PRODUCT_IMAGE<br>POST_AI_REMOVE_BACKGROUND_PRODUCT_MAIN_IMAGE<br>POST_AI_UPSCALE_BACKGROUND_PRODUCT_MAIN_IMAGE<br>POST_MY_VENDOR_PRODUCT_VIDEO_UPLOAD<br>POST_MY_VENDOR_UPLOAD_PRODUCT_MAIN_IMAGE<br>POST_PRODUCT_VIDEO_UPLOAD<br>POST_UPLOAD_PRODUCT_MAIN_IMAGE | DELETE_MY_VENDOR_PRODUCT_VIDEO<br>POST_MY_VENDOR_PRODUCT_VIDEO_UPLOAD<br>POST_MY_VENDOR_UPLOAD_PRODUCT_MAIN_IMAGE |  |  |
| @selldone/components-vue/backoffice/product/edit/info/BProductEditInfo.vue | POST_MY_VENDOR_PRODUCT_SET_SHORTCUT_CATEGORIES<br>POST_PRODUCT_SET_SHORTCUT_CATEGORIES<br>POST_SET_PRODUCT_VALUATION | POST_MY_VENDOR_PRODUCT_SET_SHORTCUT_CATEGORIES |  |  |
| @selldone/components-vue/backoffice/product/edit/price/BProductEditPrice.vue | PUT_EDIT_PRODUCT_PRICE |  |  |  |
| @selldone/components-vue/backoffice/product/edit/spec/BProductEditSpec.vue | GET_MY_VENDOR_SPEC_OF_PRODUCT<br>GET_SPEC_OF_PRODUCT<br>POST_AI_PRODUCT_AUTO_CREATE_SPEC<br>POST_MY_VENDOR_AI_PRODUCT_AUTO_CREATE_SPEC<br>POST_MY_VENDOR_SAVE_SPEC<br>POST_SAVE_SPEC | GET_MY_VENDOR_SPEC_OF_PRODUCT<br>POST_MY_VENDOR_AI_PRODUCT_AUTO_CREATE_SPEC<br>POST_MY_VENDOR_SAVE_SPEC |  |  |
| @selldone/components-vue/backoffice/product/extra-pricings/add/BProductExtraPricingAdd.vue | DELETE_MY_VENDOR_PRODUCT_EDIT_EXTRA_PRICINGS<br>DELETE_PRODUCT_EDIT_EXTRA_PRICINGS<br>POST_MY_VENDOR_PRODUCT_ADD_EXTRA_PRICINGS<br>POST_PRODUCT_ADD_EXTRA_PRICINGS<br>PUT_MY_VENDOR_PRODUCT_EDIT_EXTRA_PRICINGS<br>PUT_PRODUCT_EDIT_EXTRA_PRICINGS | DELETE_MY_VENDOR_PRODUCT_EDIT_EXTRA_PRICINGS<br>POST_MY_VENDOR_PRODUCT_ADD_EXTRA_PRICINGS<br>PUT_MY_VENDOR_PRODUCT_EDIT_EXTRA_PRICINGS |  |  |
| @selldone/components-vue/backoffice/product/extra-pricings/row/BProductExtraPricingRow.vue | DELETE_MY_VENDOR_PRODUCT_EDIT_EXTRA_PRICINGS<br>DELETE_PRODUCT_EDIT_EXTRA_PRICINGS | DELETE_MY_VENDOR_PRODUCT_EDIT_EXTRA_PRICINGS |  |  |
| @selldone/components-vue/backoffice/product/google/category/input/BProductGoogleCategoryInput.vue | GET_GOOGLE_CATEGORY |  |  |  |
| @selldone/components-vue/backoffice/product/graphical-assets/selector/BProductGraphicalAssetsSelector.vue | GET_SHOP_VARIANT_ASSETS |  |  |  |
| @selldone/components-vue/backoffice/product/graphical-assets/VariantGraphicalAssetsList.vue | DELETE_SHOP_VARIANT_ASSET_UPLOAD<br>GET_SHOP_VARIANT_ASSETS<br>POST_SHOP_VARIANT_ASSET_UPLOAD |  |  |  |
| @selldone/components-vue/backoffice/product/images/gallery/BProductImagesGallery.vue | DELETE_MY_VENDOR_PRODUCT_IMAGE<br>DELETE_PRODUCT_IMAGE<br>POST_AI_REMOVE_BACKGROUND_PRODUCT_IMAGES<br>POST_MY_VENDOR_UPLOAD_PRODUCT_COVER<br>POST_UPLOAD_PRODUCT_COVER<br>PUT_MY_VENDOR_PRODUCT_IMAGES_ORDER<br>PUT_MY_VENDOR_PRODUCT_IMAGE_ALT<br>PUT_PRODUCT_IMAGES_ORDER<br>PUT_PRODUCT_IMAGE_ALT | DELETE_MY_VENDOR_PRODUCT_IMAGE<br>POST_MY_VENDOR_UPLOAD_PRODUCT_COVER<br>PUT_MY_VENDOR_PRODUCT_IMAGES_ORDER<br>PUT_MY_VENDOR_PRODUCT_IMAGE_ALT |  |  |
| @selldone/components-vue/backoffice/product/importer/images/BProductsImporterImages.vue |  |  | product.importer.que.images<br>product.importer.que.removeImage<br>product.importer.que.syncImage | product.importer.que.images<br>product.importer.que.removeImage<br>product.importer.que.syncImage |
| @selldone/components-vue/backoffice/product/importer/processing/BShopProductsImportProcessing.vue |  |  | product.importer.info | product.importer.info |
| @selldone/components-vue/backoffice/product/importer/products/BProductsImporterProducts.vue |  |  | product.importer.que.products<br>product.importer.que.removeProduct | product.importer.que.products<br>product.importer.que.removeProduct |
| @selldone/components-vue/backoffice/product/info/abstract-view/BProductInfoAbstractView.vue | DELETE_MY_VENDOR_PRODUCT_NOTE<br>DELETE_PRODUCT_NOTE<br>POST_MY_VENDOR_PRODUCT_ADD_NOTE<br>POST_PRODUCT_ADD_NOTE | DELETE_MY_VENDOR_PRODUCT_NOTE<br>POST_MY_VENDOR_PRODUCT_ADD_NOTE |  |  |
| @selldone/components-vue/backoffice/product/inventory/management/file/BProductInventoryManagementFile.vue | DELETE_MY_VENDOR_PRODUCT_FILE<br>DELETE_PRODUCT_FILE<br>DOWNLOAD_MY_VENDOR_PRODUCT_FILE<br>DOWNLOAD_PRODUCT_FILE<br>GET_MY_VENDOR_PRODUCT_FILES<br>GET_MY_VENDOR_PRODUCT_FILE_UPLOAD_URL<br>GET_PRODUCT_FILES<br>GET_PRODUCT_FILE_UPLOAD_URL<br>PUT_MY_VENDOR_SET_PRODUCT_FILES_SORT<br>PUT_MY_VENDOR_SET_PRODUCT_FILE_NAME<br>PUT_MY_VENDOR_SET_PRODUCT_FILE_SAMPLE<br>PUT_SET_PRODUCT_FILES_SORT<br>PUT_SET_PRODUCT_FILE_NAME<br>PUT_SET_PRODUCT_FILE_SAMPLE | DELETE_MY_VENDOR_PRODUCT_FILE<br>DOWNLOAD_MY_VENDOR_PRODUCT_FILE<br>GET_MY_VENDOR_PRODUCT_FILES<br>GET_MY_VENDOR_PRODUCT_FILE_UPLOAD_URL<br>PUT_MY_VENDOR_SET_PRODUCT_FILES_SORT<br>PUT_MY_VENDOR_SET_PRODUCT_FILE_NAME<br>PUT_MY_VENDOR_SET_PRODUCT_FILE_SAMPLE |  |  |
| @selldone/components-vue/backoffice/product/inventory/management/physical/BProductInventoryManagementPhysical.vue | POST_ADD_VARIANT<br>POST_EDIT_VARIANT<br>POST_MY_VENDOR_ADD_VARIANT<br>POST_MY_VENDOR_EDIT_VARIANT<br>POST_MY_VENDOR_UPLOAD_PRODUCT_COVER<br>POST_UPLOAD_PRODUCT_COVER | POST_MY_VENDOR_ADD_VARIANT<br>POST_MY_VENDOR_EDIT_VARIANT<br>POST_MY_VENDOR_UPLOAD_PRODUCT_COVER | product.setQuantity | product.setQuantity |
| @selldone/components-vue/backoffice/product/inventory/management/service/BProductInventoryManagementService.vue | POST_MY_VENDOR_PRODUCT_SET_OUTPUTS<br>POST_PRODUCT_QUANTITY<br>POST_PRODUCT_SET_OUTPUTS | POST_MY_VENDOR_PRODUCT_SET_OUTPUTS |  |  |
| @selldone/components-vue/backoffice/product/inventory/management/subscription/BProductInventoryManagementSubscription.vue | DELETE_PRODUCT_EDIT_SUBSCRIPTION_PRICE<br>POST_RESTORE_PRODUCT_EDIT_SUBSCRIPTION_PRICE |  |  |  |
| @selldone/components-vue/backoffice/product/inventory/management/virtual/BProductInventoryManagementVirtual.vue | DELETE_MY_VENDOR_VARIANT<br>DELETE_VARIANT<br>DELETE_VIRTUAL_ITEM<br>GET_ALL_VIRTUAL_ITEMS<br>POST_ADD_VARIANT<br>POST_EDIT_VARIANT<br>POST_MY_VENDOR_ADD_VARIANT<br>POST_MY_VENDOR_EDIT_VARIANT<br>POST_MY_VENDOR_RESTORE_DELETED_VARIANT<br>POST_RESTORE_DELETED_VARIANT | DELETE_MY_VENDOR_VARIANT<br>POST_MY_VENDOR_EDIT_VARIANT<br>POST_MY_VENDOR_RESTORE_DELETED_VARIANT |  |  |
| @selldone/components-vue/backoffice/product/list/BProductsList.vue | DELETE_MY_VENDOR_PRODUCT_NOTE<br>DELETE_PRODUCT_NOTE<br>POST_MY_VENDOR_PRODUCT_ADD_NOTE<br>POST_PRODUCT_ADD_NOTE | DELETE_MY_VENDOR_PRODUCT_NOTE<br>POST_MY_VENDOR_PRODUCT_ADD_NOTE | product | product |
| @selldone/components-vue/backoffice/product/location/restrictions/input/BProductLocationRestrictionsInput.vue | GET_PRODUCT_LOCATIONS_SAVES |  |  |  |
| @selldone/components-vue/backoffice/product/location/restrictions/list/BProductLocationRestrictionsList.vue | POST_ADD_PRODUCT_LOCATIONS_SAVES<br>PUT_SET_PRODUCT_LOCATIONS |  |  |  |
| @selldone/components-vue/backoffice/product/marketing/abstract-view/BProductMarketingAbstractView.vue | GET_EXPORT_FOR_AUCTION<br>GET_EXPORT_FOR_AVAILABLE<br>GET_MY_VENDOR_EXPORT_FOR_AUCTION<br>GET_MY_VENDOR_EXPORT_FOR_AVAILABLE | GET_MY_VENDOR_EXPORT_FOR_AUCTION<br>GET_MY_VENDOR_EXPORT_FOR_AVAILABLE |  |  |
| @selldone/components-vue/backoffice/product/panel/BProductsPanel.vue | POST_MY_VENDOR_UPLOAD_CATEGORY_IMAGE<br>POST_MY_VENDOR_UPLOAD_PRODUCT_COVER<br>POST_UPLOAD_CATEGORY_IMAGE<br>POST_UPLOAD_PRODUCT_COVER | POST_MY_VENDOR_UPLOAD_CATEGORY_IMAGE<br>POST_MY_VENDOR_UPLOAD_PRODUCT_COVER |  |  |
| @selldone/components-vue/backoffice/product/profile/include/BProductProfileInclude.vue | POST_MY_VENDOR_PRODUCT_INCLUDE_SET<br>POST_PRODUCT_INCLUDE_SET | POST_MY_VENDOR_PRODUCT_INCLUDE_SET |  |  |
| @selldone/components-vue/backoffice/product/profile/logistic/BLogisticProfileEditor.vue | DELETE_SHOP_LOGISTIC_PROFILE_ARTICLE<br>POST_SHOP_LOGISTIC_PROFILE_AUTO_TRANSLATE<br>POST_SHOP_LOGISTIC_PROFILE_SET_ARTICLE<br>UPLOAD_ARTICLE_BLOG_IMAGE |  |  |  |
| @selldone/components-vue/backoffice/product/profile/logistic/BProductProfileLogistic.vue |  |  | logistic.profile |  |
| @selldone/components-vue/backoffice/product/pros/input/BProductProsInput.vue | DELETE_MY_VENDOR_PROS<br>DELETE_PROS<br>POST_ADD_PROS<br>POST_MY_VENDOR_ADD_PROS<br>PUT_MY_VENDOR_UPDATE_PROS<br>PUT_UPDATE_PROS | DELETE_MY_VENDOR_PROS<br>POST_MY_VENDOR_ADD_PROS<br>PUT_MY_VENDOR_UPDATE_PROS |  |  |
| @selldone/components-vue/backoffice/product/rating/input/BProductRatingInput.vue | DELETE_MY_VENDOR_PRODUCT_RATING<br>DELETE_PRODUCT_RATING<br>POST_ADD_PRODUCT_RATING<br>POST_MY_VENDOR_ADD_PRODUCT_RATING | DELETE_MY_VENDOR_PRODUCT_RATING<br>POST_MY_VENDOR_ADD_PRODUCT_RATING |  |  |
| @selldone/components-vue/backoffice/product/select-box/BProductsSelectBox.vue | GET_ALL_MY_CATEGORIES_LIST_BY_PARAMS<br>GET_ALL_MY_PRODUCTS_LIST_BY_PARAMS |  |  |  |
| @selldone/components-vue/backoffice/product/subscription/pricing/add/BProductSubscriptionPricingAdd.vue | GET_PRODUCT_SUBSCRIPTION_PRICE_AVAILABLE_BILLINGS<br>POST_PRODUCT_ADD_SUBSCRIPTION_PRICE<br>PUT_PRODUCT_EDIT_SUBSCRIPTION_PRICE |  |  |  |
| @selldone/components-vue/backoffice/product/subscription/pricing/input/BProductSubscriptionPricingInput.vue |  |  | product.subscriptionPricing |  |
| @selldone/components-vue/backoffice/product/tags/input/BProductTagsInput.vue |  |  | product.tags.set | product.tags.set |
| @selldone/components-vue/backoffice/product/thresholding/BProductThresholding.vue | PUT_SET_PRODUCT_THRESHOLDS |  |  |  |
| @selldone/components-vue/backoffice/product/variants/bulk-add/BProductVariantsBulkAdd.vue | POST_ADD_VARIANT_BULK<br>POST_MY_VENDOR_ADD_BULK_VARIANT | POST_MY_VENDOR_ADD_BULK_VARIANT |  |  |
| @selldone/components-vue/backoffice/product/variants/item/BProductVariantItem.vue | POST_MY_VENDOR_UPLOAD_PRODUCT_COVER<br>POST_UPLOAD_PRODUCT_COVER | POST_MY_VENDOR_UPLOAD_PRODUCT_COVER | product.variants.remove<br>product.variants.restore | product.variants.remove<br>product.variants.restore |
| @selldone/components-vue/backoffice/product/variants/table/BProductVariantsTable.vue | POST_ADD_DROP_SHIPPING_VARIANT |  |  |  |
| @selldone/components-vue/backoffice/product/vendor/add/BProductVendorAdd.vue | DELETE_MY_VENDOR__INVENTORY_PRODUCT<br>DELETE_PRODUCT_VENDOR<br>POST_ADD_PRODUCT_VENDOR<br>PUT_EDIT_PRODUCT_VENDOR<br>PUT_MY_VENDOR_INVENTORY_UPDATE_PRODUCT | DELETE_MY_VENDOR__INVENTORY_PRODUCT<br>PUT_MY_VENDOR_INVENTORY_UPDATE_PRODUCT | product.vendor | product.vendor |
| @selldone/components-vue/backoffice/product/virtual/item/add/BProductVirtualItemAdd.vue | EDIT_VIRTUAL_ITEM<br>POST_ADD_VIRTUAL_ITEM<br>POST_VIRTUAL_ITEM_BULK |  |  |  |
| @selldone/components-vue/backoffice/product/window/BProductsWindow.vue | DELETE_CATEGORY_FILTER<br>DELETE_CATEGORY_NOTE<br>DELETE_MY_VENDOR_CATEGORY_NOTE<br>DELETE_MY_VENDOR_PRODUCT<br>DELETE_MY_VENDOR_PRODUCTS_BULK<br>DELETE_MY_VENDOR_PRODUCT_NOTE<br>DELETE_PRODUCT<br>DELETE_PRODUCTS_BULK<br>DELETE_PRODUCT_NOTE<br>POST_ASSIGN_STATUS_TO_PRODUCTS<br>POST_ASSIGN_VENDORS_TO_PRODUCTS<br>POST_CATEGORY_ADD_NOTE<br>POST_CATEGORY_MOVE_CATEGORIES_ORDER<br>POST_CATEGORY_MOVE_PRODUCTS_ORDER<br>POST_CLONE_PRODUCT<br>POST_MY_VENDOR_CATEGORY_ADD_NOTE<br>POST_MY_VENDOR_CATEGORY_MOVE_CATEGORIES_ORDER<br>POST_MY_VENDOR_CATEGORY_MOVE_PRODUCTS_ORDER<br>POST_MY_VENDOR_CLONE_PRODUCT<br>POST_MY_VENDOR_PRODUCT_ADD_NOTE<br>POST_MY_VENDOR_RESTORE_DELETED_PRODUCT<br>POST_PRODUCT_ADD_NOTE<br>POST_RESTORE_DELETED_PRODUCT<br>PUT_MY_VENDOR_SET_CATEGORY_PARENT<br>PUT_SET_CATEGORY_PARENT | DELETE_MY_VENDOR_CATEGORY_NOTE<br>DELETE_MY_VENDOR_PRODUCT<br>DELETE_MY_VENDOR_PRODUCTS_BULK<br>DELETE_MY_VENDOR_PRODUCT_NOTE<br>POST_MY_VENDOR_CATEGORY_ADD_NOTE<br>POST_MY_VENDOR_CATEGORY_MOVE_CATEGORIES_ORDER<br>POST_MY_VENDOR_CATEGORY_MOVE_PRODUCTS_ORDER<br>POST_MY_VENDOR_CLONE_PRODUCT<br>POST_MY_VENDOR_PRODUCT_ADD_NOTE<br>POST_MY_VENDOR_RESTORE_DELETED_PRODUCT<br>PUT_MY_VENDOR_SET_CATEGORY_PARENT | product<br>product.changeCategory | product<br>product.changeCategory |
| @selldone/components-vue/backoffice/property-set/add/BPropertySetAdd.vue | POST_ADD_PROPERTY_SET<br>PUT_EDIT_PROPERTY_SET |  |  |  |
| @selldone/components-vue/backoffice/property-set/input/BPropertySetInput.vue | GET_PROPERTY_SETS |  |  |  |
| @selldone/components-vue/backoffice/property-set/product/BPropertySetProductDialog.vue | PUT_MY_VENDOR_PRODUCT_SET_PROPERTY_SET<br>PUT_PRODUCT_SET_PROPERTY_SET | PUT_MY_VENDOR_PRODUCT_SET_PROPERTY_SET |  |  |
| @selldone/components-vue/backoffice/ribbon/list/BRibbonList.vue | GET_SHOP_RIBBONS |  |  |  |
| @selldone/components-vue/backoffice/role/panel/orders/list/BRolePanelOrdersList.vue | GET_MY_ROLE_TASKS |  |  |  |
| @selldone/components-vue/backoffice/role/panel/physical/BRolePanelPhysical.vue | GET_MY_ROLE_TASK<br>POST_MY_ROLE_TASK_ACTION |  |  |  |
| @selldone/components-vue/backoffice/shop/add/BShopAdd.vue | GET_CHECK_SHOP_NAME<br>GET_SEO_PREVIEW_SHOP<br>POST_ADD_SHOP<br>POST_SHOP_CREATE_TEMPORARY_ACCESS<br>PUT_EDIT_SHOP<br>UPLOAD_SHOP_FAV_ICON<br>UPLOAD_SHOP_IMAGE |  |  |  |
| @selldone/components-vue/backoffice/shop/email/provider/BShopEmailProvider.vue | GET_SHOP_MAIL_SERVICE<br>POST_RESET_SHOP_MAIL_SERVICE<br>POST_SET_SHOP_MAIL_SERVICE<br>POST_SHOP_MAIL_SERVICE_TEST |  |  |  |
| @selldone/components-vue/backoffice/shop/email/template/editor/BShopEmailTemplateEditor.vue | GET_SHOP_EMAIL_RENDER_URL<br>GET_SHOP_MAIL_TEMPLATE<br>POST_SET_SHOP_MAIL_TEMPLATE |  |  |  |
| @selldone/components-vue/backoffice/shop/home/select/BShopHomeSelect.vue | GET_SHOP_PAGES<br>PUT_SHOP_DOMAIN_HOME_PAGE<br>PUT_SHOP_HOME_PAGE |  |  |  |
| @selldone/components-vue/backoffice/shop/license/management/BShopLicenseManagement.vue | GET_PARTNER_UPGRADE_URL<br>POST_PARTNER_FIX_SHOP_LICENSE<br>PUT_MY_SHOP_AGENCY_META_SET |  |  |  |
| @selldone/components-vue/backoffice/shop/license/subscription/detail/BShopLicenseSubscriptionDetail.vue | POST_SHOP_CANCEL_ACTIVE_DEAL |  |  |  |
| @selldone/components-vue/backoffice/shop/options/checkout-form/BShopOptionsCheckoutForm.vue | POST_SET_SHOP_OPTIONS_CHECKOUT |  |  |  |
| @selldone/components-vue/backoffice/shop/options/checkout/BShopOptionsCheckout.vue | POST_SET_SHOP_OPTIONS_CHECKOUT |  |  |  |
| @selldone/components-vue/backoffice/shop/options/login-methods/row/BOptionsLoginMethodRow.vue | GET_SHOP_OPTION_LOGIN_METHOD_DETAILS<br>POST_SET_SHOP_OPTIONS_LOGIN_METHODS<br>POST_SHOP_OPTION_LOGIN_METHOD_CLIENT |  |  |  |
| @selldone/components-vue/backoffice/shop/options/variants/BShopOptionsVariants.vue | POST_SET_SHOP_OPTIONS_VARIANTS |  |  |  |
| @selldone/components-vue/backoffice/shop/profile/editor/BShopProfileEditor.vue | GET_SHOP_PROFILE<br>POST_SAVE_SHOP_PROFILE<br>POST_UPDATE_SHOP_PROFILE_IMAGE |  |  |  |
| @selldone/components-vue/backoffice/shop/sms/provider/BShopSmsProvider.vue | GET_SHOP_SMS_SERVICE<br>POST_RESET_SHOP_SMS_SERVICE<br>POST_SET_SHOP_SMS_SERVICE<br>POST_SHOP_SMS_SERVICE_ACTION_SYNC |  |  |  |
| @selldone/components-vue/backoffice/shop/sms/template/editor/BShopSmsTemplateEditor.vue | GET_SHOP_SMS_TEMPLATE_DEFAULT_BODY<br>POST_SHOP_SMS_ADD_TEMPLATE<br>PUT_SHOP_SMS_EDIT_TEMPLATE |  |  |  |
| @selldone/components-vue/backoffice/shop/sms/template/list/BShopSmsTemplateList.vue | DELETE_SHOP_SMS_TEMPLATE<br>GET_SHOP_SMS_TEMPLATES<br>POST_SHOP_SMS_TEMPLATE_RESET_ERRORS<br>POST_SHOP_SMS_TEMPLATE_SEND_TEST |  |  |  |
| @selldone/components-vue/backoffice/shop/theme/header/BShopThemeHeader.vue | UPLOAD_SHOP_IMAGE_LOGO |  |  |  |
| @selldone/components-vue/backoffice/sitemap/ShopSiteMap.vue | GET_MY_SHOP_CATEGORIES<br>GET_SHOP_PAGES |  |  |  |
| @selldone/components-vue/backoffice/stream/BStreamEndpoint.vue | GET_SHOP_STREAMS<br>POST_STREAM_USER_ADD |  |  |  |
| @selldone/components-vue/backoffice/subscription/ShopSubscriptionList.vue | DELETE_SHOP_SUBSCRIPTION<br>GET_SHOP_SUBSCRIPTIONS<br>GET_SHOP_SUBSCRIPTION_PRICE<br>POST_ADD_SHOP_SUBSCRIPTION<br>PUT_SHOP_SUBSCRIPTION |  |  |  |
| @selldone/components-vue/backoffice/support/blog-card/SelldoneBlogCard.vue | GET_BLOG_DIGEST |  |  |  |
| @selldone/components-vue/backoffice/support/help-card/SelldoneHelpCard.vue | GET_HELP_DIGEST |  |  |  |
| @selldone/components-vue/backoffice/support/menu/BSupportMenu.vue | GET_FAQS<br>POST_SUPPORT<br>PUT_SUPPORT_CLOSE<br>PUT_SUPPORT_RATE<br>PUT_SUPPORT_RESPONSE |  |  |  |
| @selldone/components-vue/backoffice/tax/override/row/BTaxOverrideRow.vue | DELETE_SHOP_TAX<br>POST_SET_OVERRIDE_SHOP_TAX |  |  |  |
| @selldone/components-vue/backoffice/tax/profile/report/BTaxProfileReport.vue | GET_SHOP_TAX_PROFILE_STATISTIC |  |  |  |
| @selldone/components-vue/backoffice/translation/button/BTranslationButton.vue | POS_MY_VENDOR_TRANSLATE<br>POS_SHOP_TRANSLATE | POS_MY_VENDOR_TRANSLATE |  |  |
| @selldone/components-vue/backoffice/translation/button/cashback/BTranslationButtonCashback.vue | PUT_CASHBACK_SET_TRANSLATIONS |  |  |  |
| @selldone/components-vue/backoffice/translation/button/category/BTranslationButtonCategory.vue | PUT_CATEGORY_SET_TRANSLATIONS<br>PUT_MY_VENDOR_CATEGORY_SET_TRANSLATIONS | PUT_MY_VENDOR_CATEGORY_SET_TRANSLATIONS |  |  |
| @selldone/components-vue/backoffice/translation/button/coupon/BTranslationButtonCoupon.vue | PUT_COUPON_SET_TRANSLATIONS |  |  |  |
| @selldone/components-vue/backoffice/translation/button/cross-sell/BTranslationButtonCrossSell.vue | PUT_CROSS_SELL_SET_TRANSLATIONS<br>PUT_MY_VENDOR_CROSS_SELL_SET_TRANSLATIONS | PUT_MY_VENDOR_CROSS_SELL_SET_TRANSLATIONS |  |  |
| @selldone/components-vue/backoffice/translation/button/discount-code/BTranslationButtonDiscountCode.vue | PUT_DISCOUNT_CODE_SET_TRANSLATIONS |  |  |  |
| @selldone/components-vue/backoffice/translation/button/giftcard/BTranslationButtonGiftcard.vue | PUT_GIFT_CARD_SET_TRANSLATIONS |  |  |  |
| @selldone/components-vue/backoffice/translation/button/include/BTranslationButtonInclude.vue | PUT_INCLUDE_SET_TRANSLATIONS |  |  |  |
| @selldone/components-vue/backoffice/translation/button/lottery/BTranslationButtonLottery.vue | PUT_LOTTERY_SET_TRANSLATIONS |  |  |  |
| @selldone/components-vue/backoffice/translation/button/offer/BTranslationButtonOffer.vue | PUT_OFFER_SET_TRANSLATIONS |  |  |  |
| @selldone/components-vue/backoffice/translation/button/product/BTranslationButtonProduct.vue | PUT_MY_VENDOR_PRODUCT_SET_TRANSLATIONS<br>PUT_PRODUCT_SET_TRANSLATIONS | PUT_MY_VENDOR_PRODUCT_SET_TRANSLATIONS |  |  |
| @selldone/components-vue/backoffice/translation/button/shop/BTranslationButtonShop.vue | PUT_SHOP_SET_TRANSLATIONS |  |  |  |
| @selldone/components-vue/backoffice/translation/button/vendor-pricing/BTranslationButtonVendorPricing.vue | PUT_VENDOR_PRICING_SET_TRANSLATIONS |  |  |  |
| @selldone/components-vue/backoffice/translation/button/vendor/BTranslationButtonVendor.vue | PUT_MY_VENDOR_SET_TRANSLATIONS<br>PUT_VENDOR_SET_TRANSLATIONS | PUT_MY_VENDOR_SET_TRANSLATIONS |  |  |
| @selldone/components-vue/backoffice/transportation/courier/card/BTransportationCourierCard.vue | DELETE_TRANSPORTATION_PERSON<br>POST_TRANSPORTATION_PERSON_RESET<br>PUT_TRANSPORTATION_PERSON_UPDATE |  |  |  |
| @selldone/components-vue/backoffice/transportation/DeliveryFormWidget.vue | DELETE_TRANSPORTATION<br>POST_SET_TRANSPORTATION<br>POST_UPLOAD_TRANSPORTATION_LOGO |  |  |  |
| @selldone/components-vue/backoffice/transportation/DeliveryProfileWidget.vue | GET_DELIVERY_SERVICE_PROFILE |  |  |  |
| @selldone/components-vue/backoffice/transportation/service/card/BTransportationServiceCard.vue | POST_TRANSPORTATION_SERVICE_RESET<br>PUT_TRANSPORTATION_SERVICE_UPDATE |  |  |  |
| @selldone/components-vue/backoffice/transportation/service/labels/BTransportationServiceLabels.vue | GET_DELIVERY_SERVICE_PRICE<br>GET_MY_VENDOR_DELIVERY_SERVICE_PRICE<br>POST_DELIVERY_SERVICE_ADD_ORDER<br>POST_MY_VENDOR_DELIVERY_SERVICE_ADD_ORDER | GET_MY_VENDOR_DELIVERY_SERVICE_PRICE<br>POST_MY_VENDOR_DELIVERY_SERVICE_ADD_ORDER |  |  |
| @selldone/components-vue/backoffice/transportation/service/orders/BTransportationServiceOrders.vue | GET_DELIVERY_SERVICE_ORDER_INFO<br>GET_MY_VENDOR_DELIVERY_SERVICE_ORDER_INFO<br>GET_MY_VENDOR_TRANSPORTATION_ORDERS<br>GET_SHOP_TRANSPORTATION_ORDERS<br>POST_MY_VENDOR_TRANSPORTATION_ORDER_STATUS<br>POST_TRANSPORTATION_ORDER_STATUS | GET_MY_VENDOR_DELIVERY_SERVICE_ORDER_INFO<br>GET_MY_VENDOR_TRANSPORTATION_ORDERS<br>POST_MY_VENDOR_TRANSPORTATION_ORDER_STATUS |  |  |
| @selldone/components-vue/backoffice/user/input/SUserInput.vue | GET_SUGGESTION_USERS |  |  |  |
| @selldone/components-vue/backoffice/user/security/login-devices/BUserSecurityLoginDevices.vue | GET_LOGIN_DEVICES<br>POST_LOGOUT_DEVICE |  |  |  |
| @selldone/components-vue/backoffice/valuation/add/BValuationAdd.vue | POST_ADD_SHOP_VALUATION<br>PUT_EDIT_SHOP_VALUATION |  |  |  |
| @selldone/components-vue/backoffice/valuation/input/BValuationInput.vue | GET_SHOP_VALUATIONS |  |  |  |
| @selldone/components-vue/backoffice/vendor/account/transactions/list/BVendorAccountTransactionsList.vue | GET_SHOP_VENDOR_ACCOUNT_TRANSACTIONS |  |  |  |
| @selldone/components-vue/backoffice/vendor/add/BVendorAdd.vue | DELETE_SHOP_EDIT_VENDOR<br>POST_MY_VENDOR_UPLOAD_VENDOR_ICON<br>POST_SHOP_ADD_VENDOR<br>POST_SHOP_VENDOR_SEND_INVITE_EMAIL<br>POST_UPLOAD_VENDOR_ICON<br>PUT_ADD_VENDOR_UPDATE_MY_VENDOR_PROFILE<br>PUT_SHOP_EDIT_VENDOR | POST_MY_VENDOR_UPLOAD_VENDOR_ICON<br>PUT_ADD_VENDOR_UPDATE_MY_VENDOR_PROFILE | page.getPageAugment | page.getPageAugment |
| @selldone/components-vue/backoffice/vendor/documents/list/BVendorDocumentsList.vue | DELETE_MY_VENDOR_DOCUMENT<br>GET_MY_VENDOR_DOCUMENTS_DOWNLOAD_URL<br>GET_MY_VENDOR_UPLOADED_DOCUMENTS_LIST<br>POST_MY_VENDOR_DOCUMENT_ADD | DELETE_MY_VENDOR_DOCUMENT<br>GET_MY_VENDOR_DOCUMENTS_DOWNLOAD_URL<br>GET_MY_VENDOR_UPLOADED_DOCUMENTS_LIST<br>POST_MY_VENDOR_DOCUMENT_ADD |  |  |
| @selldone/components-vue/backoffice/vendor/importer/BVendorsImporter.vue | POST_IMPORT_VENDORS |  |  |  |
| @selldone/components-vue/backoffice/vendor/input/BVendorInput.vue |  |  | vendor |  |
| @selldone/components-vue/backoffice/vendor/onboarding/BVendorOnboarding.vue | DELETE_VENDOR_REQUEST_ATTACHMENT<br>GET_ADD_VENDOR_REQUEST<br>GET_SHOP_VENDOR_REQUEST_ATTACHMENT_DOWNLOAD_LINK<br>POST_SEND_ADD_VENDOR_REQUEST<br>POST_SHOP_VENDOR_REQUESTS_ACCEPT<br>POST_VENDOR_REQUEST_UPLOAD_FILES | DELETE_VENDOR_REQUEST_ATTACHMENT<br>GET_ADD_VENDOR_REQUEST<br>POST_SEND_ADD_VENDOR_REQUEST<br>POST_VENDOR_REQUEST_UPLOAD_FILES |  |  |
| @selldone/components-vue/backoffice/vendor/order/refund/BVendorOrderRefund.vue | POST_BASKET_REFUND_VENDOR_ORDER |  |  |  |
| @selldone/components-vue/backoffice/vendor/payout/add/BVendorPayoutAdd.vue | DELETE_SHOP_VENDOR_PAYMENT<br>GET_SHOP_VENDOR_PAYMENT_OPTIONS<br>POST_SHOP_VENDOR_PAYMENT_ADD |  |  |  |
| @selldone/components-vue/backoffice/vendor/payout/reverse/BVendorPayoutReverse.vue | POST_SHOP_VENDOR_PAYMENT_REVERSE_TRANSFER |  |  |  |
| @selldone/components-vue/backoffice/vendor/pricing/add/BVendorPricingAdd.vue | DELETE_SHOP_EDIT_VENDOR_PRICINGS<br>POST_SHOP_ADD_VENDOR_PRICINGS<br>PUT_SHOP_EDIT_VENDOR_PRICINGS |  |  |  |
| @selldone/components-vue/backoffice/webhook/test/BWebhookTest.vue | POST_SHOP_WEBHOOK_TEST |  |  |  |
