# Integrations Cross-Modules

This folder documents integrations that appear in multiple dashboard areas: channels, connect, applications, automation, page builder, and OpenAI.

## Shared Integration Rules

- Every integration should expose status, credentials, last sync, and error state.
- Secrets must not be shown in plain text unless the backend contract explicitly returns them at creation time.
- Every sync/action should support retry and logs.
- Feeds and public URLs should be copyable.
- Asset uploads should include validation and progress.

## References

- Channels: `dashboard/shop/channels/README.md`
- Applications: `dashboard/shop/applications/README.md`
- Automation: `dashboard/shop/automation/README.md`
- Pages/builders: `dashboard/shop/pages/README.md`
