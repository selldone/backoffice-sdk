import SetupService from "../../../core/server/SetupService";
import {ShopMenuType} from "../../../core/enums/shop/ShopMenu";

export default class API {
  selldone_api_url = "";

  constructor() {
   this.selldone_api_url =SetupService.GetMetaValue("selldone-api")

  }
  //―――――――――――――――――――――― Users ――――――――――――――――――――
  /**
   * response: array of users {id,name,email}
   * @param search
   * @returns {string}
   * @constructor
   */
  GET_SUGGESTION_USERS(search) {
    return `${this.selldone_api_url}/users/suggestion/${search}`;
  }
  GET_SUGGESTION_CUSTOMERS(shop_id:string|number,search) {
    return `${this.selldone_api_url}/shops/${shop_id}/customers/suggestion/${search}`;
  }


  /**
   * response: array of users {id,name}
   * @param search
   * @returns {string}
   * @constructor
   */
  GET_SUGGESTION_MENTION_USERS(search) {
    return `${this.selldone_api_url}/users/mention/${search}`;
  }

  /*GET_NOTIFICATIONS() {
    return `${this.selldone_api_url}/notifications`;
  }*/

  POST_DELETE_ME() {
    return `${this.selldone_api_url}/user/delete-me`;
  }
  POST_SET_SUBSCRIBE() {
    return `${this.selldone_api_url}/user/subscribed`;
  }
  POST_SET_PRIMARY_EMAIL() {
    return `${this.selldone_api_url}/user/email`;
  }
  //―――――――――――――――――――――― User ――――――――――――――――――――

  LOGOUT() {
    return `${this.selldone_api_url}/logout-selldone`;
  }

  POST_PROFILE_UPLOAD_IMAGE(type, profile_id) {
    if (!profile_id)
      return `${this.selldone_api_url}/profile/edit/upload/${type}`; // Main profile
    return `${this.selldone_api_url}/profile/edit/upload/${type}/${profile_id}`;
  }

  GET_AVATAR_96(version = null) {
    return `${this.selldone_api_url}/profile/image/0/avatar92.jpg${
      version ? "?v=" + version : ""
    }`;
  }
  GET_AVATAR(version = null) {
    return `${this.selldone_api_url}/profile/image/0/avatar.jpg${
      version ? "?v=" + version : ""
    }`;
  }
  GET_2FA_CHECK() {
    return `${this.selldone_api_url}/security/2fa/check`;
  }

  PUT_SAVE_PREFERENCES() {
    return `${this.selldone_api_url}/preferences`;
  }

  /**
   *
   * @param type              passport ,
   * @returns {string}
   * @constructor
   */
  POST_UPLOAD_KYC_IMAGE(type) {
    return `${this.selldone_api_url}/personal-information/upload/${type}`;
  }
  GET_KYC_IMAGE(type, version = null) {
    return `${this.selldone_api_url}/personal-information/image/${type}.jpg${
      version ? "?v=" + version : ""
    }`;
  }
  GET_PERSONAL_INFORMATION() {
    return `${this.selldone_api_url}/personal-information`;
  }
  POST_EDIT_PERSONAL_INFORMATION() {
    return `${this.selldone_api_url}/personal-information/update`;
  }
  POST_EDIT_PERSONAL_ADDRESS() {
    return `${this.selldone_api_url}/personal-address/update`;
  }
  POST_SET_PROFILE() {
    return `${this.selldone_api_url}/profiles`;
  }
  GET_MY_PROFILES() {
    return `${this.selldone_api_url}/profiles/me`;
  }
  GET_PUBLIC_PROFILE(user_id,user_slug) {
    return `${this.selldone_api_url}/profiles/${user_id}/@${user_slug}`;
  }


  POST_MOBILE_VERIFY() {
    return `${this.selldone_api_url}/user/mobile/verify`;
  }
  POST_MOBILE_VERIFY_CODE() {
    return `${this.selldone_api_url}/user/mobile/verify-code`;
  }

  POST_CHANGE_PASSWORD() {
    return `${this.selldone_api_url}/user/security/password/change`;
  }
  POST_CHANGE_SOCIALS() {
    return `${this.selldone_api_url}/user/security/socials-login`;
  }
  GET_SECURITY_DATA() {
    return `${this.selldone_api_url}/user/security`;
  }
  /*  GET_2FA_SECURITY_KEY() {
        return `${this.selldone_api_url}/user/security/2fa/key`;
    }*/
  POST_GENERATE_2FA_SECURITY_KEY() {
    return `${this.selldone_api_url}/user/security/2fa/generate`;
  }
  POST_ENABLE_2FA() {
    return `${this.selldone_api_url}/user/security/2fa/enable`;
  }
  POST_DISABLE_2FA() {
    return `${this.selldone_api_url}/user/security/2fa/disable`;
  }

  GET_LOGIN_DEVICES() {
    return `${this.selldone_api_url}/user/security/devices`;
  }
  POST_LOGOUT_DEVICE() {
    return `${this.selldone_api_url}/user/security/devices/logout`;
  }


  PUT_USER_INTEREST() {
    return `${this.selldone_api_url}/user/interest`;
  }


  //―――――――――――――――――――――― FCM ――――――――――――――――――――
  POST_SET_FCM() {
    return `${this.selldone_api_url}/fcm/token`;
  }




  //―――――――――――――――――――――― Affiliate (shops) ――――――――――――――――――――
  GET_MY_AFFILIATES() {
    return `${this.selldone_api_url}/affiliates`;
  }
  GET_MY_AFFILIATE_INFO(affiliate_id) {
    return `${this.selldone_api_url}/affiliates/${affiliate_id}`;
  }

  GET_MY_AFFILIATE_PAYMENTS(affiliate_id) {
    return `${this.selldone_api_url}/affiliates/${affiliate_id}/payments`;
  }

  GET_MY_AFFILIATE_ORDERS(affiliate_id) {
    return `${this.selldone_api_url}/affiliates/${affiliate_id}/orders`;
  }

  GET_MY_AFFILIATE_POS(affiliate_id) {
    return `${this.selldone_api_url}/affiliates/${affiliate_id}/pos`;
  }

  AFFILIATE_POS_BASKET_ADD_ITEM(affiliate_id) {
    return `${this.selldone_api_url}/affiliates/${affiliate_id}/pos/add`;
  }
  AFFILIATE_POS_BASKET_REMOVE_ITEM(affiliate_id, item_id) {
    return `${this.selldone_api_url}/affiliates/${affiliate_id}/pos/${item_id}`;
  }
  PUT_AFFILIATE_POS_ACTION(affiliate_id, action) {
    return `${this.selldone_api_url}/affiliates/${affiliate_id}/pos/actions/${action}`;
  }
  DELETE_AFFILIATE_POS_ACTION(affiliate_id, action) {
    return `${this.selldone_api_url}/affiliates/${affiliate_id}/pos/actions/${action}`;
  }

  GET_AFFILIATE_POS_COUPONS_LIST(affiliate_id) {
    return `${this.selldone_api_url}/affiliates/${affiliate_id}/pos/coupons`;
  }
  GET_AFFILIATE_POS_CAMPAIGNS_LIST(affiliate_id) {
    return `${this.selldone_api_url}/affiliates/${affiliate_id}/pos/campaigns`;
  }

  GET_AFFILIATE_POS_CONFIRM_PAYMENT(affiliate_id, gateway_code) {
    return `${this.selldone_api_url}/affiliates/${affiliate_id}/pos/payment/${gateway_code}`;
  }

  GET_AFFILIATE_POS_ORDERS(affiliate_id) {
    return `${this.selldone_api_url}/affiliates/${affiliate_id}/pos/orders`;
  }

  GET_AFFILIATE_POS_PRODUCTS(affiliate_id) {
    return `${this.selldone_api_url}/affiliates/${affiliate_id}/products`;
  }




  //―――――――――――――――――――――― Direct payment upload payment receipt ――――――――――――――――――――

  POST_AFFILIATE_POS_UPLOAD_DIRECT_PAYMENT_RECEIPT( affiliate_id,transaction_id) {
    return `${this.selldone_api_url}/affiliates/${affiliate_id}/pos/transactions/${transaction_id}/upload`;
  }


  //―――――――――――――――――――――― Selldone referral programs ――――――――――――――――――――

  GET_REFERRAL_PROGRAMS() {
    return `${this.selldone_api_url}/referral/programs`;
  }
  POST_APPLY_FOR_REFERRAL_PROGRAMS(program_id) {
    return `${this.selldone_api_url}/referral/programs/${program_id}/apply`;
  }
  POST_REFERRAL_PROGRAM_GET_CREDIT(program_id, link_id, currency) {
    return `${this.selldone_api_url}/referral/programs/${program_id}/links/${link_id}/get/${currency}`;
  }
  POST_REFERRAL_PROGRAM_REQUEST_CREDIT_TO_BANK(program_id, link_id, currency) {
    return `${this.selldone_api_url}/referral/programs/${program_id}/links/${link_id}/request/${currency}`;
  }

  GET_REFERRAL_LINK_INFO(referral_id) {
    return `${this.selldone_api_url}/referrals/${referral_id}`;
  }

  GET_REFERRAL_LINK_PAYMENTS(referral_id) {
    return `${this.selldone_api_url}/referrals/${referral_id}/payments`;
  }

  GET_REFERRAL_INVITE_CHECK_EMAIL() {
    return `${this.selldone_api_url}/invite/check`;
  }
  POST_REFERRAL_INVITES() {
    return `${this.selldone_api_url}/invite/send`;
  }
  PUT_REFERRAL_PROGRAM_SAVE_BANK_DETAILS(program_id, link_id) {
    return `${this.selldone_api_url}/referral/programs/${program_id}/links/${link_id}/bank`;
  }
  //―――――――――――――――――――――― Referral Linked Accounts ――――――――――――――――――――

  GET_GIFT_ACCOUNTS() {
    return `${this.selldone_api_url}/gift/accounts`;
  }
  POST_ADD_GIFT_ACCOUNT() {
    return `${this.selldone_api_url}/gift/accounts`;
  }
  POST_DELETE_GIFT_ACCOUNT() {
    return `${this.selldone_api_url}/gift/accounts`;
  }

  //―――――――――――――――――――――― Shops ――――――――――――――――――――

  GET_MY_SHOPS() {
    return `${this.selldone_api_url}/shops/me`;
  }
  GET_MY_SHOP_INFO(shop_id) {
    return `${this.selldone_api_url}/shops/me/${shop_id}`;
  }

