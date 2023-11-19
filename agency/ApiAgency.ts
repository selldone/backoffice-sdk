import {APIAbstract} from "@core/server/APIAbstract";
import {ApiAgencyShops} from "./shop/ApiAgencyShops";
import getInfo from "./requests/api.agency.get";
import {ApiAgencyClient} from "./client/ApiAgencyClient";
import {ApiAgencyWallet} from "./wallet/wallet/ApiAgencyWallet";

export class ApiAgency extends APIAbstract {

    public getInfo = getInfo;



    public shops: ApiAgencyShops
    public clients: ApiAgencyClient
    public wallet: ApiAgencyWallet

    constructor() {
        super();
        this.shops = new ApiAgencyShops();
        this.clients = new ApiAgencyClient();
        this.wallet = new ApiAgencyWallet();
    }
}
//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ApiPage {
}
