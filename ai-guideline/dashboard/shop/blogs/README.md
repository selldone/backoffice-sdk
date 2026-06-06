# Shop Blogs

## Purpose

Blogs manages shop blog content: post list, timeline, categories, creation, and editing. It should behave like a content management area with draft/publish lifecycle and media support.

## Routes

| Path segment | Current route name | Purpose |
|---|---|---|
| `blog/list` | `BPageShopBlogsList` | Blog post list. |
| `blog/timeline` | `BPageShopBlogsTimeline` | Blog timeline or scheduling view. |
| `blog/categories` | `BPageShopBlogsCategories` | Blog category management. |
| `blog/new` | `BPageShopBlogsAdd` | Create a new blog post. |
| `blog/edit/:blog_id` | `BPageShopBlogsEdit` | Edit an existing blog post. |

## Required context

- `shop` from the shop shell.
- `BLOG` permission.
- Blog/article editor capability and media-upload capability.

## Core operations

- List and search blog posts.
- Create, edit, publish, unpublish, and delete blog posts.
- Manage blog categories.
- Manage timeline or scheduling behavior when enabled.
- Upload media inside the editor.
- Open public URL or preview URL for a blog post.

## API calls

Use these endpoints directly:

| Operation | HTTP endpoint |
|---|---|
| List blog posts | `GET https://api.selldone.com/shops/{shop_id}/blogs` |
| List blog categories | `GET https://api.selldone.com/shops/{shop_id}/blog/categories` |
| Add blog category | `POST https://api.selldone.com/shops/{shop_id}/blog/categories` |
| Edit blog category | `PUT https://api.selldone.com/shops/{shop_id}/blog/categories/{category_id}` |
| Delete blog category | `DELETE https://api.selldone.com/shops/{shop_id}/blog/categories/{category_id}` |

See `_generated/api-usage-by-area.md` areas `shop/blogs`, `blog`, and `components/blog` for source-level usage.

## UI behavior

- The editor must clearly show draft, published, and scheduled states.
- Category management can be inline or modal, but add/edit/delete states must be explicit.
- Blog list rows should expose public URL, preview, category, author, date, and status.
- Media uploads need progress, validation, and recoverable errors.
