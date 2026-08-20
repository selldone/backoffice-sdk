# Selldone Product Design Guidelines

## Purpose And Scope

This is the mandatory visual-design contract for every new or materially changed external/custom Selldone Backoffice dashboard UI. It is framework-agnostic and applies to web, native, responsive, and embedded dashboard surfaces.

Use it with `05-ui-patterns.md`: that file preserves functional behavior; this file defines how the product UI should feel and communicate. API, permission, localization, and behavioral contracts still take precedence when they conflict with a visual preference.

The intended character is calm, minimal, precise, and professional: generous space, obvious hierarchy, few competing signals, and purposeful interactions. It takes inspiration from the restraint and clarity associated with Apple product design. It is not a request to copy Apple screens, assets, trademarks, or proprietary UI.

## Non-Negotiable Rules

1. Read and apply this guide before proposing, designing, or changing a visual UI surface.
2. Reuse the product's approved tokens and components when they exist. Do not introduce a competing component language for one screen.
3. Make hierarchy through layout, type scale, whitespace, grouping, and one clear primary action—not through many colors, shadows, badges, or decorative panels.
4. **Never use a semantic-colored alert background or semantic-colored body text.** Alert titles, descriptions, field help, validation messages, and other explanatory copy use normal readable text tokens. A severity cue may use a small icon, shape, or compact indicator, but it must never be the only cue.
5. Do not use color alone for status, validation, urgency, selection, or an available action. Pair it with words, an icon, a label, position, or a distinct control state.
6. Keep the interface quiet by default. Reserve strong brand color for selected state, a single primary action, focus, or intentionally emphasized data—not routine chrome.
7. Preserve all functionality, permission gates, error states, and locale/RTL behavior. A visual redesign is not permission to remove behavior.
8. Every final UI review includes desktop, narrow/mobile, keyboard/focus, and light/dark-mode (when supported) checks.

## Visual Direction

### Hierarchy Before Decoration

- Establish one page purpose and one primary next action. Secondary actions belong in an overflow menu, contextual row action, secondary button, or lower-priority area.
- Use a predictable rhythm: page title and short context, primary workspace, then secondary detail. Do not turn every group into a card.
- Prefer neutral surfaces, hairline dividers, restrained radius, and very light elevation. Add elevation only when it establishes a real layer, such as a modal, menu, sticky action bar, or floating control.
- Group related information with proximity and spacing before adding borders. A border should explain a boundary, not compensate for unclear layout.
- Use concise, direct labels. Do not repeat the same instruction in headings, helper copy, alerts, and button text.

### Color, Type, And Motion

- Build from named tokens, not one-off hex values: canvas, raised surface, subtle surface, primary text, secondary text, separator, focus, selected, and action tokens.
- Keep normal page canvases and information surfaces neutral or near-neutral. Use brand/accent color sparingly for primary actions, selected controls, active navigation, focus, and small meaningful indicators.
- Semantic color is a compact supporting signal only: an icon, status dot paired with a label, or contained destructive-action control. It must not recolor explanatory text or flood an alert container.
- Normal text requires at least WCAG AA contrast of 4.5:1; large text and non-text UI indicators require at least 3:1. Test disabled, hover, focus, selected, and dark-mode states separately.
- Use a compact, deliberate type hierarchy and a consistent spacing scale. Body and helper text remain legible at default zoom.
- Motion confirms a relationship or state change, never decorates it. Keep it brief, interruptible, and compatible with reduced-motion preferences.
- Charts need labels, values, patterns, or direct comparison aids. Never require users to distinguish series by color alone.

## Alert, Notice, And Validation Pattern

### Default Alert Anatomy

Use a compact, neutral structural surface:

```text
[small severity icon or indicator]  [clear title or direct sentence]  [optional action]
                                  [optional short supporting sentence]
```

- Use a neutral canvas or subtle neutral surface with a quiet border or divider. Never use yellow, red, green, blue, purple, or another semantic color wash as the alert background.
- Keep alert title and body copy in normal primary/secondary text colors. Never tint the message itself to warning, error, success, or info colors.
- Put severity in a small leading icon or compact labeled indicator. Use a recognizable icon and explicit words such as “Action needed”, “Could not save”, or “Saved”; never depend on icon color alone.
- Limit routine notices to one short sentence. Add a supporting sentence only when it changes the next step.
- Offer a specific recovery action where one exists: “Review DNS settings”, “Try again”, or “View details”. Avoid generic “OK” for recoverable work.
- Use an alert role only for disruptive, time-sensitive messages. Use a polite status region for non-blocking completion or progress information.
- Do not stack full-width banners for ordinary form guidance. Place contextual help by the relevant control or consolidate related issues into one summary.

### Severity Without Visual Noise

| State | Required communication | Visual treatment |
|---|---|---|
| Informational | What changed or what the user should know. | Neutral notice, small info icon, normal text. |
| Success | What completed and, when useful, the next available action. | Brief status or neutral confirmation; never a green message band. |
| Warning | What needs attention, impact, and next step. | Neutral alert, recognizable warning icon, direct title, optional action. |
| Error | What failed, what data is safe, and recovery action. | Neutral alert or inline field message, error icon/title, retry or correction path. |
| Destructive / irreversible | Consequence, affected object, and explicit confirmation. | Dedicated confirmation surface; a destructive button may use the approved action token. |

