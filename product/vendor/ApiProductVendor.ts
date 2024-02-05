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

import apiProductVariantRemove from "@sdk-backoffice/product/variant/requests/api.product.variant.remove";
import apiProductVariantRestorePost from "@sdk-backoffice/product/variant/requests/api.product.variant.restore.post";
import {APIAbstract} from "@core/server/APIAbstract";
import apiProductVendorsListGet from "@sdk-backoffice/product/vendor/requests/api.product.vendors.list.get";

export class ApiProductVendor extends APIAbstract {
  public list = apiProductVendorsListGet;

  constructor() {
    super();
  }
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ApiProductVariant {}
