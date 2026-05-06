# Design Tokens Reference

Design tokens are the visual design atoms of the 5R Design System. They are defined in Figma and synchronized to code as CSS custom properties.

## 📍 Token Location

All design tokens are defined in: `src/5rDesignSystem/styles.css`

Import them in your application:
```css
@import '../5rDesignSystem/styles.css';
```

## 🎨 Color Tokens

### Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--brand/accent` | `#E63946` | Primary brand color, CTAs, links |
| `--color/red/500` | `#E63946` | Error states, destructive actions |
| `--color/red/600` | `#FF636E` | Hover state for red elements |
| `--color/green` | `#059669` | Success states, confirmations |

### Neutral Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color/neutral/000` | `#0D0D0D` | Darkest neutral |
| `--color/neutral/100` | `#1A1A1A` | Dark backgrounds |
| `--color/neutral/200` | `#2E2E2E` | Card backgrounds (dark mode) |
| `--color/neutral/600` | `#A3A3A3` | Secondary text |
| `--color/neutral/700` | `#C8C8C4` | Disabled states |
| `--color/neutral/800` | `#D9D9D9` | Borders, dividers |
| `--color/neutral/900` | `#F8F8F6` | Light backgrounds |
| `--color/white` | `#FFFFFF` | Pure white |
| `--color/off-white` | `#F5F5F3` | Slightly off-white |

### Semantic Colors

| Token | Value (Reference) | Usage |
|-------|-------------------|-------|
| `--surface/default` | `var(--color/neutral/000)` | Default surface color |
| `--surface/light` | `var(--color/off-white)` | Light surface variant |
| `--background` | `var(--color/neutral/800)` | Main background |
| `--background-dark` | `var(--color/neutral/200)` | Dark background variant |
| `--card-background` | `var(--color/white)` | Card surfaces |
| `--light-text` | `var(--color/white)` | Text on dark backgrounds |

### Alpha Colors (Opacity Variants)

#### White Alpha
```css
--white/alpha-0: transparent
--white/alpha-5: rgba(255,255,255,0.05)
--white/alpha-10: rgba(255,255,255,0.10)
--white/alpha-20: rgba(255,255,255,0.20)
--white/alpha-50: rgba(255,255,255,0.50)
--white/alpha-100: rgba(255,255,255,1.00)
```

#### Black Alpha
```css
--black/alpha-0: transparent
--black/alpha-5: rgba(0,0,0,0.05)
--black/alpha-10: rgba(0,0,0,0.10)
--black/alpha-20: rgba(0,0,0,0.20)
--black/alpha-50: rgba(0,0,0,0.50)
--black/alpha-100: rgba(0,0,0,1.00)
```

## 📏 Spacing Tokens

| Token | Value (px) | Usage |
|-------|------------|-------|
| `--3xs` | 2px | Micro spacing, borders |
| `--2xs` | 4px | Tight spacing |
| `--xs` | 8px | Small gaps, padding |
| `--sm` | 12px | Default small spacing |
| `--md` | 16px | **Base unit** - Standard spacing |
| `--lg` | 20px | Medium gaps |
| `--xl` | 24px | Large padding |
| `--2xl` | 32px | Section spacing |
| `--3xl` | 40px | Large sections |
| `--4xl` | 48px | Extra large gaps |
| `--5xl` | 64px | Page sections |
| `--6xl` | 80px | Hero spacing |
| `--7xl` | 96px | Large hero sections |
| `--8xl` | 112px | Extra large sections |
| `--9xl` | 128px | Massive spacing |
| `--10xl` | 144px | Maximum spacing |

### Hacks-to-Fit Scale
Special spacing values for fine-tuned alignment:
- `--hacks-to-fit-scale/3`: 3px
- `--hacks-to-fit-scale/6`: 6px
- `--hacks-to-fit-scale/7`: 7px
- `--hacks-to-fit-scale/9`: 9px
- `--hacks-to-fit-scale/10`: 10px
- `--hacks-to-fit-scale/14`: 14px
- `--hacks-to-fit-scale/5p5`: 5.5px
- `--hacks-to-fit-scale/7p5`: 7.5px

## 🔲 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--rounded-none` | 0 | No rounding, sharp corners |

*Note: Additional radius tokens will be added as the design system evolves.*

## 💡 Usage Examples

### In CSS
```css
.card {
  background-color: var(--card-background);
  padding: var(--md)px;
  border: 1px solid var(--color/neutral/800);
  border-radius: var(--rounded-none);
}

.primary-button {
  background-color: var(--brand/accent);
  color: var(--light-text);
  padding: var(--sm)px var(--lg)px;
}
```

### In React Inline Styles
```tsx
<div style={{
  backgroundColor: 'var(--surface/default)',
  padding: `${var(--md)}px`,
  color: 'var(--light-text)'
}}>
  Content
</div>
```

### With Tailwind (if configured)
```tsx
// After mapping tokens to Tailwind config
<div className="bg-surface-default p-md text-light">
  Content
</div>
```

## 🔄 Sync Status

| Token Type | Source | Last Synced | Auto-Sync |
|------------|--------|-------------|-----------|
| Colors | Figma | Manual | ⏳ Planned |
| Spacing | Figma | Manual | ⏳ Planned |
| Typography | - | - | 📅 TODO |
| Shadows | - | - | 📅 TODO |

## 🎯 Token Naming Convention

Tokens follow this structure:
```
--{category}/{subcategory}/{variant}
```

Examples:
- `--color/neutral/600` - Color → Neutral palette → 600 shade
- `--brand/accent` - Brand → Accent color
- `--surface/default` - Surface → Default variant

## 📝 Adding New Tokens

1. **In Figma**: Update design library with new color/spacing values
2. **Sync**: Run token sync workflow (manual or automated)
3. **Document**: Update this file with new token details
4. **Notify**: Announce new tokens to team

See [Token Sync Guide](../guides/token-sync.md) for detailed instructions.

## ⚠️ Important Notes

- **Do NOT hardcode values**: Always use tokens instead of raw hex/px values
- **Semantic naming**: Prefer semantic tokens (`--surface/default`) over primitive ones (`--color/neutral/000`)
- **Dark mode ready**: Using semantic tokens ensures dark mode support when implemented
- **Figma is source of truth**: Code tokens should match Figma exactly

---

*Last updated: 2026-05-06*
*Token count: 60+ tokens*
