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

import apiLogisticProfilesListGet from "@sdk-backoffice/logistic/profile/requests/api.logistic.profiles.list.get";
import {APIAbstract} from "@selldone/core-js/server/APIAbstract";
import apiLogisticProfileGet from "@sdk-backoffice/logistic/profile/requests/api.logistic.profile.get";

export class ApiLogisticProfile extends APIAbstract {
  public list = apiLogisticProfilesListGet;
  public get = apiLogisticProfileGet;

  constructor() {
    super();
  }
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ApiLogisticProfile {}
