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

import {ApiBlog} from "../ApiBlog";
import {Article} from "@selldone/core-js/models/article/article.model";

export default function ApiShopBlogsListGet(
  this: ApiBlog,
  shop_id: number,
  offset: number,
  limit: number,
  options?: api.shop.blogs.get.IParams,
) {
  const params = { offset: offset, limit: limit, ...options };

  const url = window.API.GET_SHOP_BLOGS(shop_id);
  return this.getNow<api.shop.blogs.get.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.shop.blogs.get {
  export interface IResponse {
    articles: Partial<Article>[];
    total: number;
  }

  export interface IParams {
    search?: string; // Optional: Search query
    cluster_id?: number; // Optional: Cluster ID
    sortBy?: string; // Optional: Sort by this field
    sortDesc?: boolean; // Optional: Whether to sort in descending order
  }
}
