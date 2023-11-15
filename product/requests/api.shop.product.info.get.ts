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

import type { ApiProduct } from "../ApiProduct";
import type { Product } from "../../../../core/models/shop/product/product.model";
import { Category } from "../../../../core/models/shop/category/category.model";
import type { ProductVariant } from "../../../../core/models/shop/product/product_variant.model";
import type { Shop } from "../../../../core/models/shop/shop.model";
import { Vendor } from "../../../../core/models/shop/vendor/vendor.model";
import type { SubscriptionPrice } from "../../../../core/models/shop/product/subscription_price.model";
import type { Valuation } from "../../../../core/models/shop/accounting/valuation/valuation.model";
import type { MapTag } from "../../../../core/models/shop/map/map-tag.model";
import type { Connect } from "../../../../core/models/connect/connect.model";
import type { ExtraPricing } from "../../../../core/models/shop/extra-pricing/extra-pricing.model";
import type { ShopInclude } from "../../../../core/models/shop/shop-include/shop-include.model";
import type { Page } from "../../../../core/models/shop/page/page.model";
import type { Article } from "../../../../core/models/article/article.model";
import type { ProductRating } from "../../../../core/models/shop/product/product-rating.model";
import type { ProductFile } from "../../../../core/models/shop/product/product-file.model";
import type { ProductImage } from "../../../../core/models/shop/product/product-image.model";
import type { ProductData } from "../../../../core/models/shop/product/product-data.model";
import { DeliveryStateCode } from "../../../../core/enums/delivery/DeliveryStateCode";
import type { OrderTypeCode } from "../../../../core/models/shop/order/order-type.model";

export default function getInfo(
  this: ApiProduct,
  shop_id: number,
  product_id: number,
  offset: number,
  limit: number,
  options?: api.shop.product.info.get.IParams
) {
  const params = { offset: offset, limit: limit, ...options };
  const url = window.API.GET_PRODUCT_INFO_ADMIN(shop_id, product_id);
  return this.getNow<api.shop.product.info.get.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.shop.product.info.get {
  export interface IResponse {
    product: Product & {
      product_variants: ProductVariant[];
      shop: Pick<Shop, "id" | "name">;
      parent:
        | (Product & {
            shop: Pick<Shop, "id" | "title" | "name" | "description" | "icon">;
          })
        | null /*Dropshipping main product*/;
      vendor?: Pick<
        Vendor,
        | "id"
        | "name"
        | "description"
        | "icon"
        | "enable"
        | "status"
        | "email"
        | "address"
        | "web"
        | "tel"
        | "payment_at"
      > | null; // Marketplace > Add vendor info
      connect: Pick<
        Connect,
        "id" | "code" | "name" | "description" | "icon" | "enable"
      > | null; //🦠 Connect info
      subscription_prices: SubscriptionPrice[]; // 🎗️ Subscription
      valuation: Valuation; // Valuation (Custom pricing)
      map: MapTag;
      // 🌸 Extra pricing 🌸 [Vary pricing by quantity]
      extra_pricings: ExtraPricing[];
      includes: ShopInclude[];
      page: Pick<
        Page,
        "id" | "user_id" | "published" | "title" | "image" | "name" | "color"
      > | null;
      category: Pick<
        Category,
        "id" | "title" | "name" | "description" | "parent_id" | "icon"
      > & {
        parent: Pick<
          Category,
          "id" | "title" | "name" | "description" | "parent_id" | "icon"
        > | null;
      };
      images: ProductImage[];
      ratings: Pick<ProductRating, "id" | "name" | "value" | "count">[];
      files?: Pick<
        ProductFile,
        | "id"
        | "product_id"
        | "sample"
        | "name"
        | "size"
        | "uploading"
        | "downloads"
        | "download_at"
        | "created_at"
      >[]; // Only load files for file products! Subscription may have thousands files for contents.
      articles: (Article & { can_edit: boolean; tags: string[] })[];

      //  🎗️ Only Subscription
      linked_products: (Pick<
        Product,
        "id" | "shop_id" | "title" | "icon" | "sku" | "mpn" | "type"
      > & {
        product_variants: Pick<
          ProductVariant,
          | "id"
          | "product_id"
          | "image"
          | "color"
          | "style"
          | "volume"
          | "weight"
          | "pack"
          | "type"
          | "sku"
          | "mpn"
        >[];
      })[];
      subscribers_count: number;
    };
    product_data: ProductData[];
    orderQue: {
      delivery_state: DeliveryStateCode;
      count: number;
      type: OrderTypeCode;
    }[];
  }

  export interface IParams {
    with_trashed: boolean;
  }
}
