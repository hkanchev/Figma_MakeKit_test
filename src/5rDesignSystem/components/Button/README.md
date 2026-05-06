# Button

> **Status**: Published
> **Figma**: [5R Design System](https://www.figma.com/design/KBYnUbev3JfRuiOEbE4t9j/5R-Design-System)
> **Last Updated**: 2026-05-06

A versatile button component built with design tokens from the 5R Design System.

## Import

```tsx
import { Button } from '../../5rDesignSystem/components/Button'
```

## Props API

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| variant | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | No | Visual style variant |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | No | Button size |
| disabled | `boolean` | `false` | No | Disabled state |
| fullWidth | `boolean` | `false` | No | Take full width of container |
| children | `React.ReactNode` | - | Yes | Button content |
| onClick | `() => void` | - | No | Click handler |

Additional props from `React.ButtonHTMLAttributes<HTMLButtonElement>` are also supported.

## Examples

### Basic Usage

```tsx
<Button>Click Me</Button>
```

### With Variants

```tsx
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="tertiary">Tertiary Action</Button>
```

### With Sizes

```tsx
<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="large">Large Button</Button>
```

### Disabled State

```tsx
<Button disabled>
  Disabled Button
</Button>
```

### Full Width

```tsx
<Button fullWidth>
  Full Width Button
</Button>
```

### With Event Handlers

```tsx
<Button onClick={() => console.log('Button clicked!')}>
  Click Me
</Button>
```

### Combined Props

```tsx
<Button 
  variant="primary" 
  size="large" 
  fullWidth
  onClick={() => alert('Submitted!')}
>
  Submit Form
</Button>
```

## Design Tokens Used

| Token | Usage | Value |
|-------|-------|-------|
| `--brand/accent` | Primary variant background | `#E63946` |
| `--surface/default` | Secondary variant background | `#0D0D0D` |
| `--light-text` | Text color on dark backgrounds | `#FFFFFF` |
| `--color/neutral/600` | Secondary border | `#A3A3A3` |
| `--xs` | Small button padding (vertical) | `8px` |
| `--sm` | Small button padding (horizontal) | `12px` |
| `--md` | Large button padding (vertical) | `16px` |
| `--lg` | Medium button padding (horizontal) | `20px` |
| `--xl` | Large button padding (horizontal) | `24px` |
| `--rounded-none` | Border radius | `0` |

## States & Variants

### Visual States
- **Default**: Normal interactive state
- **Hover**: Mouse hover state (transition applied)
- **Active**: Mouse pressed state
- **Focus**: Keyboard focus state (native browser focus)
- **Disabled**: Non-interactive state with reduced opacity

### Variants
- **Primary**: Main call-to-action, uses brand accent color
- **Secondary**: Secondary actions, neutral with border
- **Tertiary**: Subtle actions, transparent with brand border

### Sizes
- **Small**: Compact buttons for tight spaces (14px font)
- **Medium**: Default size for most use cases (16px font)
- **Large**: Prominent buttons for important actions (18px font)

## Accessibility

### ARIA Attributes
- `disabled`: Applied when button is disabled
- All native button ARIA attributes are supported via spread props

### Keyboard Navigation
- `Tab`: Focus the button
- `Enter/Space`: Activate the button
- Native button keyboard behavior preserved

### Screen Reader Support
- Announces as "button"
- Disabled state is properly conveyed
- Button text is used as accessible label

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (< 640px) | Same sizes, consider using `fullWidth` for mobile |
| Tablet (640-1024px) | Default behavior |
| Desktop (> 1024px) | Default behavior |

Use `fullWidth` prop for responsive layouts:
```tsx
<Button fullWidth size="large">
  Mobile-Friendly Button
</Button>
```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android)

## Related Components

- **IconButton** - Button with icon only (coming soon)
- **ButtonGroup** - Group of buttons (coming soon)
- **Link** - Text link component (coming soon)

## Design Guidelines

### When to Use
- Primary actions on a page (use variant="primary")
- Form submissions
- Confirmation dialogs
- Navigation to important sections

### When NOT to Use
- For navigation between pages (use Link instead)
- For toggling states (use Toggle/Switch instead)
- For opening menus (use Menu/Dropdown instead)

### Best Practices
- Use only one primary button per section
- Button text should be action-oriented ("Save Changes" not "Click Here")
- Maintain consistent button placement across pages
- Use appropriate size for context (large for hero sections, small for inline actions)

## Implementation Notes

### Figma Sync
- **Synced properties**: Variants, sizes, colors from design tokens
- **Manual overrides**: Transition timing, font weight
- **Preserved code**: TypeScript types, accessibility attributes

### Customization
You can extend the button with additional props:

```tsx
<Button 
  variant="primary"
  type="submit"
  aria-label="Submit registration form"
  data-testid="submit-button"
>
  Register
</Button>
```

### Styling Override
For one-off customizations, you can pass inline styles:

```tsx
<Button 
  variant="primary"
  style={{ marginTop: 'var(--xl)px' }}
>
  Custom Styled Button
</Button>
```

### Known Limitations
- Currently no loading state (planned for v0.2.0)
- No icon support built-in (use children prop or wait for IconButton)
- Hover/active states use CSS transitions, not Figma interactions

## Changelog

### v0.1.0 (2026-05-06)
- Initial Button component implementation
- Three variants: primary, secondary, tertiary
- Three sizes: small, medium, large
- Full design token integration
- TypeScript types
- Accessibility features
- Documentation

---

**Figma Component**: [View in Figma](https://www.figma.com/design/KBYnUbev3JfRuiOEbE4t9j/5R-Design-System)
**Code Location**: `src/5rDesignSystem/components/Button/`
**Maintainer**: Hristo
