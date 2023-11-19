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

import {APIAbstract} from "@core/server/APIAbstract";
import setAccount from "./requests/api.agency.account.connect.post";
import createWallet from "./requests/api.agency.wallet.create.post";
import charge from "./requests/api.agency.wallet.charge.post";
import claimGift from "./requests/api.agency.wallet.claim-gift.post";


export class ApiAgencyWallet extends APIAbstract {

    public createWallet = createWallet;
    public setAccount = setAccount;
    public charge = charge;
    public claimGift = claimGift;

    constructor() {
        super();
    }




}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ApiAgencyShop {
}
