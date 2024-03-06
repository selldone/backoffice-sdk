/*
 * Copyright (c) 2023. Selldone® Business OS™
 *
 * Author: M.Pajuhaan
 * Web: https://selldone.com
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * All rights reserved. In the weave of time, where traditions and innovations intermingle, this content was crafted.
 * From the essence of thought, through the corridors of creativity, each word, and sentiment has been molded.
 * Not just to exist, but to inspire. Like an artist's stroke or a sculptor's chisel, every nuance is deliberate.
 * Our journey is not just about reaching a destination, but about creating a masterpiece.
 * Tread carefully, for you're treading on dreams.
 */

import {API} from "./apis/API";
import {BackofficeAxiosSetup} from "./plugins/BackofficeAxiosSetup";
import {ApiPage} from "./page/ApiPage";
import {ApiAgency} from "./agency/ApiAgency";
import {ApiProduct} from "./product/ApiProduct";
import {ApiArticle} from "./article/ApiArticle";
import {ApiBlog} from "@sdk-backoffice/blog/ApiBlog";
import {ApiAuth} from "@sdk-backoffice/auth/ApiAuth";
import {ApiVendor} from "@sdk-backoffice/vendor/ApiVendor";
import {ApiLogistic} from "@sdk-backoffice/logistic/ApiLogistic";
import {ApiMap} from "@sdk-backoffice/map/ApiMap";
import {ApiAffiliate} from "@sdk-backoffice/affiliate/ApiAffiliate";
import {ApiUser} from "@sdk-backoffice/user/ApiUser";

const SDK_VERSION = "0.02";
// Extend the Window interface to recognize the properties you add to the global window object.
declare global {
  interface Window {
    NativeApp?: boolean;
    axios: any;
    SelldoneUser?: {
      access_token: string;
      /**
       * The expires_in field specifies the time at which the access token expires, represented in seconds since the token was issued.
       */
      expires_in: number;
      refresh_token?: string | null;
    };

    // Standard variables may exists
    extra_footer?: string;

    // APIs
    API: API;
    ADDRESS_API: API;
    ARTICLE_API: API;

    // Global SDK Interface
    $backoffice: {
      // Auth:
      auth: ApiAuth;
      // User:
      user: ApiUser;

      // Shop:
      page: ApiPage;
      product: ApiProduct;
      blog: ApiBlog;
      vendor: ApiVendor;

      // Agency:
      agency: ApiAgency;

      // Article:
      article: ApiArticle;

      // Logistic:
      logistic: ApiLogistic;

      // Map:
      map: ApiMap;

      // Affiliate:
      affiliate: ApiAffiliate;
    };
  }
}

export class BackofficeSDK {
  static Setup(): void {
    console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓");
    console.log(`┣━━━ Selldone® Backoffice SDK | V${SDK_VERSION} ━━━┫`);
    console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛");

    this.CheckDependencies();

    //――――――――――――――――――――――――― Axios ―――――――――――――――――――――――――
    BackofficeAxiosSetup();

    //――――――――――――――――――――――――― Initialize Resources Origin ―――――――――――――――――――――――――
    window.API = new API();
    window.ADDRESS_API = window.API;
    window.ARTICLE_API = window.API;

    window.$backoffice = {
      // Auth:
      auth: new ApiAuth(),

      // User:
      user: new ApiUser(),

      // Shop:
      page: new ApiPage(),
      product: new ApiProduct(),
      blog: new ApiBlog(),
      vendor: new ApiVendor(),

      // Agency:
      agency: new ApiAgency(),

      // Article:
      article: new ApiArticle(),

      // Logistic:
      logistic: new ApiLogistic(),

      // Map:
      map: new ApiMap(),

      // Affiliate:
      affiliate: new ApiAffiliate(),
    };
  }

  static CheckDependencies() {
    if (typeof console.style !== "function") {
      throw new Error(
        "❌ console.style not found. Please initialize 'SelldoneCore.Setup()' before initializing the Backoffice SDK.",
      );
    }
  }
}
