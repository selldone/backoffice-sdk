/*
 * Copyright (c) 2023-2024. Selldone® Business OS™
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

import {APIAbstract} from "@selldone/core-js/server/APIAbstract";

import apiProductImporterPost from "@sdk-backoffice/product/importer/requests/api.product.importer.post";
import apiProductImporterInfoGet from "@sdk-backoffice/product/importer/requests/api.product.importer.info.get";
import {ApiProductImporterQue} from "@sdk-backoffice/product/importer/que/ApiProductImporterQue";

export class ApiProductImporter extends APIAbstract {
  public send = apiProductImporterPost;
  public info = apiProductImporterInfoGet;
  public que = new ApiProductImporterQue();

  constructor() {
    super();
  }
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ApiProductImporter {}
