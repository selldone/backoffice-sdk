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

import {ApiProductAR} from "@sdk-backoffice/product/ar/ApiProductAR";
import {Product} from "@selldone/core-js/models/shop/product/product.model";

export default function apiProductArRemove(
  this: ApiProductAR,
  shop_id: number,
  product_id: number,
  file_type: "src" | "ios",
  variant_id: number | null = null,
) {
  const url = window.API.DELETE_PRODUCT_3D_MODEL(
    shop_id,
    product_id,
    file_type,
    variant_id,
  );
  return this.deleteNow<api.product.ar.remove.IResponse>(url);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.product.ar.remove {
  export interface IResponse {
    success: boolean;
    ar: Product.IAR;
  }
}
