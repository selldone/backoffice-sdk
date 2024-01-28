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
import apiShopProductsGet from "./requests/api.shop.products.get";
import apiShopProductChangeCategoryPut from "./requests/api.shop.product.change-category.put";
import apiShopProductInfoGet from "./requests/api.shop.product.info.get";
import {ApiProductImporter} from "@sdk-backoffice/product/importer/ApiProductImporter";

export class ApiProduct extends APIAbstract {
  public list = apiShopProductsGet;
  public changeCategory = apiShopProductChangeCategoryPut;

  public getInfo = apiShopProductInfoGet;

  public importer = new ApiProductImporter();

  constructor() {
    super();
  }
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ApiProduct {}
