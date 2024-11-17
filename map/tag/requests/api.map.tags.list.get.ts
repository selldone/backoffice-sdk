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

import {ApiLogisticProfile} from "../../../logistic/profile/ApiLogisticProfile";
import {MapTag} from "@selldone/core-js/models/shop/map/map-tag.model";

export default function apiMapTagsListGet(
  this: ApiLogisticProfile,
  shop_id: number,
  offset: number,
  limit: number,
  options?: api.map.tags.list.get.IParams,
) {
  const params = { ...options,offset: offset, limit: limit };
  const url = window.API.GET_SHOP_MAP_TAGS(shop_id);
  return this.getNow<api.map.tags.list.get.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.map.tags.list.get {
  export interface IResponse {
    map_tags: MapTag[];
    total: number;
  }

  export interface IParams {
    sortBy: string | null;
    sortDesc: boolean | null;
    search: string | null;

    contain: number | null;
    compact: boolean | null;
  }
}
