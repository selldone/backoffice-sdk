# Shop Pages And Builders

## Purpose

Pages manages landing pages, popups, static pages, and legal/information pages for the shop.

## Routes

| Path segment | Current route name | Purpose |
|---|---|---|
| `page/landings` | `BPageShopPagesLandings` | Landing page list. |
| `page/popups` | `BPageShopPagesPopups` | Popup list. |
| `page/static` | `BPageShopPagesStatic` | Static pages. |
| `page/about-us` | `BPageShopPagesAboutUs` | About us page. |
| `page/terms` | `BPageShopPagesTerms` | Terms page. |
| `page/privacy` | `BPageShopPagesPrivacy` | Privacy page. |
| `page/contact-us` | `BPageShopPagesContactUs` | Contact us page. |
| `pages/:page_id` | `BPageLandingEditor` | Full-screen page builder. |
| `popups/:popup_id` | `BPagePopup` | Full-screen popup builder. |
| `pages/:page_id/realtime` | `BPageLandingLive` | Live/realtime preview. |

## Required context

- `shop` from the shop shell.
- `PAGES` permission.
- Page builder edit mode for editor routes.
- Page/popup assets and publication state.

## Core operations

- List, create, edit, publish, unpublish, and delete landing/static pages.
- Open the full-screen page builder.
- Upload image/video assets for pages or menus.
- Manage popups and popup display rules.
- Render live preview.
- Edit legal pages such as terms, privacy, about, and contact.

## API calls

Use these endpoints directly for common page and popup operations:

| Operation | HTTP endpoint |
|---|---|
| List pages | `GET https://api.selldone.com/shops/{shop_id}/pages` |
| List popups | `GET https://api.selldone.com/shops/{shop_id}/popups` |
| Upload page image | `POST https://api.selldone.com/shops/{shop_id}/pages/{page_id}/upload/content-image` |
| Upload page video | `POST https://api.selldone.com/shops/{shop_id}/pages/{page_id}/upload/content-video` |
| Upload popup image | `POST https://api.selldone.com/shops/{shop_id}/popups/{popup_id}/upload/content-image` |

Additional page, popup, builder, and augment endpoints are listed in `_generated/api-url-builders.md`. See `_generated/api-usage-by-area.md` areas `shop/pages`, `landing`, `popup`, and `components/page`.

## UI behavior

- Builder routes must be full-screen and should not show the normal shop header/footer.
- Page lists should show published/draft status and public URL.
- Uploads need progress, validation, and file-type feedback.
- Live preview should be separated from editable state.
- Legal pages should make publication status and last update visible.
