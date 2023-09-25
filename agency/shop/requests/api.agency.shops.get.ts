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

import type {ApiAgencyShops} from "../ApiAgencyShops";
import type {Shop} from "../../../../../core/models/shop/shop.model";



export default function list(
    this: ApiAgencyShops,
    agency_id: number,
    offset: number,
    limit: number,
    options?: api.agency.shops.get.IParams,

) {
    const params = {offset: offset, limit: limit, ...options}
    const url = window.API.GET_MY_AGENCY_SHOPS(agency_id);
    return this.getNow<api.agency.shops.get.IResponse>(url, params);


}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.agency.shops.get {
    export interface IResponse {
        shops: Shop[];
        total: number
    }

    export interface IParams {
        search?: string | null;
        plan?: string | null;
        sortBy?: string | null;
        sortDesc?: boolean;
    }
}
