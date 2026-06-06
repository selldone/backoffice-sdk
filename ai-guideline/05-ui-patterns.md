# UI Patterns

## Shell Pattern

Every shell should include:

- A route outlet for child pages.
- Loading state while required context is not ready.
- Forbidden/no-access state when permissions are insufficient.
- Footer or summary bar for time span and data refresh.
- Shared notification and error surfaces.

## Shop Navigation Pattern

Main shop navigation should be filtered by permission regions. Important sections:

- Dashboard
- Products
- Blog
- Process Center
- Channels
- Finance
- Incentives
- Marketing
- Logistic
- CRM
- Community
- Classification
- Pages
- Access
- Applications
- Automation
- Settings
- Listing
- Marketplace
- Dropshipping
- POS

## List Pattern

For lists:

- Debounce search.
- Keep server-side pagination through `offset` and `limit`.
- Keep filters in URL or shareable state.
- Show partial loading for tables or window lists.
- Separate empty state from error state.
- Confirm destructive actions.

## Folder/Window Pattern

Products Manager is the reference implementation:

- Folders appear before products.
- Clicking a folder changes the `dir` route query.
- The back button is derived from the parent folder.
- Breadcrumbs are built from `parent` or `parent_folders`.
- Drag/drop moves products or categories into folders.
- A holder/top-drop area supports cut/move flows for multiple items.
- Clone/copy product actions keep the source product in state.

## Dialog Pattern

Most create/edit flows use fullscreen dialogs or bottom sheets. For a custom app:

- Implement create/edit product and category as modal flows or route subpages.
- Use bottom sheets or side panels for assign vendor, bulk status, and bulk inventory.
- Run destructive actions through a separate confirmation step.
- After success, update the local item or refresh the list.

## Bulk Action Pattern

Bulk actions should include:

- Selected item IDs.
- Operation-specific payload such as vendor ID, pricing ID, quantity, or status.
- Clear/replace flags for operations such as vendor assignment.
- Confirmation before sending.

## Upload Pattern

Uploads need progress, cancellation, and error display. Current Backoffice has a global upload keeper. Use the full upload endpoints listed in `_generated/api-url-builders.md`; common examples include `POST https://api.selldone.com/shops/{shop_id}/products/{product_id}/edit/upload/cover` and `POST https://api.selldone.com/shops/{shop_id}/pages/{page_id}/upload/content-image`.

## Special Search Chips

Products Manager can return `tax_profile`, `valuation`, or `time_filter` for special searches. Show these as chips/context above the list so users understand the search is not only plain text.
