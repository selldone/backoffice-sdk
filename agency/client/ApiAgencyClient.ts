import {APIAbstract} from "../../../../core/server/APIAbstract";
import list from "./requests/api.agency.clients.get";


export class ApiAgencyClient extends APIAbstract {

    constructor() {
        super();
    }

    public list = list;


}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ApiAgencyShop {
}
