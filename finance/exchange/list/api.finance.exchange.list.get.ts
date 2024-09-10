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

import {ApiFinanceExchange} from "@selldone/sdk-backoffice/finance/exchange/ApiFinanceExchange.ts";


/**
 * Use `window.$backoffice.finance.exchange`
 * @constructor
 */
export default function ApiFinanceExchangeListGet(this: ApiFinanceExchange) {
  const url = window.API.GET_SELLDONE_EXCHANGE_RATES();
  return this.getNow<api.finance.exchange.list.get.IResponse>(url, null);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.finance.exchange.list.get {
  export interface IResponse {
    [currencyCode: string]: number; // `number` is used for float values in TypeScript
  }
}
