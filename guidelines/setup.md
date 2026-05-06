## Step 1: Install css

Add this line to the TOP of `/src/styles/index.css` (before any other imports):

```css
@import "<PACKAGE_NAME>/style.css";
```

This import defines all CSS custom properties (color tokens, spacing tokens,
radius tokens) used by this design system. Without it, var(--token-name)
references will resolve to nothing and the UI will have no styling.

## Step 2: Read the full design system stylesheet

After importing, read the full contents of the stylesheet to understand what
tokens are available:

```
cat node_modules/<PACKAGE_NAME>/dist/style.css
```

Do NOT use `head -100` or any truncated read. The file begins with Tailwind
preflight/reset CSS (box-sizing, margins, etc.) which is NOT the design system.
The actual token definitions (CSS custom properties like `--text-default`,
`--bg-brand`, `--spacer-*`, etc.) appear AFTER the preflight section.

Scan the full output for `:root` or `@theme` blocks containing `--` custom
property definitions. These are the tokens you must use in generated code.

## Step 3: Discover exported components

Before writing any custom UI, find out what the kit already provides.

1. Check the `exports` field in `node_modules/<PACKAGE_NAME>/package.json` to
   see which entry points are importable.
2. Read the barrel file(s) to enumerate exported names:

   ```
   cat node_modules/<PACKAGE_NAME>/dist/_barrel_*.js
   ```

3. For each component you might use, read its source under
   `node_modules/<PACKAGE_NAME>/dist/` (or the bundled type definitions in
   `dist/index.d.ts`) to learn its props, accepted children, className
   overrides, and any hardcoded behavior.

Do NOT rely on `/guidelines/components.md` alone — if it is empty or
boilerplate, the barrel file and component source are the source of truth.
