# Shop CRM

## Purpose

CRM manages customers, conversations, FAQ, club/loyalty, comments, reviews, and community-facing interactions.

## Routes

| Path segment | Current route name | Purpose |
|---|---|---|
| `crm/report` | `BPageShopCrmReport` | CRM reporting. |
| `crm/faq` | `BPageShopCrmFaq` | FAQ management. |
| `crm/chat` | `BPageShopCrmChat` | Chat and contact conversations. |
| `crm/club` | `BPageShopCrmClub` | Club and loyalty. |
| `crm/community` | `BPageShopCrmCommunity` | Community bridge. |
| `crm/comments` | `BPageShopCrmComments` | Comment moderation. |
| `crm/reviews` | `BPageShopCrmReviews` | Product and shop reviews. |
| `crm/customers` | `BPageShopCrmCustomers` | Customer list. |

## Required context

- `shop` from the shop shell.
- `CUSTOMERS` permission.
- Customer data, wallet, orders, addresses, and activity for detail pages.

## Core operations

- List, search, and filter customers.
- Open customer dashboard, orders, wallet, activity, and edit views.
- Manage conversations and contact messages.
- Moderate comments and reviews.
- Manage club/loyalty settings and customer segments.
- Import customer lists when supported.

## API calls

- Customer, contact, comment, review, FAQ, and club endpoints are listed in `_generated/api-url-builders.md` with full `https://api.selldone.com/...` URLs.
- See `_generated/api-usage-by-area.md` areas `shop/crm`, `customer`, `review`, `components/customer`, and `components/contact`.
- See `_generated/api-url-builders.md` for exact CRM-related endpoints.

## UI behavior

- Customer profile must link orders, wallet, addresses, and activity.
- Unread and waiting counts should appear as navigation badges.
- Moderation actions must include reason/status when the backend supports it.
- Customer edit forms need validation for email, mobile, and address fields.
- Sensitive customer data should not be loaded into unrelated UI sections.
