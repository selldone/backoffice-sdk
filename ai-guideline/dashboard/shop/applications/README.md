# Shop Applications

## Purpose

Applications manages the shop's customer-facing app outputs: PWA, iOS, Android, and Metaverse. This section is mostly configuration, asset validation, and build/publishing workflow.

## Routes

| Path segment | Current route name | Purpose |
|---|---|---|
| `application/pwa` | `BPageShopApplicationsPwa` | PWA metadata, icons, and install behavior. |
| `application/ios` | `BPageShopApplicationsIos` | iOS app settings and build configuration. |
| `application/android` | `BPageShopApplicationsAndroid` | Android app settings and build configuration. |
| `application/metaverse` | `BPageShopApplicationsMetaverse` | Metaverse space, assets, and related settings. |

## Required context

- `shop` from the shop shell.
- `APPLICATIONS` permission.
- Shop icon, logo, theme, and app-specific asset requirements.

## Core operations

- Configure PWA metadata, icons, splash behavior, and install settings.
- Manage iOS and Android app configuration and required assets.
- Generate, download, or request app builds when supported by the backend.
- Configure Metaverse scene, assets, or widgets.

## API calls

- Application, PWA, Android, iOS, Metaverse, and asset-upload endpoints are listed in `_generated/api-url-builders.md` with full `https://api.selldone.com/...` URLs.
- See `_generated/api-usage-by-area.md` areas `shop/applications`, `application`, and `components/app`.
- Use `_generated/api-url-builders.md` to resolve exact app asset and app configuration endpoints.

## UI behavior

- Long-running build or generation actions must show asynchronous status.
- Asset inputs need preview, file-type validation, and dimension validation.
- Publishing should be presented as a checklist so missing assets/configuration are visible.
- App pages should reuse shop branding but keep platform-specific requirements separate.
