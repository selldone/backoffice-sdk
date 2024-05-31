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

import type {AgencyWallet} from "@selldone/core-js/models/agency/agency-wallet.model";
import {ApiAgencyWallet} from "../ApiAgencyWallet";
import {Currency} from "@selldone/core-js/enums/payment/Currency";

/**
 * Charge wallet by available free credit.
 * @param agency_id
 * @param code
 */
export default function claimGift(
  this: ApiAgencyWallet,
  agency_id: number,
  code: string,
) {
  const params = { code: code };
  const url = window.API.POST_AGENCY_CLAIM_GIFT_CREDIT(agency_id);
  return this.postNow<api.agency.wallet.claim_gift.post.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.agency.wallet.claim_gift.post {
  export interface IResponse {
    success: boolean;
    wallet: AgencyWallet;
    amount: number;
    currency: keyof typeof Currency;
  }
}
