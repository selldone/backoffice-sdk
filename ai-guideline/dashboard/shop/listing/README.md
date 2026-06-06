# Shop Listing

## Purpose

Listing manages listing items, categories, supervision, templates, options, badges, companies, reviews, messages, and search. It is visible only for shops with listing capability.

## Routes

| Path segment | Current route name | Purpose |
|---|---|---|
| `listing/items` | `BPageShopListingItems` | Listing items. |
| `listing/categories` | `BPageShopListingCategories` | Listing categories. |
| `listing/supervision` | `BPageShopListingSupervision` | Supervision and moderation. |
| `listing/templates` | `BPageShopListingDesigns` | Templates and designs. |
| `listing/options` | `BPageShopListingOptions` | Listing options. |
| `listing/badges` | `BPageShopListingBadges` | Badges. |
| `listing/companies` | `BPageShopListingCompanies` | Companies. |
| `listing/reviews` | `BPageShopListingReviews` | Reviews. |
| `listing/messages` | `BPageShopListingMessages` | Messages. |
| `listing/search` | `BPageShopListingSearch` | Search settings. |

## Required context

- `shop` from the shop shell.
- `PRODUCTS` permission and listing capability.
- Listing-specific categories, templates, and moderation state.

## Core operations

- List and manage listing items.
- Manage listing categories, companies, and badges.
- Moderate reviews, supervision items, and messages.
- Configure search behavior, options, and templates.
- Preview or test listing search where supported.

## API calls

- Listing endpoints are listed in `_generated/api-url-builders.md` with full `https://api.selldone.com/...` URLs.
- See `_generated/api-usage-by-area.md` areas `shop/listing` and `components/listing`.
- See `_generated/api-url-builders.md` for exact listing-related endpoints.

## UI behavior

- Hide this section if the shop does not support listing.
- Supervision and reviews require a moderation workflow.
- Search settings should provide a preview or test query when possible.
- Listing item status should separate draft, published, rejected, and pending states.
