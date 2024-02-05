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

import {ApiVendor} from "@sdk-backoffice/vendor/ApiVendor";
import {Vendor} from "@core/models/shop/vendor/vendor.model";

export default function apiVendorsListGet(
  this: ApiVendor,
  shop_id: number,
  offset: number,
  limit: number,
  options?: api.vendors.list.get.IParams,
) {
  const params = { offset: offset, limit: limit, ...options };
  const url = window.API.GET_SHOP_VENDORS(shop_id);
  return this.getNow<api.vendors.list.get.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.vendors.list.get {
  export interface IResponse {
    vendors: Vendor[];
    total: number;
  }

  export interface IParams {
    contain: number | null;
    search: string | null;
    active_only: boolean | null;
    compact: boolean | null;
  }
}
