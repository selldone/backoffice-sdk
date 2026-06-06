# Shop Incentives

## Purpose

Incentives manages sales and promotion tools: gift cards, discount codes, coupons, offers, lotteries, and cashback programs.

## Routes

| Path segment | Current route name | Purpose |
|---|---|---|
| `incentives/gift-card` | `BPageShopIncentivesGiftcard` | Gift card campaigns, types, and cards. |
| `incentives/discount` | `BPageShopIncentivesDiscountCode` | Discount codes. |
| `incentives/coupon` | `BPageShopIncentivesCoupon` | Coupons. |
| `incentives/offer` | `BPageShopIncentivesOffer` | Offers. |
| `incentives/lottery` | `BPageShopIncentivesLottery` | Wheel or lottery campaigns. |
| `incentives/cashback` | `BPageShopIncentivesCashback` | Cashback programs. |

## Required context

- `shop` from the shop shell.
- `INCENTIVES` permission.
- Product, category, customer, and segment filters for campaign eligibility.

## Core operations

- List, create, edit, and delete promotion objects.
- View orders related to a coupon, discount, offer, gift card, or cashback campaign.
- Activate or deactivate campaigns.
- Export or generate codes/cards when supported.
- Use AI assistance for generating discount/coupon text or rules in supported components.

## API calls

- Gift card, discount-code, coupon, offer, lottery, and cashback endpoints are listed in `_generated/api-url-builders.md` with full `https://api.selldone.com/...` URLs.
- See `_generated/api-usage-by-area.md` areas `giftcard`, `discount-code`, `coupon`, `offer`, `cashback`, `components/giftcard`, `components/discount-code`, and `components/coupon`.
- See `_generated/api-url-builders.md` for exact incentive-related endpoints.

## UI behavior

- Every incentive must show status, usage count, expiry, and eligibility rules.
- Forms need validation for date range, budget, percent/fixed amount, and target products/customers.
- Orders tabs should link to Process Center or order detail.
- Campaign activation should warn if eligibility rules would match no customers or no products.
