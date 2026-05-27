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

import {ApiBlogCategory} from "../../../blog/category/ApiBlogCategory";

export default function ApiShopBlogCategoriesDelete(
  this: ApiBlogCategory,
  shop_id: number,
  category_id: number,
) {
  const url = window.API.DELETE_SHOP_BLOG_CATEGORY(shop_id, category_id);
  return this.deleteNow<api.shop.blog.categories.remove.IResponse>(url);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.shop.blog.categories.remove {
  export interface IResponse {
    id: number;
    success: boolean;
  }
}
