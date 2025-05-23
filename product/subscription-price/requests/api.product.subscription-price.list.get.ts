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

import {ApiProductSubscriptionPrice} from "../ApiProductSubscriptionPrice.ts";
import {SubscriptionPrice} from "@selldone/core-js/models/shop/product/subscription_price.model";

export default function apiProductSubscriptionPriceListGet(
  this: ApiProductSubscriptionPrice,
  shop_id: number,
  offset: number,
  limit: number,
  options?: api.product.subscription_price.list.get.IParams,
) {
  const params = { ...options ,offset: offset, limit: limit};
  const url = window.API.GET_SHOP_SUBSCRIPTION_PRICES(shop_id);
  return this.getNow<api.product.subscription_price.list.get.IResponse>(
    url,
    params,
  );
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.product.subscription_price.list.get {
  export interface IResponse {
    subscription_prices: SubscriptionPrice[];
    total: number;
  }

  export interface IParams {
    sortBy: string | null;
    sortDesc: boolean | null;
    search: string | null;
    compact: boolean | null;
    product_id: number | null; //Only for this product
    with_product: boolean | null;
  }
}
