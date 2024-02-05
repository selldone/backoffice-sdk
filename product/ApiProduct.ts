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

import {APIAbstract} from "@core/server/APIAbstract";
import apiProductsListGet from "./requests/api.products.list.get";
import apiProductChangeCategoryPut from "./requests/api.product.change-category.put";
import apiProductInfoGet from "./requests/api.product.info.get";
import {ApiProductImporter} from "@sdk-backoffice/product/importer/ApiProductImporter";
import {ApiProductTag} from "@sdk-backoffice/product/tag/ApiProductTag";
import apiProductSetQuantityPost from "@sdk-backoffice/product/requests/api.product.set-quantity.post";
import {ApiProductVariant} from "@sdk-backoffice/product/variant/ApiProductVariant";
import {ApiProductAR} from "@sdk-backoffice/product/ar/ApiProductAR";
import {ApiProductVendor} from "@sdk-backoffice/product/vendor/ApiProductVendor";
import {
  ApiProductSubscriptionPrice
} from "@sdk-backoffice/product/subscription-price/ApiProductSubscriptionPrice";

export class ApiProduct extends APIAbstract {
  public list = apiProductsListGet;
  public changeCategory = apiProductChangeCategoryPut;

  public getInfo = apiProductInfoGet;

  public setQuantity = apiProductSetQuantityPost;

  public importer = new ApiProductImporter();

  public tags = new ApiProductTag();

  public variants = new ApiProductVariant();

  public ar = new ApiProductAR();

  public vendor = new ApiProductVendor();


  public subscriptionPricing = new ApiProductSubscriptionPrice();

  constructor() {
    super();
  }
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ApiProduct {}
