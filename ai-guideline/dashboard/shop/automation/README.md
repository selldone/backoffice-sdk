# Shop Automation

## Purpose

Automation covers webhooks, automation logs, notifications, Autopilot, and Niomatic. This section connects shop events to external systems and internal automation workflows.

## Routes

| Path segment | Current route name | Purpose |
|---|---|---|
| `automation/webhook` | `BShopAutomationWebhook` | Webhook endpoints and event subscriptions. |
| `automation/logging` | `BShopAutomationLogging` | Automation delivery and execution logs. |
| `automation/notifications` | `BShopAutomationNotifications` | Notification automation. |
| `automation/autopilot` | `ShopAutomation_Autopilot` | Autopilot automation settings. |
| `automation/niomatic` | `ShopAutomation_Niomatic` | Niomatic automation settings. |

## Required context

- `shop` from the shop shell.
- `AUTOMATION` permission.
- Event catalog, webhook endpoint configuration, and automation status/configuration.

## Core operations

- Create, edit, and delete webhooks.
- Select webhook events and configure endpoint secrets or headers.
- Test webhook delivery.
- View logs and inspect failed deliveries.
- Retry failed delivery when the backend supports it.
- Configure automation notifications.
- Manage Autopilot and Niomatic settings.

## API calls

- Webhook, automation logging, notification, Autopilot, and Niomatic endpoints are listed in `_generated/api-url-builders.md` with full `https://api.selldone.com/...` URLs.
- See `_generated/api-usage-by-area.md` areas `shop/automation`, `components/webhook`, and `components/notification`.
- See `_generated/api-url-builders.md` for exact webhook and notification endpoints.

## UI behavior

- Mask webhook secrets by default.
- Test delivery should display summarized response status and body.
- Logs need filters by event, status, and date.
- Active automations need a clear disable or kill-switch action.
- Failed jobs should show enough data to debug without exposing secrets.
