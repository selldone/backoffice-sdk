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

import {ProductVariant} from "@selldone/core-js/models/shop/product/product_variant.model";
import {ApiProductVariant} from "../ApiProductVariant.ts";

export default function apiProductVariantRestorePost(
  this: ApiProductVariant,
  shop_id: number,
  product_id: number,
  variant_id: number,
) {
  const url = window.API.POST_RESTORE_DELETED_VARIANT(
    shop_id,
    product_id,
    variant_id,
  );
  return this.postNow<api.product.variant.restore.post.IResponse>(url, null);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.product.variant.restore.post {
  export interface IResponse {
    success: boolean;
    variants: ProductVariant[];
    quantity: number;
    product_variant: ProductVariant; // Restored variant
  }
}
