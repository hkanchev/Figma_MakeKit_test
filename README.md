# 5R Design System

A comprehensive design system with automated Figma-to-code synchronization, built with React, Tailwind CSS, and TypeScript.

## 🎯 Project Goals

1. **Automated Design Sync**: Design updates in Figma cascade automatically to code
2. **Component Library**: Reusable React components built from Figma designs
3. **Design Tokens**: Centralized styling (colors, spacing, typography)
4. **Living Documentation**: Auto-generated component catalog and guidelines

## 📦 What's Inside

```
5r-design-system/
├── src/
│   ├── 5rDesignSystem/
│   │   ├── styles.css          # Design tokens from Figma
│   │   └── components/         # React components (coming soon)
│   ├── app/                    # Demo application
│   └── styles/                 # Global styles
├── docs/
│   ├── components/             # Component documentation
│   ├── tokens/                 # Design token reference
│   ├── guides/                 # Usage guides
│   └── examples/               # Code examples
└── guidelines/                 # Design system guidelines
```

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/hkanchev/Figma_MakeKit_test.git
cd Figma_MakeKit_test

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Using Design Tokens

```tsx
import '../5rDesignSystem/styles.css'

// Use CSS variables in your components
<div style={{ 
  color: 'var(--brand/accent)',
  padding: 'var(--md)px',
  backgroundColor: 'var(--surface/default)'
}}>
  Styled with design tokens
</div>
```

### Using Components (Coming Soon)

```tsx
import { Button } from './5rDesignSystem/components/Button'

<Button variant="primary">Click me</Button>
```

## 📖 Documentation

- **[Design Tokens](./docs/tokens/README.md)** - Colors, spacing, typography reference
- **[Components](./docs/components/README.md)** - Component API and usage
- **[Guidelines](./guidelines/Guidelines.md)** - Design system principles
- **[Setup Guide](./guidelines/setup.md)** - Integration instructions

## 🔄 Automation Workflow

### Current State
- ✅ Design tokens extracted from Figma
- ✅ Git/GitHub repository configured
- ✅ Documentation structure established
- ⏳ Component extraction (in progress)
- ⏳ Automated sync pipeline (planned)

### Planned Automation
1. **Design Token Sync**: Daily automated sync from Figma
2. **Component Scaffolding**: Auto-generate React components from Figma
3. **Documentation Generation**: Auto-update docs when components change
4. **Visual Regression**: Screenshot comparison for design changes

See [AUTOMATION_ROADMAP.md](./AUTOMATION_ROADMAP.md) for detailed implementation plan.

## 🎨 Figma Design Library

**Source**: [5R Design System on Figma](https://www.figma.com/design/KBYnUbev3JfRuiOEbE4t9j/5R-Design-System)

This codebase is synchronized with the Figma design library. Design changes flow from Figma → Code → Production.

## 🛠️ Tech Stack

- **React 18** - UI components
- **Tailwind CSS 4** - Utility-first styling
- **TypeScript** - Type safety
- **Vite** - Build tooling
- **pnpm** - Package management
- **Figma API** - Design sync automation

## 📝 Contributing

### Making Changes

1. Create a feature branch: `git checkout -b feature/new-component`
2. Make your changes
3. Run checks: `pnpm typecheck && pnpm build`
4. Commit: `git commit -m "feat: add new component"`
5. Push: `git push origin feature/new-component`
6. Open a Pull Request

### Design Changes

Design changes should originate in Figma:
1. Update component in Figma design library
2. Sync workflow runs (automated or manual trigger)
3. Review generated code in Pull Request
4. Approve and merge

See [CONTRIBUTING.md](./docs/guides/CONTRIBUTING.md) for detailed guidelines.

## 📊 Project Status

| Feature | Status |
|---------|--------|
| Design Tokens | ✅ Implemented |
| Git/GitHub Setup | ✅ Complete |
| Documentation Structure | ✅ Complete |
| Component Library | ⏳ In Progress |
| Automated Sync | 📅 Planned |
| GitHub Actions | 📅 Planned |
| Visual Testing | 📅 Planned |

## 🔗 Links

- **GitHub**: [hkanchev/Figma_MakeKit_test](https://github.com/hkanchev/Figma_MakeKit_test)
- **Figma Library**: [5R Design System](https://www.figma.com/design/KBYnUbev3JfRuiOEbE4t9j/5R-Design-System)
- **Documentation** (Coming Soon): GitHub Pages site

## 📄 License

[Add your license here]

## 👥 Team

**Maintainer**: Hristo ([@hkanchev](https://github.com/hkanchev))

---

Built with automation in mind. Design once in Figma, use everywhere in code.
