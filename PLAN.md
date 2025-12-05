# Website Redesign Plan: isala.me

## Vision Statement

> A minimal, warm, nostalgic personal website inspired by 90s anime aesthetics.
> Fast enough to impress engineers. Simple enough for anyone to use.
> Unique enough to remember.

---

## Design Philosophy

### The "Summer Afternoon" Concept

The website should evoke the feeling of a quiet summer afternoon in rural Japan - warm sunlight, billowing clouds, the distant sound of a train. This translates to:

- **Warm colors** instead of cold grays
- **Generous whitespace** like open skies
- **Subtle gradients** like natural light
- **Gentle interactions** nothing jarring
- **Quiet confidence** let content speak

### Design Principles

1. **Subtract, don't add** - Every element must earn its place
2. **Warmth over coldness** - No sterile corporate feel
3. **Speed is a feature** - Performance IS the design
4. **Details matter** - Polish in the small things
5. **Content first** - Design serves the writing

---

## Final Design Specification

### Layout (Desktop)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                         [subtle sun svg]                        │
│                                                                 │
│                                                                 │
│     Isala Piyarisi                                              │
│     ────────────────                                            │
│     Cloud Engineer · AI Enthusiast                              │
│                                                                 │
│     I build infrastructure that disappears and AI that          │
│     feels human. Currently exploring the edges of what's        │
│     possible with eBPF and Rust.                                │
│                                                                 │
│     gh · x · li                                                 │
│                                                                 │
│                                                                 │
│     Writing · · · · · · · · · · · · · · · · · · · · · · · · ·   │
│                                                                 │
│     Kubernetes observability with eBPF                  5 min   │
│     Build a chatbot with Phi-2 and Rust                 8 min   │
│     Don't use Cilium's default Pod CIDR                 4 min   │
│                                                                 │
│     → all writing                                               │
│                                                                 │
│                                                                 │
│     Projects · · · · · · · · · · · · · · · · · · · · · · · · ·  │
│                                                                 │
│     tera                                                 ★ 42   │
│     AI assistant that runs locally                              │
│                                                                 │
│     lazy-koala                                           ★ 12   │
│     AIOps toolkit using eBPF                                    │
│                                                                 │
│     → all projects                                              │
│                                                                 │
│                                                                 │
│     Notes · · · · · · · · · · · · · · · · · · · · · · · · · ·   │
│                                                                 │
│     TIL: Rust lifetimes finally clicked              Dec 2024   │
│     Why I switched to Helix editor                   Nov 2024   │
│     Quick eBPF debugging tip                         Nov 2024   │
│                                                                 │
│     → all notes                                                 │
│                                                                 │
│                                                                 │
│     ─────────────────────────────────────────────────────────   │
│                                                                 │
│     © 2024                                                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Layout (Mobile)

```
┌──────────────────────────┐
│                          │
│  Isala Piyarisi          │
│  ───────────────         │
│  Cloud Engineer ·        │
│  AI Enthusiast           │
│                          │
│  I build infrastructure  │
│  that disappears...      │
│                          │
│  gh · x · li             │
│                          │
│                          │
│  Writing · · · · · · ·   │
│                          │
│  Kubernetes observ...    │
│                   5 min  │
│                          │
│  Build a chatbot...      │
│                   8 min  │
│                          │
│  → all writing           │
│                          │
│  ...                     │
│                          │
└──────────────────────────┘
```

---

## Color System

### CSS Custom Properties

```css
:root {
  /* Light Mode - "Summer Afternoon" */
  --color-bg-start: #f5f0e6;
  --color-bg-end: #f9f4eb;
  --color-text: #2a2a35;
  --color-text-secondary: #6b6b7a;
  --color-accent: #e85a3c;
  --color-accent-hover: #d14a2c;
  --color-accent-subtle: rgba(232, 90, 60, 0.1);
  --color-divider: rgba(42, 42, 53, 0.15);
  --color-selection: rgba(232, 90, 60, 0.2);

  /* Decorative */
  --color-sky: #2d6a8f;
  --color-golden: #d4a84b;
  --color-teal: #4a9ba0;
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Dark Mode - "Evening" */
    --color-bg-start: #1a1f35;
    --color-bg-end: #242840;
    --color-text: #f5f0e6;
    --color-text-secondary: #a0a0b0;
    --color-accent: #e8a87c;
    --color-accent-hover: #f0b88c;
    --color-accent-subtle: rgba(232, 168, 124, 0.15);
    --color-divider: rgba(245, 240, 230, 0.1);
    --color-selection: rgba(232, 168, 124, 0.25);
  }
}
```

---

## Typography System

### Font Stack

```css
:root {
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont,
               'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  --font-mono: ui-monospace, 'SF Mono', 'Cascadia Code',
               'Source Code Pro', Menlo, monospace;
}
```

