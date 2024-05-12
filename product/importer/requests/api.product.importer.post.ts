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

import { ApiProductImporter } from "../ApiProductImporter.ts";
import IProduct = api.product.importer.post.IProduct;
import IHeader = api.product.importer.post.IHeader;

export default function apiProductImporterPost(
  this: ApiProductImporter,
  shop_id: number,
  dataset: (IHeader | IProduct)[],
) {
  // Check if the first row of the dataset is an IHeader (array of strings)
  if (
    !Array.isArray(dataset[0]) ||
    !dataset[0].every((item) => typeof item === "string")
  ) {
    throw new Error(
      "The first row of the dataset must be an array of strings representing headers",
    );
  }

  const params = { dataset: dataset };
  const url = window.API.POST_IMPORT_PRODUCTS(shop_id);
  return this.postNow<api.product.importer.post.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace api.product.importer.post {
  /**
   * IResponse represents the structure of the response returned by the importProductsTask.
   * @property {boolean} success - Indicates if the import was overall successful.
   * @property {number} success_count - The count of successfully processed products.
   * @property {number} fail_count - The count of products that failed during processing.
   * @property {string[]} errors - Array of error messages for each failed product.
   */
  export interface IResponse {
    success: boolean;
    success_count: number;
    fail_count: number;
    errors: string[];
  }

  /**
   * Header represents the structure of the dataset's header (first row),
   * containing keys for each column.
   */
  export interface IHeader {
    [key: string]: string; // Example: "Product ID", "Title", "Price", etc.
  }

  export interface IProduct {
    "Product ID"?: number;
    "Variant ID"?: number;
    Title: string;
    "Title En"?: string;
    Type: string;
    Price: number;
    Currency: string;
    Commission?: number;
    Discount?: number;
    "Discount Start Date"?: string;
    "Discount End Date"?: string;
    Status: string;
    Quantity: number;
    SKU?: string;
    MPN?: string;
    GTIN?: string;
    GPC?: string;
    Condition?: string;
    Brand?: string;
    Warranty?: string;
    Spec?: string;
    "Spec Order"?: string[];
    Pros?: string[];
    Cons?: string[];
    Image?: string;
    Outputs?: string;
    Inputs?: string;
    "Content Title"?: string;
    "Content Body (Html)"?: string;
    "Content Description"?: string;
    "Content Image"?: string;
    "Content FAQ"?: string;
    "Content Structure Data"?: string;
    Category?: string;
    "Lead Time"?: string;
    Extra?: string;
    "Image Contain"?: boolean;
    "Return Warranty"?: number;
    Original?: boolean;
    Slug?: string;
    Images?: string[];
    V_Color?: string;
    V_Style?: string;
    V_Volume?: string;
    V_Weight?: string;
    V_Pack?: string;
    V_Type?: string;
    "Limit Min"?: number;
    "Limit Max"?: number;
    // Extra pricing fields
    "Qty 1"?: number;
    "Price 1"?: number;
    "Qty 2"?: number;
    "Price 2"?: number;
    "Qty 3"?: number;
    "Price 3"?: number;
    "Qty 4"?: number;
    "Price 4"?: number;
    "Qty 5"?: number;
    "Price 5"?: number;
    "Qty 6"?: number;
    "Price 6"?: number;
    "Qty 7"?: number;
    "Price 7"?: number;
    "Qty 8"?: number;
    "Price 8"?: number;
    "Qty 9"?: number;
    "Price 9"?: number;
    "Qty 10"?: number;
    "Price 10"?: number;
  }
}
