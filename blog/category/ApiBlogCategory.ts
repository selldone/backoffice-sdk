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

import {APIAbstract} from "@selldone/core-js/server/APIAbstract";
import ApiShopBlogCategoriesListGet from "../../blog/category/requests/api.shop.blog.categories.get";
import ApiShopBlogCategoriesEditPut from "../../blog/category/requests/api.shop.blog.categories.edit.put";
import ApiShopBlogCategoriesAddPost from "../../blog/category/requests/api.shop.blog.categories.add.post";
import ApiShopBlogCategoriesDelete from "../../blog/category/requests/api.shop.blog.categories.delete";

export class ApiBlogCategory extends APIAbstract {
  public list = ApiShopBlogCategoriesListGet;

  public edit = ApiShopBlogCategoriesEditPut;

  public add = ApiShopBlogCategoriesAddPost;

  public remove = ApiShopBlogCategoriesDelete;

  constructor() {
    super();
  }
} //█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ApiPage {}
