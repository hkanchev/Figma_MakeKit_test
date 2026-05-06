# Automation Planning Session

## Critical Decisions

### 1. Figma Plan & Webhook Availability

**Question**: What Figma plan do you have?

**Why it matters**:
- **Figma Enterprise** ($75/editor/month): Webhooks available → Real-time sync possible
- **Professional/Organization**: No webhooks → Must use polling/manual trigger
- **Free/Starter**: Limited API access → Manual sync only

**Impact on automation**:
```
WITH Webhooks (Enterprise):
Figma component updated → Webhook fires → GitHub Action runs → PR created
⏱️ Delay: ~2-5 minutes

WITHOUT Webhooks (Pro/Free):
Schedule check every N hours → Detect changes → PR created
⏱️ Delay: Up to N hours
```

**Recommendation without webhooks**: 
- Use `workflow_dispatch` (manual button in GitHub Actions)
- Or scheduled runs (e.g., daily at 9 AM)
- Most teams sync 1-2x per week, not real-time

---

### 2. GitHub Repository Strategy

**Options**:

**A. Monorepo Approach**
```
your-product-repo/
├── packages/
│   └── design-system/     ← Figma components live here
├── apps/
│   ├── marketing-site/
│   └── web-app/
```
**Pros**: Single source of truth, easier versioning
**Cons**: Larger repo, longer CI times

**B. Separate Design System Repo**
```
5r-design-system/          ← Published as npm package
├── src/components/
└── package.json

your-product-repo/         ← Consumes @your-org/5r-design-system
├── package.json
```
**Pros**: Independent versioning, cleaner separation
**Cons**: Two repos to manage, publish step required

**Question**: Do you already have a GitHub organization/repo, or starting fresh?

---

### 3. Sync Scope: What Gets Automated?

**Tier 1: Design Tokens Only** (Easiest)
- ✅ Colors, spacing, typography, radii
- ✅ Fully automatable (no human review needed)
- ✅ Low risk of breaking changes

**Tier 2: Design Tokens + Component Scaffolding** (Medium)
- ✅ Tokens (auto)
- ⚠️ Component structure (auto-generate, human reviews)
- ❌ Component logic (manual)

**Tier 3: Full Component Sync** (Hardest)
- ✅ Tokens (auto)
- ⚠️ Component markup (auto with overrides)
- ❌ Props/logic (preserve custom code)
- ❌ Accessibility (human review required)

**Recommended for most teams**: Start with Tier 1, gradually add Tier 2

---

### 4. Code Preservation Strategy

**The Problem**: When Figma component updates, you've already added:
- Click handlers
- Form validation
- Accessibility attributes
- Custom props

**Solutions**:

**Option A: Component Slots** (Recommended)
```tsx
// Auto-generated from Figma
export function ButtonBase({ children, ...props }) {
  return <button className="figma-styles" {...props}>{children}</button>
}

// Your custom wrapper (preserved)
export function Button({ onClick, loading, ...props }) {
  return (
    <ButtonBase 
      onClick={onClick} 
      disabled={loading}
      aria-busy={loading}
      {...props}
    />
  )
}
```

**Option B: CSS-Only Sync**
- Figma updates → Only regenerate CSS classes
- Component logic stays untouched
- Requires discipline to not mix structure/styles

**Option C: Protected Regions**
```tsx
// FIGMA-SYNC-START - Auto-generated, do not edit
export function Button({ variant }) {
  const baseClasses = "px-4 py-2 rounded"
  // FIGMA-SYNC-END
  
  // Your custom code here (preserved)
  const handleClick = () => { ... }
  
  return <button className={baseClasses} onClick={handleClick} />
}
```

---

### 5. Documentation Generation

**What to auto-generate**:

**Component Docs** (Medium effort):
- Props table (from TypeScript types)
- Usage examples (from stories/tests)
- Visual variants (screenshots)

**Token Docs** (Low effort):
- Color swatches with names/hex
- Spacing scale visual
- Typography samples

**Design Guidelines** (Manual):
- When to use each component
- Accessibility requirements
- Brand voice/tone

**Tools**:
- **Storybook**: Interactive component catalog
- **TypeDoc**: Generate from TSDoc comments
- **Custom script**: Scrape Figma descriptions → Markdown

**Question**: Do you want a public design system site, or internal docs only?

---

### 6. Review & Approval Workflow

**Option A: Auto-merge** (High trust)
```
Figma update detected
  → Generate code
  → Run tests
  → Tests pass? Auto-merge
  → Notify team in Slack
```
**Use when**: Only syncing design tokens, high confidence in generation

