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
 * Changes the category of a given product.
 *
 * @param shop_id - The ID of the shop.
 * @param product_id - The ID of the product.
 * @param category_id - The ID of the category to which the product should be moved. Use `null` if removing from a category.
 * @param bundle - An array of product IDs representing the bundle. Use `null` if there's no bundle.
 *
 * @returns Promise promise with the response of the change category action.
 */
export default function apiProductChangeCategoryPut(
  this: ApiProduct,
  shop_id: number,
  product_id: number,
  category_id: number | null,
  bundle?: number[] | null,
) {
  const params = { category_id: category_id, bundle: bundle };
  const url = window.API.PUT_SET_PRODUCT_CATEGORY(shop_id, product_id);
  return this.putNow<api.shop.product.change_category.put.IResponse>(
    url,
    params,
  );
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.shop.product.change_category.put {
  export interface IResponse {
    success: boolean;
    count: number; // Count of products change
  }
}
