# Basic Usage Examples

This guide shows how to use the 5R Design System in your React application.

## Setup

### 1. Import Design Tokens

Add this to your app's entry point (e.g., \`src/main.tsx\` or \`src/index.tsx\`):

\`\`\`tsx
import '../5rDesignSystem/styles.css'
\`\`\`

### 2. Use Design Tokens in Components

\`\`\`tsx
// Example component using design tokens
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--card-background)',
        padding: 'var(--lg)px',
        borderRadius: 'var(--rounded-none)',
        border: '1px solid var(--color/neutral/800)',
        marginBottom: 'var(--md)px'
      }}
    >
      {children}
    </div>
  )
}
\`\`\`

## Common Patterns

### Brand-Colored Button

\`\`\`tsx
function PrimaryButton({ children, onClick }: { 
  children: React.ReactNode
  onClick?: () => void 
}) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'var(--brand/accent)',
        color: 'var(--light-text)',
        padding: \`var(--sm)px var(--lg)px\`,
        borderRadius: 'var(--rounded-none)',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 500
      }}
    >
      {children}
    </button>
  )
}

// Usage
<PrimaryButton onClick={() => alert('Clicked!')}>
  Click Me
</PrimaryButton>
\`\`\`

### Text Input with Design Tokens

\`\`\`tsx
function TextInput({ 
  placeholder, 
  value, 
  onChange 
}: { 
  placeholder?: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: 'var(--md)px',
        border: '1px solid var(--color/neutral/800)',
        borderRadius: 'var(--rounded-none)',
        backgroundColor: 'var(--card-background)',
        color: 'var(--color/neutral/000)',
        fontSize: '16px',
        width: '100%'
      }}
    />
  )
}

// Usage
const [name, setName] = useState('')
<TextInput 
  placeholder="Enter your name" 
  value={name} 
  onChange={setName} 
/>
\`\`\`

### Page Layout with Spacing

\`\`\`tsx
function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--background)',
        minHeight: '100vh',
        padding: 'var(--2xl)px'
      }}
    >
      <main
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: 'var(--surface/light)',
          padding: 'var(--xl)px',
          borderRadius: 'var(--rounded-none)'
        }}
      >
        {children}
      </main>
    </div>
  )
}
\`\`\`

### Success/Error States

\`\`\`tsx
function StatusMessage({ 
  type, 
  message 
}: { 
  type: 'success' | 'error'
  message: string 
}) {
  return (
    <div
      style={{
        padding: 'var(--md)px',
        borderRadius: 'var(--rounded-none)',
        backgroundColor: type === 'success' 
          ? 'var(--color/green)' 
          : 'var(--brand/accent)',
        color: 'var(--light-text)',
        marginBottom: 'var(--md)px'
      }}
    >
      {message}
    </div>
  )
}

// Usage
<StatusMessage type="success" message="Changes saved successfully!" />
<StatusMessage type="error" message="Failed to save changes." />
\`\`\`

### Transparent Overlays

\`\`\`tsx
function Modal({ 
  isOpen, 
  onClose, 
  children 
}: { 
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode 
}) {
  if (!isOpen) return null
  
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--black/alpha-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--xl)px'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--card-background)',
          padding: 'var(--2xl)px',
          borderRadius: 'var(--rounded-none)',
          maxWidth: '500px',
          width: '100%'
        }}
      >
        {children}
      </div>
    </div>
  )
}

// Usage
const [showModal, setShowModal] = useState(false)
<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
  <h2>Modal Title</h2>
  <p>Modal content goes here</p>
</Modal>
\`\`\`

## With Tailwind CSS

If you're using Tailwind, you can reference design tokens in your config:

\`\`\`js
// tailwind.config.js (future enhancement)
export default {
  theme: {
    extend: {
      colors: {
        'brand-accent': 'var(--brand/accent)',
        'surface-default': 'var(--surface/default)',
      },
      spacing: {
        'xs': 'var(--xs)',
        'md': 'var(--md)',
        'xl': 'var(--xl)',
      }
    }
  }
}
\`\`\`

Then use in components:

\`\`\`tsx
<div className="bg-brand-accent text-light-text p-md">
  Tailwind with design tokens
</div>
\`\`\`

## Best Practices

### ✅ DO

\`\`\`tsx
// Use semantic tokens
<div style={{ backgroundColor: 'var(--surface/default)' }} />

// Use spacing scale
<div style={{ padding: 'var(--md)px', margin: 'var(--lg)px' }} />

// Use color tokens
<div style={{ color: 'var(--brand/accent)' }} />
\`\`\`

### ❌ DON'T

\`\`\`tsx
// Hardcode colors
<div style={{ backgroundColor: '#0D0D0D' }} />

// Hardcode spacing
<div style={{ padding: '16px', margin: '20px' }} />

// Use arbitrary values
<div style={{ color: '#E63946' }} />
\`\`\`

## Responsive Design

Use media queries with design tokens:

\`\`\`tsx
function ResponsiveCard() {
  return (
    <div
      style={{
        padding: 'var(--md)px',
        '@media (min-width: 768px)': {
          padding: 'var(--xl)px'
        }
      }}
    >
      Content
    </div>
  )
}
\`\`\`

Or use CSS-in-JS libraries like styled-components or emotion for better responsive support.

## Next Steps

- Check out the [Component Library](../components/README.md) for pre-built components
- Review [Design Tokens](../tokens/README.md) for the complete token reference
- Read [Contributing Guide](../guides/CONTRIBUTING.md) to add your own components

---

*More examples will be added as the component library grows.*
