
# Selldone Custom Dashboard AI Agent Guideline

**Purpose:**  
This guideline is designed for an AI agent to fully understand and construct a custom, fully functional Selldone dashboard. The agent must be able to generate a dashboard that includes all essential business features, customizable UI components, and fully integrated API endpoints, independent of any specific frontend framework.

**Target Folder:**  
`@selldone/sdk-backoffice/ai-guideline/`

**Scope:**  
The agent must be able to:

1. Understand the structure and functionality of Selldone dashboards.
2. Identify all features and modules available in Selldone.
3. Call relevant API endpoints with correct structure to retrieve, create, update, or delete data.
4. Build a dashboard with customizable layout, light/dark mode, widgets, and section-based content.
5. Prioritize business-critical functions, while hiding or minimizing non-essential sections.

---

## 1. Entry Point for Agent

**Objective:** Identify all available modules, features, and data required for the dashboard.

**Steps:**

1. Load dashboard metadata from `src/Applications/Backoffice` to understand:
   - Modules (Orders, Products, Customers, Analytics, Marketing, Settings, etc.)
   - Available widgets and UI components
   - Navigation structure
2. Map modules to API endpoints for full CRUD operations.
3. Retrieve user shop info, permissions, and scope.
4. Generate an internal representation of dashboard structure:
   ```
   Dashboard {
     sections: [
       { name: "Orders", widgets: [...], priority: high },
       { name: "Products", widgets: [...], priority: high },
       { name: "Analytics", widgets: [...], priority: medium },
       ...
     ]
   }
   ```

---

## 2. Dashboard Structure & Features

### 2.1 Core Sections

1. **Orders**
   - Display list of orders with filters (status, date, payment, delivery)
   - Widgets:
     - Order summary cards
     - Pending order alerts
     - Order stats chart
   - API Endpoints:
     ```
     GET /api/shops/{shop_id}/orders
     POST /api/shops/{shop_id}/orders
     PATCH /api/shops/{shop_id}/orders/{order_id}
     DELETE /api/shops/{shop_id}/orders/{order_id}
     ```

2. **Products**
   - Display list, add, edit, and remove products
   - Widgets:
     - Product gallery
     - Stock alerts
     - Best-selling products chart
   - API Endpoints:
     ```
     GET /api/shops/{shop_id}/products
     POST /api/shops/{shop_id}/products
     PATCH /api/shops/{shop_id}/products/{product_id}
     DELETE /api/shops/{shop_id}/products/{product_id}
     ```

3. **Customers**
   - List, filter, and manage customer info
   - Widgets:
     - Customer segments
     - Loyalty program status
     - Customer activity timeline
   - API Endpoints:
     ```
     GET /api/shops/{shop_id}/customers
     POST /api/shops/{shop_id}/customers
     PATCH /api/shops/{shop_id}/customers/{customer_id}
     DELETE /api/shops/{shop_id}/customers/{customer_id}
     ```

4. **Analytics**
   - Sales performance, revenue, product trends
   - Widgets:
     - Revenue chart
     - Conversion rate dashboard
     - Product/Category performance tables
   - API Endpoints:
     ```
     GET /api/shops/{shop_id}/analytics/sales
     GET /api/shops/{shop_id}/analytics/products
     GET /api/shops/{shop_id}/analytics/customers
     ```

5. **Marketing**
   - Campaigns, newsletters, coupons
   - Widgets:
     - Active campaigns
     - Coupon stats
     - Email performance
   - API Endpoints:
     ```
     GET /api/shops/{shop_id}/marketing/campaigns
     POST /api/shops/{shop_id}/marketing/campaigns
     PATCH /api/shops/{shop_id}/marketing/campaigns/{campaign_id}
     DELETE /api/shops/{shop_id}/marketing/campaigns/{campaign_id}
     ```

6. **Settings**
   - Shop settings, domain, payment, notifications
   - Widgets:
     - Payment gateways status
     - Domain verification
     - Notification preferences
   - API Endpoints:
     ```
     GET /api/shops/{shop_id}/settings
     PATCH /api/shops/{shop_id}/settings
     ```

---

### 2.2 Optional/Low-priority Sections

- **Support / Chat**
- **Feedback / Reviews**
- **Inventory logs**
- **Third-party integrations**

**Note:** These should be accessible but can be collapsed or hidden in default layout.

---

## 3. Step-by-Step AI Dashboard Construction

1. **Initialize Agent Context**
   - Load shop list and user permissions.
   - Fetch available modules and endpoints.

2. **Generate Dashboard Layout**
   - Use priority mapping (high → visible, medium → secondary, low → hidden).
   - Support drag-and-drop or modular placement.
   - Apply default Light/Dark mode templates.

3. **Fetch Initial Data**
   - For each widget, call corresponding API endpoint to populate data.

4. **Setup CRUD Operations**
   - Ensure each list/table supports Create, Read, Update, Delete.
   - Handle errors and permission restrictions.

5. **Widget & Component Mapping**
   - Map each API field to corresponding widget element.
   - Example:
     ```
     product.name -> card.title
     product.stock -> card.badge
     order.total -> table.column
     ```

6. **Finalize UI**
   - Apply responsive design.
   - Minimize clutter: hide low-priority sections in default view.
   - Provide quick access for business-critical functions.

7. **Continuous Update**
   - Periodically refresh data from APIs.
   - Update dashboard state when data changes.

---

## 4. API Integration Notes

- All endpoints should be called with:
  ```
  GET /api/shops/{shop_id}/{resource}?filters...
  POST /api/shops/{shop_id}/{resource} {payload}
  PATCH /api/shops/{shop_id}/{resource}/{id} {payload}
  DELETE /api/shops/{shop_id}/{resource}/{id}
  ```
- Include proper authentication headers (OAuth token / API key)
- Respect pagination for list endpoints
- Handle errors gracefully and display relevant messages in widgets

---

## 5. Guidelines for Customization

- UI should be **framework-agnostic** (Vue, React, Angular, plain JS).
- All sections must be configurable: add/remove/reorder widgets.
- Light/Dark mode support is mandatory.
- Business-critical features (Orders, Products, Customers, Analytics) must always be visible.
- Non-critical features can be hidden or accessed via secondary menus.
- Provide fallback UI if API call fails (e.g., empty state or loading placeholders).

---

## 6. Security and Permissions

- Respect user roles and permissions.
- Only show features and data that user has access to.
- All sensitive operations (delete, update) must require proper authorization.
- Audit logs for critical actions are recommended.

---

## 7. Deliverable Output

- Fully functional, customizable Selldone dashboard.
- Populated with real API data.
- Modular design supporting any frontend framework.
- Fully responsive and optimized for light/dark mode.
- Provides easy access to business-critical functions, hides secondary features without removing them.

---

**Agent should follow this guideline as the master blueprint** for any shop dashboard creation. It ensures **full feature coverage, proper API integration, clean UX, and universal compatibility**.
