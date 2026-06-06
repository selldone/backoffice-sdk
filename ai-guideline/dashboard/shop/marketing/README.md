# Shop Marketing

## Purpose

Marketing covers campaigns, funnels, marketing stream/events, affiliate programs, and email marketing.

## Routes

| Path segment | Current route name | Purpose |
|---|---|---|
| `marketing/campaign` | `BPageShopMarketingCampaign` | Campaign management. |
| `marketing/funnels` | `BPageShopMarketingFunnel` | Funnels. |
| `marketing/stream` | `BPageShopMarketingStream` | Marketing stream and events. |
| `marketing/affiliate` | `BPageShopMarketingAffiliate` | Affiliate programs. |
| `marketing/email` | `BPageShopMarketingEmail` | Email marketing. |

## Required context

- `shop` from the shop shell.
- `MARKETING` permission.
- Customer segments, products, pages, and campaign assets for targeting.

## Core operations

- Create, edit, pause, resume, and end campaigns.
- Manage campaign landing pages, ads, links, finance, and settings.
- Build, save, send, or schedule email campaigns.
- Configure affiliate program settings, orders, and payments.
- Review funnel and stream analytics.

## API calls

- Campaign, email-marketing, affiliate, referral, and landing endpoints are listed in `_generated/api-url-builders.md` with full `https://api.selldone.com/...` URLs.
- See `_generated/api-usage-by-area.md` areas `shop/marketing`, `campaign`, `email-marketing`, `affiliate`, `components/email-marketing`, and `components/affiliate`.
- See `_generated/api-url-builders.md` for exact marketing-related endpoints.

## UI behavior

- Campaigns need a clear lifecycle: draft, active, paused, ended.
- Email editor must support autosave and recoverable error handling.
- Links and landing tracking should route to the page builder or live preview.
- Campaign finance and budget data should stay synchronized with Finance data.
- Analytics views should preserve selected date range in URL or shareable state.
