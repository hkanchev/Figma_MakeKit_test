# Contributing to 5R Design System

Thank you for your interest in contributing! This guide will help you understand our workflow and standards.

## 🎯 Contribution Types

### 1. Design Changes (Figma → Code)
**Who**: Designers
**Process**: Design-first approach

1. Update component in Figma design library
2. Notify team in design system channel
3. Run sync workflow (automated or manual)
4. Developer reviews generated code PR
5. Merge and publish

### 2. Code Improvements (Code → Code)
**Who**: Developers
**Process**: Code-first approach

1. Create feature branch
2. Make code changes
3. Update documentation
4. Create pull request
5. Pass review and CI checks
6. Merge to main

### 3. Documentation Updates
**Who**: Anyone
**Process**: Direct contribution

1. Edit markdown files in \`docs/\`
2. Follow documentation templates
3. Create pull request
4. Quick review and merge

## 🔄 Workflow for Different Changes

### Adding a New Component from Figma

**Step 1: Verify Component is Ready in Figma**
- Component exists in [5R Design System library](https://www.figma.com/design/KBYnUbev3JfRuiOEbE4t9j/5R-Design-System)
- All variants are defined
- Design tokens are properly applied
- Component is published to library

**Step 2: Extract Component Code**
```bash
# Option A: Use Figma Make
# [Instructions for using Figma Make to extract component]

# Option B: Manual extraction (temporary until automation is ready)
# 1. Select component in Figma
# 2. Use Figma Make's design-to-code feature
# 3. Copy generated code
```

**Step 3: Create Component Structure**
```bash
# Create component directory
mkdir -p src/5rDesignSystem/components/ComponentName

