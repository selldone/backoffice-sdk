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

import { SetupService } from "@selldone/core-js/server/SetupService";

export function BackofficeAxiosSetup() {
  window.axios = require("axios");
  window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

  // Platform:
  window.axios.defaults.headers.common["X-Platform"] = "web";

  // CSRF Token:
  const token = SetupService.GetMetaValue("csrf-token");
  if (token) {
    window.axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
  } else {
    console.warn("CSRF token not found!");
  }
  window.axios.interceptors.request.use(
    (config: any) => {
      // Do something before request is sent
      config.withCredentials = true;
      return config;
    },
    (error: any) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  window.axios.defaults.headers.common["S-Timezone"] =
    new window.Intl.DateTimeFormat().resolvedOptions().timeZone;
}