  UPLOAD_SHOP_IMAGE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/upload/icon`;
  }
  UPLOAD_SHOP_FAV_ICON(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/upload/fav`;
  }

  UPLOAD_SHOP_IMAGE_LOGO(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/upload/logo`;
  }


  GET_CHECK_SHOP_NAME() {
    return `${this.selldone_api_url}/shop/check-name`;
  }

  POST_ADD_SHOP() {
    return `${this.selldone_api_url}/shop/add`;
  }

  PUT_EDIT_SHOP(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/edit`;
  }
  PUT_EDIT_SHOP_INFO(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/edit/info`;
  }
  DELETE_SHOP(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/delete`;
  }

  POST_SET_SHOP_CURRENCIES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/currencies`;
  }

  POST_TRANSFER_OWNERSHIP(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/ownership`;
  }
    POST_SHOP_CREATE_TEMPORARY_ACCESS(shop_id) {
        return `${this.selldone_api_url}/shops/${shop_id}/temporary-access`;
    }
  PUT_SHOP_SET_RESTRICTION(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/restriction`;
  }

  //―――――――――――――――――――――― Realtime Data ――――――――――――――――――――

  GET_SHOP_REALTIME_DATA(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/real-time`;
  }
  //―――――――――――――――――――――― Shop > Category ――――――――――――――――――――

  GET_MY_SHOP_CATEGORIES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/categories`;
  }
  PUT_SET_CATEGORY_PARENT(shop_id:string|number, category_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/categories/${category_id}/edit/parent`;
  }

  PUT_EDIT_CATEGORY_FILTER(shop_id:string|number, category_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/categories/${category_id}/edit/filter`;
  }
  GET_CATEGORY_FILTER(shop_id:string|number, category_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/categories/${category_id}/edit/filter`;
  }

  POST_UPLOAD_CATEGORY_IMAGE(shop_id:string|number, category_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/categories/${category_id}/edit/upload`;
  }
  POST_ADD_CATEGORY(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/categories/add`;
  }

  PUT_EDIT_CATEGORY(shop_id:string|number, category_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/categories/${category_id}/edit`;
  }
  DELETE_CATEGORY(shop_id:string|number, category_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/categories/${category_id}`;
  }


  GET_MY_SHOP_CATEGORIES_HIERARCHY(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/categories-hierarchy`;
  }


  POST_CATEGORY_ADD_NOTE(shop_id:string|number, category_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/categories/${category_id}/note`;
  }
  DELETE_CATEGORY_NOTE(shop_id:string|number, category_id,note_index) {
    return `${this.selldone_api_url}/shops/${shop_id}/categories/${category_id}/note/${note_index}`;
  }



  //―――――――――――――――――――――― Product ――――――――――――――――――――

  POST_CLONE_PRODUCT(shop_id:string|number) {
    return `${this.selldone_api_url}/shops/products/${shop_id}/clone`;
  }

  PUT_SET_PRODUCT_CATEGORY(shop_id:string|number, product_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/edit/category`;
  }

  GET_ALL_MY_PRODUCTS(shop_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/all-admin`;
  }
  GET_ALL_MY_PRODUCTS_LIST_BY_PARAMS(shop_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/list-custom-params`;
  }
  GET_ALL_MY_CATEGORIES_LIST_BY_PARAMS(shop_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/categories/list-custom-params`;
  }

  POST_EDIT_VARIANT(shop_id:string|number, product_id:string|number, variant_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/variants/${variant_id}/edit`;
  }

  POST_ADD_VARIANT(shop_id:string|number, product_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/variant/add`;
  }
  POST_ADD_VARIANT_BULK(shop_id:string|number, product_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/variant/add-bulk`;
  }
  DELETE_VARIANT(shop_id:string|number, product_id:string|number, variant_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/variants/${variant_id}/delete`;
  }
  POST_RESTORE_DELETED_VARIANT(shop_id:string|number, product_id:string|number, variant_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/variants/${variant_id}/restore`;
  }
  POST_PRODUCT_QUANTITY(shop_id:string|number, product_id:string|number, variant_id = null) {
    if (variant_id !== null)
      return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/variants/${variant_id}/quantity`;

    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/quantity`;
  }

  POST_ADD_VIRTUAL_ITEM(shop_id:string|number, product_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/add-virtual`;
  }

  EDIT_VIRTUAL_ITEM(shop_id:string|number, product_id:string|number, virtualItem_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/edit-virtual/${virtualItem_id}`;
  }
  POST_VIRTUAL_ITEM_BULK(shop_id:string|number, product_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/add-virtual-bulk`;
  }

  DELETE_VIRTUAL_ITEM(shop_id:string|number, product_id:string|number, virtualItem_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/edit-virtual/${virtualItem_id}`;
  }

  GET_ALL_VIRTUAL_ITEMS(shop_id:string|number, product_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/virtual/items`;
  }

  GET_PRODUCT_INFO_ADMIN(shop_id:string|number, product_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/admin`;
  }
  POST_ADD_PRODUCT(shop_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/product/add`;
  }

  PUT_EDIT_PRODUCT(shop_id:string|number, product_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/edit`;
  }
  PUT_EDIT_PRODUCT_PRICE(shop_id:string|number, product_id:string|number, variant_id:string|number) {
    // Fast edit price
    return `${
      this.selldone_api_url
    }/shops/${shop_id}/products/${product_id}/edit/price${
      variant_id ? "/" + variant_id : ""
    }`;
  }
  DELETE_PRODUCT(shop_id:string|number, product_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/delete`;
  }
  DELETE_PRODUCTS_BULK(shop_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/bulk-actions/delete-products`;
  }

  POST_RESTORE_DELETED_PRODUCT(shop_id:string|number, product_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/restore`;
  }
  PUT_PRODUCT_EXTRA(shop_id:string|number, product_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/extra`;
  }

  POST_ADD_PRODUCT_RATING(shop_id:string|number, product_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/rating`;
  }

  DELETE_PRODUCT_RATING(shop_id:string|number, product_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/rating`;
  }

  POST_ADD_PROS(shop_id:string|number, product_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/pros`;
  }

  DELETE_PROS(shop_id:string|number, product_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/pros`;
  }

  POST_ADD_CONS(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/cons`;
  }

  DELETE_CONS(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/cons`;
  }
  PUT_UPDATE_PROS(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/pros`;
  }
  PUT_UPDATE_CONS(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/cons`;
  }
  GET_SPEC_OF_PRODUCT(shop_id:string|number,product_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/wizard/spec/${product_code}`;
  }
  GET_GOOGLE_CATEGORY(gpc) {
    return `${this.selldone_api_url}/shops/wizard/google-category/${gpc?gpc:''}`;
  }

  POST_SAVE_SPEC(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/spec`;
  }

  POST_UPLOAD_PRODUCT_COVER(shop_id:string|number, product_id, variant_id = null) {
    if (variant_id)
      return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/edit/upload/cover/${variant_id}`; // Maybe '/' cause problem!
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/edit/upload/cover`;
  }
  POST_UPLOAD_PRODUCT_MAIN_IMAGE(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/edit/upload/icon`;
  }

  PUT_PRODUCT_IMAGES_ORDER(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/images/order`;
  }
  PUT_PRODUCT_IMAGE_ALT(shop_id:string|number, product_id, image_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/images/${image_id}/alt`;
  }
  DELETE_PRODUCT_IMAGE(shop_id:string|number, product_id, image_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/images/${image_id}/delete`;
  }
  GET_PRODUCT_FILES(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/files`;
  }
  GET_PRODUCT_FILE_UPLOAD_URL(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/edit/upload/url`;
  }
  POST_UPLOAD_PRODUCT_FILE(shop_id:string|number, product_id) { // Auto get by upload url generation!
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/edit/upload/file`;
  }
  DELETE_PRODUCT_FILE(shop_id:string|number, product_id, file_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/files/${file_id}`;
  }
  DOWNLOAD_PRODUCT_FILE(shop_id:string|number, product_id, file_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/files/${file_id}`;
  }
  PUT_SET_PRODUCT_FILE_NAME(shop_id:string|number, product_id, file_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/files/${file_id}/name`;
  }
  PUT_SET_PRODUCT_FILES_SORT(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/files/sort`;
  }
  PUT_SET_PRODUCT_FILE_SAMPLE(shop_id:string|number, product_id, file_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/files/${file_id}/sample`;
  }

  POST_PRODUCT_ADD_NOTE(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/note`;
  }
  DELETE_PRODUCT_NOTE(shop_id:string|number, product_id,note_index) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/note/${note_index}`;
  }

  POST_PRODUCT_SET_TAGS(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/tags`;
  }


  POST_PRODUCT_SET_PAGE(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/page`;
  }

  POST_PRODUCT_SET_OUTPUTS(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/outputs`;
  }

  PUT_SET_PRODUCT_LOCATIONS(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/locations`;
  }
  POST_ADD_PRODUCT_LOCATIONS_SAVES(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/product-locations`;
  }
  GET_PRODUCT_LOCATIONS_SAVES(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/product-locations`;
  }

  GET_SEARCH_PRODUCT_REPOSITORY_SKU() {
    return `${this.selldone_api_url}/product-repository/search`;
  }

  POST_ADD_PRODUCT_BY_REPOSITORY(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/product-repository/add`;
  }


  POST_ADD_CUSTOM_BADGE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/badges`;
  }
  POST_EDIT_CUSTOM_BADGE(shop_id:string|number,badge_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/badges/${badge_id}`;
  }
  GET_CUSTOM_BADGE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/badges`;
  }
  POST_SET_PRODUCT_BADGE(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/badges`;
  }

  POST_CATEGORY_MOVE_PRODUCTS_ORDER(shop_id:string|number, category_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/categories/${category_id?category_id:'root'}/products-order`;
  }
  POST_CATEGORY_MOVE_CATEGORIES_ORDER(shop_id:string|number, category_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/categories/${category_id?category_id:'root'}/categories-order`;
  }

  POST_ASSIGN_VENDORS_TO_PRODUCTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/marketplace/bulk-actions/assign-products-vendors`;
  }



  POST_ASSIGN_PROFILE_TO_PRODUCTS_IN_CATEGORY(shop_id:string|number,category_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/categories/${category_id?category_id:'root'}/bulk-actions/assign-products-profile`;
  }

  POST_ASSIGN_STATUS_TO_PRODUCTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/marketplace/bulk-actions/assign-products-status`;
  }


  // ▀▀▀▀▀▀▀▀▀ 🌸 Add extra pricing 🌸 ▀▀▀▀▀▀▀▀▀

  POST_PRODUCT_ADD_EXTRA_PRICINGS(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/extra-pricings`;
  }
  PUT_PRODUCT_EDIT_EXTRA_PRICINGS(shop_id:string|number, product_id, extra_pricing_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/extra-pricings/${extra_pricing_id}`;
  }
  DELETE_PRODUCT_EDIT_EXTRA_PRICINGS(shop_id:string|number, product_id,extra_pricing_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/extra-pricings/${extra_pricing_id}`;
  }


  //―――――――――――――――――――――― Product > 3D / AR ――――――――――――――――――――

  POST_UPLOAD_PRODUCT_3D_MODEL(
    shop_id:string|number,
    product_id,
    file_type,
    variant_id = null
  ) {
    if (variant_id)
      return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/edit/upload/ar/${file_type}/${variant_id}`; // Maybe '/' cause problem!
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/edit/upload/ar/${file_type}`;
  }

  DELETE_PRODUCT_3D_MODEL(shop_id:string|number, product_id, file_type, variant_id = null) {
    if (variant_id)
      return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/ar/${file_type}/${variant_id}`; // Maybe '/' cause problem!
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/ar/${file_type}`;
  }

  //―――――――――――――――――――――― Shop > Orders ――――――――――――――――――――

  GET_ORDERS(shop_id:string|number, type) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets-${type}`;
  }
  GET_VENDORS_ORDERS(shop_id:string|number,type) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/vendor-orders-${type}`;
  }


  GET_ORDER_INFO(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}`;
  }
  POST_UPDATE_ORDER_STATE(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/state`;
  }
  PUT_REJECT_ORDER(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/reject`;
  }
  DELETE_REJECT_ORDER(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/reject`;
  }
  POST_UPDATE_ORDER_DELIVERY_RETURN(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/delivery-returned`;
  }

  PUT_SET_TRACKING_ORDER(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/tracking`;
  }

  PUT_CHECK_FULFILLMENT(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/fulfillment`;
  }

  PUT_SERVICE_ITEM(shop_id:string|number, basket_id, item_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/service/${item_id}`;
  }

  PUT_SERVICE_ITEM_TASKS(shop_id:string|number, basket_id, item_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/service/${item_id}/tasks`;
  }

  GET_BASKET_ITEM_FILE_DOWNLOAD_LINK(shop_id:string|number, basket_id, file_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/files/${file_id}`;
  }


  PUT_UPDATE_VENDOR_ORDER_BY_MARKETPLACE_OWNER(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/vendor-orders`;
  }

  PUT_UPDATE_ORDER_RECEIVER_INFO(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/receiver-info`;
  }

  /*
    GET_ORDERS_VIRTUAL(shop_id) {
        return `${this.selldone_api_url}/shops/${shop_id}/process-center/virtual`;
    }*/
  /*  GET_ORDER_VIRTUAL_INFO(shop_id:string|number,virtual_id) {
        return `${this.selldone_api_url}/shops/${shop_id}/process-center/virtual/SV-${virtual_id}`;
    }*/


  POST_BASKET_CHAT_ADD_MESSAGE(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/chat`;
  }

  DELETE_BASKET_CHAT_MESSAGE(shop_id:string|number, basket_id,message_index) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/chat/${message_index}`;
  }

  POST_BASKET_REFUND_VENDOR_ORDER(shop_id:string|number,vendor_order_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/vendor-orders/${vendor_order_id}/refund`;
  }



  //―――――――――――――――――――――― Shop > Fulfillments ――――――――――――――――――――
  POST_UPDATE_FULFILLMENT_ORDER_STATE(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/fulfillments/${basket_id}/state`;
  }
  POST_UPDATE_FULFILLMENT_ORDER_DELIVERY_RETURN(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/fulfillments/${basket_id}/delivery-returned`;
  }
  PUT_REJECT_FULFILLMENT_ORDER(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/fulfillments/${basket_id}/reject`;
  }
  DELETE_REJECT_FULFILLMENT_ORDER(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/fulfillments/${basket_id}/reject`;
  }
  PUT_SET_TRACKING_FULFILLMENT_ORDER(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/fulfillments/${basket_id}/tracking`;
  }

  //―――――――――――――――――――――― Shop > Orders > Timeline ――――――――――――――――――――

  /**
   *
   * @param shop_id
   * @param type          physical , virtual , service , file
   * @param order_id
   * @returns {string}
   * @constructor
   */
  GET_ORDER_TIMELINE(shop_id:string|number, type, order_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/timeline/${type}/${order_id}`;
  }

  GET_ORDER_EMAIL_PREVIEW(shop_id:string|number, order_id, email_type) {
    return `${this.selldone_api_url}/shops/${shop_id}/timeline/orders/${order_id}/emails/${email_type}`;
  }
  POST_ORDER_RESEND_EMAIL(shop_id:string|number, timeline_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/timelines/${timeline_id}/email`;
  }
  //―――――――――――――――――――――― Shop > Pdf ――――――――――――――――――――
  GET_ORDERS_PDF(shop_id:string|number, basket_id, type) {
    // type: label receipt
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/${type}/pdf`;
  }
  GET_POS_ORDERS_PDF(shop_id:string|number, basket_id, type) {
    // type: label receipt
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/pos-baskets/${basket_id}/${type}/pdf`;
  }

  //―――――――――――――――――――――― Shop > Permission ――――――――――――――――――――

  GET_SHOP_PERMISSIONS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/permissions`;
  }

  POST_ADD_SHOP_PERMISSION(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/permissions`;
  }
  DELETE_SHOP_PERMISSION(shop_id:string|number, permission_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/permissions/${permission_id}`;
  }
  DELETE_SHOP_INVITE(shop_id:string|number, invite_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/invites/${invite_id}`;
  }

  PUT_SHOP_INVITE_ACTION(shop_id:string|number, invite_id, action) {
    return `${this.selldone_api_url}/shops/${shop_id}/invites/${invite_id}/action/${action}`;
  }

  POST_SHOP_PERMISSION_LEAVE(shop_id:string|number, permission_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/permissions/${permission_id}/leave`;
  }

  //―――――――――――――――――――――― Shop > Role ――――――――――――――――――――

  GET_SHOP_ROLES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/roles`;
  }

  POST_ADD_SHOP_ROLE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/roles`;
  }
  DELETE_SHOP_ROLES(shop_id:string|number, role_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/roles/${role_id}`;
  }

  GET_MY_ROLES() {
    return `${this.selldone_api_url}/roles`;
  }

  PUT_ROLE_INVITE_ACTION(role_id, action) {
    return `${this.selldone_api_url}/roles/${role_id}/action/${action}`;
  }
  DELETE_MY_ROLE(role_id) {
    return `${this.selldone_api_url}/roles/${role_id}`;
  }

  GET_MY_ROLE_INFO(role_id) {
    return `${this.selldone_api_url}/roles/${role_id}`;
  }

  GET_MY_ROLE_TASKS(role_id) {
    return `${this.selldone_api_url}/roles/${role_id}/tasks`;
  }

  GET_MY_ROLE_TASK(role_id, task_id) {
    return `${this.selldone_api_url}/roles/${role_id}/tasks/${task_id}`;
  }

  POST_MY_ROLE_TASK_ACTION(role_id, task_id, action) {
    return `${this.selldone_api_url}/roles/${role_id}/tasks/${task_id}/actions/${action}`;
  }

  //―――――――――――――――――――――― Shop > Gateway ――――――――――――――――――――

  GET_AVAILABLE_GATEWAYS(shop_id:string|number,currency) {
    return `${this.selldone_api_url}/shops/${shop_id}/available-gateways/${currency}`;
  }

  POST_SET_GATEWAY(shop_id:string|number, gateway_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/gateways/${gateway_code}`;
  }
  POST_GATEWAY_SHOP_ADD_BLOCKCHAIN_WALLET(shop_id:string|number, gateway_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/gateways/${gateway_code}/blockchain/wallet`;
  }
  POST_GATEWAY_SHOP_GENERATE_BLOCKCHAIN_RECOVERY_PHRASES(shop_id:string|number, gateway_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/gateways/${gateway_code}/blockchain/recovery`;
  }

  PUT_GATEWAY_SHOP_CONFIG(shop_id:string|number, gateway_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/gateways/${gateway_code}/config`;
  }


  DELETE_GATEWAY(shop_id:string|number, gateway_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/gateways/${gateway_code}`;
  }
  GET_SHOP_GATEWAYS_BY_OWNER(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/gateways`;
  }
  GET_SHOP_GATEWAY_INFO_DATA(shop_id:string|number, gateway_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/gateways/${gateway_code}`;
  }

  GET_SHOP_GATEWAY_TRANSACTIONS(shop_id:string|number, gateway_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/gateways/${gateway_code}/transactions`;
  }

  GET_CHECK_PAYMENT_GATEWAY(shop_id:string|number, gateway_code, unique_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/gateways/${gateway_code}/check-payment/${unique_id}`;
  }


  POST_CONFIRM_DIR_PAYMENT_MANUALLY(shop_id:string|number, basket_id, gateway_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/dir/${gateway_code}/completed`;
  }

  POST_AUTO_CONFIG_GATEWAY(shop_id:string|number, gateway_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/gateways/${gateway_code}/auto-config`;
  }

  POST_ADD_BILL(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/bill`;
  }
  PUT_UPDATE_BILL_STATUS(shop_id:string|number, basket_id,bill_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/bill/${bill_id}/status`;
  }
  PUT_EDIT_BILL_PRICE(shop_id:string|number, basket_id,bill_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/bill/${bill_id}/price`;
  }
  DELETE_BILL(shop_id:string|number, basket_id,bill_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/bill/${bill_id}`;
  }
  POST_CONFIRM_CASH_PAYMENT_FOR_BILL_MANUALLY(shop_id:string|number, basket_id,bill_id, gateway_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/bill/${bill_id}/payment/${gateway_code}/completed`;
  }


  GET_BASKET_BILLS(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/bills`;
  }


  //―――――――――――――――――――――― COD Payments' Confirmation ――――――――――――――――――――


  POST_CONFIRM_COD_PAYMENT_MANUALLY_FOR_ONLINE_BASKET(shop_id:string|number, basket_id, gateway_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/cod/${gateway_code}/completed`;
  }

  POST_CONFIRM_COD_PAYMENT_MANUALLY_FOR_POS_BASKET(shop_id:string|number, pos_basket_id, gateway_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/pos-baskets/${pos_basket_id}/cod/${gateway_code}/completed`;
  }



  //―――――――――――――――――――――― Search ――――――――――――――――――――

  GET_SEARCH_QUERY_ADMIN(shop_id:string|number, query) {
    return `${this.selldone_api_url}/${shop_id}/search/admin/suggestion/${query}`;
  }

  //―――――――――――――――――――――― Shop > Blog ――――――――――――――――――――
  GET_SHOP_BLOGS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/blogs`;
  }
  GET_SHOP_BLOG_CATEGORIES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/blog/categories`;
  }
  POST_ADD_SHOP_BLOG_CATEGORY(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/blog/categories`;
  }
  PUT_EDIT_SHOP_BLOG_CATEGORY(shop_id:string|number,category_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/blog/categories/${category_id}`;
  }
  DELETE_SHOP_BLOG_CATEGORY(shop_id:string|number,category_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/blog/categories/${category_id}`;
  }
  POST_UPLOAD_SHOP_BLOG_CATEGORY_ICON(shop_id:string|number,category_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/blog/categories/${category_id}/icon`;
  }
  //―――――――――――――――――――――― Company ――――――――――――――――――――

  GET_MY_COMPANIES() {
    return `${this.selldone_api_url}/company`;
  }

  /**
   *
   * @param company_id
   * @param type              logo ,
   * @returns {string}
   * @constructor
   */
  POST_UPLOAD_COMPANY_IMAGE(company_id, type) {
    return `${this.selldone_api_url}/company/${company_id}/${type}`;
  }

  POST_ADD_COMPANY() {
    return `${this.selldone_api_url}/company`;
  }
  PUT_EDIT_COMPANY(company_id) {
    return `${this.selldone_api_url}/company/${company_id}`;
  }

  GET_MY_COMPANY_INFO(company_id) {
    return `${this.selldone_api_url}/company/${company_id}`;
  }


  GET_MY_COMPANY_DOCUMENTS(company_id) {
    return `${this.selldone_api_url}/company/${company_id}/documents`;
  }

  POST_MY_COMPANY_ADD_DOCUMENT(company_id) {
    return `${this.selldone_api_url}/company/${company_id}/documents`;
  }
  GET_MY_COMPANY_DOWNLOAD_DOCUMENT(company_id,document_id) {
    return `${this.selldone_api_url}/company/${company_id}/documents/${document_id}/download`;
  }

  DELETE_MY_COMPANY_DOCUMENT(company_id,document_id) {
    return `${this.selldone_api_url}/company/${company_id}/documents/${document_id}`;
  }

  //―――――――――――――――――――――― Company > App ――――――――――――――――――――

  GET_COMPANY_APPS(company_id) {
    return `${this.selldone_api_url}/company/${company_id}/apps`;
  }

  /**
   *
   * @param company_id
   * @param app_id
   * @param type              icon
   * @returns {string}
   * @constructor
   */
  POST_UPLOAD_APP_IMAGE(company_id, app_id, type) {
    return `${this.selldone_api_url}/company/${company_id}/apps/${app_id}/image/${type}`;
  }
  PUT_APP_IMAGES_ORDER(company_id, app_id, type) {
    return `${this.selldone_api_url}/company/${company_id}/apps/${app_id}/images/order`;
  }
  DELETE_UPLOAD_APP_IMAGE(company_id, app_id, image_id) {
    return `${this.selldone_api_url}/company/${company_id}/apps/${app_id}/images/${image_id}`;
  }

  POST_ADD_APP(company_id) {
    return `${this.selldone_api_url}/company/${company_id}/apps`;
  }

  POST_REVOKE_APP_API(company_id, app_id) {
    return `${this.selldone_api_url}/company/${company_id}/apps/${app_id}/revoke-api`;
  }

  PUT_EDIT_APP(company_id, app_id) {
    return `${this.selldone_api_url}/company/${company_id}/apps/${app_id}`;
  }

  POST_GENERATE_ENTERPRISE_CREDENTIAL(company_id, app_id) {
    return `${this.selldone_api_url}/company/${company_id}/apps/${app_id}/enterprise/credential`;
  }

  /**
   *
   * @param company_id
   * @param app_id
   * @param upload_mode       alpha , beta , publish
   * @returns {string}
   * @constructor
   */
  POST_APP_EDIT_PUBLISH(company_id, app_id, upload_mode) {
    return `${this.selldone_api_url}/company/${company_id}/apps/${app_id}/publish/${upload_mode}`;
  }

  //―――――――――――――――――――――― App Store ――――――――――――――――――――
  GET_APPSTORE_LIST(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/app-store/list`;
  }

  POST_ADD_ENTERPRISE_APP(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/app-store/enterprise`;
  }

  GET_APP_DATA(company_id, app_id) {
    return `${this.selldone_api_url}/company/${company_id}/apps/${app_id}`;
  }

  //―――――――――――――――――――――― Shop > Apps ――――――――――――――――――――
  GET_SHOP_APPS_ADMIN(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/apps`;
  }

  POST_SET_APP_INFO(shop_id:string|number, app_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/apps/${app_code}`;
  }
  PUT_SET_REVIEW(shop_id:string|number, app_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/apps/${app_code}/review`;
  }


  DELETE_APP(shop_id:string|number, app_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/apps/${app_code}`;
  }

  GET_SHOP_APP_INFO_FULL(shop_id:string|number, app_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/apps/${app_code}/full`;
  }

  GET_SHOP_APP_INFO(shop_id:string|number, app_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/apps/${app_code}`;
  }


  //―――――――――――――――――――――― Transportation ――――――――――――――――――――

  GET_SHOP_TRANSPORTATIONS_ADMIN(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportation`;
  }

  POST_SET_TRANSPORTATION(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportation`;
  }
  POST_UPLOAD_TRANSPORTATION_LOGO(shop_id:string|number,transportation_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/logo`;
  }
  DELETE_TRANSPORTATION(shop_id:string|number,transportation_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}`;
  }


  GET_SHOP_TRANSPORTATION_INFO(shop_id:string|number, transportation_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}`;
  }

  GET_SHOP_TRANSPORTATION_ORDERS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportation-orders`;
  }

  GET_TRANSPORTATION_PERSONS(shop_id:string|number, transportation_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/persons`;
  }
  POST_TRANSPORTATION_ADD_PERSON(shop_id:string|number, transportation_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/persons`;
  }
  PUT_TRANSPORTATION_PERSON_UPDATE(shop_id:string|number, transportation_id, person_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/persons/${person_id}`;
  }

  DELETE_TRANSPORTATION_PERSON(shop_id:string|number, transportation_id, person_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/persons/${person_id}`;
  }
  POST_TRANSPORTATION_PERSON_RESET(shop_id:string|number, transportation_id, person_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/persons/${person_id}/reset`;
  }

  GET_TRANSPORTATION_SERVICES(shop_id:string|number, transportation_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/services`;
  }
  POST_TRANSPORTATION_ADD_SERVICE(shop_id:string|number, transportation_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/services`;
  }
  PUT_TRANSPORTATION_SERVICE_UPDATE(shop_id:string|number, transportation_id, service_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/services/${service_id}`;
  }

  DELETE_TRANSPORTATION_SERVICE(shop_id:string|number, transportation_id, service_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/services/${service_id}`;
  }
  POST_TRANSPORTATION_SERVICE_RESET(shop_id:string|number, transportation_id, service_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/services/${service_id}/reset`;
  }

  GET_DELIVERY_SERVICES_OPTIONS(shop_id:string|number, transportation_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/delivery-services`;
  }

  GET_DELIVERY_SERVICE_INFO(shop_id:string|number, transportation_id, delivery_service_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/services/${delivery_service_id}`;
  }

  GET_DELIVERY_SERVICE_PRICE(shop_id:string|number, transportation_id, delivery_service_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/services/${delivery_service_id}/price`;
  }
  POST_DELIVERY_SERVICE_ADD_ORDER(
    shop_id:string|number,
    transportation_id,
    delivery_service_id
  ) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/services/${delivery_service_id}/order`;
  }

  GET_DELIVERY_SERVICE_ORDER_INFO(
    shop_id:string|number,
    transportation_id,
    delivery_service_id,
    uid
  ) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/services/${delivery_service_id}/order/${uid}`;
  }
  GET_DELIVERY_SERVICE_PROFILE(
    shop_id:string|number,
    transportation_id,
    delivery_service_id
  ) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/services/${delivery_service_id}/profile`;
  }

  // ―――――― + Delivery person access: (by secure) ――――――
  POST_TRANSPORTATION_ORDER_STATUS(
    shop_id:string|number,
    transportation_id,
    transportation_order_id
  ) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/orders/${transportation_order_id}`;
  }

  GET_TRANSPORTATION_ORDER_INFO_FOR_DELIVERY_PERSON(
    shop_id:string|number,
    transportation_id,
    transportation_order_id
  ) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/orders/${transportation_order_id}`;
  }
  POST_TRANSPORTATION_ORDER_COD_PAYMENT(
    shop_id:string|number,
    transportation_id,
    transportation_order_id
  ) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/orders/${transportation_order_id}/payment`;
  }


  POST_TRANSPORTATION_SET_PICKUP_ADDRESSES(shop_id:string|number,transportation_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/transportations/${transportation_id}/pickups`;
  }
  // ―――――――――――――――――――――――――――――――――――

  //―――――――――――――――――――――― Warehouse ――――――――――――――――――――

  GET_SHOP_WAREHOUSE_ADMIN(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/warehouse`;
  }
  POST_SHOP_WAREHOUSE_ADMIN(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/warehouse`;
  }

  POST_SHOP_WAREHOUSE_BULK_CHANGE_PRICE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/warehouse/bulk-actions/price`;
  }
  POST_SHOP_WAREHOUSE_BULK_CHANGE_PRICE_REPORT(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/warehouse/bulk-actions/price/report`;
  }
  POST_SHOP_WAREHOUSE_BULK_CHANGE_PRICE_LIST(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/warehouse/bulk-actions/price/list`;
  }



  POST_SHOP_WAREHOUSE_BULK_CHANGE_DISCOUNT(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/warehouse/bulk-actions/discount`;
  }
  GET_SHOP_WAREHOUSE_BULK_CHANGE_DISCOUNT_REPORT(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/warehouse/bulk-actions/discount/report`;
  }

  GET_SHOP_WAREHOUSE_BULK_CHANGE_DISCOUNT_LIST(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/warehouse/bulk-actions/discount/list`;
  }
  //―――――――――――――――――――――― Page Builder ――――――――――――――――――――
  POST_UPLOAD_PAGE_COVER_IMAGE(shop_id:string|number, page_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pages/${page_id}/upload/cover-image`;
  }

  GET_PAGE_HISTORY(shop_id:string|number, page_id, history_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pages/${page_id}/history/${history_id}`;
  }

  PUT_SET_HISTORY_PERSISTENT(shop_id:string|number, page_id, history_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pages/${page_id}/history/${history_id}`;
  }

  PUT_EDIT_PAGE(shop_id:string|number, page_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pages/${page_id}`;
  }

  DELETE_PAGE(shop_id:string|number, page_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pages/${page_id}`;
  }

  POST_ADD_SHOP_PAGE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pages`;
  }
  GET_SHOP_PAGES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pages`;
  }
  GET_PAGE_DATA(shop_id:string|number, page_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pages/${page_id}`;
  }
  POST_PAGE_DATA_UPDATE_PREVIEW(shop_id:string|number, page_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pages/${page_id}/preview`;
  }
  POST_PAGE_PREVIEW_ACKNOWLEDGE(shop_id:string|number, page_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pages/${page_id}/acknowledge`;
  }
  GET_PAGE_EMBED_CODE(shop_id:string|number, page_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pages/${page_id}/embed`;
  }

  POST_UPLOAD_PAGE_IMAGE(shop_id:string|number, page_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pages/${page_id}/upload/content-image`;
  }
  POST_UPLOAD_PAGE_VIDEO(shop_id:string|number, page_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pages/${page_id}/upload/content-video`;
  }

  PUT_SHOP_HOME_PAGE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/home/default`;
  }
  PUT_SHOP_DOMAIN_HOME_PAGE(shop_id:string|number,domain) {
    return `${this.selldone_api_url}/shops/${shop_id}/home/domains/${domain}`;
  }


  GET_PAGE_BUILDER_TEMPLATE_CONTENT(template_id) {
    return `${this.selldone_api_url}/page-templates/${template_id}`;
  }

  GET_PAGE_FILES(shop_id:string|number, page_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pages/${page_id}/files`;
  }


  POST_PAGE_ELEMENT_UPLOAD_IMAGE(shop_id:string|number, element_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/elements/${element_id}/image`;
  }
  POST_PAGE_ELEMENTS_ADD(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/elements`;
  }
  PUT_PAGE_ELEMENT_EDIT(shop_id:string|number, element_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/elements/${element_id}`;
  }
  DELETE_PAGE_ELEMENT(shop_id:string|number, element_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/elements/${element_id}`;
  }
  //―――――――――――――――――――――― Popup ――――――――――――――――――――
  POST_ADD_SHOP_POPUP(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/popups`;
  }
  PUT_EDIT_POPUP(shop_id:string|number, popup_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/popups/${popup_id}`;
  }
  POST_UPLOAD_POPUP_COVER_IMAGE(shop_id:string|number, popup_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/popups/${popup_id}/upload/cover-image`;
  }
  POST_UPLOAD_POPUP_IMAGE(shop_id:string|number, popup_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/popups/${popup_id}/upload/content-image`;
  }

  DELETE_POPUP(shop_id:string|number, popup_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/popups/${popup_id}`;
  }

  GET_SHOP_POPUPS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/popups`;
  }
  GET_POPUP_DATA(shop_id:string|number, popup_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/popups/${popup_id}`;
  }

  //―――――――――――――――――――――― Shop > Return Request ――――――――――――――――――――

  GET_PRIVATE_IMAGE_PATH(shop_id:string|number, file_name, size = null) {
    return (
      `${this.selldone_api_url}/shops/${shop_id}/assets/images/${file_name}` +
      (size !== null ? `?size=${size}` : "")
    );
  }
  GET_RETURN_REQUESTS_LIST(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/return-request`;
  }

  POST_UPDATE_RETURN_REQUEST_STATE(shop_id:string|number, basket_id, item_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/return/${item_id}/state`;
  }

  //―――――――――――――――――――――― Bug Report ――――――――――――――――――――
  POST_BUG_REPORT() {
    return `${this.selldone_api_url}/bug/report`;
  }

  //―――――――――――――――――――――― Passport ――――――――――――――――――――

  GET_TOKENS() {
    return `${this.selldone_api_url}/tokens`;
  }
  GET_CLIENTS() {
    return `${this.selldone_api_url}/clients`;
  }
  GET_SHOP_CLIENTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/clients`;
  }
  POST_CREATE_NEW_SHOP_CLIENT(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/clients`;
  }
  GET_MY_PERSONAL_ACCESS_TOKENS() {
    return `${this.selldone_api_url}/personal-access-tokens`;
  }

  //―――――――――――――――――――――― SEO ――――――――――――――――――――

  GET_SEO_PREVIEW_PRODUCT(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/seo/preview`;
  }

  GET_SEO_PREVIEW_SHOP(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/seo/preview`;
  }

  //―――――――――――――――――――――― Shop > Profiles ――――――――――――――――――――

  POST_UPDATE_SHOP_PROFILE_IMAGE(shop_id:string|number, type) {
    return `${this.selldone_api_url}/shops/${shop_id}/profiles/${type}/upload`;
  }

  POST_SAVE_SHOP_PROFILE(shop_id:string|number, type) {
    return `${this.selldone_api_url}/shops/${shop_id}/profiles/${type}`;
  }

  GET_SHOP_PROFILE(shop_id:string|number, type) {
    return `${this.selldone_api_url}/shops/${shop_id}/profiles/${type}`;
  }

  //―――――――――――――――――――――― Accounts ――――――――――――――――――――
  GET_ACCOUNTS() {
    return `${this.selldone_api_url}/accounts`;
  }

  POST_ADD_NEW_ACCOUNT() {
    return `${this.selldone_api_url}/accounts/new`;
  }

  GET_ACCOUNT_INFO(account_number) {
    return `${this.selldone_api_url}/accounts/${account_number}`;
  }
  DELETE_ACCOUNT(account_id) {
    return `${this.selldone_api_url}/accounts/${account_id}`;
  }

  GET_CHECK_ACCOUNT_NUMBER(account_number) {
    return `${
      this.selldone_api_url
    }/accounts/check-number/${account_number.replace(/-/g, "")}`;
  }

  PUT_EDIT_ACCOUNT(account_number) {
    return `${this.selldone_api_url}/accounts/${account_number}`;
  }

  GET_ACTIVE_ACCOUNT_LIST(currency) {
    return `${this.selldone_api_url}/accounts/list-active/${currency}`;
  }

  GET_ACCOUNT_CHARGES_HISTORY(account_number, gateway_code) {
    return `${this.selldone_api_url}/accounts/${account_number}/charges/${gateway_code}`;
  }

  GET_CHECK_CHARGE_PAYMENT_GATEWAY(account_number, gateway_code, unique_id) {
    return `${this.selldone_api_url}/accounts/${account_number}/charges/${gateway_code}/check-payment/${unique_id}`;
  }
  GET_ACCOUNT_DOWNLOAD_MONTHLY_RECEIPT(account_number,date) {
    return `${this.selldone_api_url}/accounts/${account_number}/receipt/${date}`;
  }
  GET_ACCOUNT_DOWNLOAD_SINGLE_CHARGE_RECEIPT(account_number,charge_id) {
    return `${this.selldone_api_url}/accounts/${account_number}/charges/${charge_id}/receipt`;
  }



  //―――――――――――――――――――――― Claim Free Initial Charge ――――――――――――――――――――

  POST_CLAIM_FREE_CHARGE(account_number) {
    return `${this.selldone_api_url}/accounts/${account_number}/claim-free-charge`;
  }



  //―――――――――――――――――――――― Shop > Accounts ――――――――――――――――――――

  POST_ADD_SHOP_ACCOUNTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/accounts`;
  }
  DELETE_SHOP_ACCOUNTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/accounts`;
  }

  //―――――――――――――――――――――― Shop > Subscription ――――――――――――――――――――
  GET_SHOP_SUBSCRIPTIONS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/subscriptions`;
  }
  POST_ADD_SHOP_SUBSCRIPTION(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/subscriptions`;
  }

  DELETE_SHOP_SUBSCRIPTION(shop_id:string|number, subscription_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/subscriptions/${subscription_id}`;
  }

  GET_SHOP_SUBSCRIPTION_PRICE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/subscription/price`;
  }
  PUT_SHOP_SUBSCRIPTION(shop_id:string|number, subscription_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/subscriptions/${subscription_id}`;
  }
  //―――――――――――――――――――――― Accounts > Receipt ――――――――――――――――――――
  GET_RECEIPT_INFO(receiptNumber) {
    return `${this.selldone_api_url}/accounts/receipt/check/${receiptNumber}`;
  }
  GET_CHECK_RECEIPT_NUMBER(receipt_number) {
    return `${
      this.selldone_api_url
    }/accounts/receipt/check/${receipt_number.replace(/-/g, "")}`;
  }

  //―――――――――――――――――――――― Accounts > Charge ――――――――――――――――――――
  GET_CHARGE_GATEWAYS(currency) {
    return `${this.selldone_api_url}/gateways/${currency}`;
  }
  GET_PAYMENT_STATUS_INTERVAL( gateway, transaction_id,unique_id) {
    return `${this.selldone_api_url}/gateways/${gateway}/transactions/${transaction_id}/${unique_id}`;
  }

  POST_REQUEST_CHARGE_ACCOUNT(account_number, gateway) {
    return `${this.selldone_api_url}/accounts/${account_number}/charge/${gateway}`;
  }

  //―――――――――――――――――――――― 🎗️ Subscription ――――――――――――――――――――
  /**
   * Add card to account to auto top-up.
   * @returns {string}
   * @constructor
   * @param account_number
   * @param gateway
   */
  POST_SELLDONE_SUBSCRIBE_NOW(account_number, gateway) {
    return `${this.selldone_api_url}/accounts/${account_number}/subscribe/${gateway}`;
  }

  /**
   * Remove card from account.
   * @param account_number
   * @returns {string}
   * @constructor
   */
  DELETE_SELLDONE_SUBSCRIBE_CANCEL(account_number) {
    return `${this.selldone_api_url}/accounts/${account_number}/subscribe`;
  }

  /**
   * Get payout of account by its subscription uid. User can use it to make sure get latest payout which maybe missed via webhooks.
   * @param account_number
   * @returns {string}
   * @constructor
   */
  POST_ACCOUNT_SUBSCRIPTION_MANUALLY_CHECK_AUTO_CHARGES(account_number) {
    return `${this.selldone_api_url}/accounts/${account_number}/check-subscribe`;
  }

  //―――――――――――――――――――――― Accounts > Transaction ――――――――――――――――――――

  GET_TRANSACTION_INFO(account_number) {
    return `${this.selldone_api_url}/transactions/${account_number}`;
  }
  POST_CREATE_NEW_TRANSACTION() {
    return `${this.selldone_api_url}/transactions/send/new`;
  }

  POST_CONFIRM_TRANSACTION() {
    return `${this.selldone_api_url}/transactions/send/confirm`;
  }

  //―――――――――――――――――――――― Application Builder > Android ――――――――――――――――――――

  GET_APPLICATION_ANDROID(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/native/android`;
  }
  POST_BUILD_APPLICATION_ANDROID(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/native/android`;
  }
  GET_APPLICATION_ANDROID_STATE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/native/android/state`;
  }

  //―――――――――――――――――――――― Application Builder > iOS ――――――――――――――――――――
  GET_APPLICATION_IOS_IMAGE(shop_id:string|number, size) {
    return `${this.selldone_api_url}/shops/${shop_id}/native/ios/splash/${size}`;
  }

  //―――――――――――――――――――――― Shop > Plugins > Google Tag Manager ――――――――――――――――――――

  /**
   *
   * @param shop_id
   * @param plugin_code   TagManager , VerificationTag
   * @returns {string}
   * @constructor
   */
  POST_SHOP_PLUGIN_SET_CONFIG(shop_id:string|number, plugin_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/plugins/${plugin_code}`;
  }

  //―――――――――――――――――――――― Export ――――――――――――――――――――
  /**
   *
   * @param shop_id
   * @param file          excel , csv
   * @returns {string}
   * @constructor
   */
  GET_EXPORT_PRODUCTS(shop_id:string|number, file) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${file}`;
  }
  GET_EXPORT_CATEGORIES(shop_id:string|number, file) {
    return `${this.selldone_api_url}/shops/${shop_id}/categories/${file}`;
  }

  GET_EXPORT_GIFT_CARDS(shop_id:string|number, giftCardType_id, file) {
    return `${this.selldone_api_url}/shops/${shop_id}/gift-card-types/${giftCardType_id}/export/${file}`;
  }

  GET_EXPORT_GIFT_CARDS_DATA(shop_id:string|number, giftCardType_id, file) {
    return `${this.selldone_api_url}/shops/${shop_id}/gift-card-types/${giftCardType_id}/data/export/${file}`;
  }
  GET_EXPORT_INVENTORY(shop_id:string|number, file) {
    return `${this.selldone_api_url}/shops/${shop_id}/inventory/${file}`;
  }

  GET_EXPORT_FOR_AUCTION(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/for-auction/excel`;
  }
  GET_EXPORT_FOR_AVAILABLE(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/for-available/excel`;
  }

  GET_EXPORT_BASKET_TASKS(shop_id:string|number,type,render) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${type}/export/tasks/${render}`;
  }
  GET_EXPORT_BASKET_LABELS(shop_id:string|number,type) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${type}/export/labels`;
  }




  //―――――――――――――――――――――― File type converter ――――――――――――――――――――

  POST_CONVERTER_EXCEL_CSV(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/converter/excel/csv`;
  }




  //―――――――――――――――――――――― Shop > Custom Domain ――――――――――――――――――――

  //todo: add get domains list!

  POST_CREATE_CLIENT_FOR_DOMAIN(shop_id:string|number, domain_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/domain/${domain_id}/add-client`;
  }

  POST_ADD_DOMAIN(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/domain`;
  }

  GET_DOMAIN_INFO(shop_id:string|number, domain) {
    return `${this.selldone_api_url}/shops/${shop_id}/domains/${domain}/check`;
  }
  PUT_EDIT_DOMAIN(shop_id:string|number, domain, param) {
    return `${this.selldone_api_url}/shops/${shop_id}/domains/${domain}/${param}`;
  }
  DELETE_EDIT_DOMAIN(shop_id:string|number, domain) {
    return `${this.selldone_api_url}/shops/${shop_id}/domains/${domain}`;
  }

  POST_SET_DOMAIN_SETTING(shop_id:string|number, domain_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/domain/${domain_id}/setting`;
  }
  POST_DOMAIN_CHECK_SSL(shop_id:string|number, domain_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/domain/${domain_id}/check-ssl`;
  }

  GET_SHOP_DOMAINS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/domains`;
  }

  //―――――――――――――――――――――― Domain verifications ――――――――――――――――――――

  GET_SHOP_DOMAIN_VERIFICATIONS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/verifications`;
  }

  POST_SHOP_DOMAIN_VERIFICATION(shop_id:string|number,code) {
    return `${this.selldone_api_url}/shops/${shop_id}/verifications/${code}`;
  }
  DELETE_SHOP_DOMAIN_VERIFICATION(shop_id:string|number,verification_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/verifications/${verification_id}`;
  }

  //―――――――――――――――――――――― Shop > Footer ――――――――――――――――――――
  POST_EDIT_SHOP_FOOTER_SECTIONS(shop_id:string|number, sec_index) {
    return `${this.selldone_api_url}/shops/${shop_id}/footer/sections/${sec_index}`;
  }

  //―――――――――――――――――――――― Shop > Theme ――――――――――――――――――――
  POST_EDIT_SHOP_THEME(shop_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/theme`;
  }

  //―――――――――――――――――――――― Shop > Menu ――――――――――――――――――――

  /**
   *
   * @param shop_id
   * @param type          main
   * @returns {string}
   * @constructor
   */
  GET_SHOP_MENU(shop_id:string|number, type: ShopMenuType) {
    return `${this.selldone_api_url}/shops/${shop_id}/menus/${type}`;
  }
  POST_EDIT_SHOP_MENU(shop_id:string|number, type: ShopMenuType) {
    return `${this.selldone_api_url}/shops/${shop_id}/menus/${type}`;
  }
  GET_SHOP_MENU_GENERATE_CATEGORIES(shop_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/menus/generate/categories`;
  }


  POST_TRANSLATE_SHOP_MENU(shop_id:string|number, type: ShopMenuType) {
    return `${this.selldone_api_url}/shops/${shop_id}/menus/${type}/translate`;
  }



  //―――――――――――――――――――――― Shop > Social ――――――――――――――――――――
  PUT_SET_SHOP_SOCIAL(shop_id:string|number, network_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/edit/social/${network_code}`;
  }
  DELETE_SHOP_SOCIAL(shop_id:string|number, network_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/edit/social/${network_code}`;
  }
  //―――――――――――――――――――――― Shop > Discount Codes ――――――――――――――――――――

  GET_DISCOUNT_CODES(shop_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/discount-codes`;
  }

  POST_CREATE_DISCOUNT_CODE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/discount-codes`;
  }

  PUT_EDIT_DISCOUNT_CODE(shop_id:string|number, discount_code_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/discount-codes/${discount_code_id}`;
  }
  DELETE_DISCOUNT_CODE(shop_id:string|number, discount_code_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/discount-codes/${discount_code_id}`;
  }
  POST_RESTORE_DISCOUNT_CODE(shop_id:string|number, discount_code_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/discount-codes/${discount_code_id}/restore`;
  }
  GET_DISCOUNT_CODE_DATA(shop_id:string|number, discount_code_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/discount-codes/${discount_code_id}`;
  }

  GET_DISCOUNT_CODE_ORDERS(shop_id:string|number, discount_code_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/discount-codes/${discount_code_id}/orders`;
  }
  POST_DISCOUNT_CODE_ADD_NOTE(shop_id:string|number, discount_code_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/discount-codes/${discount_code_id}/note`;
  }
  DELETE_DISCOUNT_CODE_NOTE(shop_id:string|number, discount_code_id,note_index) {
    return `${this.selldone_api_url}/shops/${shop_id}/discount-codes/${discount_code_id}/note/${note_index}`;
  }
  //―――――――――――――――――――――― Shop > Coupon ――――――――――――――――――――

  GET_COUPONS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/coupons`;
  }

  POST_CREATE_COUPON(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/coupons`;
  }

  PUT_EDIT_COUPON(shop_id:string|number, coupon_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/coupons/${coupon_id}`;
  }
  DELETE_COUPON(shop_id:string|number, coupon_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/coupons/${coupon_id}`;
  }
  POST_RESTORE_COUPON(shop_id:string|number, coupon_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/coupons/${coupon_id}/restore`;
  }

  GET_COUPON_DATA(shop_id:string|number, coupon_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/coupons/${coupon_id}`;
  }

  GET_COUPON_ORDERS(shop_id:string|number, coupon_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/coupons/${coupon_id}/orders`;
  }

  POST_COUPON_ADD_NOTE(shop_id:string|number, coupon_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/coupons/${coupon_id}/note`;
  }
  DELETE_COUPON_NOTE(shop_id:string|number, coupon_id,note_index) {
    return `${this.selldone_api_url}/shops/${shop_id}/coupons/${coupon_id}/note/${note_index}`;
  }

  //―――――――――――――――――――――― Shop > Offer ――――――――――――――――――――

  GET_OFFERS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/offers`;
  }

  POST_CREATE_OFFER(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/offers`;
  }

  PUT_EDIT_OFFER(shop_id:string|number, offer_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/offers/${offer_id}`;
  }
  DELETE_OFFER(shop_id:string|number, offer_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/offers/${offer_id}`;
  }

  POST_RESTORE_OFFER(shop_id:string|number, offer_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/offers/${offer_id}/restore`;
  }

  GET_OFFER_DATA(shop_id:string|number, offer_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/offers/${offer_id}`;
  }

  GET_OFFER_ORDERS(shop_id:string|number, offer_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/offers/${offer_id}/orders`;
  }

  POST_OFFER_ADD_NOTE(shop_id:string|number, offer_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/offers/${offer_id}/note`;
  }
  DELETE_OFFER_NOTE(shop_id:string|number, offer_id,note_index) {
    return `${this.selldone_api_url}/shops/${shop_id}/offers/${offer_id}/note/${note_index}`;
  }

  //―――――――――――――――――――――― Shop > Lottery ――――――――――――――――――――
  PUT_SHOP_LOTTERY_CONFIG(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/lottery`;
  }
  DELETE_SHOP_LOTTERY_CONFIG(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/lottery`;
  }

  GET_LOTTERY_LOTTERIES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/lotteries`;
  }

  POST_CREATE_LOTTERY(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/lotteries`;
  }

  PUT_EDIT_LOTTERY(shop_id:string|number, lottery_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/lotteries/${lottery_id}`;
  }
  POST_UPLOAD_LOTTERY_IMAGE(shop_id:string|number, lottery_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/lotteries/${lottery_id}/image`;
  }

  DELETE_LOTTERY(shop_id:string|number, lottery_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/lotteries/${lottery_id}`;
  }
  //―――――――――――――――――――――― Shop > Exchange Rates ――――――――――――――――――――
  GET_EXCHANGE_RATES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/exchange/rates`;
  }
  POST_SET_EXCHANGE_RATES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/exchange/rates`;
  }
  DELETE_EXCHANGE_RATES(shop_id:string|number, rate_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/exchange/rates/${rate_id}`;
  }
  PUT_EXCHANGE_RATE_AUTO(shop_id:string|number, rate_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/exchange/rates/${rate_id}/auto`;
  }

  //―――――――――――――――――――――― Shop > Gift Card ――――――――――――――――――――

  GET_GIFT_CARD_TYPES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/gift-card-types`;
  }

  POST_CREATE_GIFT_CARD_TYPE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/gift-card-types`;
  }
  DELETE_GIFT_CARD_TYPE(shop_id:string|number, gift_card_type_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/gift-card-types/${gift_card_type_id}`;
  }
  PUT_EDIT_GIFT_CARD_TYPE(shop_id:string|number, gift_card_type_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/gift-card-types/${gift_card_type_id}`;
  }

  GET_GIFT_CARD_TYPE_DATA(shop_id:string|number, gift_card_type_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/gift-card-types/${gift_card_type_id}`;
  }

  GET_GIFT_CARD_TYPE_CARDS(shop_id:string|number, gift_card_type_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/gift-card-types/${gift_card_type_id}/cards`;
  }

  POST_UPDATE_GIFT_CARD_TYPE_BG(shop_id:string|number, gift_card_type_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/gift-card-types/${gift_card_type_id}/bg`;
  }
  DELETE_GIFT_CARD_TYPE_CARD(shop_id:string|number, gift_card_type_id, card_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/gift-card-types/${gift_card_type_id}/cards/${card_id}`;
  }
  PUT_EDIT_GIFT_CARD_TYPE_CARD(shop_id:string|number, gift_card_type_id, card_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/gift-card-types/${gift_card_type_id}/cards/${card_id}`;
  }

  GET_GIFT_CARD_TYPE_ORDERS(shop_id:string|number, gift_card_type_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/gift-card-types/${gift_card_type_id}/orders`;
  }

  POST_ISSUE_GIFT_CARD_TYPE_CARD(shop_id:string|number, gift_card_type_id, card_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/gift-card-types/${gift_card_type_id}/cards/${card_id}/issue`;
  }

  POST_ISSUE_GIFT_CARD_TYPE_CARD_POS(shop_id:string|number, gift_card_type_id) { // Auto assign giftcard!
    return `${this.selldone_api_url}/shops/${shop_id}/gift-card-types/${gift_card_type_id}/issue`;
  }

  POST_GIFT_CARD_TYPE_ADD_NOTE(shop_id:string|number, gift_card_type_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/gift-card-types/${gift_card_type_id}/note`;
  }
  DELETE_GIFT_CARD_TYPE_NOTE(shop_id:string|number, gift_card_type_id,note_index) {
    return `${this.selldone_api_url}/shops/${shop_id}/gift-card-types/${gift_card_type_id}/note/${note_index}`;
  }

  POST_GIFT_CARD_AUTO_CREATE_PRODUCT(shop_id:string|number, gift_card_type_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/gift-card-types/${gift_card_type_id}/auto-create-product`;
  }
  //―――――――――――――――――――――― Shop > Campaigns ――――――――――――――――――――
  GET_CAMPAIGNS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/campaigns`;
  }
  POST_ADD_CAMPAIGN(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/campaigns`;
  }
  DELETE_CAMPAIGN(shop_id:string|number, campaign_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/campaigns/${campaign_id}`;
  }

  GET_CAMPAIGN_INFO(shop_id:string|number, campaign_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/campaigns/${campaign_id}`;
  }

  PUT_EDIT_CAMPAIGN_INFO(shop_id:string|number, campaign_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/campaigns/${campaign_id}`;
  }
  PUT_SET_CAMPAIGN_LANDING(shop_id:string|number, campaign_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/campaigns/${campaign_id}/page`;
  }

  POST_ADD_CAMPAIGN_LINK(shop_id:string|number, campaign_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/campaigns/${campaign_id}/links`;
  }

  DELETE_CAMPAIGN_LINK(shop_id:string|number, campaign_id, link_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/campaigns/${campaign_id}/links/${link_id}`;
  }
  //―――――――――――――――――――――― Shop > Affiliate ――――――――――――――――――――
  GET_AFFILIATES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/affiliates`;
  }
  POST_CREATE_AFFILIATE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/affiliates`;
  }

  PUT_UPDATE_AFFILIATE(shop_id:string|number, affiliate_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/affiliates/${affiliate_id}`;
  }
  GET_AFFILIATE_INFO(shop_id:string|number, affiliate_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/affiliates/${affiliate_id}`;
  }
  GET_AFFILIATE_ORDERS(shop_id:string|number, affiliate_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/affiliates/${affiliate_id}/orders`;
  }
  DELETE_AFFILIATE(shop_id:string|number, affiliate_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/affiliates/${affiliate_id}`;
  }

  POST_UPDATE_AFFILIATE_STATUS(shop_id:string|number, affiliate_id, affiliate_order) {
    return `${this.selldone_api_url}/shops/${shop_id}/affiliates/${affiliate_id}/orders/${affiliate_order}/status`;
  }
  POST_AFFILIATE_PAYMENT(shop_id:string|number, affiliate_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/affiliates/${affiliate_id}/payment`;
  }
  GET_AFFILIATE_PAYMENTS(shop_id:string|number, affiliate_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/affiliates/${affiliate_id}/payments`;
  }

  GET_EXPORT_AFFILIATE_ORDERS(shop_id:string|number,affiliate_id,render) {
    return `${this.selldone_api_url}/shops/${shop_id}/affiliates/${affiliate_id}/export/orders/${render}`;
  }

  //―――――――――――――――――――――― Shop > email ――――――――――――――――――――
  GET_EMAILS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/emails`;
  }
  POST_CREATE_EMAIL(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/emails`;
  }

  PUT_UPDATE_EMAIL(shop_id:string|number, email_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/emails/${email_id}`;
  }
  POST_UPLOAD_IMAGE_EMAIL(shop_id:string|number, email_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/emails/${email_id}/image`;
  }
  GET_EMAIL_RENDER(shop_id:string|number, email_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/emails/${email_id}/render`;
  }

  GET_EMAIL_INFO(shop_id:string|number, email_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/emails/${email_id}`;
  }

  DELETE_EMAIL(shop_id:string|number, email_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/emails/${email_id}`;
  }

  POST_SEND_EMAIL(shop_id:string|number, email_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/emails/${email_id}/send`;
  }
  POST_CANCEL_EMAIL(shop_id:string|number, email_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/emails/${email_id}/cancel`;
  }

  POST_EMAIL_REVIEW_ACTION(shop_id:string|number, email_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/emails/${email_id}/approve`;
  }

  GET_EMAIL_STATISTIC(shop_id:string|number, email_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/emails/${email_id}/statistic`;
  }

  //―――――――――――――――――――――― Shop > Campaigns > Notification ――――――――――――――――――――
  /**
   *
   * @param shop_id
   * @param campaign_id
   * @param type              type , bg
   * @returns {string}
   * @constructor
   */
  POST_UPLOAD_CAMPAIGN_NOTIFICATION_IMAGE(shop_id:string|number, campaign_id, type) {
    return `${this.selldone_api_url}/shops/${shop_id}/campaigns/${campaign_id}/notification/upload/${type}`;
  }

  //―――――――――――――――――――――― Shop > Clubs ――――――――――――――――――――
  POST_SET_SHOP_CLUB(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/clubs`;
  }
  DELETE_SHOP_CLUB(shop_id:string|number,level) {
    return `${this.selldone_api_url}/shops/${shop_id}/clubs/${level}`;
  }
  //―――――――――――――――――――――― Shop > Statistic ――――――――――――――――――――
  GET_SHOP_STATISTIC_SESSIONS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/statistic/sessions`;
  }
  GET_SHOP_STATISTIC_TIMELINE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/statistic/timeline`;
  }
  GET_SHOP_STATISTIC_COUNTRY(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/statistic/country`;
  }

  //―――――――――――――――――――――― Shop > Contact Us ――――――――――――――――――――
  POST_SHOP_SUPPORT_SETTING(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/support-setting`;
  }

  GET_SHOP_CONTACT_US_LIST(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/contacts`;
  }
  PUT_SHOP_CONTACT_US_UPDATE_MESSAGE(shop_id:string|number, contact_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/contacts/${contact_id}`;
  }
  DELETE_SHOP_CONTACT_US_MESSAGE(shop_id:string|number, contact_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/contacts/${contact_id}`;
  }
  DELETE_SHOP_CONTACT_US_MESSAGE_RESPONSE(shop_id:string|number, contact_id, index) {
    return `${this.selldone_api_url}/shops/${shop_id}/contacts/${contact_id}/${index}`;
  }
  POST_SHOP_CONTACT_US_CLOSE_TICKET(shop_id:string|number, contact_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/contacts/${contact_id}/close`;
  }
  //―――――――――――――――――――――― Shop > FAQ ――――――――――――――――――――
  GET_SHOP_FAQS_LIST(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/faqs`;
  }
  GET_SHOP_FAQS_TAGS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/faqs/tags`;
  }

  PUT_UPDATE_SHOP_FAQ(shop_id:string|number, faq_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/faqs/${faq_id}`;
  }
  POST_ADD_SHOP_FAQ(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/faqs`;
  }
  DELETE_SHOP_FAQ(shop_id:string|number, faq_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/faqs/${faq_id}`;
  }
  //―――――――――――――――――――――― Selldone > FAQ ――――――――――――――――――――

  POST_SAMIN_NEW_FAQ() {
    return `${this.selldone_api_url}/faqs`;
  }

  //―――――――――――――――――――――― Gifts ――――――――――――――――――――

  GET_GIFTS_RECEIVED_LIST() {
    return `${this.selldone_api_url}/gift/received-list`;
  }

  GET_GIFTS_SENT_LIST() {
    return `${this.selldone_api_url}/gift/sent-list`;
  }

  POST_APPLY_GIFT() {
    return `${this.selldone_api_url}/gift/apply`;
  }
  GET_GIFTS_PENDING_LIST() {
    return `${this.selldone_api_url}/gift/pending-list`;
  }
  POST_SEND_GIFT() {
    return `${this.selldone_api_url}/gift/send`;
  }

  //―――――――――――――――――――――― Stripe ――――――――――――――――――――
  GET_CHECK_SAMIN_STRIPE_PAYMENT_INTENT(paymentIntent_id) {
    return `${this.selldone_api_url}/gateways/stripe/${paymentIntent_id}/check`;
  }

  //―――――――――――――――――――――― PayPal ――――――――――――――――――――
  GET_SELLDONE_PAYPAL_CLIENT_TOKEN(currency) {
    return `${this.selldone_api_url}/gateways/paypal/client-token/${currency}`;
  }

  //―――――――――――――――――――――― Orders ――――――――――――――――――――

  //―――――――――――――――――――――― Shop > Events ――――――――――――――――――――
  GET_SHOP_EVENTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/events`;
  }

  //―――――――――――――――――――――― Shop > Bots ――――――――――――――――――――
  SET_SHOP_BOT(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/bots`;
  }

  //―――――――――――――――――――――― Shop > Notifications ――――――――――――――――――――
  SET_SHOP_NOTIFICATION_CHANNELS(shop_id:string|number, channel) {
    return `${this.selldone_api_url}/shops/${shop_id}/notification-channels/${channel}`;
  }

  PUT_SHOP_NOTIFICATION_CHANNEL_CONFIG(shop_id:string|number, channel) {
    return `${this.selldone_api_url}/shops/${shop_id}/notification-channels/${channel}`;
  }

  GET_SHOP_NOTIFICATION_CHANNELS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/notification-channels`;
  }
  SET_TEST_SHOP_NOTIFICATION_CHANNEL(shop_id:string|number, channel) {
    return `${this.selldone_api_url}/shops/${shop_id}/notification-channels/${channel}/test`;
  }

  //―――――――――――――――――――――― Shop > Sms ――――――――――――――――――――
  GET_SHOP_SMS_LIST(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/sms/list`;
  }
  GET_SHOP_SMS_SERVICE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/sms/service`;
  }
  POST_SET_SHOP_SMS_SERVICE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/sms/service`;
  }
  POST_RESET_SHOP_SMS_SERVICE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/sms/service/reset`;
  }
  POST_SHOP_SMS_SERVICE_ACTION_SYNC(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/sms/service/actions/sync`;
  }



  GET_SHOP_SMS_TEMPLATES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/sms/templates`;
  }
  POST_SHOP_SMS_ADD_TEMPLATE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/sms/templates`;
  }
  PUT_SHOP_SMS_EDIT_TEMPLATE(shop_id:string|number,template_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/sms/templates/${template_id}`;
  }
  DELETE_SHOP_SMS_TEMPLATE(shop_id:string|number,template_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/sms/templates/${template_id}`;
  }
  POST_SHOP_SMS_TEMPLATE_RESET_ERRORS(shop_id:string|number,template_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/sms/templates/${template_id}/reset`;
  }
  POST_SHOP_SMS_TEMPLATE_SEND_TEST(shop_id:string|number,template_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/sms/templates/${template_id}/test`;
  }
  GET_SHOP_SMS_TEMPLATE_DEFAULT_BODY(shop_id:string|number,code,language) {
    return `${this.selldone_api_url}/shops/${shop_id}/sms/defaults/${code}/${language}`;
  }
  //―――――――――――――――――――――― Shop > Emails ――――――――――――――――――――
  GET_SHOP_EMAILS_LIST(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/email/list`;
  }
  GET_SHOP_EMAIL_RENDER_URL(shop_id:string|number, type) {
    return `${this.selldone_api_url}/shops/${shop_id}/email/render/${type}`;
  }
  GET_SHOP_MAIL_SERVICE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/email/service`;
  }
  POST_SET_SHOP_MAIL_SERVICE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/email/service`;
  }
  POST_RESET_SHOP_MAIL_SERVICE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/email/service/reset`;
  }


  GET_SHOP_MAIL_TEMPLATE(shop_id:string|number,code) {
    return `${this.selldone_api_url}/shops/${shop_id}/email/templates/${code}`;
  }
  POST_SET_SHOP_MAIL_TEMPLATE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/email/templates`;
  }
  //―――――――――――――――――――――― Shop > Preferences ――――――――――――――――――――
  SET_SHOP_PREFERENCES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/preferences`;
  }


  //―――――――――――――――――――――― Address Book (Shared!) ――――――――――――――――――――

  GET_MY_ADDRESSES() {
    return `${this.selldone_api_url}/address/all`;
  }

  DELETE_MY_ADDRESSES(address_id) {
    return `${this.selldone_api_url}/address/${address_id}`;
  }

  PUT_ADDRESS(address_id) {
    return `${this.selldone_api_url}/address/${address_id}`;
  }

  POST_ADDRESS() {
    return `${this.selldone_api_url}/address`;
  }
  GET_GEO_TO_ADDRESS() {
    return `${this.selldone_api_url}/address/gto-to-address`;
  }
  GET_AUTOCOMPLETE() {
    return `${this.selldone_api_url}/address/autocomplete`;
  }

  //―――――――――――――――――――――― Help ――――――――――――――――――――

  SAVE_HELP_UID(help_id) {
    return `${this.selldone_api_url}/helps/${help_id}/uid`;
  }



  //―――――――――――――――――――――― Shop > Countries service ――――――――――――――――――――
  SET_SHOP_COUNTRIES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/countries`;
  }
  //―――――――――――――――――――――― Shop > Language pack ――――――――――――――――――――
  POST_INSTALL_SHOP_LANGUAGE_PACK(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/languages`;
  }
  DELETE_UNINSTALL_SHOP_LANGUAGE_PACK(shop_id:string|number,language_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/languages/${language_code}`;
  }
    POST_SHOP_SAVE_OVERRIDE_LANGUAGE_PACK(shop_id:string|number,language_code,pack) {
        return `${this.selldone_api_url}/shops/${shop_id}/languages/${language_code}/packs/${pack}`;
    }
  GET_SHOP_OVERRIDE_LANGUAGE_PACK(shop_id:string|number,language_code,pack) {
    return `${this.selldone_api_url}/shops/${shop_id}/languages/${language_code}/packs/${pack}`;
  }
  GET_SHOP_DOWNLOAD_OVERRIDE_LANGUAGE_PACK(shop_id:string|number,language_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/languages/${language_code}/export`;
  }

  //―――――――――――――――――――――― Files list ――――――――――――――――――――

  GET_PUBLIC_FILES_IMAGES_LIST(shop_id:string|number, folder = null) {
    throw "Deprecated! It's very slow!";
    return (
      `${this.selldone_api_url}/shops/${shop_id}/public/images` +
      (folder ? `/${folder}` : "")
    );
  }

  GET_SHOP_STATIC_FILES_LIST(shop_id:string|number, folder = null) {
    return (
        `${this.selldone_api_url}/shops/${shop_id}/static` + (folder ? `/${folder}` : "")
    );
  }

  POST_SHOP_STATIC_CREATE_FOLDER(shop_id:string|number, folder = null) {
    return (
        `${this.selldone_api_url}/shops/${shop_id}/static` + (folder ? `/${folder}` : "")
    );
  }
  DELETE_SHOP_STATIC_ASSET(shop_id:string|number,asset_id) {
    return (
        `${this.selldone_api_url}/shops/${shop_id}/static/${asset_id}`
    );
  }
  GET_SHOP_STATIC_FILES_DISK_INFO(shop_id) {
    return (
        `${this.selldone_api_url}/shops/${shop_id}/static-disk`
    );
  }
  //―――――――――――――――――――――― Shop > Users ――――――――――――――――――――
  POST_FUNNEL_USERS_COUNT(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/funnel/users/count`;
  }
  POST_FUNNEL_USERS_DATA(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/funnel/users/data`;
  }
  GET_DOWNLOAD_ALL_SHOP_CUSTOMERS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/funnel/users/excel`;
  }

  //―――――――――――――――――――――― support ――――――――――――――――――――
  POST_SUPPORT(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/support`;
  }
  PUT_SUPPORT_RESPONSE(shop_id:string|number, support_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/support/${support_id}`;
  }
  PUT_SUPPORT_CLOSE(shop_id:string|number, support_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/support/${support_id}/close`;
  }
  PUT_SUPPORT_RATE(shop_id:string|number, support_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/support/${support_id}/rate`;
  }

  //―――――――――――――――――――――― AI ――――――――――――――――――――
  POST_AI_REMOVE_BACKGROUND_PRODUCT_IMAGE(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/ai/remove-bg`;
  }

  //―――――――――――――――――――――― TAX ――――――――――――――――――――
  PUT_SET_SHOP_TAX_SETTING(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/tax`;
  }

  GET_SHOP_TAX(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/tax`;
  }
  DELETE_SHOP_TAX(shop_id:string|number, vat_id) {
    // By vat id! Not shop_vat_id!
    return `${this.selldone_api_url}/shops/${shop_id}/tax/${vat_id}`;
  }
  POST_SET_OVERRIDE_SHOP_TAX(shop_id:string|number, vat_id) {
    // By vat id! Not shop_vat_id!
    return `${this.selldone_api_url}/shops/${shop_id}/tax/${vat_id}`;
  }

  POST_ADD_SHOP_TAX_PROFILE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/tax-profiles`;
  }
  DELETE_SHOP_TAX_PROFILE(shop_id:string|number,profile_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/tax-profiles/${profile_id}`;
  }
  GET_SHOP_TAX_PROFILE_STATISTIC(shop_id:string|number,profile_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/tax-profiles/${profile_id}/statistic`;
  }

  //―――――――――――――――――――――― POS Cash Register ――――――――――――――――――――

  GET_CASH_REGISTER_SECURE_URL(shop_id:string|number, type) {
    return `${this.selldone_api_url}/shops/${shop_id}/pos/secure/${type}`;
  }

  GET_CASH_REGISTER_STATUS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pos`;
  }

  POST_OFFLINE_BASKET_ADD_ITEM(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pos/add`;
  }
  DELETE_OFFLINE_BASKET_REMOVE_ITEM(shop_id:string|number, item_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pos/${item_id}`;
  }

  DELETE_POS_DEVICE(shop_id:string|number, device_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pos/devices/${device_id}`;
  }
  PUT_POS_BASKET_ACTION(shop_id:string|number, action) {
    return `${this.selldone_api_url}/shops/${shop_id}/pos/actions/${action}`;
  }
  DELETE_POS_BASKET_ACTION(shop_id:string|number, action) {
    return `${this.selldone_api_url}/shops/${shop_id}/pos/actions/${action}`;
  }

  GET_POS_GIFT_CARDS_LIST(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pos/gift-cards`;
  }
  GET_POS_COUPONS_LIST(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pos/coupons`;
  }
  GET_POS_CAMPAIGNS_LIST(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pos/campaigns`;
  }
  GET_POS_CONFIRM_PAYMENT(shop_id:string|number, gateway_code) {
    return `${this.selldone_api_url}/shops/${shop_id}/pos/payment/${gateway_code}`;
  }

  GET_POS_ORDER_INFO(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/pos-baskets/${basket_id}`;
  }
  POST_POS_ORDER_REJECT(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/pos-baskets/${basket_id}/reject`;
  }

  GET_FETCH_CUSTOMER_VIEW_DATA(shop_id:string|number, user_id, token) {
    return `/dapi/shops/${shop_id}/pos/${user_id}/customer-view/${token}`;
  }


  //―――――――――――――――――――――― Customers ――――――――――――――――――――

  GET_SHOP_CUSTOMERS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/customers`;
  }

  GET_SHOP_CUSTOMER_INFO(shop_id:string|number, customer_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/customers/${customer_id}`;
  }

  PUT_SHOP_CUSTOMER_CHIPS(shop_id:string|number, customer_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/customers/${customer_id}/chips`;
  }

  PUT_SHOP_CUSTOMER_CLUB(shop_id:string|number, customer_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/customers/${customer_id}/club`;
  }

  GET_SHOP_CUSTOMER_ACTIVITY(shop_id:string|number, customer_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/customers/${customer_id}/activity`;
  }
  POST_ADD_NEW_SHOP_CUSTOMER(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/customers`;
  }
  PUT_SHOP_CUSTOMER_UPDATE(shop_id:string|number, customer_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/customers/${customer_id}`;
  }
  PUT_SHOP_CUSTOMER_SEGMENTS(shop_id:string|number, customer_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/customers/${customer_id}/segments`;
  }


  DELETE_SHOP_CUSTOMER(shop_id:string|number, customer_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/customers/${customer_id}`;
  }


  GET_SHOP_CUSTOMERS_SEGMENTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/customer/segments`;
  }
  PUT_SHOP_CUSTOMER_SET_ACCESS(shop_id:string|number, customer_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/customers/${customer_id}/access`;
  }

  POST_SHOP_CUSTOMER_CREATE_SUBSCRIPTION_PORTAL_URL(shop_id:string|number, customer_id,key) {
    return `${this.selldone_api_url}/shops/${shop_id}/customers/${customer_id}/meta/${key}/portal`;
  }
  //―――――――――――――――――――――― Import Products ――――――――――――――――――――

  POST_IMPORT_PRODUCTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/import/products`;
  }
  GET_IMPORT_PRODUCTS_LIST(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/import/products`;
  }
  DELETE_IMPORT_PRODUCT_ITEM(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/import/products/${product_id}`;
  }
  GET_IMPORT_IMAGES_LIST(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/import/images`;
  }
  DELETE_IMPORT_IMAGE_ITEM(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/import/images/${product_id}`;
  }
  PUT_IMPORT_IMAGE_ITEM_TRY(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/import/images/${product_id}/try`;
  }

  GET_SHOP_IMPORTING_INFO(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/importing`;
  }


  //―――――――――――――――――――――― Import Categories ――――――――――――――――――――
  POST_IMPORT_CATEGORIES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/import/categories`;
  }

  //―――――――――――――――――――――― Import Inventory ――――――――――――――――――――
  POST_IMPORT_INVENTORY(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/import/inventory`;
  }

  //―――――――――――――――――――――― Import Customers ――――――――――――――――――――

  POST_IMPORT_CUSTOMERS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/import/customers`;
  }

  //―――――――――――――――――――――― Finance ――――――――――――――――――――

  POST_DOWNLOAD_FINANCE_DATA(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/finance/data`;
  }

  //―――――――――――――――――――――― Dropshipping > Main seller ――――――――――――――――――――

  GET_SHOP_DROPSHIPPING_INFO(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/dropshipping`;
  }

  PUT_SET_PRODUCT_DROP_SHIPPING_SETTINGS(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/dropshipping`;
  }

  GET_DROP_SHIPPING_REQUESTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/dropshipping/requests`;
  }
  PUT_SET_DROP_SHIPPING_REQUEST_STATUS(shop_id:string|number, request_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/dropshipping/requests/${request_id}`;
  }

  GET_DROP_SHIPPING_RESELLERS_SHOPS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/dropshipping/resellers`;
  }
  GET_DROP_SHIPPING_RESELLER_SHOP_INFO(shop_id:string|number, reseller_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/dropshipping/resellers/${reseller_id}`;
  }

  POST_DROP_SHIPPING_RESELLER_CREATE_ACCOUNT(shop_id:string|number, reseller_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/dropshipping/resellers/${reseller_id}/accounts`;
  }
  PUT_DROP_SHIPPING_RESELLER_EDIT_ACCOUNT(shop_id:string|number, reseller_id, account_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/dropshipping/resellers/${reseller_id}/accounts/${account_id}`;
  }

  // Process Center
  GET_DROP_SHIPPING_ORDER_INFO(shop_id:string|number, fulfillment_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/dropshipping-baskets/${fulfillment_id}`;
  }

  //―――――――――――――――――――――― Dropshipping > Middle seller ――――――――――――――――――――

  POST_REQUEST_DROPSHIP_ACCESS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/reseller/access`;
  }

  GET_DROP_SHIPPING_SHOPS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/reseller/shops`;
  }

  GET_DROP_SHIPPING_SHOP_PRODUCTS(shop_id:string|number, drop_shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/reseller/shops/${drop_shop_id}/products`;
  }

  GET_DROP_SHIPPING_RESELLER_RECEIPTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/finance/reseller/receipts`;
  }

  GET_DROP_SHIPPING_RESELLER_ACCOUNT(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/finance/reseller/account`;
  }

  GET_DROP_SHIPPING_RESELLER_ACCOUNTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/finance/reseller/accounts`;
  }
  GET_DROP_SHIPPING_RESELLER_ACCOUNT_CHARGES(shop_id:string|number, account_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/finance/reseller/accounts/${account_id}/charges`;
  }
  POST_DROP_SHIPPING_RESELLER_ACCOUNT_CHARGE_REFRESH_STATE(
    shop_id:string|number,
    account_id,
    charge_id
  ) {
    return `${this.selldone_api_url}/shops/${shop_id}/finance/reseller/accounts/${account_id}/charges/${charge_id}/check`;
  }

  GET_DROP_SHIPPING_RESELLER_PAY_FOR_FULFILLMENTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/finance/reseller/receipts/pay`;
  }

  //  Product

  POST_ADD_PRODUCT_BY_DROP_SHIPPING(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/reseller/products/add`;
  }
  POST_ADD_DROP_SHIPPING_VARIANT(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/reseller/add-variant`;
  }

  POST_DROP_SHIPPING_PRODUCT_RE_ENABLE(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/reseller/re-enable`;
  }
  POST_DROP_SHIPPING_PRODUCT_APPLY_CHANGES(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/reseller/apply-changes`;
  }

  POST_DROP_SHIPPING_RESELLER_ACCOUNT_CHARGE(shop_id:string|number, account_id, gateway) {
    return `${this.selldone_api_url}/shops/${shop_id}/finance/reseller/accounts/${account_id}/charge/${gateway}`;
  }

  //―――――――――――――――――――――― Instagram ――――――――――――――――――――

  GET_INSTAGRAM_DATA(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/channels/instagram`;
  }
  POST_INSTAGRAM_LINK_ACCOUNT(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/channels/instagram/link`;
  }
  DELETE_INSTAGRAM_DATA(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/channels/instagram/link`;
  }
  POST_REQUEST_SYNC(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/channels/instagram/sync`;
  }
  PUT_INSTAGRAM_MEDIA_SET_PRODUCTS(shop_id:string|number, media_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/channels/instagram/medias/${media_id}/products`;
  }
  PUT_INSTAGRAM_MEDIA_SET_CAPTION(shop_id:string|number, media_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/channels/instagram/medias/${media_id}/caption`;
  }

  PUT_INSTAGRAM_STORY_SET_PRODUCTS(shop_id:string|number, story_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/channels/instagram/stories/${story_id}/products`;
  }

  //―――――――――――――――――――――― Experts > Expert Zone ――――――――――――――――――――

  POST_SET_MY_EXPERT_PROFILE() {
    return `${this.selldone_api_url}/expert`;
  }
  POST_MY_EXPERT_UPLOAD_IMAGE() {
    return `${this.selldone_api_url}/expert/image`;
  }

  GET_EXPERT_JOBS() {
    return `${this.selldone_api_url}/expert/jobs`;
  }
  POST_ADD_EXPERT_JOB() {
    return `${this.selldone_api_url}/expert/jobs`;
  }
  PUT_EDIT_EXPERT_JOB(job_id) {
    return `${this.selldone_api_url}/expert/jobs/${job_id}`;
  }
  POST_EXPERT_JOB_UPLOAD_IMAGES(job_id) {
    return `${this.selldone_api_url}/expert/jobs/${job_id}/images`;
  }
  DELETE_EXPERT_JOB_IMAGE(job_id,image_id) {
    return `${this.selldone_api_url}/expert/jobs/${job_id}/images/${image_id}`;
  }
  PUT_EXPERT_JOB_IMAGES_ORDER(job_id) {
    return `${this.selldone_api_url}/expert/jobs/${job_id}/images`;
  }

  GET_EXPERT_JOB_INFO(job_id) {
    return `${this.selldone_api_url}/expert/jobs/${job_id}`;
  }
  GET_EXPERT_JOB_CONTRACTS(job_id) {
    return `${this.selldone_api_url}/expert/jobs/${job_id}/contracts`;
  }
  GET_EXPERT_JOB_CONTRACTS_FOR_USER(job_id, user_id) {
    return `${this.selldone_api_url}/expert/jobs/${job_id}/contracts/users/${user_id}`;
  }

  GET_EXPERT_JOB_REQUESTS(job_id) {
    return `${this.selldone_api_url}/expert/jobs/${job_id}/requests`;
  }
  POST_EXPERT_JOB_REQUEST_START_NEGOTIATION(job_id, request_id) {
    // Signal only!
    return `${this.selldone_api_url}/expert/jobs/${job_id}/requests/${request_id}`;
  }

  GET_EXPERT_JOB_CHATS(job_id) {
    return `${this.selldone_api_url}/expert/jobs/${job_id}/chats`;
  }
  GET_EXPERT_JOB_CHAT_MESSAGES(job_id, user_id) {
    return `${this.selldone_api_url}/expert/jobs/${job_id}/chats/${user_id}/messages`;
  }
  PUT_EXPERT_JOB_CHAT_MESSAGE(job_id, user_id) {
    return `${this.selldone_api_url}/expert/jobs/${job_id}/chats/${user_id}/messages`;
  }
  DELETE_EXPERT_JOB_CHAT_MESSAGE(job_id, user_id, message_id) {
    return `${this.selldone_api_url}/expert/jobs/${job_id}/chats/${user_id}/messages/${message_id}`;
  }
  POST_EXPERT_JOB_CHAT_ATTACHMENT(job_id, user_id) {
    return `${this.selldone_api_url}/expert/jobs/${job_id}/chats/${user_id}/attachments`;
  }
  GET_EXPERT_JOB_CHAT_ATTACHMENT_URL(job_id, user_id,message_id) {
    return `${this.selldone_api_url}/expert/jobs/${job_id}/chats/${user_id}/attachments/${message_id}`;
  }

  POST_EXPERT_JOB_CONTRACT_CREATE(job_id, user_id) {
    return `${this.selldone_api_url}/expert/jobs/${job_id}/contracts/users/${user_id}`;
  }
  GET_EXPERT_JOB_CONTRACT_REQUIRED_DATA(job_id, user_id) {
    return `${this.selldone_api_url}/expert/jobs/${job_id}/contracts/users/${user_id}/required-data`;
  }

  GET_EXPERT_JOB_CONTRACT_INFO(contract_id) {
    return `${this.selldone_api_url}/expert/contracts/${contract_id}`;
  }

  PUT_EXPERT_JOB_CONTRACT_SET_TASKS(contract_id) {
    return `${this.selldone_api_url}/expert/contracts/${contract_id}/tasks`;
  }
  PUT_EXPERT_JOB_CONTRACT_EDIT(contract_id) {
    return `${this.selldone_api_url}/expert/contracts/${contract_id}`;
  }
  POST_EXPERT_JOB_CONTRACT_END(contract_id) {
    return `${this.selldone_api_url}/expert/contracts/${contract_id}/end`;
  }
  POST_EXPERT_JOB_CONTRACT_CANCEL(contract_id) {
    return `${this.selldone_api_url}/expert/contracts/${contract_id}/cancel`;
  }
  POST_EXPERT_JOB_CONTRACT_RESPONSE(contract_id) {
    return `${this.selldone_api_url}/expert/contracts/${contract_id}/response`;
  }


  //―――――――――――――――――――――― Experts > Customer Zone ――――――――――――――――――――

  GET_EXPERT_CUSTOMER_CHATS() {
    return `${this.selldone_api_url}/expert-customer/chats`;
  }
  GET_EXPERT_CUSTOMER_CHAT_MESSAGES(job_id) {
    return `${this.selldone_api_url}/expert-customer/chats/${job_id}/messages`;
  }
  PUT_EXPERT_CUSTOMER_CHAT_MESSAGE(job_id) {
    return `${this.selldone_api_url}/expert-customer/chats/${job_id}/messages`;
  }
  DELETE_EXPERT_CUSTOMER_CHAT_MESSAGE(job_id, message_id) {
    return `${this.selldone_api_url}/expert-customer/chats/${job_id}/messages/${message_id}`;
  }
  GET_EXPERT_CUSTOMER_CONTRACTS_FOR_JOB(job_id) {
    return `${this.selldone_api_url}/expert-customer/jobs/${job_id}/contracts`;
  }
  GET_EXPERT_CUSTOMER_CONTRACT_INFO(contract_id) {
    return `${this.selldone_api_url}/expert-customer/contracts/${contract_id}`;
  }
  POST_EXPERT_CUSTOMER_CONTRACT_PAY_NOW(contract_id) {
    return `${this.selldone_api_url}/expert-customer/contracts/${contract_id}/pay`;
  }
  POST_EXPERT_CUSTOMER_CONTRACT_COMPLETE(contract_id) {
    return `${this.selldone_api_url}/expert-customer/contracts/${contract_id}/complete`;
  }
  POST_EXPERT_CUSTOMER_CONTRACT_PERMISSION(contract_id) {
    return `${this.selldone_api_url}/expert-customer/contracts/${contract_id}/permissions`;
  }
  POST_EXPERT_CUSTOMER_CONTRACT_COMMENT(contract_id) {
    return `${this.selldone_api_url}/expert-customer/contracts/${contract_id}/comment`;
  }

  POST_EXPERT_CUSTOMER_JOBS_HISTORY(job_id) {
    return `${this.selldone_api_url}/expert-customer/jobs/${job_id}/history`;
  }
  POST_EXPERT_SEND_REQUEST_FOR_JOB(job_id) {
    return `${this.selldone_api_url}/expert-customer/jobs/${job_id}/request`;
  }

  GET_EXPERT_CHAT_FOLDERS() {
    return `${this.selldone_api_url}/expert/chat/folders`;
  }
  POST_EXPERT_CHAT_FOLDER_NEW() {
    return `${this.selldone_api_url}/expert/chat/folders`;
  }
  PUT_EXPERT_CHAT_FOLDER_EDIT(folder_id) {
    return `${this.selldone_api_url}/expert/chat/folders/${folder_id}`;
  }
  DELETE_EXPERT_CHAT_FOLDER(folder_id) {
    return `${this.selldone_api_url}/expert/chat/folders/${folder_id}`;
  }
  PUT_EXPERT_CHAT_FOLDER_ADD_CHAT() {
    return `${this.selldone_api_url}/expert/chat/folder`;
  }

  //―――――――――――――――――――――― Feedback ――――――――――――――――――――

  POST_SEND_FEEDBACK_NPS() {
    return `${this.selldone_api_url}/feedback/nps`;
  }
  POST_SEND_FEEDBACK_MESSAGE() {
    return `${this.selldone_api_url}/feedback/message`;
  }




  //―――――――――――――――――――――― Avocado ――――――――――――――――――――
  PUT_SET_SHOP_AVOCADO(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/avocado`;
  }

  GET_SHOP_INFO_FOR_AVOCADO(shop_id) {    // Abstract shop info for create avocado form (For shop admin)
    return `${this.selldone_api_url}/shops/${shop_id}/avocado-info`;
  }
  POST_AVOCADO_CREATE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/avocados`;
  }
  PUT_AVOCADO_EDIT(shop_id:string|number,avocado_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/avocados/${avocado_id}`;
  }
  PUT_AVOCADO_PROGRESS(shop_id:string|number,avocado_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/avocados/${avocado_id}/progress`;
  }
  PUT_AVOCADO_ITEM_PRICE(shop_id:string|number,avocado_id,item_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/avocados/${avocado_id}/items/${item_id}/price`;
  }
  PUT_AVOCADO_ITEM_STATUS(shop_id:string|number,avocado_id,item_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/avocados/${avocado_id}/items/${item_id}/status`;
  }

  GET_AVOCADO_ORDER_INFO(shop_id:string|number, avocado_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/avocados/${avocado_id}`;
  }

  POST_UPDATE_AVOCADO_ORDER_STATE(shop_id:string|number, avocado_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/avocados/${avocado_id}/state`;
  }
  POST_UPDATE_AVOCADO_ORDER_DELIVERY_RETURN(shop_id:string|number, avocado_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/avocados/${avocado_id}/delivery-returned`;
  }
  PUT_REJECT_AVOCADO_ORDER(shop_id:string|number, avocado_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/avocados/${avocado_id}/reject`;
  }
  DELETE_REJECT_AVOCADO_ORDER(shop_id:string|number, avocado_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/avocados/${avocado_id}/reject`;
  }


  //―――――――――――――――――――――― Hyper ――――――――――――――――――――
  PUT_SET_SHOP_HYPER(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/hyper`;
  }
  GET_HYPER_ORDER_INFO(shop_id:string|number, hyper_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/hypers/${hyper_id}`;
  }


  //―――――――――――――――――――――― Guild ――――――――――――――――――――
  GET_MY_GUILD() {
    return `${this.selldone_api_url}/guild`;
  }
  POST_SETUP_GUILD() {
    return `${this.selldone_api_url}/guild`;
  }
  POST_GUILD_ADD_MEMBER() {
    return `${this.selldone_api_url}/guild/members`;
  }
  POST_GUILD_EDIT_MEMBER(member_id) {
    return `${this.selldone_api_url}/guild/members/${member_id}`;
  }
  DELETE_GUILD_MEMBER(member_id) {
    return `${this.selldone_api_url}/guild/members/${member_id}`;
  }
  POST_GUILD_MEMBER_LIKE(guild_id,member_id) {
    return `${this.selldone_api_url}/guilds/${guild_id}/members/${member_id}/like`;
  }
  POST_GUILD_MEMBER_RECOMMENDATION(guild_id,member_id) {
    return `${this.selldone_api_url}/guilds/${guild_id}/members/${member_id}/recommendation`;
  }

  //―――――――――――――――――――――― Shop Options ――――――――――――――――――――
  POST_SET_SHOP_OPTIONS_GDPR(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/options/gdpr`;
  }
  POST_SET_SHOP_OPTIONS_AMP(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/options/amp`;
  }
  POST_SET_SHOP_OPTIONS_SIZE_UNIT(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/options/size_unit`;
  }
  POST_SET_SHOP_OPTIONS_MASS_UNIT(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/options/mass_unit`;
  }
  POST_SET_SHOP_OPTIONS_BOOST(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/options/boost`;
  }
  POST_SET_SHOP_OPTIONS_LOGIN_METHODS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/options/login`;
  }
  POST_SET_SHOP_OPTIONS_CHECKOUT(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/options/checkout`;
  }
  POST_SET_SHOP_OPTIONS_TYPES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/options/types`;
  }
  POST_SET_SHOP_OPTIONS_SHOP_MAP(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/options/shop_map`;
  }

  POST_SET_SHOP_OPTIONS_VARIANTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/options/variants`;
  }

  POST_SET_SHOP_OPTIONS_SHIPPING_RESTRICTION(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/options/shipping_restriction`;
  }

  //―――――――――――――――――――――― Search Console ――――――――――――――――――――
  DELETE_SEARCH_CONSOLE_CONNECTION(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/services/google/search`;
  }
  GET_SHOP_SERVICES_GOOGLE_SEARCH_CONSOLE_DATA(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/services/google/search`;
  }

  //―――――――――――――――――――――― Google Sheet ――――――――――――――――――――
  DELETE_GOOGLE_SHEET_CONNECTION(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/services/google/sheet`;
  }
  POST_GOOGLE_SHEET_FORCE_SYNC(shop_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/services/google/sheet/sync`;
  }

  //―――――――――――――――――――――― Partners Login ――――――――――――――――――――
  POST_PARTNER_LOGIN_APPLY_DEALT(shop_id:string|number) {
    return `${this.selldone_api_url}/partners/apply-deal/${shop_id}`;
  }
  POST_PARTNER_FIX_SHOP_LICENSE(shop_id:string|number) {
    return `${this.selldone_api_url}/partners/fix-license/${shop_id}`;
  }
  GET_PARTNER_UPGRADE_URL(shop_id:string|number) {
    return `${this.selldone_api_url}/partners/upgrade-url/${shop_id}`;
  }
  PUT_MY_SHOP_AGENCY_META_SET(shop_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/agency-meta`;
  }
  //―――――――――――――――――――――― Deals ――――――――――――――――――――
  GET_MY_PARTNER_PURCHASE_DEALS() {
    return `${this.selldone_api_url}/partners/deals`;
  }
  GET_MY_PARTNER_PURCHASE_DEAL_SHOPS(agency_affiliate_purchase_id:string|number) {
    return `${this.selldone_api_url}/partners/deals/${agency_affiliate_purchase_id}/shops`;
  }

  GET_MY_PARTNER_PENDING_PURCHASE_DEALS() {
    return `${this.selldone_api_url}/partners/deals/pending`;
  }
  POST_PARTNER_PURCHASE_A_DEAL(ref_code,plan_code, gateway) {
    return `${this.selldone_api_url}/partners/deals/${ref_code}/plans/${plan_code}/purchase/${gateway}`;
  }

  POST_MY_PARTNER_PENDING_PURCHASE_CHECK_TRANSACTION(agency_affiliate_purchase_id) {
    return `${this.selldone_api_url}/partners/deals/pending/${agency_affiliate_purchase_id}/check`;
  }

  POST_MY_PARTNER_PURCHASE_REFUND(agency_affiliate_purchase_id,uuid) {
    return `${this.selldone_api_url}/partners/deals/${agency_affiliate_purchase_id}/refund/${uuid}`;
  }

  GET_MY_PARTNER_PURCHASE_DOWNLOAD_RECEIPT(agency_affiliate_purchase_id) {
    return `${this.selldone_api_url}/partners/deals/${agency_affiliate_purchase_id}/receipt`;
  }



  POST_MY_PARTNER_PURCHASE_TRANSFER_OWNERSHIP(agency_affiliate_purchase_id,uuid) {
    return `${this.selldone_api_url}/partners/deals/${agency_affiliate_purchase_id}/transfer-ownership/${uuid}`;
  }

  POST_SHOP_CANCEL_ACTIVE_DEAL(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/cancel-deal`;
  }
  //―――――――――――――――――――――― Shop > Webhooks ――――――――――――――――――――
  GET_SHOP_WEBHOOKS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/webhooks`;
  }
  POST_ADD_SHOP_WEBHOOK(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/webhooks`;
  }
  PUT_UPDATE_SHOP_WEBHOOK(shop_id:string|number,webhook_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/webhooks/${webhook_id}`;
  }
  GET_SHOP_WEBHOOK_CALLS(shop_id:string|number,webhook_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/webhooks/${webhook_id}/calls`;
  }
  DELETE_SHOP_WEBHOOK(shop_id:string|number,webhook_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/webhooks/${webhook_id}`;
  }

  POST_SHOP_WEBHOOK_RESET(shop_id:string|number,webhook_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/webhooks/${webhook_id}/reset`;
  }
  POST_SHOP_WEBHOOK_TEST(shop_id:string|number,webhook_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/webhooks/${webhook_id}/test`;
  }

  //―――――――――――――――――――――― Business Model ――――――――――――――――――――
  POST_SET_BUSINESS_MODEL(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/business-model`;
  }

  //―――――――――――――――――――――― Marketplace ――――――――――――――――――――

  POST_SHOP_VENDOR_SET_SETTING(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/business-model/marketplace`;
  }
  


  GET_SHOP_VENDORS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/vendors`;
  }
  POST_SHOP_ADD_VENDOR(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/vendors`;
  }
  PUT_SHOP_EDIT_VENDOR(shop_id:string|number,vendor_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/vendors/${vendor_id}`;
  }
  DELETE_SHOP_EDIT_VENDOR(shop_id:string|number,vendor_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/vendors/${vendor_id}`;
  }
  POST_UPLOAD_VENDOR_ICON(shop_id:string|number,vendor_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/vendors/${vendor_id}/icon`;
  }




    GET_SHOP_VENDOR_PRICINGS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pricings`;
  }
  POST_SHOP_ADD_VENDOR_PRICINGS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pricings`;
  }
  PUT_SHOP_EDIT_VENDOR_PRICINGS(shop_id:string|number,pricing_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pricings/${pricing_id}`;
  }
  DELETE_SHOP_EDIT_VENDOR_PRICINGS(shop_id:string|number,pricing_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pricings/${pricing_id}`;
  }




  GET_ALL_VENDOR_PRODUCTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/vendor-products`;
  }

  GET_PRODUCT_VENDORS(shop_id:string|number,product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/vendors`;
  }
  POST_ADD_PRODUCT_VENDOR(shop_id:string|number,product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/vendors`;
  }
  PUT_EDIT_PRODUCT_VENDOR(shop_id:string|number,product_id,vendor_product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/vendors/${vendor_product_id}`;
  }
  DELETE_PRODUCT_VENDOR(shop_id:string|number,product_id,vendor_product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/vendors/${vendor_product_id}`;
  }




  GET_SHOP_VENDOR_ACCOUNTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/vendor-accounts`;
  }
  GET_SHOP_VENDOR_ACCOUNT_TRANSACTIONS(shop_id:string|number,account_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/vendor-accounts/${account_id}/transactions`;
  }




  GET_SHOP_VENDOR_PAYMENTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/vendor-payments`;
  }
  POST_SHOP_VENDOR_PAYMENT_ADD(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/vendor-payments`;
  }
  DELETE_SHOP_VENDOR_PAYMENT(shop_id:string|number,payment_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/vendor-payments/${payment_id}`;
  }


  GET_SHOP_VENDOR_REQUESTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/vendor-requests`;
  }
  POST_SHOP_VENDOR_REQUESTS_ACCEPT(shop_id:string|number,request_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/vendor-requests/${request_id}`;
  }

  GET_SHOP_VENDOR_PAYMENT_OPTIONS(shop_id:string|number,vendor_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/vendors/${vendor_id}/payment-options`;
  }

  POST_SHOP_VENDOR_PAYMENT_REVERSE_TRANSFER(shop_id:string|number,payment_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/vendor-payments/${payment_id}/revers`;
  }

    //―――――――――――――――――――――― Import Vendors ――――――――――――――――――――

    POST_IMPORT_VENDORS(shop_id) {
        return `${this.selldone_api_url}/shops/${shop_id}/import/vendors`;
    }
  GET_DOWNLOAD_ALL_SHOP_VENDORS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/vendors/export/excel`;
  }

  //―――――――――――――――――――――― 🦠 Connect ――――――――――――――――――――

  GET_SHOP_CONNECTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/connects`;
  }
  GET_CONNECT_SERVICES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/connect-services`;
  }

  GET_SHOP_CONNECT_INFO(shop_id:string|number,shop_connect_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/connects/${shop_connect_id}`;
  }
  PUT_UPDATE_SHOP_CONNECT(shop_id:string|number,shop_connect_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/connects/${shop_connect_id}`;
  }
  DELETE_SHOP_CONNECT(shop_id:string|number,shop_connect_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/connects/${shop_connect_id}`;
  }
  GET_SHOP_CONNECT_PRODUCTS(shop_id:string|number,shop_connect_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/connects/${shop_connect_id}/products`;
  }

  POST_SHOP_CONNECT_REQUEST_SYNC(shop_id:string|number,shop_connect_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/connects/${shop_connect_id}/sync`;
  }
  GET_SHOP_CONNECT_TEST(shop_id:string|number,shop_connect_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/connects/${shop_connect_id}/test`;
  }



  GET_SHOP_CONNECT_ORDERS(shop_id:string|number,shop_connect_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/connects/${shop_connect_id}/orders`;
  }

  POST_SHOP_CONNECT_BASKET_SYNC(shop_id:string|number,shop_connect_order__id) {
    return `${this.selldone_api_url}/shops/${shop_id}/connect-orders/${shop_connect_order__id}/sync`;
  }
  POST_SHOP_CONNECT_BASKET_CONFIRM(shop_id:string|number,shop_connect_order__id) {
    return `${this.selldone_api_url}/shops/${shop_id}/connect-orders/${shop_connect_order__id}/confirm`;
  }
  POST_SHOP_CONNECT_BASKET_REFRESH(shop_id:string|number,shop_connect_order__id) {
    return `${this.selldone_api_url}/shops/${shop_id}/connect-orders/${shop_connect_order__id}/refresh`;
  }
  POST_SHOP_CONNECT_BASKET_CANCEL(shop_id:string|number,shop_connect_order__id) {
    return `${this.selldone_api_url}/shops/${shop_id}/connect-orders/${shop_connect_order__id}/cancel`;
  }

  GET_SHOP_CONNECT_LOGS(shop_id:string|number,shop_connect_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/connects/${shop_connect_id}/logs`;
  }


  //―――――――――――――――――――――― Shop > Valuation ――――――――――――――――――――
  GET_SHOP_VALUATIONS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/valuations`;
  }
  POST_ADD_SHOP_VALUATION(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/valuations`;
  }
  PUT_EDIT_SHOP_VALUATION(shop_id:string|number,valuation_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/valuations/${valuation_id}`;
  }
  DELETE_SHOP_VALUATION(shop_id:string|number,valuation_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/valuations/${valuation_id}`;
  }
  POST_SET_PRODUCT_VALUATION(shop_id:string|number,product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/valuation`;
  }














  //―――――――――――――――――――――― Link preview ――――――――――――――――――――
  GET_LINK_PREVIEW() {
    return `${this.selldone_api_url}/iframe/preview`;
  }








  //―――――――――――――――――――――― Article > Comments ――――――――――――――――――――
  GET_SHOP_COMMENTS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/comments`;
  }
  PUT_SHOP_COMMENT_REPLY(shop_id:string|number,comment_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/comments/${comment_id}/reply`;
  }
  PUT_SHOP_COMMENT_REVIEWED(shop_id:string|number,comment_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/comments/${comment_id}/review`;
  }
  DELETE_SHOP_COMMENT(shop_id:string|number,comment_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/comments/${comment_id}`;
  }
  GET_SHOP_COMMENT_DETAIL(shop_id:string|number,comment_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/comments/${comment_id}`;
  }
  POST_SHOP_COMMENT_RESTORE(shop_id:string|number,comment_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/comments/${comment_id}/restore`;
  }










  //█████████████████████████████████████████████████████████████
  //――――――――――――――――――――――――――― Partners ―――――――――――――――――――――――――
  //█████████████████████████████████████████████████████████████

  POST_SEND_REQUEST_PARTNERSHIP() {
    return `${this.selldone_api_url}/partnership`;
  }

  POST_SEND_REQUEST_SUPPLIER() {
    return `${this.selldone_api_url}/supplier`;
  }

  //█████████████████████████████████████████████████████████████
  //――――――――――――――――――――――――――― Logging ―――――――――――――――――――――――――
  //█████████████████████████████████████████████████████████████
  GET_SHOP_LOGGINGS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/logging`;
  }



  //█████████████████████████████████████████████████████████████
  //―――――――――――――――――――――――― Logistic Profiles ―――――――――――――――――――――――
  //█████████████████████████████████████████████████████████████
  GET_SHOP_LOGISTIC_PROFILES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/logistic-profiles`;
  }
  POST_SHOP_CREATE_LOGISTIC_PROFILE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/logistic-profiles`;
  }
  PUT_SHOP_LOGISTIC_PROFILE_EDIT(shop_id:string|number,profile_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/logistic-profiles/${profile_id}`;
  }
  DELETE_SHOP_LOGISTIC_PROFILE(shop_id:string|number,profile_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/logistic-profiles/${profile_id}`;
  }
  GET_SHOP_LOGISTIC_PROFILE(shop_id:string|number,profile_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/logistic-profiles/${profile_id}`;
  }
  POST_SHOP_LOGISTIC_PROFILE_SET_ARTICLE(shop_id:string|number,profile_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/logistic-profiles/${profile_id}/articles`;
  }
  DELETE_SHOP_LOGISTIC_PROFILE_ARTICLE(shop_id:string|number,profile_id,article_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/logistic-profiles/${profile_id}/articles/${article_id}`;
  }

  GET_SHOP_LOGISTIC_PROFILE_PRODUCTS(shop_id:string|number,profile_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/logistic-profiles/${profile_id}/products`;
  }
  POST_SHOP_LOGISTIC_PROFILE_AUTO_TRANSLATE(shop_id:string|number,profile_id,article_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/logistic-profiles/${profile_id}/articles/${article_id}/translate-article`;
  }
  //█████████████████████████████████████████████████████████████
  //――――――――――――――――――――――――――― Article ―――――――――――――――――――――――――
  //█████████████████████████████████████████████████████████████

  //―――――――――――――――――――――― SEO ――――――――――――――――――――
  GET_ARTICLE_SEO_AUDIT(shop_id:string|number, article_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/seo-audit/articles/${article_id}`;
  }

  //―――――――――――――――――――――― Import word file ――――――――――――――――――――
  POST_SHOP_CONVERTER_WORD_HTML(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/converter/word/html`;
  }

  //―――――――――――――――――――――― Translate ――――――――――――――――――――
  POST_TRANSLATE_PRODUCT_ARTICLE(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/translate-article`;
  }

  //―――――――――――――――――――――― User Feedback ――――――――――――――――――――
  POST_LIKE_ARTICLE(article_id) {
    return `${this.selldone_api_url}/articles/${article_id}/like`;
  }
  POST_STAR_ARTICLE(article_id) {
    return `${this.selldone_api_url}/articles/${article_id}/star`;
  }
  POST_CLAPS_OF_ARTICLE(article_id) {
    return `${this.selldone_api_url}/articles/${article_id}/claps`;
  }
  POST_REPORT_ARTICLE(article_id, report) {
    return `${this.selldone_api_url}/articles/${article_id}/report/${report}`;
  }

  //―――――――――――――――――――――― Timeline ――――――――――――――――――――
  GET_SHOP_ARTICLES_TIMELINE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/timeline/articles`;
  }

  //―――――――――――――――――――――― Edit ――――――――――――――――――――
  POST_ADD_EDIT_ARTICLE(type) {
    return `${this.selldone_api_url}/article/${type}/edit`;
  }

  POST_ARTICLE_BODY_AUTO_FIX() {
    return `${this.selldone_api_url}/articles/fix`;
  }
  POST_SHOP_ALL_PRODUCTS_ARTICLE_BODY_AUTO_FIX(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/bulk-actions/fix-articles`;
  }

  //―――――――――――――――――――――― Upload ――――――――――――――――――――
  /**
   * Upload article image.
   * @param type
   * @param extra         shop ID
   * @returns {string}
   */
  UPLOAD_ARTICLE_IMAGE(type, extra = null) {
    if (!extra) return `${this.selldone_api_url}/article/${type}/upload`;
    return `${this.selldone_api_url}/article/${type}/upload/${extra}`;
  }
  UPLOAD_ARTICLE_BLOG_IMAGE(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/blogs/upload`;
  }


  //―――――――――――――――――――――― Delete ――――――――――――――――――――
  DELETE_ARTICLE(type, article_id) {
    return `${this.selldone_api_url}/article/${type}/${article_id}`;
  }

  //―――――――――――――――――――――― Tags ――――――――――――――――――――
  GET_SHOP_ARTICLE_TAGS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/articles/tags`;
  }
  PUT_CHANGE_TAG(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/articles/tags`;
  }
  POST_SET_SHOP_ARTICLE_TAGS(shop_id:string|number, article_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/articles/tags/${article_id}`;
  }

  //―――――――――――――――――――――― Comments ――――――――――――――――――――
  POST_ADD_COMMENT(article_id) {
    return `${this.selldone_api_url}/article/${article_id}/comment`;
  }
  PUT_UPDATE_COMMENT(comment_id) {
    return `${this.selldone_api_url}/comment/${comment_id}`;
  }
  DELETE_COMMENT(comment_id) {
    return `${this.selldone_api_url}/comment/${comment_id}`;
  }

  //―――――――――――――――――――――― Follow ――――――――――――――――――――
  POST_FOLLOW_USER(user_id) {
    return `${this.selldone_api_url}/user/follow/${user_id}`;
  }


  //―――――――――――――――――――――― Providers (Connect OS) ――――――――――――――――――――
  GET_MY_PROVIDERS() {
    return `${this.selldone_api_url}/providers`;
  }

  POST_ADD_PROVIDER() {
    return `${this.selldone_api_url}/providers`;
  }
  PUT_MY_PROVIDER_UPDATE(provider_id) {
    return `${this.selldone_api_url}/providers/${provider_id}`;
  }
  POST_MY_PROVIDER_UPLOAD_ICON(provider_id) {
    return `${this.selldone_api_url}/providers/${provider_id}/icon`;
  }
  GET_MY_PROVIDER_INFO(provider_id) {
    return `${this.selldone_api_url}/providers/${provider_id}`;
  }
  PUT_MY_PROVIDER_AUTH(provider_id) {
    return `${this.selldone_api_url}/providers/${provider_id}/auth`;
  }
  PUT_MY_PROVIDER_WEBHOOKS(provider_id) {
    return `${this.selldone_api_url}/providers/${provider_id}/webhooks`;
  }
  POST_MY_PROVIDER_WEBHOOKS_REGENERATE_SIGN_KEY(provider_id) {
    return `${this.selldone_api_url}/providers/${provider_id}/webhooks/invalidate-sign-key`;
  }
  POST_MY_PROVIDER_SECRET_REGENERATE_SIGN_KEY(provider_id) {
    return `${this.selldone_api_url}/providers/${provider_id}/invalidate-secret-key`;
  }

  GET_MY_PROVIDER_SHOPS(provider_id) {
    return `${this.selldone_api_url}/providers/${provider_id}/shops`;
  }

  POST_MY_PROVIDER_PAY25USD_AND_CREATE_BRIDGE(provider_id) {
    return `${this.selldone_api_url}/providers/${provider_id}/pay`;
  }

  POST_MY_PROVIDER_REQUEST_VERIFY(provider_id) {
    return `${this.selldone_api_url}/providers/${provider_id}/request-verify`;
  }
  GET_MY_PROVIDER_LOGS(provider_id) {
    return `${this.selldone_api_url}/providers/${provider_id}/logs`;
  }

  //―――――――――――――――――――――― Shop > Map Search (tags) ――――――――――――――――――――
  GET_SHOP_MAP_TAGS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/map/tags`;
  }
  POST_CREATE_SHOP_MAP_TAG(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/map/tags`;
  }
  PUT_EDIT_SHOP_MAP_TAG(shop_id:string|number,map_tag_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/map/tags/${map_tag_id}`;
  }
  DELETE_SHOP_MAP_TAG(shop_id:string|number,map_tag_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/map/tags/${map_tag_id}`;
  }
  GET_SHOP_MAP_TAG_PRODUCTS(shop_id:string|number,map_tag_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/map/tags/${map_tag_id}/products`;
  }




  //―――――――――――――――――――――― User > Participants ――――――――――――――――――――
  GET_MY_PARTICIPANTS() {
    return `${this.selldone_api_url}/participants`;
  }
  POST_MY_PARTICIPANTS_ADD() {
    return `${this.selldone_api_url}/participants`;
  }
  POST_MY_PARTICIPANTS_PLAY_GAME(participant_id) {
    return `${this.selldone_api_url}/participants/${participant_id}`;
  }
  //―――――――――――――――――――――― User > Agency affiliate deals ――――――――――――――――――――
  GET_MY_AFFILIATE_DEALS() {
    return `${this.selldone_api_url}/affiliate-deals`;
  }

  //―――――――――――――――――――――― Shop > Metaverse ――――――――――――――――――――
  POST_METAVERSE_LANDS_ADD(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/metaverse/lands`;
  }
  PUT_METAVERSE_LANDS_EDIT(shop_id:string|number,land_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/metaverse/lands/${land_id}`;
  }
  GET_METAVERSE_LANDS(shop_id:string|number,land_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/metaverse/lands`;
  }


  //―――――――――――――――――――――― 🎗️ Product > Subscription Prices ――――――――――――――――――――

  POST_PRODUCT_ADD_SUBSCRIPTION_PRICE(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/subscription-prices`;
  }

  PUT_PRODUCT_EDIT_SUBSCRIPTION_PRICE(shop_id:string|number, product_id, price_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/subscription-prices/${price_id}`;
  }

  DELETE_PRODUCT_EDIT_SUBSCRIPTION_PRICE(shop_id:string|number, product_id, price_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/subscription-prices/${price_id}`;
  }
  POST_RESTORE_PRODUCT_EDIT_SUBSCRIPTION_PRICE(shop_id:string|number, product_id, price_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/subscription-prices/${price_id}/restore`;
  }


  GET_SHOP_SUBSCRIPTION_PRICES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/subscription-prices`;
  }

  GET_EXPORT_PRODUCT_SUBSCRIBERS(shop_id:string|number,product_id,render) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/export/subscribers/${render}`;
  }

  //―――――――――――――――――――――― Shop > 🎗️ Ribbon (Subscription) ――――――――――――――――――――
  /**
   * Return available subscription payment gateways by currency.
   * @param shop_id
   * @returns {string}
   * @constructor
   */
  GET_PRODUCT_SUBSCRIPTION_PRICE_AVAILABLE_BILLINGS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/ribbon/billings`;
  }


  /**
   * Set shop Ribbon config.
   * @param shop_id
   * @returns {string}
   * @constructor
   */
  PUT_SET_SHOP_RIBBON(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/ribbon`;
  }

  /**
   * Manually sync bills and payment of the subscription order from payment services.
   * @param shop_id
   * @param basket_id
   * @returns {string}
   * @constructor
   */

  POST_BASKET_SUBSCRIPTION_BILLS_SYNC_MANUALLY(shop_id:string|number, basket_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/process-center/baskets/${basket_id}/sync-bills`;
  }


  /**
   * Get list of subscription products with information about subscription status and pricings.
   * @param shop_id
   * @returns {string}
   * @constructor
   */
  GET_SHOP_RIBBONS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/ribbons`;
  }

  /**
   * Set subscription configs for a products.
   * @param shop_id
   * @param product_id
   * @returns {string}
   * @constructor
   */
  POST_PRODUCT_RIBBON(shop_id:string|number, product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/ribbon`;
  }

  GET_PRODUCT_SUBSCRIPTION_CONTENTS(shop_id:string|number,product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/ribbon/contents`;
  }
  POST_PRODUCT_SUBSCRIPTION_ADD_CONTENT(shop_id:string|number,product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/ribbon/contents`;
  }
  PUT_PRODUCT_SUBSCRIPTION_EDIT_CONTENT(shop_id:string|number,product_id,content_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/ribbon/contents/${content_id}`;
  }

  POST_PRODUCT_SUBSCRIPTION_CONTENT_CONFIRM(shop_id:string|number,product_id,content_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/ribbon/contents/${content_id}/confirm`;
  }
  DELETE_PRODUCT_SUBSCRIPTION_CONTENT(shop_id:string|number,product_id,content_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/ribbon/contents/${content_id}`;
  }
  GET_PRODUCT_SUBSCRIPTION_CONTENT_EMAIL_PREVIEW(shop_id:string|number,product_id,content_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/ribbon/contents/${content_id}/email-preview`;
  }


  GET_PRODUCT_EMBED_PATTERNS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/embed-patterns/product`;
  }


  PUT_PRODUCT_SET_TRANSLATIONS(shop_id:string|number,product_id:number|string,key:string) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/translations/${key}`;
  }
  PUT_CATEGORY_SET_TRANSLATIONS(shop_id:string|number,category_id:number|string,key:string) {
    return `${this.selldone_api_url}/shops/${shop_id}/categories/${category_id}/translations/${key}`;
  }
  PUT_CROSS_SELL_SET_TRANSLATIONS(shop_id:string|number,product_id:number|string,cross_sell_id:number|string,key:string) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/cross-sells/${cross_sell_id}/translations/${key}`;
  }
  PUT_SHOP_SET_TRANSLATIONS(shop_id:string|number,key:string) {
    return `${this.selldone_api_url}/shops/${shop_id}/translations/${key}`;
  }
  //―――――――――――――――――――――― Investors ――――――――――――――――――――
  GET_INVESTORS_FILES(category:string) {
    return `${this.selldone_api_url}/investors/files/${category}`;
  }


  //―――――――――――――――――――――― 🪐 Partner ――――――――――――――――――――
  GET_MY_AGENCIES() {
    return `${this.selldone_api_url}/agencies`;
  }
  GET_MY_AGENCY_INFO(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}`;
  }
  GET_MY_AGENCY_CLIENTS(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/clients`;
  }
  POST_MY_AGENCY_ADD_CLIENT_GIVEAWAY(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/clients/add-client`;
  }
  POST_MY_AGENCY_SEND_CLIENT_ACTIVATION_EMAIL(agency_id:string|number,client_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/clients/${client_id}/send-activation`;
  }
  POST_MY_AGENCY_TRANSFER_DEAL(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/clients/transfer-client`;
  }
  GET_MY_AGENCY_PURCHASES(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/purchases`;
  }

  GET_MY_AGENCY_AFFILIATES(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/affiliates`;
  }
  GET_MY_AGENCY_SHOPS(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/shops`;
  }
  POST_MY_AGENCY_CREATE_SHOP(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/shops`;
  }

  POST_MY_AGENCY_CREATE_SHOP_TEMPORARY_ACCESS(agency_id:string|number,shop_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/shops/${shop_id}/access`;
  }


  POST_MY_AGENCY_ADD_PLAN(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/plans`;
  }
  PUT_MY_AGENCY_UPDATE_PLAN(agency_id:string|number,plan_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/plans/${plan_id}`;
  }
  POST_CALCULATE_MY_AGENCY_PLAN_PRICE(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/subscription/price`;
  }


  POST_AGENCY_SET_CONNECTED_WALLET_ACCOUNT(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/account`;
  }

  POST_AGENCY_SET_CONNECTED_CREATE_WALLET(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/create-wallet`;
  }
  POST_AGENCY_SET_CONNECTED_CHARGE_WALLET(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/charge-wallet`;
  }
  POST_AGENCY_CLAIM_GIFT_CREDIT(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/claim-gift`;
  }
  GET_AGENCY_LOGS(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/calls`;
  }

  //―――――――――――――――――――――― Agency > Documents ――――――――――――――――――――

  GET_MY_AGENCY_UPLOADED_DOCUMENTS_LIST(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/documents`;
  }
  GET_MY_AGENCY_DOCUMENTS_DOWNLOAD_URL(agency_id:string|number,document_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/documents/${document_id}`;
  }
  POST_MY_AGENCY_DOCUMENT_ADD(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/documents`;
  }
  DELETE_MY_AGENCY_DOCUMENT(agency_id:string|number,document_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/documents/${document_id}`;
  }
  //―――――――――――――――――――――― Agency > FAQ ――――――――――――――――――――

  POST_MY_AGENCY_ADD_DAQ(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/faqs`;
  }
  PUT_MY_AGENCY_EDIT_DAQ(agency_id:string|number,faq_id:number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/faqs/${faq_id}`;
  }
  DELETE_MY_AGENCY_DAQ(agency_id:string|number,faq_id:number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/faqs/${faq_id}`;
  }

  //―――――――――――――――――――――― Agency > Subscriptions ――――――――――――――――――――


  GET_MY_AGENCY_SUBSCRIPTIONS(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/subscriptions`;
  }
  POST_MY_AGENCY_SUBSCRIPTIONS_SEND(agency_id:string|number) {
    return `${this.selldone_api_url}/agencies/${agency_id}/subscriptions/send`;
  }


  //―――――――――――――――――――――― Shop > Stream Users ――――――――――――――――――――
  GET_SHOP_STREAM_USERS(shop_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/stream-users`;
  }
  GET_SHOP_STREAMS(shop_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/streams`;
  }
  DELETE_SHOP_STREAM_USER(shop_id:string|number,stream_user_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/stream-users/${stream_user_id}`;
  }

  GET_DOWNLOAD_ALL_SHOP_STREAM_USERS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/stream-users/export/excel`;
  }
  //―――――――――――――――――――――― AI (CI) ――――――――――――――――――――

  POST_AI_PAGE_BUILDER_AUTO_GENERATE(shop_id:string|number,page_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pages/${page_id}/ai`;
  }
  POST_AI_ARTICLE_AUTO_GENERATE(shop_id:string|number,article_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/articles/${article_id}/ai`;
  }


  POST_AI_PAGE_BUILDER_SECTION_CONTENT_GENERATE(shop_id:string|number,page_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/pages/${page_id}/ai/sections`;
  }


  POST_AI_PRODUCT_AUTO_CREATE_SPEC(shop_id:string|number,product_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/ai/spec`;
  }

  //―――――――――――――――――――――― Shop > Quota ――――――――――――――――――――
  SET_SHOP_QUOTA(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/quota`;
  }

  //―――――――――――――――――――――― Shop > Variant Assets ――――――――――――――――――――
  GET_SHOP_VARIANT_ASSETS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/variant-assets`;
  }
  POST_SHOP_VARIANT_ASSET_UPLOAD(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/variant-assets`;
  }
  DELETE_SHOP_VARIANT_ASSET_UPLOAD(shop_id:string|number,variant_asset_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/variant-assets/${variant_asset_id}`;
  }

  //―――――――――――――――――――――― Shop > Product Includes ――――――――――――――――――――
  GET_SHOP_INCLUDES(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/includes`;
  }
  POST_SHOP_INCLUDE_ADD(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/includes`;
  }

  POST_SHOP_INCLUDE_EDIT(shop_id:string|number,include_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/includes/${include_id}`;
  }
  DELETE_SHOP_INCLUDE_EDIT(shop_id:string|number,include_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/includes/${include_id}`;
  }

  POST_SHOP_AUGMENT_UPLOAD_IMAGE(shop_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/augment/image`;
  }

  POST_PRODUCT_INCLUDE_SET(shop_id:string|number, product_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/includes`;
  }

  GET_SHOP_PAGE_AUGMENT_STRUCTURE(shop_id:string|number,page_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/pages/${page_id}/augment`;
  }

  //―――――――――――――――――――――― Shop > Product > Cross-selling ――――――――――――――――――――
  GET_PRODUCT_CROSS_SELL_ITEMS(shop_id:string|number,product_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/cross-sells`;
  }
  POST_PRODUCT_CROSS_SELL_ADD(shop_id:string|number,product_id:string|number) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/cross-sells`;
  }
  PUT_PRODUCT_CROSS_SELL_EDIT(shop_id:string|number,product_id,cross_sell_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/cross-sells/${cross_sell_id}`;
  }
  DELETE_PRODUCT_CROSS_SELL_EDIT(shop_id:string|number,product_id,cross_sell_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/products/${product_id}/cross-sells/${cross_sell_id}`;
  }


  //―――――――――――――――――――――― Shop > Notes ――――――――――――――――――――
  POST_SHOP_NOTE_ADD(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/notes`;
  }
  DELETE_SHOP_NOTE(shop_id:string|number,note_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/notes/${note_id}`;
  }
  //―――――――――――――――――――――― USer > Notifications Repository ――――――――――――――――――――
  GET_MY_NOTIFICATIONS_REPOSITORY() {
    return `${this.selldone_api_url}/notifications`;
  }
  POST_READ_MY_NOTIFICATIONS_REPOSITORY() {
    return `${this.selldone_api_url}/notifications/read`;
  }
  GET_SHOP_NOTIFICATIONS_REPOSITORY(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/notifications`;
  }


  //―――――――――――――――――――――― Shop > Clusters ――――――――――――――――――――

  GET_SHOP_CLUSTERS(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/clusters`;
  }
  POST_SHOP_CLUSTERS_ADD(shop_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/clusters`;
  }
  PUT_SHOP_CLUSTERS_EDIT(shop_id:string|number,cluster_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/clusters/${cluster_id}`;
  }
  DELETE_SHOP_CLUSTER(shop_id:string|number,cluster_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/clusters/${cluster_id}`;
  }
  POST_SHOP_CLUSTER_UPLOAD_ICON(shop_id:string|number,cluster_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/clusters/${cluster_id}/icon`;
  }


  GET_SHOP_CLUSTERS_RESOURCES(shop_id:string|number,cluster_id) {
    return `${this.selldone_api_url}/shops/${shop_id}/resources${cluster_id?('/'+cluster_id):''}`;
  }


  //―――――――――――――――――――――― Accounts ――――――――――――――――――――
  GET_MY_SUBSCRIPTIONS() {
    return `${this.selldone_api_url}/subscriptions`;
  }
  POST_SUBSCRIBE_TO_PREMIUM(gateway_code) {
    return `${this.selldone_api_url}/subscriptions/premium/${gateway_code}`;
  }

  //―――――――――――――――――――――― Selldone Collect VAT ――――――――――――――――――――
  POST_CALCULATE_SELLDONE_VAT() {
    return `${this.selldone_api_url}/selldone-vat`;
  }

}
