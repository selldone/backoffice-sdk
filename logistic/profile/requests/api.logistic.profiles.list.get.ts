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

import {LogisticProfileType} from "@selldone/core-js/enums/logistic/LogisticProfileType";
import {LogisticProfile} from "@selldone/core-js/models/shop/logistic/profile/logistic-profile.model";
import {ApiLogisticProfile} from "../../../logistic/profile/ApiLogisticProfile";

export default function apiLogisticProfilesListGet(
  this: ApiLogisticProfile,
  shop_id: number,
  offset: number,
  limit: number,
  options?: api.logistic.profiles.list.get.IParams,
) {
  const params = { offset: offset, limit: limit, ...options };
  const url = window.API.GET_SHOP_LOGISTIC_PROFILES(shop_id);
  return this.getNow<api.logistic.profiles.list.get.IResponse>(
    url,
    params,
  );
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.logistic.profiles.list.get {
  export interface IResponse {
    profiles: LogisticProfile[];
    total: number;
  }

  export interface IParams {
    sortBy: string | null;
    sortDesc: boolean | null;
    search: string | null;
    contain: number | null;
    compact: boolean | null;
    type: keyof typeof LogisticProfileType | null;
  }
}
