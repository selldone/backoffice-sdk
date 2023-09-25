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






import type {ApiArticleTag} from "../ApiArticleTag";

export default function setArticleTags(
  this: ApiArticleTag,
  shop_id: string | number,
  article_id: string | number,
  tags:string[]|null
){
  const url = window.API.POST_SET_SHOP_ARTICLE_TAGS(shop_id,article_id);
const params={tags:tags}
  return this.postNow<api.article.tags.post.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.article.tags.post {
  export interface IResponse {
    tags:string[]
  }


}
