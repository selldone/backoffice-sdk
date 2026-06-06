# Shop Community

## Purpose

Community manages the shop's community space: categories, topics, comments, and posts. It is only visible when community capability is enabled for the shop.

## Routes

| Path segment | Current route name | Purpose |
|---|---|---|
| `community/categories` | `BPageShopCommunityCategories` | Community category management. |
| `community/topics` | `BPageShopCommunityTopics` | Topic list and topic management. |
| `community/comments` | `BPageShopCommunityComments` | Comment moderation. |
| `community/posts` | `BPageShopCommunityPosts` | Post list and moderation. |

## Required context

- `shop.community.enable` must be `true` for the section to be available.
- `COMMUNITY` permission.
- Moderator/admin visibility for hidden, flagged, or deleted content.

## Core operations

- List, create, and edit community categories.
- List, create, and edit topics.
- Moderate comments and posts.
- Show deleted, hidden, or flagged content for admin/moderator users.
- Link to public community pages.

## API calls

- Community endpoints are listed in `_generated/api-url-builders.md` with full `https://api.selldone.com/...` URLs.
- See `_generated/api-usage-by-area.md` areas `shop/community` and `components/community` for source-level usage.
- See `_generated/api-url-builders.md` for exact community-related endpoints.

## UI behavior

- If community is not enabled, show a setup/enable call to action or hide the navigation item.
- Moderation actions must show status, reason, and undo/restore when supported.
- Waiting or flagged counts should appear as navigation badges.
- Public-page links should open the customer-facing community route, not the admin route.
