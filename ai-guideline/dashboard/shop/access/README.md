# Shop Access And Permissions

## Purpose

Access manages the shop's staff, roles, and API clients. This area is security-sensitive: every UI must make permissions, ownership, and destructive actions explicit.

## Routes

| Path segment | Current route name | Purpose |
|---|---|---|
| `access/staff` | `BPageShopPermissionStaff` | Staff and personnel management. |
| `access/role` | `BPageShopPermissionRoles` | Role definitions and permission matrices. |
| `access/api` | `BPageShopPermissionApi` | API clients, tokens, and scopes. |

## Required context

- `shop` from the shop shell.
- `ACCESS` or `SETTINGS` permission depending on the route metadata and source page.
- Owner-level or write access for sensitive changes such as removing staff, changing scopes, or revoking API clients.

## Core operations

- Invite, add, edit, and remove staff members.
- Assign permission levels to staff.
- Override read/write access by dashboard region.
- Manage API clients and scopes.
- Revoke tokens and clients.

## API calls

- Staff, role, permission, and API-client endpoints are listed in `_generated/api-url-builders.md` with full `https://api.selldone.com/...` URLs.
- See `_generated/api-usage-by-area.md` areas `shop/permission`, `role`, `components/role`, and `components/api` for source-level API usage.
- See `_generated/api-url-builders.md` for exact permission, role, staff, and API-client endpoints.

## UI behavior

- Show a permission matrix with clear read/write overrides.
- Require confirmation for destructive actions such as revoke and remove.
- Never show API tokens in plain text after creation unless the backend response explicitly returns them for that one-time display.
- Highlight the difference between staff permissions and API-client scopes.
