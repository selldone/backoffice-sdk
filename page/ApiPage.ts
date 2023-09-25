import { APIAbstract } from "../../../core/server/APIAbstract";
import getPageAugment from "./requests/api.page.augment.get";

export class ApiPage extends APIAbstract {

  public getPageAugment = getPageAugment;

  constructor() {
    super();
  }
} //█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ApiPage {}
