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
import {Currency} from "../../../../../../core/enums/payment/Currency";
import type {AgencyWallet} from "../../../../../../core/models/agency/agency-wallet.model";
import {ApiAgencyWallet} from "../ApiAgencyWallet";

/**
 * Create wallet for agency. Ensure you choose the correct currency based on your business location, as this selection cannot be changed later.
 * @param agency_id
 * @param currency
 */
export default function createWallet(
    this: ApiAgencyWallet,
    agency_id: number,
    currency: keyof typeof Currency,
) {
    const params = {currency: currency}
    const url = window.API.POST_AGENCY_SET_CONNECTED_CREATE_WALLET(agency_id);
    return this.postNow<api.agency.wallet.create.post.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.agency.wallet.create.post {
    export interface IResponse {
        success:boolean;
        wallet: AgencyWallet;
    }
}
