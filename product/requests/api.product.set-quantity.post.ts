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

import type {ApiProduct} from "../ApiProduct";

/**
 * Update Quantity of the product.
 *
 * @param shop_id - The ID of the shop.
 * @param product_id - The ID of the product.
 *
 */
export default function apiProductSetQuantityPost(
  this: ApiProduct,
  shop_id: number,
  product_id: number,
  quantity: number,
) {
  const params = { quantity: quantity };
  const url = window.API.POST_PRODUCT_QUANTITY(shop_id, product_id);
  return this.postNow<api.shop.product.set_quantity.post.IResponse>(
    url,
    params,
  );
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.shop.product.set_quantity.post {
  export interface IResponse {
    success: boolean;
    quantity: number;
  }
}
