/*
 * Copyright (c) 2023-2024. Selldone® Business OS™
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

import {ApiProductImporterQue} from "../ApiProductImporterQue.ts";

export default function apiProductImporterQueProductsDelete(
  this: ApiProductImporterQue,
  shop_id: number,
  item_id: number,
) {
  const url = window.API.DELETE_IMPORT_PRODUCT_ITEM(shop_id, item_id);
  return this.deleteNow<api.product.importer.que.products.deleter.IResponse>(
    url,
  );
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.product.importer.que.products.deleter {
  /**
   * IResponse defines the structure of the response from the API.
   * @property {number} total - The total number of items available.
   * @property {Image[]} images - An array of images.
   */
  export interface IResponse {
    success: boolean;
    id: number;
  }

  export interface IResponse {}
}
