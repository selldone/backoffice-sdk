# Shop Channels

## Purpose

Channels manages the shop's external sales and integration channels: bots, Instagram, Google, Meta, Avocado, Hyper, Ribbon, Clover, Connect, Map, OpenAI, and Listing channel.

## Routes

| Path segment | Current route name | Purpose |
|---|---|---|
| `channels/bots` | `BPageShopChannelBots` | Bot integrations. |
| `channels/instagram` | `BPageShopChannelInstagram` | Instagram channel. |
| `channels/google` | `BPageShopChannelGoogle` | Google integrations. |
| `channels/meta` | `BPageShopChannelMeta` | Meta/Facebook integrations. |
| `channels/avocado` | `BPageShopChannelAvocado` | Avocado channel. |
| `channels/hyper` | `BPageShopChannelHyper` | Hyper channel. |
| `channels/ribbon` | `BPageShopChannelRibbon` | Ribbon channel. |
| `channels/onboard` | `BPageShopChannelClover` | Clover onboarding. |
| `channels/connect` | `BPageShopChannelConnect` | Connect integrations. |
| `channels/map` | `BPageShopChannelMap` | Location-based search and map configuration. |
| `channels/openai` | `BPageShopChannelOpenAI` | OpenAI sales agent configuration. |
| `channels/listing` | `BPageShopChannelListing` | Listing channel configuration. |

## Required context

- `shop` from the shop shell.
- `CHANNELS` permission.
- Channel-specific credentials, connection status, sync status, and configuration.

## Core operations

- Connect and disconnect channels.
- Save channel settings.
- View sync logs, validation errors, or connection errors.
- Map products and categories to a channel when the channel requires it.
- Generate or copy feed/RSS URLs for merchant integrations.
- Configure OpenAI or sales-agent behavior when enabled.

## API calls

- Channel, Connect, Instagram, Google, Meta, Map, and OpenAI endpoints are listed in `_generated/api-url-builders.md` with full `https://api.selldone.com/...` URLs.
- Map tags are listed by `GET https://api.selldone.com/shops/{shop_id}/map/tags`.
- See `_generated/api-usage-by-area.md` areas `shop/channels`, `connect`, `map`, `components/connect`, and `components/google`.

## UI behavior

- Every channel needs a status card: connected, error, pending, or disabled.
- Credential flows should be step-based and must send secrets only to the backend.
- Sync logs need filtering and retry when supported.
- Feed URLs must be copyable.
- Product/category mapping UI should show unmapped, mapped, and failed items separately.
