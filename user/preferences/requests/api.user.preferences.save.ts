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

import {ApiUserPreferences} from "@sdk-backoffice/user/preferences/ApiUserPreferences";
import {User} from "@selldone/core-js/models/user/user.model";

export default function apiUserPreferencesSave(
  this: ApiUserPreferences,
  preferences: User.Preferences,
) {
  const url = window.API.PUT_SAVE_PREFERENCES();

  return this.putNow<api.user.preferences.save.IResponse>(url, preferences);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.user.preferences.save {
  export interface IResponse {
    preferences: User.Preferences;
  }
}
