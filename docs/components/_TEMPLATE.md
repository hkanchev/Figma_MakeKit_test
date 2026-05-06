# ComponentName

> **Status**: [Draft | In Review | Published]
> **Figma**: [Link to Figma component]
> **Last Updated**: YYYY-MM-DD

[Brief 1-2 sentence description of what this component does and when to use it]

## Import

\`\`\`tsx
import { ComponentName } from '../5rDesignSystem/components/ComponentName'
\`\`\`

## Props API

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| variant | \`'primary' \\| 'secondary' \\| 'tertiary'\` | \`'primary'\` | No | Visual style variant |
| size | \`'small' \\| 'medium' \\| 'large'\` | \`'medium'\` | No | Component size |
| disabled | \`boolean\` | \`false\` | No | Disabled state |
| onClick | \`() => void\` | - | No | Click handler |
| children | \`React.ReactNode\` | - | Yes | Content to render |

## Examples

### Basic Usage

\`\`\`tsx
<ComponentName>
  Default component
</ComponentName>
\`\`\`

### With Variants

\`\`\`tsx
<ComponentName variant="primary">Primary</ComponentName>
<ComponentName variant="secondary">Secondary</ComponentName>
<ComponentName variant="tertiary">Tertiary</ComponentName>
\`\`\`

### With Sizes

\`\`\`tsx
<ComponentName size="small">Small</ComponentName>
<ComponentName size="medium">Medium</ComponentName>
<ComponentName size="large">Large</ComponentName>
\`\`\`

### Disabled State

\`\`\`tsx
<ComponentName disabled>
  Disabled component
</ComponentName>
\`\`\`

### With Event Handlers

\`\`\`tsx
<ComponentName onClick={() => console.log('Clicked!')}>
  Click me
</ComponentName>
\`\`\`

## Design Tokens Used

| Token | Usage | Value |
|-------|-------|-------|
| \`--brand/accent\` | Primary background | \`#E63946\` |
| \`--light-text\` | Text color | \`#FFFFFF\` |
| \`--md\` | Padding | \`16px\` |
| \`--sm\` | Border radius | \`12px\` |

## States & Variants

### Visual States
- **Default**: Normal state
- **Hover**: Mouse hover state
- **Active**: Mouse pressed state
- **Focus**: Keyboard focus state
- **Disabled**: Non-interactive state

### Variants
- **Primary**: Main call-to-action
- **Secondary**: Secondary actions
- **Tertiary**: Subtle actions

## Accessibility

### ARIA Attributes
- \`role\`: [role value]
- \`aria-label\`: [when used]
- \`aria-disabled\`: Applied when disabled
- \`aria-pressed\`: [if toggle button]

### Keyboard Navigation
- \`Tab\`: Focus component
- \`Enter/Space\`: Activate component
- \`Escape\`: [if modal/overlay]

### Screen Reader Support
- Announces as "[description]"
- States are properly conveyed
- Focus management is accessible

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (< 640px) | [Description] |
| Tablet (640-1024px) | [Description] |
| Desktop (> 1024px) | [Description] |

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android)

## Related Components

- **[RelatedComponent1](./RelatedComponent1.md)** - [Relationship]
- **[RelatedComponent2](./RelatedComponent2.md)** - [Relationship]

## Design Guidelines

### When to Use
- Use when [specific scenario]
- Ideal for [use case]
- Best practice for [context]

### When NOT to Use
- Avoid when [anti-pattern]
- Consider [alternative] instead if [condition]

## Implementation Notes

### Figma Sync
- **Synced properties**: [list]
- **Manual overrides**: [list]
- **Preserved code**: [list]

### Known Limitations
- [Any current limitations]
- [Planned improvements]

## Changelog

### v1.0.0 (YYYY-MM-DD)
- Initial component extraction from Figma
- Added TypeScript types
- Implemented accessibility features

---

**Figma Component**: [Direct link to component in Figma]
**Code Location**: \`src/5rDesignSystem/components/ComponentName/\`
**Maintainer**: [Name]
