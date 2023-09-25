import {APIAbstract} from "../../../../../core/server/APIAbstract";
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
