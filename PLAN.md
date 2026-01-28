# PLAN: Restore ClawdBot SEO coverage in Moltbot article

Overall Goal: Ensure the Moltbot rebrand keeps ClawdBot SEO value by updating the description and SEO tags while keeping the slug and commands unchanged.

---

### Step 1: Capture baseline checks
- Goal: Recreate dependency install and run lint/build to understand current status.
- Files: None.
- Verify: `npm install --legacy-peer-deps --package-lock=false`, `npm run lint`, `npm run build`.

### Step 2: Update metadata for dual SEO
- Goal: Add "formerly ClawdBot" to the description/title as needed and restore ClawdBot keywords in seoTags.
- Files: `src/content/blog/clawdbot-raspberry-pi.mdx`.
- Verify: Review frontmatter for both Moltbot and ClawdBot keywords.

### Step 3: Validate changes
- Goal: Ensure lint/build still pass after edits.
- Files: None.
- Verify: `npm run lint`, `npm run build`.

### Step 4: Manual verification & screenshot
- Goal: Confirm updated metadata renders and capture UI evidence.
- Files: None.
- Verify: Run `npm run dev -- --host 0.0.0.0 --port 4321`, open the article, and take a screenshot.

### Final Step: Cleanup & Validation
- Goal: Update project logs and remove temporary plan file.
- Files: `MEMORIES.md`, `PROGRESS.md`, `PLAN.md`.
- Verify: Ensure logs updated and `PLAN.md` deleted.
