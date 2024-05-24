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

import {LogisticProfile} from "@selldone/core-js/models/shop/logistic/profile/logistic-profile.model";
import {ApiLogisticProfile} from "../../../logistic/profile/ApiLogisticProfile";
import {Article} from "@selldone/core-js";

export default function apiLogisticProfileGet(
  this: ApiLogisticProfile,
  shop_id: number,
  profile_id: number,
  options?: api.logistic.profile.get.IParams,
) {
  const params = { ...options };
  const url = window.API.GET_SHOP_LOGISTIC_PROFILE(shop_id, profile_id);
  return this.getNow<api.logistic.profile.get.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.logistic.profile.get {
  export interface IResponse {
    profile: LogisticProfile;
    articles: Article[];
  }

  export interface IParams {}
}
