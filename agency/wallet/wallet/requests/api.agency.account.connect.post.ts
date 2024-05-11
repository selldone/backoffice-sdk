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
import type {Agency} from "@selldone/core-js/models/agency/agency.model";
import type {Account} from "@selldone/core-js/models/account/account.model";
import {ApiAgencyWallet} from "../ApiAgencyWallet";

export default function setAccount(
    this: ApiAgencyWallet,
    agency_id: number,
    account_id: number | null,
) {
    const params = {account_id: account_id}
    const url = window.API.POST_AGENCY_SET_CONNECTED_WALLET_ACCOUNT(agency_id);
    return this.postNow<api.agency.account.connect.post.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.agency.account.connect.post {
    export interface IResponse {
        success:boolean;
        agency: Agency;
        account: Account;
    }
}
