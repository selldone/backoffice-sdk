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
import {Currency} from "@core/enums/payment/Currency";
import {Language} from "@core/enums/language/Language";
import type {Shop} from "@core/models/shop/shop.model";

export default function add(
    this: ApiAgencyShops,
    agency_id: number,
    title: string,
    currency: keyof typeof Currency,
    plan: number,
    language: keyof typeof Language,
) {
    const params = {title: title, currency: currency, plan: plan, language: language}
    const url = window.API.POST_MY_AGENCY_CREATE_SHOP(agency_id);
    return this.postNow<api.agency.shop.create.post.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.agency.shop.create.post {
    export interface IResponse {
        success: boolean;
        shop: Shop;
    }
}