### Type Scale

```css
:root {
  /* Fluid type scale */
  --text-sm: clamp(0.8rem, 0.75rem + 0.25vw, 0.875rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.0625rem);
  --text-lg: clamp(1.125rem, 1rem + 0.5vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.25rem + 1vw, 2rem);
  --text-3xl: clamp(1.875rem, 1.5rem + 1.5vw, 2.5rem);

  /* Line heights */
  --leading-tight: 1.25;
  --leading-normal: 1.6;
  --leading-relaxed: 1.75;

  /* Letter spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.02em;
}
```

---

## Spacing System

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */

  /* Container */
  --container-max: 640px;
  --container-padding: clamp(1.5rem, 5vw, 3rem);
}
```

---

## Component Specifications

### 1. Header/Hero Section

```html
<header class="hero">
  <h1 class="hero__name">Isala Piyarisi</h1>
  <p class="hero__title">Cloud Engineer · AI Enthusiast</p>
  <p class="hero__bio">
    I build infrastructure that disappears and AI that feels human.
    Currently exploring the edges of what's possible with eBPF and Rust.
  </p>
  <nav class="hero__social">
    <a href="https://github.com/Supiri">gh</a>
    <a href="https://x.com/isala404">x</a>
    <a href="https://linkedin.com/in/isala">li</a>
  </nav>
</header>
```

**Styles:**
- Name: `--text-3xl`, `--color-text`, `font-weight: 600`
- Title: `--text-lg`, `--color-text-secondary`
- Bio: `--text-base`, `--color-text`, `max-width: 50ch`
- Social: `--text-sm`, `--color-accent`, lowercase, spaced with `·`

### 2. Section Headers

```html
<h2 class="section-header">
  <span class="section-header__text">Writing</span>
  <span class="section-header__dots"></span>
</h2>
```

**Styles:**
- Text: `--text-lg`, `--color-text`, `font-weight: 500`
- Dots: CSS-generated dotted line extending to edge
- Margin: `--space-16` top, `--space-6` bottom

### 3. Writing List Item

```html
<article class="post-item">
  <a href="/writing/kubernetes-ebpf" class="post-item__link">
    <h3 class="post-item__title">Kubernetes observability with eBPF</h3>
    <span class="post-item__meta">5 min</span>
  </a>
</article>
```

**Styles:**
- Title: `--text-base`, `--color-text`
- Meta: `--text-sm`, `--color-text-secondary`
- Hover: title gets `--color-accent`
- Layout: flexbox, space-between

### 4. Project Item

```html
<article class="project-item">
  <div class="project-item__header">
    <h3 class="project-item__name">tera</h3>
    <span class="project-item__stars">★ 42</span>
  </div>
  <p class="project-item__desc">AI assistant that runs locally</p>
</article>
```

**Styles:**
- Name: `--text-base`, `--color-text`, `font-weight: 500`
- Stars: `--text-sm`, `--color-golden`
- Description: `--text-sm`, `--color-text-secondary`
- Hover: name gets `--color-accent`

### 5. Notes Item (Compact)

```html
<article class="note-item">
  <a href="/notes/rust-lifetimes" class="note-item__link">
    <span class="note-item__title">TIL: Rust lifetimes finally clicked</span>
    <span class="note-item__date">Dec 2024</span>
  </a>
</article>
```

**Styles:**
- Same as post-item but slightly smaller
- No reading time, just month/year

### 6. Footer

```html
<footer class="footer">
  <span class="footer__copy">© 2024</span>
</footer>
```

**Styles:**
- Minimal, `--text-sm`, `--color-text-secondary`
- Margin: `--space-20` top

### 7. Decorative Sun (Optional)

```html
<div class="sun" aria-hidden="true">
  <svg><!-- Simple sun shape --></svg>
</div>
```

**Styles:**
- Position: fixed, top-right corner
- Size: 24-32px
- Color: `--color-golden` at 30% opacity
- Subtle: barely noticeable

---

## Page Templates

### Homepage (index)
- Hero section
- Writing (3 recent)
- Projects (2-3 featured)
- Notes (3 recent)
- Footer

### Writing Index (/writing)
- Simple header: "Writing"
- Full list of all posts
- Sorted by date descending

### Writing Post (/writing/[slug])
- Post title
- Date + reading time
- Content (markdown rendered)
- Back link

### Projects (/projects)
- Simple header: "Projects"
- All projects with descriptions
- GitHub links

### Notes Index (/notes)
- Simple header: "Notes"
- Full list of notes
- More compact than writing

### Note Post (/notes/[slug])
- Note title
- Date
- Content
- Back link

---

## Interactions & Animations

### Hover States
```css
/* Links */
a:hover {
  color: var(--color-accent);
}

