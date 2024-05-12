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

import {ApiProductTag} from "../ApiProductTag.ts";

export default function apiProductTagSetPost(
  this: ApiProductTag,
  shop_id: number,
  product_id: number,
  tags: string[] | null,
) {
  const url = window.API.POST_PRODUCT_SET_TAGS(shop_id, product_id);
  return this.postNow<api.product.tag.set.post.IResponse>(url, { tags: tags });
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.product.tag.set.post {
  export interface IResponse {
    tags: string[];
    success: boolean;
  }
}