**Option B: PR Review** (Standard)
```
Figma update detected
  → Generate code
  → Create PR
  → Developer reviews diff
  → Approves + merges
```
**Use when**: Syncing components, want human oversight

**Option C: Staged Rollout**
```
Figma update detected
  → Merge to `figma-sync` branch
  → Manual promotion to `staging`
  → QA testing
  → Promotion to `main`
```
**Use when**: High-stakes production apps, need thorough testing

---

## Realistic Automation Spectrum

### 🟢 Fully Automatable (No human review)
- Design tokens (colors, spacing, typography)
- CSS variable generation
- Icon exports
- Documentation structure

### 🟡 Semi-Automatable (Generate + review)
- Component markup/structure
- Prop definitions
- Base styles
- TypeScript types

### 🔴 Manual Required (Human expertise)
- Component behavior/logic
- Accessibility (ARIA, keyboard nav)
- Performance optimization
- Edge case handling
- Integration with app state

### Reality Check
**Marketing claim**: "Designers ship code directly from Figma!"
**Reality**: Designers ship *visual structure*, developers add *behavior & quality*

Most successful design systems automate **50-70%** of the work, not 100%.

---

## Recommended Starting Point

### Phase 1: Foundation (Week 1)
1. **Git + GitHub setup** (1 hour)
   - Initialize repo
   - Create on GitHub
   - Push initial code

2. **Manual component extraction** (2-4 hours)
   - Pick 3 core components (Button, Input, Card)
   - Use Figma Make to generate code
   - Refactor to use design tokens
   - Add TypeScript types

3. **Documentation structure** (1 hour)
   - Create component README templates
   - Document design token usage
   - Add usage examples

**Goal**: Prove the workflow works manually before automating

### Phase 2: Token Automation (Week 2-3)
1. **Figma API integration** (2-3 hours)
   - Write script to fetch design tokens from Figma
   - Transform to CSS variables
   - Compare with existing tokens
   - Generate diff report

2. **GitHub Action** (1-2 hours)
   - Trigger: Manual button or daily schedule
   - Run token sync script
   - Create PR if changes detected

3. **Validation** (1 hour)
   - Test workflow end-to-end
   - Ensure tokens match Figma
   - Verify no breaking changes

**Goal**: Automate the safest, highest-value sync (tokens)

### Phase 3: Component Scaffolding (Week 4-6)
1. **Component generation pipeline**
   - Identify which components to sync
   - Build template system for code generation
   - Handle variants/states

2. **Code preservation**
   - Implement chosen strategy (slots/protected regions)
   - Test with real component update

3. **Expand documentation**
   - Auto-generate props tables
   - Add visual regression tests
   - Create Storybook stories

**Goal**: Semi-automate component updates with human review

### Phase 4: Refinement (Ongoing)
- Monitor sync failures
- Improve generation quality
- Add more components to pipeline
- Optimize review process

---

## Key Questions for You

Before we proceed, I need to understand:

### About your Figma setup:
1. **Figma plan level?** (Enterprise/Professional/Free)
2. **Component count in library?** (~10, ~50, ~100+)
3. **Update frequency?** (Daily, weekly, monthly)
4. **Design team size?** (Solo, 2-5, 5+)

### About your GitHub/codebase:
5. **Existing GitHub org/account?** (Name or need to create)
6. **Public or private repo?**
7. **Monorepo or separate design system repo?**

### About your goals:
8. **Documentation hosting?** (GitHub Pages, custom domain, internal only)
9. **Target users?** (Just your team, open source, public design system)
10. **Timeline?** (ASAP, 1 month, 3+ months)

### About your workflow:
11. **Who reviews design changes?** (Designer, developer, both)
12. **Auto-merge acceptable for tokens?** (Yes/No/Unsure)
13. **Existing design system?** (Starting fresh or migrating existing)

---

## Cost Estimate

**Free tier possible**:
- GitHub Actions: 2000 minutes/month free (enough for daily syncs)
- GitHub Pages: Free hosting
- Figma API: Free (no webhook though)
- Vercel/Netlify: Free tier for docs site

**Paid upgrades**:
- Figma Enterprise: $75/editor/month (only if you need webhooks)
- GitHub Teams: $4/user/month (if private repo + advanced features)
- Chromatic: $149/month (visual regression testing)

**Recommended budget**: $0-50/month unless you need real-time webhooks

---

## Next Step

Answer the 13 questions above, and I'll create a **customized implementation plan** tailored to your specific setup and constraints.

Alternatively, I can:
- **Option A**: Start with Git + GitHub setup right now (foundation for everything)
- **Option B**: Extract one component from Figma as a proof-of-concept
- **Option C**: Set up design token sync as first automation win

What works best for you?
