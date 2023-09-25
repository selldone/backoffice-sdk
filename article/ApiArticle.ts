import { APIAbstract } from "../../../core/server/APIAbstract";
import {ApiArticleTag} from "./tag/ApiArticleTag";

export class ApiArticle extends APIAbstract {

  constructor() {
    super();
  }

  public tags = new ApiArticleTag();


}
//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ApiArticle {}
