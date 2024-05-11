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

import type {ApiAgency} from "../../../ApiAgency";
import {Currency} from "@selldone/core-js/enums/payment/Currency";
import type {AgencyWallet} from "@selldone/core-js/models/agency/agency-wallet.model";
import {ApiAgencyWallet} from "../ApiAgencyWallet";


/**
 * Charge wallet by transferring funds from connect account to agency wallet.
 * @param agency_id
 * @param currency
 * @param amount
 */
export default function charge(
    this: ApiAgencyWallet,
    agency_id: number,
    currency: keyof typeof Currency,
    amount: number,

) {
    const params = {currency: currency,amount:amount}
    const url = window.API.POST_AGENCY_SET_CONNECTED_CHARGE_WALLET(agency_id);
    return this.postNow<api.agency.wallet.charge.post.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.agency.wallet.charge.post {
    export interface IResponse {
        success:boolean;
        wallet: AgencyWallet;
    }
}
