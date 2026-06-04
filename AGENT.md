# Backoffice SDK Agent Rules

- Do not run `npm run build`, `npm run clean`, `tsc`, `tsc --build`, or `tsc --build --clean` in this package unless the user explicitly asks for it in the current turn.
- Do not run workspace equivalents from the monorepo root, such as `npm -w @selldone/sdk-backoffice run build` or `npm -w @selldone/sdk-backoffice run clean`, without explicit user approval.
- Reason: this package's build/clean scripts call TypeScript directly and can emit or delete `.js`/`.js.map` files next to source files while the developer has `npm run dev:all` active.
- For agent verification, prefer non-emitting checks such as targeted TypeScript parser checks, source inspection, or focused tests that do not build/clean the package.
