# Component Library

The 5R Design System component library provides reusable React components built directly from Figma designs.

## 📦 Available Components

### ✅ Implemented

- [x] **[Button](./Button.md)** - Primary, secondary, and tertiary button variants with multiple sizes

### Planned Components

Based on the Figma design library, these components will be added:

- [ ] **Input** - Text inputs with validation states
- [ ] **Card** - Content containers
- [ ] **Modal** - Dialog overlays
- [ ] **Dropdown** - Select menus
- [ ] **Checkbox** - Selection controls
- [ ] **Radio** - Single selection controls
- [ ] **Toggle** - Switch components
- [ ] **Navigation** - Nav bars and menus
- [ ] **Layout** - Grid and container components

## 📖 Component Documentation Template

Each component will have its own documentation page following this structure:

```markdown
# ComponentName

Brief description of what this component does and when to use it.

## Import
\`\`\`tsx
import { ComponentName } from '../5rDesignSystem/components/ComponentName'
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' | 'primary' | Visual variant |

## Examples
### Basic Usage
\`\`\`tsx
<ComponentName variant="primary">
  Content
</ComponentName>
\`\`\`

## Accessibility
- ARIA attributes used
- Keyboard navigation support

## Figma Link
[View in Figma](figma-url)

## Related Components
- RelatedComponent
\`\`\`

## 🎨 Design-to-Code Workflow

Components in this library are extracted from Figma using this process:

1. **Design in Figma**: Designer creates/updates component in design library
2. **Extract**: Use Figma Make or Figma API to generate React code
3. **Refactor**: Apply design tokens, add TypeScript types, enhance accessibility
4. **Document**: Auto-generate props table and usage examples
5. **Test**: Visual regression testing against Figma designs
6. **Publish**: Commit to repository, update documentation

## 📐 Component Structure

Each component follows this file structure:

```
src/5rDesignSystem/components/
└── Button/
    ├── Button.tsx           # Main component
    ├── Button.types.ts      # TypeScript types
    ├── Button.test.tsx      # Unit tests
    ├── index.ts             # Barrel export
    └── README.md            # Component docs
```

## 🔧 Using Components

### Installation (when published as package)

```bash
pnpm add @5r/design-system
```

### Import Styles

```tsx
// In your app entry point
import '@5r/design-system/styles.css'
```

### Use Components

```tsx
import { Button, Card, Input } from '@5r/design-system'

function App() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button variant="primary">Submit</Button>
    </Card>
  )
}
```

## ✅ Component Checklist

Before a component is considered "complete", it must have:

- [x] Extracted from Figma design
- [x] Uses design tokens (no hardcoded values)
- [x] TypeScript types defined
- [x] Props API documented
- [x] Usage examples provided
- [x] Accessibility attributes (ARIA, keyboard nav)
- [x] Responsive behavior
- [x] Dark mode support (if applicable)
- [x] Unit tests
- [x] Figma link in documentation

## 🎯 Component Guidelines

### Design Token Usage

**DO**:
```tsx
// Use design tokens
<Button style={{ 
  backgroundColor: 'var(--brand/accent)',
  padding: 'var(--md)px'
}} />
```

**DON'T**:
```tsx
// Hardcoded values
<Button style={{ 
  backgroundColor: '#E63946',
  padding: '16px'
}} />
```

### TypeScript Types

**DO**:
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  onClick?: () => void
  children: React.ReactNode
}
```

### Accessibility

**DO**:
```tsx
<button
  aria-label="Close dialog"
  aria-pressed={isActive}
  role="button"
  tabIndex={0}
>
  {children}
</button>
```

## 🔄 Component Sync Status

| Component | Figma | Code | Docs | Tests | Status |
|-----------|-------|------|------|-------|--------|
| Button | ✅ | ✅ | ✅ | ⬜ | Published |
| Input | ⬜ | ⬜ | ⬜ | ⬜ | Planned |
| Card | ⬜ | ⬜ | ⬜ | ⬜ | Planned |

*Legend: ✅ Done | ⏳ In Progress | ⬜ Not Started*

## 📚 Additional Resources

- [Design Tokens](../tokens/README.md) - Color, spacing, typography reference
- [Guidelines](../../guidelines/Guidelines.md) - Design system principles
- [Contributing](../guides/CONTRIBUTING.md) - How to add/update components
- [Figma Library](https://www.figma.com/design/KBYnUbev3JfRuiOEbE4t9j/5R-Design-System) - Source designs

---

*Components will be added progressively as they are extracted from the Figma design library.*
