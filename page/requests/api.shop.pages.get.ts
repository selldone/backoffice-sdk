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

import {ApiPage} from "../ApiPage";
import {Page} from "@selldone/core-js/models/shop/page/page.model";

export default function ApiShopShopPagesGet(
  this: ApiPage,
  shop_id: number,
  offset: number,
  limit: number,
  options?: api.shop.pages.get.IParams,
) {
  const params = { ...options,offset: offset, limit: limit };

  const url = window.API.GET_SHOP_PAGES(shop_id);
  return this.getNow<api.shop.pages.get.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.shop.pages.get {
  export interface IResponse {
    pages: Partial<Page>[];
    total: number;
  }

  export interface IParams {
    contain?: number; // Optional: Force to contain the page with the given ID
    search?: string; // Optional: Search query
    cluster_id?: number; // Optional: Cluster ID
    sortBy?: string; // Optional: Sort by this field
    sortDesc?: boolean; // Optional: Whether to sort in descending order
    compact?: boolean; // Optional: Whether to return a compact response
    published_only?: boolean; // Optional: Whether to return only published pages
  }
}
