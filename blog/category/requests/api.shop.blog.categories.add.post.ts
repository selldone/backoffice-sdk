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

import {ApiBlogCategory} from "@sdk-backoffice/blog/category/ApiBlogCategory";
import {BlogCategory} from "@selldone/core-js/models/shop/blog/blog-category.model";

export default function ApiShopBlogCategoriesAddPost(
  this: ApiBlogCategory,
  shop_id: number,
  params?: api.shop.blog.categories.add.post.IParams,
) {
  const url = window.API.POST_ADD_SHOP_BLOG_CATEGORY(shop_id);
  return this.postNow<api.shop.blog.categories.add.post.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.shop.blog.categories.add.post {
  export interface IResponse {
    category: BlogCategory;
    success: boolean;
  }

  export interface IParams {
    category?: string;
    description?: string;
    star?: boolean;
  }
}