# Create files
touch src/5rDesignSystem/components/ComponentName/ComponentName.tsx
touch src/5rDesignSystem/components/ComponentName/ComponentName.types.ts
touch src/5rDesignSystem/components/ComponentName/index.ts
touch src/5rDesignSystem/components/ComponentName/README.md
```

**Step 4: Implement Component**

\`\`\`tsx
// ComponentName.types.ts
export interface ComponentNameProps {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  children: React.ReactNode
}

// ComponentName.tsx
import { ComponentNameProps } from './ComponentName.types'

export function ComponentName({ 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  children 
}: ComponentNameProps) {
  return (
    <div 
      className="component-name"
      data-variant={variant}
      data-size={size}
      aria-disabled={disabled}
      style={{
        backgroundColor: variant === 'primary' 
          ? 'var(--brand/accent)' 
          : 'var(--surface/default)',
        padding: \`var(--\${size === 'small' ? 'xs' : 'md'})px\`
      }}
    >
      {children}
    </div>
  )
}

// index.ts
export { ComponentName } from './ComponentName'
export type { ComponentNameProps } from './ComponentName.types'
\`\`\`

**Step 5: Document Component**

Copy \`docs/components/_TEMPLATE.md\` and fill in:
- Props API
- Usage examples
- Figma link
- Design tokens used

**Step 6: Create Pull Request**

\`\`\`bash
git checkout -b component/add-component-name
git add .
git commit -m "feat: add ComponentName component from Figma"
git push origin component/add-component-name
\`\`\`

Create PR with:
- **Title**: \`feat: add ComponentName component\`
- **Description**: Link to Figma component, screenshots, usage notes
- **Labels**: \`component\`, \`figma-sync\`

### Updating Design Tokens

**When Figma tokens change:**

1. Run token sync script (or wait for automated sync)
2. Review changes in \`src/5rDesignSystem/styles.css\`
3. Update \`docs/tokens/README.md\` if new tokens added
4. Create PR with changes
5. Verify no visual regressions

**Manual token update:**

\`\`\`bash
# 1. Update src/5rDesignSystem/styles.css
# 2. Update docs/tokens/README.md
git checkout -b tokens/update-colors
git add src/5rDesignSystem/styles.css docs/tokens/README.md
git commit -m "chore: update design tokens from Figma"
git push origin tokens/update-colors
\`\`\`

### Fixing Bugs

\`\`\`bash
# Create bug fix branch
git checkout -b fix/button-hover-state

# Make changes
# Add tests if applicable

git commit -m "fix: correct button hover state color"
git push origin fix/button-hover-state
\`\`\`

## ✅ Pull Request Checklist

Before submitting a PR, ensure:

### Code Quality
- [ ] No TypeScript errors (\`pnpm typecheck\`)
- [ ] Build succeeds (\`pnpm build\`)
- [ ] Code follows existing patterns
- [ ] No hardcoded values (use design tokens)

### Documentation
- [ ] Component README created/updated
- [ ] Props API documented
- [ ] Usage examples provided
- [ ] Figma link included (if applicable)

### Accessibility
- [ ] ARIA attributes added where needed
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Screen reader tested (if possible)

### Design Alignment
- [ ] Matches Figma design exactly
- [ ] All variants implemented
- [ ] Responsive behavior works
- [ ] Uses correct design tokens

## 🎨 Design System Principles

### 1. Figma is Source of Truth
- Design decisions happen in Figma first
- Code implements Figma designs, not the other way around
- Exception: Technical constraints (document in component README)

### 2. Design Tokens Over Hardcoded Values
**❌ Bad:**
\`\`\`tsx
<div style={{ color: '#E63946', padding: '16px' }} />
\`\`\`

**✅ Good:**
\`\`\`tsx
<div style={{ color: 'var(--brand/accent)', padding: 'var(--md)px' }} />
\`\`\`

### 3. Accessibility is Non-Negotiable
- All components must be keyboard accessible
- ARIA attributes required where applicable
- Focus management must be proper
- Color contrast must meet WCAG AA

### 4. TypeScript Types Required
- All props must have types
- Avoid \`any\` type
- Export types for consumers
- Document complex types

### 5. Documentation is Part of the Component
- If it's not documented, it doesn't exist
- Update docs in the same PR as code changes
- Include visual examples where helpful

## 📝 Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

\`\`\`
<type>(<scope>): <description>

[optional body]

[optional footer]
\`\`\`

### Types
- \`feat\`: New feature/component
- \`fix\`: Bug fix
- \`docs\`: Documentation only
- \`style\`: Code style (formatting, no logic change)
- \`refactor\`: Code refactoring
- \`test\`: Adding tests
- \`chore\`: Maintenance tasks

### Examples
\`\`\`
feat(button): add disabled state
fix(input): correct focus ring color
docs(tokens): update color palette documentation
chore(deps): update dependencies
\`\`\`

## 🔍 Code Review Guidelines

### For Reviewers
- **Check Figma alignment**: Does it match the design?
- **Verify tokens**: Are design tokens used correctly?
- **Test accessibility**: Can you navigate with keyboard?
- **Read documentation**: Is it clear and complete?
- **Ask questions**: If something is unclear, ask!

### For Authors
- **Respond promptly**: Address feedback within 1-2 days
- **Explain decisions**: If you deviated from Figma, explain why
- **Be open to feedback**: Reviews improve the final result
- **Update based on feedback**: Don't merge until approved

## 🚀 Release Process

1. Changes merged to \`main\` branch
2. Version bumped (following semver)
3. Changelog updated automatically
4. Package published to npm (when ready)
5. Documentation site deployed

## 📦 Component Maturity Levels

### Alpha (🔴)
- Extracted from Figma
- Basic functionality works
- Documentation incomplete
- May have breaking changes

### Beta (🟡)
- Full functionality implemented
- Documentation complete
- Accessibility verified
- API may change slightly

### Stable (🟢)
- Production ready
- All tests passing
- Accessibility audited
- API stable (breaking changes require major version)

## 🆘 Getting Help

- **Questions**: Open a GitHub Discussion
- **Bugs**: Create an Issue with \`bug\` label
- **Feature requests**: Create an Issue with \`enhancement\` label
- **Design questions**: Tag designers in Figma comments

## 📚 Resources

- [Design Tokens Reference](../tokens/README.md)
- [Component Library](../components/README.md)
- [Automation Roadmap](../../AUTOMATION_ROADMAP.md)
- [Figma Design Library](https://www.figma.com/design/KBYnUbev3JfRuiOEbE4t9j/5R-Design-System)

---

Thank you for contributing to the 5R Design System! 🎨
