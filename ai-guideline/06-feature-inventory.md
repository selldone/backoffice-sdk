# Full Feature Inventory (Backoffice Coverage Map)

This inventory is derived from:

- `src/Applications/Backoffice/pages`
- `src/Applications/Selldone/router/shuttle/**`
- `_generated/route-index.md`
- `_generated/source-module-index.md`

Use this file as the no-skip checklist for full-function dashboard delivery.
Use `07-module-implementation-matrix.md` immediately after this file to map every module to route placement, permission region, source directory, API usage areas, and core full endpoints.

## A) User Dashboard (`/shuttle`)

- Shops
- Vendors
- Roles
- Wallet: accounts, received gifts, send gifts, subscriptions
- Identity/KYC: profile, kyc
- Company
- Security
- Affiliate
- Expert
- Deals
- More

## B) Shop Admin Shell (`/shuttle/shop/:shop_id`)

### 1) Dashboard
- Main dashboard
- Live dashboard (sessions/activity)

### 2) Products
- Product list
- Product folder/category navigation (`dir`)
- Importer
- Exporter
- Products queue
- Images queue

### 3) Product Entity (`/product/:product_id`)
- Dashboard
- Edit
- Inventory
- Orders
- Article/content
- 3D
- Hyper
- Subscription
- Membership
- Vendors
- Embed
- Cross-selling
- Template
- Dropshipping

### 4) Orders / Process Center
- Physical
- Virtual
- File
- Service
- Subscription
- POS
- Hyper
- Avocado
- Dropshipping
- Per-order detail pages: dashboard, form/inputs, track, timeline, chat, return/bills (type-dependent)

### 5) Finance
- Report
- Gateway
- Tax
- Bill
- Exchange
- Valuations
- Customer wallets
- Reseller wallets
- Reseller fulfillment
- Ribbon

### 6) Incentives
- Discount code
- Coupon
- Gift card
- Offer
- Cashback
- Lottery

### 7) Logistic
- Inventory
- Warehouse
- Shipping
- Returns
- Profiles
- Includes
- Property set
- Boxes
- Print

### 8) CRM
- Customers
- Chat
- Club
- Comments
- Community
- FAQ
- Report
- Reviews

### 9) Community
- Categories
- Topics
- Posts
- Comments

### 10) Classification
- Categories
- Clusters
- Hierarchy
- Import
- Exporter

### 11) Channels
- Connect
- Google
- Instagram
- Meta
- OpenAI
- Bots
- Ribbon
- Listing
- Clover
- Avocado
- Hyper
- Map

### 12) Marketing
- Campaign
- Affiliate
- Email
- Funnels
- Stream

### 13) Pages
- Landings
- Popups
- Static
- About us
- Contact us
- Privacy
- Terms

### 14) Access / Permission
- Personnel
- Roles
- API clients

### 15) Applications
- PWA
- iOS
- Android
- Metaverse

### 16) Automation
- Webhook
- Logging
- Notifications
- Autopilot
- Niomatic

### 17) Settings
- Info
- Domain
- Notifications
- Languages
- SEO
- Theme
- Email
- SMS
- Menus
- Access
- Advanced
- Business model
- Critical zone
- Flow
- License
- Locations
- Quota

### 18) Listing
- Items
- Categories
- Companies
- Badges
- Designs
- Messages
- Options
- Reviews
- Search
- Supervision

### 19) Marketplace
- Dashboard
- Vendors
- Products
- Orders (physical/virtual/file/service)
- Accounts
- Payouts
- Pricing
- Requests
- Setting

### 20) Dropshipping
- Wholesaler dashboard
- Wholesaler shops
- Wholesaler orders
- Wholesaler requests
- Wholesaler inventory
- Wholesaler-shop dashboard/orders/wallet

### 21) POS
- Panel
- Orders
- Customers
- Inventory
- Devices
- Product card/list
- Customer view

### 22) Transportation
- Transportation dashboard
- Couriers
- Orders
- Pickups
- Services
- Setting
- Transportation-service: dashboard/edit/orders

## C) Other Routed Business Entities

- Affiliate entity: dashboard, orders, payments, edit
- Campaign entity: dashboard, finance, ads, landing, setting, links
- Cashback entity: dashboard, orders, edit
- Connect entity: dashboard, orders by type, products, logs, setting
- Coupon entity: dashboard, orders, edit
- Discount-code entity: dashboard, orders, edit
- Gift-card entity: dashboard, cards/list, orders, edit
- Gateway entity: dashboard, transactions, edit
- Logistic-profile entity: dashboard, products, setting
- Review entity: dashboard/edit
- Account entity: cards, deposit, transfer, history, transactions, shops, edit
- Provider routes

## D) API Completeness Rule

For every module above:

1. Discover used API builders from `_generated/api-usage-by-area.md`.
2. Resolve each to full URL and method in `_generated/api-url-builders.md`.
3. Implement using the resolved full endpoints only.

Do not create generic fallback endpoints. If an exact full endpoint is missing from the generated catalog, record the feature as an API documentation gap until the endpoint is verified.

