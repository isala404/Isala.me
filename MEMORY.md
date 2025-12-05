# Website Redesign Research & Memory

## Project Owner
**Isala Piyarisi** - Cloud Engineer & AI Enthusiast

## Current Website Analysis (isala.me)

### Current State
- Built with Svelte
- Dark theme with blue/purple tones
- Sections: Hero, Love Language (Rust crab), Current Pet Project, Spotify embed, Nerd Stats, Featured Articles, Featured Projects, Credentials
- Has animated elements and multiple visual components
- Good content but visually busy

### Current Content Inventory
1. **Bio**: "Sure, I could build an army of killer robots, but where's the fun in that? I am more interested in perfecting my robot that passes butter..."
2. **Articles**:
   - Let's Build a Standalone Chatbot with Phi-2 and Rust
   - Kubernetes observability with eBPF
   - Learned it the hard way: Don't use Cilium's default Pod CIDR
3. **Projects**:
   - tera (chatbot) - 42 stars
   - lazy-koala (observability) - 12 stars
   - logging-plumber (dev-tool) - 14 stars
   - speculo (god's-eye) - 24 stars
4. **Credentials**: CKA, CKS, Google Cloud Engineer

---

## User Requirements & Goals

### Must-Have Requirements
1. **Extremely minimal** - Clean, uncluttered
2. **Extremely unique** - Memorable, stands out
3. **Extremely performant** - Fast, no bloat, perfect Lighthouse scores
4. **Easy to use** - Non-technical people can navigate effortlessly
5. **Professional credibility** - Shows "this guy knows his stuff"
6. **Creative expression** - Shows personality and creativity

### Content Needs
- About me section
- Projects showcase
- Blog posts (longer writing)
- Notes/microblogs (short form content)

### Personal Interests to Reflect
- Anime (especially 90s aesthetic)
- Japan
- Pixel art (initially mentioned, evolved to prefer painted anime style)
- The warm, nostalgic Ghibli/90s anime aesthetic

---

## Reference Website Analysis

### 1. masonjwang.com/writing
**Style**: Warm, vintage aesthetic
- Monospace headers
- Illustrated thumbnails (vintage/hand-drawn style)
- Clear section numbering ("01 essays", "02 notes")
- Warm off-white background (#f5f3ef approximately)
- Email subscription prominent
- Dual content types: Essays (visual cards) vs Notes (compact list)
- Personal, approachable tone

### 2. thdxr.com
**Style**: Ultra-minimal, developer-focused
- Clean sans-serif typography
- Single column layout
- Blog-first design
- Simple text-based post list
- Clear metadata (date, reading time)
- Circular avatar
- Social links (Twitter, GitHub)
- No visual clutter whatsoever
- Perfect example of "content speaks for itself"

### 3. thdxr.com/post/serverless-relational-showdown
**Blog Post Style**:
- Clean reading experience
- Charts/graphs for technical content
- Good use of whitespace
- Code blocks when needed
- Focused on readability

### 4. bubbbly.com
**Style**: Playful, bold, personality-forward
- Large display typography
- 3D decorative elements (flowers)
- Circular avatar centered
- Featured project card with image
- "Chat with me" CTA
- Very personality-driven
- More suitable for creative/design portfolios

### 5. maily.to
**Style**: Modern, product-focused
- Monospace/code aesthetic
- Strikethrough text for emphasis ("~~Hard~~ Easy")
- Pill/tag components for features
- Character illustration
- GitHub stars display
- Clean sections with clear hierarchy
- Good for open-source project sites

### 6. aicofounder.com
**Style**: Warm, professional SaaS
- Large hero text
- Subtle dot pattern background
- Testimonial cards (horizontal scroll)
- Social proof (avatars, "20,000+ founders")
- Feature sections with icons
- FAQ accordion
- Warm color palette (terracotta/rust accent)
- Video testimonials
- Founder project showcases

### 7. zen-browser.app
**Style**: Dark, elegant, product-focused
- Dark background (#1c1917 warm black)
- Serif + italic accent text ("*calmer*")
- Cream/coral accent colors
- Feature list with descriptions
- Sponsor logos
- Core values section
- Community image
- Comprehensive footer with multiple columns
- Theme toggle (dark/light)

---

## Design Concepts Explored

### Rejected Concepts (Too Gimmicky)
1. **Terminal in Japanese Garden** - Cool but hurts usability
2. **Pixel Art Room (RPG)** - Unique but not accessible
3. **Konbini Receipt** - Fun but not professional enough
4. **Anime End Credits** - Interesting but poor UX
5. **Game Boy Cartridge** - Too niche
6. **Train Station Board** - Good but still gimmicky
7. **Pixel Window Manager** - Complex, slow

### Why These Failed
- Prioritized novelty over usability
- Would confuse non-technical visitors
- Performance concerns with complex interactions
- Don't scale well to mobile
- Gimmicks overshadow content

---

## Final Design Direction: "Summer Afternoon"

### Core Philosophy
**Clean layout + warm anime color palette + nostalgic atmosphere**

The Ghibli/90s anime aesthetic translated into a minimal, performant website. Uniqueness comes from:
- Warm, nostalgic color choices
- Subtle atmospheric details
- Craftsmanship in micro-interactions
- The feeling, not gimmicks

### Visual Reference
90s anime aesthetic - specifically the warm, golden-hour, hand-painted feel of:
- Studio Ghibli films
- Makoto Shinkai's earlier works
- Vintage Japanese train station scenes
- Summer afternoon lighting

Key image reference provided: Okinawa train scene with:
- Deep summer sky blue (#2d6a8f)
- Billowing white clouds
- Warm cream tones
- Orange-red accents (train)
- Golden yellow (crossing markers)
- Ocean teal in background
- Overall warm, nostalgic, peaceful feeling

---

## Color Palette (Final)

### Light Mode ("Summer Afternoon")
```css
--sky-blue: #2d6a8f;        /* Deep summer sky */
--cloud-white: #f5f0e6;     /* Warm cream background */
--sunset-orange: #e85a3c;   /* Primary accent (links, hover) */
--golden-yellow: #d4a84b;   /* Secondary accent */
--ocean-teal: #4a9ba0;      /* Tertiary accent */
--warm-black: #2a2a35;      /* Text color (not pure black) */
--warm-gray: #6b6b7a;       /* Secondary text */
```

### Dark Mode ("Evening")
```css
--night-sky-start: #1a1f35; /* Gradient start */
--night-sky-end: #2a2a45;   /* Gradient end */
--cream-text: #f5f0e6;      /* Primary text */
--soft-orange: #e8a87c;     /* Accent (softer for dark) */
--muted-teal: #5aacb0;      /* Secondary accent */
```

### Utility Colors
```css
--selection-bg: rgba(232, 90, 60, 0.25);  /* Text selection */
--link-underline: rgba(232, 90, 60, 0.4); /* Dotted underlines */
--divider: rgba(42, 42, 53, 0.1);         /* Section dividers */
```

---

## Typography

### Font Stack
```css
/* Primary - System fonts for performance */
font-family: system-ui, -apple-system, BlinkMacSystemFont,
             'Segoe UI', Roboto, sans-serif;

/* Alternative - If custom font desired */
/* Inter Variable - excellent readability, ~100KB */
```

### Scale
```css
--text-xs: 0.75rem;    /* 12px - metadata */
--text-sm: 0.875rem;   /* 14px - secondary */
--text-base: 1rem;     /* 16px - body */
--text-lg: 1.125rem;   /* 18px - large body */
--text-xl: 1.25rem;    /* 20px - h3 */
--text-2xl: 1.5rem;    /* 24px - h2 */
--text-3xl: 1.875rem;  /* 30px - h1 */
--text-4xl: 2.25rem;   /* 36px - display */
```

### Spacing
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
```

---

## Layout Structure

### Page Width
- Max content width: 640px (optimal reading)
- Padding: 24px mobile, 48px desktop

### Sections (Single Page)
1. **Header/Hero**
   - Name
   - Title/tagline
   - Brief bio (2-3 sentences)

2. **Writing**
   - List of blog posts
   - Title + reading time
   - Dotted line separator

3. **Projects**
   - Project name + stars
   - One-line description

4. **Footer**
   - Social links (minimal)
   - Year

### Information Hierarchy
```
Name (largest)
↓
Title/Role
↓
Bio paragraph
↓
Section headers (Writing, Projects)
↓
Content items
↓
Footer (smallest)
```

---

## Micro-Details (The "Secret Sauce")

### What Makes It Feel "90s Anime"
1. **Background**: Subtle warm gradient (cream → soft peach)
2. **Typography**: Generous letter-spacing and line-height
3. **Accent color**: Warm orange-red for interactive elements
4. **Dividers**: Dotted lines (not solid) - feels hand-drawn
5. **Shadows**: Warm-tinted if used, never gray
6. **Hover states**: Warm orange glow/underline
7. **Selection**: Custom highlight color (soft orange)
8. **Overall warmth**: Nothing feels cold or corporate

### Subtle Enhancements
- Custom scrollbar (thin, warm-colored)
- Smooth scroll behavior
- Tiny sun/cloud SVG decoration (optional, <2KB)
- Time-based theme switching (auto dark mode at night)
- Page transition: instant but with subtle fade

### Easter Eggs (For Those Who Look)
- Clean, semantic HTML in view-source
- ASCII art comment in source
- Perfect Lighthouse scores
- < 50KB total page weight
- Works completely without JavaScript

---

## Performance Targets

### Metrics
- **First Contentful Paint**: < 0.5s
- **Largest Contentful Paint**: < 1.0s
- **Time to Interactive**: < 1.0s
- **Total Page Size**: < 50KB
- **Requests**: < 5

### Lighthouse Scores
- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Implementation Strategy
- Static HTML generation (Astro recommended)
- CSS-only interactions where possible
- System fonts (zero font loading)
- Inline critical CSS
- No JavaScript for layout/navigation
- Lazy load below-fold content
- Preconnect to external origins (if any)

---

## Technical Recommendations

### Framework Options
1. **Astro** (Recommended)
   - Zero JS by default
   - Great for content sites
   - Markdown support
   - Easy static generation

2. **Plain HTML/CSS**
   - Ultimate control
   - Smallest possible size
   - More maintenance effort

3. **SvelteKit** (Current)
   - Can achieve goals with careful optimization
   - SSG mode recommended

### File Structure (Proposed)
```
/
├── src/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── writing/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── projects.astro
│   │   └── notes/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── layouts/
│   │   └── Base.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PostList.astro
│   │   └── ProjectCard.astro
│   ├── content/
│   │   ├── writing/
│   │   ├── notes/
│   │   └── projects/
│   └── styles/
│       └── global.css
├── public/
│   ├── favicon.svg
│   └── og-image.png
└── astro.config.mjs
```

---

## Content Strategy

### Writing (Blog Posts)
- Longer, in-depth technical articles
- 5-15 minute reads
- Show expertise
- Current: 3 articles

### Notes (Microblogs)
- Short thoughts, TILs, quick tips
- 1-3 minute reads
- More frequent updates
- Helps keep site fresh

### Projects
- Curated selection (not everything)
- Focus on most impressive/relevant
- Include GitHub stars as social proof

---

## Mobile Considerations

### Responsive Breakpoints
```css
/* Mobile first */
@media (min-width: 640px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

### Mobile-Specific
- Touch-friendly tap targets (44px minimum)
- No hover-dependent functionality
- Readable without zooming (16px base)
- Fast on 3G connections

---

## Accessibility Requirements

- Semantic HTML throughout
- Proper heading hierarchy
- Sufficient color contrast (WCAG AA minimum)
- Focus states visible
- Alt text for any images
- Reduced motion support
- Screen reader friendly

---

## Future Considerations

### Potential Additions
- RSS feed for writing/notes
- Search functionality (if content grows)
- Table of contents for long posts
- Reading progress indicator
- Newsletter signup (minimal)

### What to Avoid
- Comments section (use Twitter/GitHub instead)
- Analytics that slow the page
- Cookie banners (don't track)
- Popups or modals
- Autoplay anything

---

## Summary

The redesigned isala.me should feel like a quiet summer afternoon - warm, peaceful, and unhurried. It demonstrates technical excellence through what it *doesn't* have (no bloat, no gimmicks) while expressing personality through warm colors and thoughtful details.

The site should make visitors think:
1. "This loads incredibly fast" (technical credibility)
2. "This is easy to read and navigate" (usability)
3. "This has a unique, memorable feel" (creativity)
4. "This person clearly cares about craft" (attention to detail)

**Core message**: Quiet confidence. Let the work speak for itself.
