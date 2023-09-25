import {APIAbstract} from "../../../../core/server/APIAbstract";
import setArticleTags from "./requests/api.article.tags.post";
import updateTag from "./requests/api.article.tags.put";
import getTags from "./requests/api.article.tags.get";

export class ApiArticleTag extends APIAbstract {


  constructor() {
    super();
  }


  public setArticleTags = setArticleTags;
  public updateTag = updateTag;
  public getTags = getTags;



}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ApiArticleTag {}
