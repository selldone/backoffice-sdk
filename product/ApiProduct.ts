import {APIAbstract} from "@core/server/APIAbstract";
import list from "./requests/api.shop.products.get";
import changeCategory from "./requests/api.shop.product.change-category.put";
import getInfo from "./requests/api.shop.product.info.get";

export class ApiProduct extends APIAbstract {

    public list = list;
    public changeCategory = changeCategory;

    public getInfo = getInfo;

    constructor() {
        super();

    }
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ApiProduct {
}
