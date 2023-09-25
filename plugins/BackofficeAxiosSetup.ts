import SetupService from "../../../core/server/SetupService";

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
