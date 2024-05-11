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

import {ImportQueImage} from "@selldone/core-js/models/shop/importer/import-que-image.model";
import {ApiProductImporterQue} from "@sdk-backoffice/product/importer/que/ApiProductImporterQue";

export default function apiProductImporterQueImagesGet(
  this: ApiProductImporterQue,
  shop_id: number,
  offset: number,
  limit: number,
  options?: api.product.importer.que.images.get.IParams,
) {
  const params = { offset: offset, limit: limit, ...options };
  const url = window.API.GET_IMPORT_IMAGES_LIST(shop_id);
  return this.getNow<api.product.importer.que.images.get.IResponse>(
    url,
    params,
  );
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.product.importer.que.images.get {
  /**
   * IParams defines the structure for the parameters used in the API request.
   * @property {number} offset - The offset for pagination, calculated as (page - 1) * itemsPerPage.
   * @property {number} limit - The number of items per page.
   * @property {string} sortBy - The field name to sort by.
   * @property {boolean} sortDesc - Whether the sorting is in descending order.
   * @property {string} search - The search query string.
   */
  export interface IParams {
    sortBy: string;
    sortDesc: boolean;
    search: string;
  }

  /**
   * IResponse defines the structure of the response from the API.
   * @property {number} total - The total number of items available.
   * @property {Image[]} images - An array of images.
   */
  export interface IResponse {
    total: number;
    images: ImportQueImage[];
  }

  export interface IResponse {}
}
