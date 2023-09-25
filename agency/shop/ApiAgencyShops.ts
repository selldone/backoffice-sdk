import {APIAbstract} from "../../../../core/server/APIAbstract";
import add from "./requests/api.agency.shop.create.post";
import list from "./requests/api.agency.shops.get";

export class ApiAgencyShops extends APIAbstract {

    constructor() {
        super();
    }

    public add = add;
    public list = list;


}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ApiAgencyShop {
}
