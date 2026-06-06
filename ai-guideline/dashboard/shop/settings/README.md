# Shop Settings

## Purpose

Settings, also routed under `edit`, manages basic and advanced shop configuration: info, flow, business model, license, menu, critical zone, SEO, GDPR, quota, advanced options, notifications, locations, languages, theme, SMS, email, and domains.

## Routes

| Path segment | Current route name | Purpose |
|---|---|---|
| `edit/info` | `BPageShopSettingInfo` | Main shop information. |
| `edit/flow` | `BPageShopSettingFlow` | Configuration and flow. |
| `edit/business-model` | `BPageShopSettingBusinessModel` | Business model. |
| `edit/license` | `BPageShopSettingLicense` | License management. |
| `edit/menu` | `BPageShopSettingMenus` | Menu, header, and footer structure. |
| `edit/critical-zone` | `BPageShopSettingCriticalZone` | Delete, transfer, and other critical actions. |
| `edit/seo` | `BPageShopSettingSeo` | SEO settings. |
| `edit/gdpr` | `BPageShopSettingAccess` | GDPR and privacy access. |
| `edit/quota` | `BPageShopSettingQuota` | Quota. |
| `edit/advanced` | `BPageShopSettingAdvance` | Advanced options. |
| `edit/notifications` | `BPageShopSettingNotifications` | Notifications. |
| `edit/locations` | `BPageShopSettingLocations` | Locations. |
| `edit/languages` | `BPageShopSettingLanguages` | Languages. |
| `edit/theme` | `BPageShopSettingTheme` | Theme. |
| `edit/sms` | `BPageShopSettingSms` | SMS service. |
| `edit/emails` | `BPageShopSettingEmail` | Email service. |
| `edit/domains` | `BPageShopSettingDomain` | Domains. |

## Required context

- `shop` from the shop shell.
- `SETTINGS` permission.
- Critical zone usually requires owner-level access.
- Domain, theme, language, notification, and service-provider state for related subpages.

## Core operations

- Edit shop info, title, name, icon, logo, and currencies.
- Edit support mode, checkout flow, and business model.
- Manage license and quota.
- Configure menus and theme.
- Configure SEO, languages, and locations.
- Configure notification channels, SMS provider, and email provider.
- Manage domains and DNS verification.
- Run critical actions such as delete shop, transfer ownership, or temporary access.

## API calls

Use these endpoints directly for common settings operations:

| Operation | HTTP endpoint |
|---|---|
| Edit shop | `PUT https://api.selldone.com/shops/{shop_id}/edit` |
| Edit shop info | `PUT https://api.selldone.com/shops/{shop_id}/edit/info` |
| Upload shop icon | `POST https://api.selldone.com/shops/{shop_id}/upload/icon` |
| Upload fav icon | `POST https://api.selldone.com/shops/{shop_id}/upload/fav` |
| Upload logo | `POST https://api.selldone.com/shops/{shop_id}/upload/logo` |
| Set currencies | `POST https://api.selldone.com/shops/{shop_id}/currencies` |
| Transfer ownership | `POST https://api.selldone.com/shops/{shop_id}/ownership` |
| Check transfer time | `POST https://api.selldone.com/shops/{shop_id}/ownership/check-time` |
| Check transfer user | `POST https://api.selldone.com/shops/{shop_id}/ownership/check-user` |
| Create temporary access | `POST https://api.selldone.com/shops/{shop_id}/temporary-access` |
| Set restriction | `PUT https://api.selldone.com/shops/{shop_id}/restriction` |
| Delete shop | `DELETE https://api.selldone.com/shops/{shop_id}/delete` |

- Domain, SEO, SMS, email, language, location, menu, theme, and notification endpoints are listed in `_generated/api-url-builders.md` with full `https://api.selldone.com/...` URLs.
- See `_generated/api-usage-by-area.md` areas `shop/setting`, `components/domain`, `components/language`, and `components/google`.
- See `_generated/api-url-builders.md` for exact settings-related endpoints.

## UI behavior

- Separate critical zone from normal settings and require multi-step confirmation.
- Domain verification must show DNS records, verification status, retry/check action, and error details.
- Logo/icon changes need upload progress and preview.
- Business model changes can enable or disable modules, so refresh navigation after updates.
- Provider configuration pages should distinguish saved state from test/send state.