/* Post titles */
.post-item__title {
  transition: color 0.15s ease;
}

/* Underline animation */
a {
  text-decoration: underline;
  text-decoration-color: var(--color-divider);
  text-underline-offset: 3px;
  transition: text-decoration-color 0.15s ease;
}
a:hover {
  text-decoration-color: var(--color-accent);
}
```

### Focus States
```css
a:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  border-radius: 2px;
}
```

### Selection
```css
::selection {
  background: var(--color-selection);
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}
```

---

## Implementation Plan

### Phase 1: Setup & Foundation
- [ ] Set up Astro project (or clean Svelte)
- [ ] Configure static generation
- [ ] Create CSS custom properties file
- [ ] Set up base typography
- [ ] Create base layout component

### Phase 2: Homepage
- [ ] Build hero section
- [ ] Build section header component
- [ ] Build post list component
- [ ] Build project card component
- [ ] Build footer
- [ ] Implement dark mode

### Phase 3: Content Pages
- [ ] Writing index page
- [ ] Writing post template
- [ ] Projects page
- [ ] Notes index page
- [ ] Note post template

### Phase 4: Content Migration
- [ ] Migrate existing blog posts
- [ ] Create project entries
- [ ] Write initial notes

### Phase 5: Polish
- [ ] Fine-tune typography
- [ ] Perfect spacing
- [ ] Add subtle decorative element
- [ ] Optimize images (if any)
- [ ] Test dark mode

### Phase 6: Performance
- [ ] Audit bundle size
- [ ] Inline critical CSS
- [ ] Optimize fonts (or stick with system)
- [ ] Run Lighthouse
- [ ] Fix any issues

### Phase 7: Launch
- [ ] Final review
- [ ] Deploy
- [ ] Verify in production
- [ ] Test on mobile devices

---

## Performance Budget

| Metric | Budget | Target |
|--------|--------|--------|
| HTML | < 15KB | 10KB |
| CSS | < 10KB | 6KB |
| JS | 0KB | 0KB |
| Images | < 20KB | 5KB |
| Fonts | 0KB | 0KB (system) |
| **Total** | **< 50KB** | **< 25KB** |

### Lighthouse Targets
- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## Content Guidelines

### Writing Voice
- Clear and direct
- Technical but approachable
- Show personality without trying too hard
- Let expertise speak through quality

### Bio (Final)
> I build infrastructure that disappears and AI that feels human.
> Currently exploring the edges of what's possible with eBPF and Rust.

### Post Titles
- Clear, specific
- No clickbait
- Include key technology/concept

### Descriptions
- One sentence max
- What it is, not marketing speak

---

## File Deliverables

### Required Files
```
src/
├── styles/
│   ├── variables.css      # All CSS custom properties
│   ├── reset.css          # Minimal reset
│   ├── typography.css     # Type system
│   ├── components.css     # Component styles
│   └── utilities.css      # Helper classes
├── layouts/
│   └── Base.astro         # Base HTML template
├── components/
│   ├── Header.astro       # Hero section
│   ├── SectionHeader.astro
│   ├── PostList.astro
│   ├── ProjectCard.astro
│   └── Footer.astro
├── pages/
│   ├── index.astro
│   ├── writing/
│   ├── projects.astro
│   └── notes/
└── content/
    ├── writing/
    ├── projects/
    └── notes/
```

---

## Success Criteria

### Quantitative
- [ ] Lighthouse 100/100/100/100
- [ ] < 50KB total page weight
- [ ] < 1s load time on 3G
- [ ] 0 JavaScript required for core functionality

### Qualitative
- [ ] Non-technical person can navigate easily
- [ ] Site feels warm and inviting
- [ ] Site feels unique/memorable
- [ ] Site demonstrates technical competence
- [ ] Site reflects personality without being gimmicky

---

## Reference Links

### Design Inspiration
- 90s anime color palettes
- Studio Ghibli background art
- Japanese train station photography
- Makoto Shinkai film stills

### Technical Reference
- Astro docs: https://astro.build
- Modern CSS: https://moderncss.dev
- Inclusive Components: https://inclusive-components.design

---

## Timeline

| Phase | Duration |
|-------|----------|
| Setup & Foundation | 1 session |
| Homepage | 1-2 sessions |
| Content Pages | 1 session |
| Content Migration | 1 session |
| Polish | 1 session |
| Performance | 0.5 session |
| Launch | 0.5 session |

**Total: ~6-7 working sessions**

---

## Notes

- Keep it simple. When in doubt, remove.
- The warmth comes from colors and spacing, not decorations.
- Performance is non-negotiable.
- Test on real devices, especially mobile.
- The site should feel effortless to use.

---

*Last updated: December 2024*