### Inline Form Validation

- Keep the label and field value in normal text colors. Do not turn a field group into a red/yellow/green block.
- Explain the problem in plain language directly after the field, with an icon or explicit “Error” label when needed. Associate it with the field through the platform equivalent of `aria-describedby` and invalid state.
- Preserve input after a validation failure. Focus the first relevant invalid field only when it helps rather than disrupting a multi-field review.
- Put cross-field or server-level problems in one neutral summary near submit, then direct users to affected fields.
- Never use a placeholder as the field label or color as the only sign of required, invalid, or saved state.

## Forms, Actions, And Dense Operations

- Use one prominent primary action per form or decision point. Use clear verbs such as “Save domain”, “Add product”, or “Retry verification”.
- Place the primary action near the decision it completes; in long forms, a sticky action area may be appropriate if it preserves access to status and validation.
- Divide long forms into named sections with short descriptions. Reveal advanced settings progressively without making necessary controls hard to discover.
- Explain irreversible outcomes before the destructive action. Use confirmation copy that names the affected record and consequence.
- Keep loading, disabled, success, partial-success, and retry states explicit. A disabled action must state why it is unavailable when the reason is not obvious.
- For tables and operational workspaces, keep high-frequency actions discoverable, preserve visible row context, and avoid icon-only actions unless they have accessible names and familiar meaning.
- Avoid attention-grabbing UI for routine facts. A status chip, subtle metadata line, or contextual note is often better than an alert.

## Responsive, Localization, And Accessibility

- Design from content priority, not a shrunk desktop layout. On narrow screens, preserve the primary action, key status, and recovery path before secondary metadata.
- Reflow multi-column layouts into a readable sequence. Tables need a compact-row, detail-sheet, or scoped horizontal-scroll strategy; never make critical actions inaccessible.
- Provide touch targets of at least 44 by 44 CSS pixels where practical and account for safe areas in fixed mobile action bars.
- Support keyboard navigation, visible focus, semantic landmarks, heading order, labels, and accessible names for icons and actions.
- Dialogs and sheets must manage focus, be dismissible when appropriate, and return focus predictably. Do not use color-only focus rings.
- Respect system text scaling, zoom, reduced motion, screen readers, RTL direction, localized dates/numbers/currency, and longer translated strings. Do not clip controls or make instructions depend on left/right wording.

## Implementation And Review Protocol

Before implementation, write a brief visual decision note containing:

1. The user goal, primary task, and most important failure/recovery state.
2. Existing components/tokens that will be reused.
3. The single primary action and any destructive or permission-limited action.
4. The planned alert or validation behavior using the neutral alert pattern above.
5. Responsive, keyboard, screen-reader, RTL, and theme considerations.

During review, answer all of these questions:

1. Can a user identify the page purpose and next action without color?
2. Is any explanatory sentence semantic-colored or sitting in a semantic-colored alert band? If yes, replace it with the neutral alert pattern.
3. Does each error, warning, and success state state what happened and what to do next?
4. Does the layout stay calm when several statuses or actions appear together?
5. Are contrast, focus, motion, touch, localization, and narrow-screen behavior verified?

## Adding Or Changing A Guideline

This guide is a living product contract. Make future changes deliberately so agents receive one durable source of truth.

1. **Capture evidence.** Record the user problem, screen/flow, affected audience, and why an existing rule is insufficient. Prefer a concrete UI example or accessibility finding over taste alone.
2. **Write an atomic proposal.** State the rule, its rationale, scope, positive example, and prohibited/edge case. Phrase it so an agent can apply it without guessing.
3. **Check for conflicts.** Compare it with `05-ui-patterns.md`, accessibility requirements, localization/RTL needs, existing approved design-system tokens, and functional/API constraints.
4. **Update the source of truth.** Add the durable rule to this file. Update `README.md`, `00-ai-agent-entrypoint.md`, `Agent.md`, and MCP instructions whenever reading priority or agent behavior changes. Do not hide a cross-product rule only in a component comment or ticket.
5. **Define migration and verification.** State whether existing surfaces must be updated, which states need visual QA, and what automated or manual evidence validates the rule.
6. **Record an exception explicitly.** A temporary exception must name its owner, scope, reason, expiry/review condition, and accessibility impact. Do not silently fork the design language.

Use this decision template for material additions:

```md
### YYYY-MM-DD — Short rule name

- Problem:
- Rule:
- Rationale:
- Applies to:
- Does not apply to:
- Positive example:
- Prohibited or edge case:
- Migration / verification:
- Exception owner and review date (if any):
```

## Completion Checklist

- The relevant functional patterns in `05-ui-patterns.md` remain intact.
- The visual work uses existing approved tokens/components or documents a justified addition.
- No semantic-colored alert background or semantic-colored explanatory/body text remains.
- Alerts, validation, and destructive states follow the neutral structural pattern and provide a recovery path where possible.
- Color is not the only carrier of meaning; contrast and focus states meet accessibility requirements.
- Desktop, narrow-screen, keyboard, screen-reader, RTL, localization, and theme behavior have been checked as applicable.
- Any new durable design decision has been added here and surfaced through the agent entrypoint/MCP instructions when necessary.
