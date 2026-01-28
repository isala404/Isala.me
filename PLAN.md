# PLAN: Update Moltbot article naming

Overall Goal: Update the latest ClawdBot article to reference Moltbot/MoltHub (formerly ClawdBot/ClawdHub) with the new domain while keeping the existing URL.

---

### Step 1: Capture baseline checks
- Goal: Record current lint/build status before changes.
- Files: None.
- Verify: `bun install`, `bun run lint`, `bun run build`.

### Step 2: Update article content for the rebrand
- Goal: Replace ClawdBot/ClawdHub references with Moltbot/MoltHub (first mention only includes “formerly” phrasing) and update the domain link, keeping commands and slug unchanged.
- Files: `src/content/blog/clawdbot-raspberry-pi.mdx`.
- Verify: Review content updates for correctness and SEO phrasing.

### Step 3: Validate changes
- Goal: Ensure lint/build still pass after edits.
- Files: None.
- Verify: `bun run lint`, `bun run build`.

### Step 4: Manual verification & screenshot
- Goal: Confirm the updated article renders correctly and capture UI evidence.
- Files: None.
- Verify: Run `bun run dev -- --host 0.0.0.0 --port 4321`, open the article, and take a screenshot.

### Final Step: Cleanup & Validation
- Goal: Update project logs and remove temporary plan file.
- Files: `MEMORIES.md`, `PROGRESS.md`, `PLAN.md`.
- Verify: Ensure logs updated and `PLAN.md` deleted.
